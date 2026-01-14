import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionTitle, SuccessMessage } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { Button } from '@/library/ui/shared/Button';
import {
  Form,
  FormContainer,
  DynamicFormFields,
} from '@/library/ui/features/form';
import { emailjsConfig, contactFormFields } from '@/content';
import { fadeIn } from '@/library/utils/motion';
import { Email } from '@/library/ui/svgs/socials';
import { LocationIcon } from '@/library/ui/svgs/interface';

interface ContactProps {
  email: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const Contact = ({ email }: ContactProps) => {
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
    <Section id="contact">
      <motion.div variants={fadeIn('up')}>
        <SectionTitle>Get in Touch</SectionTitle>
      </motion.div>

      <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 max-w-5xl">
        {/* Contact Info */}
        <motion.div variants={fadeIn('right', 0.1)}>
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
              className="lg:-ml-2 flex items-center gap-3 mb-4 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400">
                <Email className="w-5 h-5 fill-current" />
              </span>
              <span className="text-lg font-medium text-primary-600 dark:text-primary-400 group-hover:underline underline-offset-4">
                {email}
              </span>
            </a>

            {/* Remote Location */}
            <div className="lg:-ml-2 flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400">
                <LocationIcon className="w-5 h-5 fill-current" />
              </span>
              <span className="text-lg text-primary-600 dark:text-primary-400">
                Open to Remote Opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeIn('left', 0.2)}>
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
                <DynamicFormFields
                  fields={contactFormFields}
                  values={formData}
                  onChange={(id, value) =>
                    setFormData((prev) => ({ ...prev, [id]: value }))
                  }
                  disabled={status === 'loading'}
                />

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
        </motion.div>
      </div>
    </Section>
  );
};
