import { useState } from "react";
import { useRef } from "react";
import Button from "./Button";
import FormField from "./FormField";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const initialInputs = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(inputs).some((inp) => inp === ""))
      return toast.error("Please fill all the fields");

    setIsLoading(true);

    emailjs
      .sendForm(
        "XOOD",
        "template_du3hgn7",
        formRef.current,
        "Ev07SA8St-0U8Vl1q"
      )
      .then(
        () => {
          setInputs(initialInputs);
          toast.success("Email Sent!");
        },
        (error) => {
          console.error(error);
          toast.error("Couldn't send your email");
        }
      )
      .then(() => setIsLoading(false));
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      ref={formRef}
      className="max-w-5xl ml-1 px-12 py-14 xs:bg-gray-200 xs:rounded-2xl xs:shadow-lg grid gap-y-8"
    >
      <FormField>
        <FormField.Label htmlFor="name">Your Name:</FormField.Label>
        <FormField.Input
          type="text"
          name="user_name"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          disabled={isLoading}
          placeholder="Enter your name"
        />
      </FormField>

      <FormField>
        <FormField.Label htmlFor="email">Your Email:</FormField.Label>
        <FormField.Input
          type="email"
          name="user_email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          disabled={isLoading}
          placeholder="Enter your email"
        />
      </FormField>

      <FormField className="mb-3">
        <FormField.Label htmlFor="message">Your Message:</FormField.Label>
        <FormField.Textarea
          name="message"
          rows="7"
          value={inputs.message}
          onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          disabled={isLoading}
          placeholder="Write your message"
        />
      </FormField>

      <Button disabled={isLoading} className="ml-px justify-self-start">
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
