import { Block } from "payload/types";

const Email: Block = {
  slug: "email",
  labels: {
    singular: "Email",
    plural: "Emails",
  },
  fields: [
    {
      name: "testEmail",
      label: "Test Email Field",
      type: "email",
      required: true,
    },
  ],
};

export default Email;
