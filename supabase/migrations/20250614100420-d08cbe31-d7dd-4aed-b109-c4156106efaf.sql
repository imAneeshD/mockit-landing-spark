
-- Ensure pg_net extension is enabled first
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create the trigger function with correct net.http_post syntax
CREATE OR REPLACE FUNCTION notify_admin_on_form_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the edge function with the new record data using correct syntax
  PERFORM net.http_post(
    'http://app-ani.runasp.net/api/SendMail/notify',
    '{"record": ' || to_jsonb(NEW)::text || '}',
    'application/json'::text,
    '{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2Ymdoa2NocHpwZWt6eGxydXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNTU0ODksImV4cCI6MjA2NDkzMTQ4OX0.UuEdTTpCHthelVj9OZJ93UfLCUyZ1ZTMAXIx4Y6zGGU"}'::jsonb
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop and recreate the trigger
DROP TRIGGER IF EXISTS form_submission_notify_admin ON form_submissions;
CREATE TRIGGER form_submission_notify_admin
  AFTER INSERT ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_admin_on_form_submission();
