
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
  resume_file_name?: string;
  created_at: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: { record: FormSubmission } = await req.json();
    
    console.log('New form submission received:', record);

    let emailSubject = "";
    let emailContent = "";

    // Create email content based on form type
    switch (record.form_type) {
      case 'contact':
        emailSubject = `New Contact Form Submission - ${record.name}`;
        emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Candidate Name:</strong> ${record.name}</p>
          <p><strong>Candidate Email:</strong> ${record.email}</p>
          <p><strong>Subject:</strong> ${record.subject || 'N/A'}</p>
          <p><strong>Message:</strong> ${record.message || 'N/A'}</p>
          <p><strong>Submitted at:</strong> ${new Date(record.created_at).toLocaleString()}</p>
        `;
        break;
        
      case 'test-skill':
        emailSubject = `New Test Your Skill Form Submission - ${record.name}`;
        emailContent = `
          <h2>New Test Your Skill Form Submission</h2>
          <p><strong>Candidate Name:</strong> ${record.name}</p>
          <p><strong>Candidate Email:</strong> ${record.email}</p>
          <p><strong>Phone:</strong> ${record.phone || 'N/A'}</p>
          <p><strong>Experience:</strong> ${record.experience || 'N/A'}</p>
          <p><strong>Target Role:</strong> ${record.target_role || 'N/A'}</p>
          <p><strong>Plan:</strong> ${record.plan_name} (${record.plan_price})</p>
          <p><strong>Resume File:</strong> ${record.resume_file_name || 'Not provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date(record.created_at).toLocaleString()}</p>
        `;
        break;
        
      case 'base-plan':
        emailSubject = `New Base Plan Subscription - ${record.name}`;
        emailContent = `
          <h2>New Base Plan Subscription</h2>
          <p><strong>Candidate Name:</strong> ${record.name}</p>
          <p><strong>Candidate Email:</strong> ${record.email}</p>
          <p><strong>Phone:</strong> ${record.phone || 'N/A'}</p>
          <p><strong>Experience:</strong> ${record.experience || 'N/A'}</p>
          <p><strong>Target Role:</strong> ${record.target_role || 'N/A'}</p>
          <p><strong>Current Skills:</strong> ${record.current_skills || 'N/A'}</p>
          <p><strong>Interview Type:</strong> ${record.interview_type || 'N/A'}</p>
          <p><strong>Plan:</strong> ${record.plan_name} (${record.plan_price})</p>
          <p><strong>Resume File:</strong> ${record.resume_file_name || 'Not provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date(record.created_at).toLocaleString()}</p>
        `;
        break;
        
      case 'pro-plan':
        emailSubject = `New Pro Plan Subscription - ${record.name}`;
        emailContent = `
          <h2>New Pro Plan Subscription</h2>
          <p><strong>Candidate Name:</strong> ${record.name}</p>
          <p><strong>Candidate Email:</strong> ${record.email}</p>
          <p><strong>Phone:</strong> ${record.phone || 'N/A'}</p>
          <p><strong>Experience:</strong> ${record.experience || 'N/A'}</p>
          <p><strong>Target Role:</strong> ${record.target_role || 'N/A'}</p>
          <p><strong>Current Skills:</strong> ${record.current_skills || 'N/A'}</p>
          <p><strong>Preferred Interview Rounds:</strong> ${record.preferred_interview_rounds || 'N/A'}</p>
          <p><strong>Target Companies:</strong> ${record.target_companies || 'N/A'}</p>
          <p><strong>Plan:</strong> ${record.plan_name} (${record.plan_price})</p>
          <p><strong>Resume File:</strong> ${record.resume_file_name || 'Not provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date(record.created_at).toLocaleString()}</p>
        `;
        break;
        
      default:
        emailSubject = `New Form Submission - ${record.name}`;
        emailContent = `
          <h2>New Form Submission</h2>
          <p><strong>Candidate Name:</strong> ${record.name}</p>
          <p><strong>Candidate Email:</strong> ${record.email}</p>
          <p><strong>Form Type:</strong> ${record.form_type}</p>
          <p><strong>Resume File:</strong> ${record.resume_file_name || 'Not provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date(record.created_at).toLocaleString()}</p>
        `;
    }

    // Send email to both admin addresses
    const emailResponse = await resend.emails.send({
      from: "MockIt Notifications <onboarding@resend.dev>",
      to: ["aneeshad2@gmail.com", "yashavanthkapila@gmail.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Admin notification email sent successfully to both addresses:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in notify-admin function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
