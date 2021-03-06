/* eslint-disable no-param-reassign */
import { CollectionConfig } from "payload/types";

const validateFieldTransformAction = (hook: string, value) => {
  if (value !== undefined && value !== null && !Array.isArray(value)) {
    console.error(hook, value);
    throw new Error(
      "Field transformAction should convert value to array [x, y] and not { coordinates: [x, y] }"
    );
  }
  return value;
};

const Geolocation: CollectionConfig = {
  slug: "geolocation",
  labels: {
    singular: "Geolocation",
    plural: "Geolocations",
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeRead: [(operation) => operation.doc],
    beforeChange: [
      (operation) => {
        operation.data.beforeChange = !operation.data.location?.coordinates;
        return operation.data;
      },
    ],
    afterRead: [
      (operation) => {
        const { doc } = operation;
        doc.afterReadHook = !doc.location?.coordinates;
        return doc;
      },
    ],
    afterChange: [
      (operation) => {
        const { doc } = operation;
        doc.afterChangeHook = !doc.location?.coordinates;
        return doc;
      },
    ],
    afterDelete: [
      (operation) => {
        const { doc } = operation;
        operation.doc.afterDeleteHook = !doc.location?.coordinates;
        return doc;
      },
    ],
  },
  fields: [
    {
      name: "location",
      type: "point",
      label: "Location",
      hooks: {
        beforeValidate: [
          ({ value }) => validateFieldTransformAction("beforeValidate", value),
        ],
        beforeChange: [
          ({ value }) => validateFieldTransformAction("beforeChange", value),
        ],
        afterChange: [
          ({ value }) => validateFieldTransformAction("afterChange", value),
        ],
        afterRead: [
          ({ value }) => validateFieldTransformAction("afterRead", value),
        ],
      },
    },
    {
      name: "localizedPoint",
      type: "point",
      label: "Localized Point",
      localized: true,
      hooks: {
        beforeValidate: [
          ({ value }) => validateFieldTransformAction("beforeValidate", value),
        ],
        beforeChange: [
          ({ value }) => validateFieldTransformAction("beforeChange", value),
        ],
        afterChange: [
          ({ value }) => validateFieldTransformAction("afterChange", value),
        ],
        afterRead: [
          ({ value }) => validateFieldTransformAction("afterRead", value),
        ],
      },
    },
    {
      type: "group",
      name: "group",
      fields: [
        {
          name: "point",
          type: "point",
        },
      ],
    },
  ],
};

export default Geolocation;
