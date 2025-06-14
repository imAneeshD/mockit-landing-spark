
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, Clock, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailForm = z.infer<typeof emailSchema>;

const ComingSoon = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: EmailForm) => {
    setIsSubmitting(true);
    console.log('Submitting email for notification:', data.email);
    
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('/api/notify-me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You'll be notified when the demo is ready.",
        });
        form.reset();
        setIsDialogOpen(false);
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "Error",
        description: "Failed to submit your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-white to-success/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center mb-8 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/4f66c731-e0c8-44ba-a498-03671c00a5e6.png" 
            alt="MockIt Logo" 
            className="w-16 h-12 mr-3"
          />
          <div className="text-2xl font-bold text-primary">MockIt</div>
        </Link>

        {/* Coming Soon Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Clock className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Demo Coming Soon!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We're working hard to bring you an amazing demo experience. 
            Our interactive demo will showcase how MockIt can help you ace your next job interview.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me When Ready
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Get Notified</DialogTitle>
                  <DialogDescription>
                    Enter your email address and we'll notify you when the demo is ready!
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your email address" 
                              type="email"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Notify Me'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="text-sm text-gray-500">
            In the meantime, you can book a free mock interview to get started!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
