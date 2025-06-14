
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

// Only run if env vars are set (required for storage access)
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing Supabase service url/key!');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  id: string;
  form_type: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
  experience?: string;
  target_role?: string;
  current_skills?: string;
  interview_type?: string;
  preferred_interview_rounds?: string;
  target_companies?: string;
  plan_name?: string;
  plan_price?: string;
  resume_file_path?: string;
  resume_file_name?: string;
  created_at: string;
}

async function getResumeBase64(resumePath?: string): Promise<string | null> {
  if (!resumePath) return null;
  // Assuming resumes are stored in the 'resumes' bucket
  const { data, error } = await supabase
    .storage
    .from("resumes")
    .download(resumePath);

  if (error || !data) {
    console.error("Could not fetch resume:", error);
    return null;
  }

  // Read blob and convert to base64
  const arrayBuffer = await data.arrayBuffer();
  const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
  return base64String;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: { record: FormSubmission } = await req.json();
    let payload: Record<string, unknown> = { ...record };

    // If resume file path is present, fetch and add as base64
    if (record.resume_file_path) {
      const base64 = await getResumeBase64(record.resume_file_path);
      if (base64) {
        payload['resume_base64'] = base64;
      }
    }

    // Send the POST request to testapi.com/sendmail with the complete payload as JSON string
    const sendRes = await fetch("https://testapi.com/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send actual payload as JSON
      body: JSON.stringify(payload),
    });

    const sendText = await sendRes.text();

    if (!sendRes.ok) {
      console.error("testapi.com/sendmail API error:", sendText);
      return new Response(
        JSON.stringify({ success: false, error: sendText }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Successfully called https://testapi.com/sendmail", sendText);

    return new Response(
      JSON.stringify({ success: true, response: sendText }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in notify-admin function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

