
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface TestYourSkillFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  targetRole: string;
  resume: FileList;
}

interface TestYourSkillFormProps {
  onClose: () => void;
}

const TestYourSkillForm = ({ onClose }: TestYourSkillFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TestYourSkillFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const uploadResume = async (file: File): Promise<{ path: string; name: string } | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('resumes')
      .upload(`test-skill/${fileName}`, file);

    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }

    return { path: data.path, name: file.name };
  };

  const onSubmit = async (data: TestYourSkillFormData) => {
    setIsSubmitting(true);
    
    try {
      let resumeInfo = null;
      
      // Upload resume if provided
      if (data.resume && data.resume[0]) {
        resumeInfo = await uploadResume(data.resume[0]);
        if (!resumeInfo) {
          throw new Error('Failed to upload resume');
        }
      }

      // Store form data in database
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_type: 'test-skill',
            name: data.name,
            email: data.email,
            phone: data.phone,
            experience: data.experience,
            target_role: data.targetRole,
            plan_name: 'Test Your Skill',
            plan_price: '₹0/month',
            resume_file_path: resumeInfo?.path || null,
            resume_file_name: resumeInfo?.name || null
          }
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your free trial request has been submitted successfully.",
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Test Your Skill - Free Trial</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              {...register('phone', { required: 'Phone number is required' })}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              {...register('experience', { required: 'Experience is required' })}
              placeholder="e.g., 2 years"
            />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
          </div>

          <div>
            <Label htmlFor="targetRole">Target Role</Label>
            <Input
              id="targetRole"
              {...register('targetRole', { required: 'Target role is required' })}
              placeholder="e.g., Software Engineer"
            />
            {errors.targetRole && <p className="text-red-500 text-sm">{errors.targetRole.message}</p>}
          </div>

          <div>
            <Label htmlFor="resume">Resume (PDF or Word)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              {...register('resume', { required: 'Resume is required' })}
            />
            {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
          </div>

          <div className="flex space-x-4 pt-4">
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestYourSkillForm;
