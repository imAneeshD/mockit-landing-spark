
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend('re_gCoVntFY_GDQdWpFy9G5a8UAX9XeMHPef');

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    console.log("Received payload:", payload);

    // Call the dummy API first with the complete payload
    try {
      const dummyApiResponse = await fetch("http://app-ani.runasp.net/api/SendMail/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      console.log("Dummy API response status:", dummyApiResponse.status);
      if (!dummyApiResponse.ok) {
        console.warn("Dummy API call failed:", await dummyApiResponse.text());
      }
    } catch (dummyApiError) {
      console.error("Error calling dummy API:", dummyApiError);
      // Continue with email sending even if dummy API fails
    }

    // Prepare email content based on form type
    let subject = '';
    let htmlContent = '';

    if (payload.form_type === 'contact') {
      subject = `New Contact Form Submission from ${payload.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Subject:</strong> ${payload.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message}</p>
        <p><strong>Submitted at:</strong> ${payload.created_at}</p>
      `;
    } else if (payload.form_type === 'test-skill') {
      subject = `New Test Your Skill Application from ${payload.name}`;
      htmlContent = `
        <h2>New Test Your Skill Application</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Experience:</strong> ${payload.experience}</p>
        <p><strong>Target Role:</strong> ${payload.target_role}</p>
        <p><strong>Plan:</strong> ${payload.plan_name} (${payload.plan_price})</p>
        <p><strong>Resume:</strong> ${payload.resume_file_name ? 'Attached' : 'Not provided'}</p>
        <p><strong>Submitted at:</strong> ${payload.created_at}</p>
      `;
    } else if (payload.form_type === 'base-plan') {
      subject = `New Base Plan Subscription from ${payload.name}`;
      htmlContent = `
        <h2>New Base Plan Subscription</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Experience:</strong> ${payload.experience}</p>
        <p><strong>Target Role:</strong> ${payload.target_role}</p>
        <p><strong>Current Skills:</strong> ${payload.current_skills}</p>
        <p><strong>Interview Type:</strong> ${payload.interview_type}</p>
        <p><strong>Plan:</strong> ${payload.plan_name} (${payload.plan_price})</p>
        <p><strong>Resume:</strong> ${payload.resume_file_name ? 'Attached' : 'Not provided'}</p>
        <p><strong>Submitted at:</strong> ${payload.created_at}</p>
      `;
    } else if (payload.form_type === 'pro-plan') {
      subject = `New Pro Plan Subscription from ${payload.name}`;
      htmlContent = `
        <h2>New Pro Plan Subscription</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Experience:</strong> ${payload.experience}</p>
        <p><strong>Target Role:</strong> ${payload.target_role}</p>
        <p><strong>Current Skills:</strong> ${payload.current_skills}</p>
        <p><strong>Preferred Interview Rounds:</strong> ${payload.preferred_interview_rounds}</p>
        <p><strong>Target Companies:</strong> ${payload.target_companies}</p>
        <p><strong>Plan:</strong> ${payload.plan_name} (${payload.plan_price})</p>
        <p><strong>Resume:</strong> ${payload.resume_file_name ? 'Attached' : 'Not provided'}</p>
        <p><strong>Submitted at:</strong> ${payload.created_at}</p>
      `;
    }

    // Prepare email options
    const emailOptions: any = {
      from: 'onboarding@resend.dev',
      to: ['aneeshad2@gmail.com', 'yashavanthkapila@gmail.com'],
      subject: subject,
      html: htmlContent,
    };

    // Add attachment if resume is provided
    if (payload.resume_base64 && payload.resume_file_name) {
      emailOptions.attachments = [
        {
          filename: payload.resume_file_name,
          content: payload.resume_base64,
        }
      ];
    }

    // Send email using Resend
    const emailResponse = await resend.emails.send(emailOptions);


    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, response: emailResponse }),
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
