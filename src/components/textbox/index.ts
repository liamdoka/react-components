import { ReactNode } from "react";
import TextBox from "./textBox";
import TextBoxWithButton from "./textBoxWithButton";
import TextBoxDemo from "./demo";

enum InputType {
  Text = "text",
}

type TextBoxProps = {
  inputType: InputType;
  title?: string;
  placeholder?: string;
  validator?: (input: string) => string | null;
};

type TextBoxWithButtonProps = TextBoxProps & {
  buttonContents: string | ReactNode;
};

export { TextBoxDemo, TextBox, TextBoxWithButton, InputType };
export type { TextBoxProps, TextBoxWithButtonProps };
