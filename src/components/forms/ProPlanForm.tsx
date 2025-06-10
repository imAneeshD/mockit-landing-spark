
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ProPlanFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  targetRole: string;
  currentSkills: string;
  resumeUrl: string;
  preferredInterviewRounds: string;
  targetCompanies: string;
}

interface ProPlanFormProps {
  onClose: () => void;
}

const ProPlanForm = ({ onClose }: ProPlanFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProPlanFormData>();
  const { toast } = useToast();

  const onSubmit = async (data: ProPlanFormData) => {
    try {
      const formDataString = JSON.stringify({
        plan: "Pro Plan",
        price: "₹200/month",
        features: [
          "Resume Feedback",
          "MCQ Round",
          "Coding Round", 
          "Technical Round",
          "Managerial Round",
          "HR Round",
          "Unlimited mock interviews",
          "Custom interview scenarios"
        ],
        ...data,
        timestamp: new Date().toISOString()
      });

      console.log('Sending form data:', formDataString);

      // Dummy API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formDataString,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your Pro Plan subscription request has been submitted successfully.",
        });
        onClose();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Pro Plan Subscription</h2>
        
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
            <Label htmlFor="currentSkills">Current Skills</Label>
            <Input
              id="currentSkills"
              {...register('currentSkills', { required: 'Current skills are required' })}
              placeholder="e.g., JavaScript, React, Node.js"
            />
            {errors.currentSkills && <p className="text-red-500 text-sm">{errors.currentSkills.message}</p>}
          </div>

          <div>
            <Label htmlFor="resumeUrl">Resume URL (Google Drive/Dropbox)</Label>
            <Input
              id="resumeUrl"
              {...register('resumeUrl', { required: 'Resume URL is required' })}
              placeholder="https://drive.google.com/..."
            />
            {errors.resumeUrl && <p className="text-red-500 text-sm">{errors.resumeUrl.message}</p>}
          </div>

          <div>
            <Label htmlFor="preferredInterviewRounds">Preferred Interview Rounds</Label>
            <Input
              id="preferredInterviewRounds"
              {...register('preferredInterviewRounds', { required: 'Preferred rounds are required' })}
              placeholder="e.g., Technical, Coding, HR"
            />
            {errors.preferredInterviewRounds && <p className="text-red-500 text-sm">{errors.preferredInterviewRounds.message}</p>}
          </div>

          <div>
            <Label htmlFor="targetCompanies">Target Companies</Label>
            <Input
              id="targetCompanies"
              {...register('targetCompanies', { required: 'Target companies are required' })}
              placeholder="e.g., Google, Microsoft, Amazon"
            />
            {errors.targetCompanies && <p className="text-red-500 text-sm">{errors.targetCompanies.message}</p>}
          </div>

          <div className="flex space-x-4 pt-4">
            <Button type="submit" className="flex-1">
              Subscribe to Pro Plan
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

export default ProPlanForm;
