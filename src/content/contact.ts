// EmailJS configuration
export const emailjsConfig = {
  serviceId: 'service_qde9uch',
  templateId: 'template_du3hgn7',
  publicKey: 'Ev07SA8St-0U8Vl1q',
} as const;

// Form field configuration
export interface FormFieldConfig {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  required?: boolean;
  rows?: number;
}

export const contactFormFields: FormFieldConfig[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true,
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Your message...',
    required: true,
    rows: 5,
  },
];
