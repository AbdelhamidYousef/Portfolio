import Button from "./Button";
import FormField from "./FormField";

const ContactForm = () => {
  return (
    <form className="max-w-5xl ml-1 px-12 py-14 bg-gray-200 rounded-2xl shadow-lg grid gap-y-8">
      <FormField>
        <FormField.Label htmlFor="name">Your Name:</FormField.Label>
        <FormField.Input
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </FormField>

      <FormField>
        <FormField.Label htmlFor="email">Your Email:</FormField.Label>
        <FormField.Input
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </FormField>

      <FormField className="mb-3">
        <FormField.Label htmlFor="message">Your Message:</FormField.Label>
        <FormField.Textarea
          name="message"
          rows="7"
          placeholder="Write your message"
        />
      </FormField>

      <div>
        <Button className="ml-0.5">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
