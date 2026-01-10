import { FormField } from './FormField';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import type { FormFieldConfig } from '@/content/contact';

interface DynamicFormFieldsProps {
  fields: FormFieldConfig[];
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
  disabled?: boolean;
}

export const DynamicFormFields = ({
  fields,
  values,
  onChange,
  disabled = false,
}: DynamicFormFieldsProps) => (
  <>
    {fields.map((field) => (
      <FormField key={field.id}>
        <Label htmlFor={field.id}>{field.label}</Label>
        {field.type === 'textarea' ? (
          <Textarea
            id={field.id}
            placeholder={field.placeholder}
            value={values[field.id] || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            rows={field.rows}
            required={field.required}
            disabled={disabled}
          />
        ) : (
          <Input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            value={values[field.id] || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            required={field.required}
            disabled={disabled}
          />
        )}
      </FormField>
    ))}
  </>
);
