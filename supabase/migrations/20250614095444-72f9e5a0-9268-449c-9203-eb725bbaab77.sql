
-- Check if the trigger exists
SELECT 
    trigger_name,
    event_manipulation,
    event_object_table,
    action_statement
FROM information_schema.triggers 
WHERE trigger_name = 'form_submission_notify_admin';

-- Also check if the function exists
SELECT proname 
FROM pg_proc 
WHERE proname = 'notify_admin_on_form_submission';
