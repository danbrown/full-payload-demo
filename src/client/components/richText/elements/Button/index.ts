import { RichTextCustomElement } from "payload/types";
import Button from "./Button";
import Element from "./Element";
import plugin from "./plugin";

const button: RichTextCustomElement = {
  name: "button",
  Button,
  Element,
  plugins: [plugin],
};

export default button;
