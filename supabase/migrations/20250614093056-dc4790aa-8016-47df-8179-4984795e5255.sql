
-- Create storage bucket for resume files
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', false);

-- Create table for form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL, -- 'contact', 'test-skill', 'base-plan', 'pro-plan'
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  subject TEXT,
  experience TEXT,
  target_role TEXT,
  current_skills TEXT,
  interview_type TEXT,
  preferred_interview_rounds TEXT,
  target_companies TEXT,
  plan_name TEXT,
  plan_price TEXT,
  resume_file_path TEXT,
  resume_file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on form submissions table
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert form submissions (public forms)
CREATE POLICY "Anyone can submit forms" 
  ON public.form_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading form submissions (for admin purposes)
CREATE POLICY "Anyone can view form submissions" 
  ON public.form_submissions 
  FOR SELECT 
  USING (true);

-- Create storage policy for resume uploads
CREATE POLICY "Anyone can upload resumes"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

-- Create storage policy for reading resumes (admin access)
CREATE POLICY "Anyone can view resumes"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'resumes');
