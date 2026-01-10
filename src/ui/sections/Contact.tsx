import { useState } from 'react';
import { Section, SectionTitle, AnimateOnScroll } from '@/library/ui/shared';
import { Button } from '@/library/ui/shared/Button';
import {
  Form,
  FormField,
  Label,
  Input,
  Textarea,
} from '@/library/ui/features/form';
import { IconList, type IconListItem } from '@/library/ui/features/lists';

interface ContactProps {
  email: string;
  socials: readonly IconListItem[];
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const Contact = ({ email, socials }: ContactProps) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async () => {
    setStatus('loading');

    // Formspree endpoint - replace YOUR_FORM_ID with your actual Formspree form ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
      <AnimateOnScroll animation="fade-up">
        <SectionTitle>Contact</SectionTitle>
      </AnimateOnScroll>

      <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 max-w-5xl mx-auto">
        {/* Contact Info */}
        <AnimateOnScroll animation="overshoot-right" delay={100}>
          <div className="text-center lg:text-left">
            <h3 className="font-headlines text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto lg:mx-0">
              Have a project in mind or just want to chat? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </p>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="inline-block mb-8 text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline underline-offset-4"
            >
              {email}
            </a>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start">
              <IconList
                content={socials}
                containerClasses="gap-5"
                itemClasses="w-6 h-6 text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact Form */}
        <AnimateOnScroll animation="overshoot-left" delay={200}>
          <div className="bg-gray-100 dark:bg-slate-800 rounded-2xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-700 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <Button variant="ghost" onClick={() => setStatus('idle')}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormField>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    disabled={status === 'loading'}
                  />
                </FormField>

                <FormField>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    disabled={status === 'loading'}
                  />
                </FormField>

                <FormField>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    rows={5}
                    required
                    disabled={status === 'loading'}
                  />
                </FormField>

                {status === 'error' && (
                  <p className="text-red-500 dark:text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};
