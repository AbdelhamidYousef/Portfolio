import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Section,
  SectionTitle,
  AnimateOnScroll,
  SuccessMessage,
} from '@/library/ui/shared';
import { Button } from '@/library/ui/shared/Button';
import {
  Form,
  FormField,
  Label,
  Input,
  Textarea,
  FormContainer,
} from '@/library/ui/features/form';
import { IconList, type IconListItem } from '@/library/ui/features/lists';
import { emailjsConfig } from '@/content';

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
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        emailjsConfig.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
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
            <IconList
              content={socials}
              containerClasses="gap-5 flex justify-center lg:justify-start"
              itemClasses="w-6 h-6 text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
            />
          </div>
        </AnimateOnScroll>

        {/* Contact Form */}
        <AnimateOnScroll animation="overshoot-left" delay={200}>
          {/* <div className="bg-gray-100 dark:bg-slate-800 rounded-2xl p-6 sm:p-8"> */}
          {status === 'success' ? (
            <SuccessMessage
              headline="Message Sent!"
              copy="Thanks for reaching out. I'll get back to you soon."
            >
              <Button
                variant="ghost"
                onClick={() => setStatus('idle')}
                className="hover:bg-gray-200! hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                Send Another Message
              </Button>
            </SuccessMessage>
          ) : (
            <FormContainer className="bg-gray-100! dark:bg-slate-800! p-6! sm:p-9!">
              <Form onSubmit={handleSubmit}>
                <FormField>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
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
            </FormContainer>
          )}
          {/* </div> */}
        </AnimateOnScroll>
      </div>
    </Section>
  );
};
