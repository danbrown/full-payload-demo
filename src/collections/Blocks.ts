import { CollectionConfig } from "payload/types";
import Email from "../blocks/Email";
import Quote from "../blocks/Quote";
import NumberBlock from "../blocks/Number";
import CallToAction from "../blocks/CallToAction";

const Blocks: CollectionConfig = {
  slug: "blocks",
  labels: {
    singular: "Blocks",
    plural: "Blocks",
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "layout",
      label: "Layout Blocks",
      labels: {
        singular: "Block",
        plural: "Blocks",
      },
      type: "blocks",
      blocks: [Email, NumberBlock, Quote, CallToAction],
      localized: true,
      required: true,
    },
    {
      name: "nonLocalizedLayout",
      label: "Non Localized Layout",
      labels: {
        singular: "Layout",
        plural: "Layouts",
      },
      type: "blocks",
      blocks: [Email, NumberBlock, Quote, CallToAction],
      required: true,
    },
  ],
};

export default Blocks;
