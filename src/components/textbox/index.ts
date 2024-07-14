import { ReactNode } from "react";
import TextBox from "./textBox";
import TextBoxDemo from "./demo";
import TextBoxWithIcons from "./textBoxWithIcons";
import TextBoxWithButton from "./textBoxWithButton";

enum InputType {
  Text = "text",
  Password = "password",
}

type TextBoxProps = {
  inputType: InputType;
  title?: string;
  placeholder?: string;
  outlined?: boolean;
  validator?: (input: string) => string | null;
};

type TextBoxWithButtonProps = TextBoxProps & {
  buttonContents: string | ReactNode;
};

type TextBoxWithIconsProps = TextBoxProps & {
  leadingIcon?: ReactNode;
  leadingOnClick?: () => void;
  trailingIcon?: ReactNode;
  trailingOnClick?: () => void;
};

export { TextBoxDemo, TextBox, TextBoxWithButton, TextBoxWithIcons, InputType };
export type { TextBoxProps, TextBoxWithButtonProps, TextBoxWithIconsProps };
