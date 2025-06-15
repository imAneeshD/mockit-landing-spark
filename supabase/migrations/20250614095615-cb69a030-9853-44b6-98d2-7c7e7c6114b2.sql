
-- Create the trigger function that calls the edge function
CREATE OR REPLACE FUNCTION notify_admin_on_form_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the edge function with the new record data
  PERFORM net.http_post(
    url := 'https://app-ani.runasp.net/api/SendMail/notify',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2Ymdoa2NocHpwZWt6eGxydXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNTU0ODksImV4cCI6MjA2NDkzMTQ4OX0.UuEdTTpCHthelVj9OZJ93UfLCUyZ1ZTMAXIx4Y6zGGU"}'::jsonb,
    body := json_build_object('record', to_jsonb(NEW))::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists and create it fresh
DROP TRIGGER IF EXISTS form_submission_notify_admin ON form_submissions;
CREATE TRIGGER form_submission_notify_admin
  AFTER INSERT ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_admin_on_form_submission();

-- Enable the pg_net extension if not already enabled (needed for HTTP requests)
CREATE EXTENSION IF NOT EXISTS pg_net;
