import {
  AlternateEmail,
  Done,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  TextBox,
  TextBoxProps,
  InputType,
  TextBoxWithButton,
  TextBoxWithButtonProps,
  TextBoxWithIcons,
  TextBoxWithIconsProps,
} from ".";
import { usernameValidator } from "./validators/username";
import { emailValidator } from "./validators/email";
import { useState } from "react";

export default function TextBoxDemo() {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const textBoxProps: TextBoxProps = {
    title: "Textbox",
    inputType: InputType.Text,
    outlined: true,
    placeholder: "Enter email...",
    validator: emailValidator,
  };

  const textBoxWithButtonProps: TextBoxWithButtonProps = {
    title: "Textbox with button",
    inputType: InputType.Text,
    outlined: true,
    placeholder: "Enter username...",
    buttonContents: "Submit",
    validator: usernameValidator,
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const textBoxWithIconsProps: TextBoxWithIconsProps = {
    title: "Textbox with trailing icon",
    inputType: isPasswordVisible ? InputType.Text : InputType.Password,
    placeholder: "Enter password...",
    trailingIcon: isPasswordVisible ? <Visibility /> : <VisibilityOff />,
    trailingOnClick: togglePasswordVisibility,
  };

  return (
    <div className="flex w-full max-w-[480px] flex-col gap-8 rounded-lg px-12 py-8">
      <h1 className="text-2xl font-bold text-primary-900 transition-all dark:text-primary-100">
        LiamDoka Textboxes
      </h1>
      <div className="flex w-full flex-col gap-4 rounded-lg">
        <TextBox {...textBoxProps} />
        <TextBoxWithButton
          {...textBoxWithButtonProps}
          title="Textbox with icon button"
          buttonContents={<Done />}
        />
        <TextBoxWithButton
          {...textBoxWithButtonProps}
          title="Textbox with text button"
          buttonContents="Submit"
        />
        <TextBoxWithIcons
          {...textBoxProps}
          title="Textbox with leading icon"
          leadingIcon={<AlternateEmail />}
        />
        <TextBoxWithIcons {...textBoxWithIconsProps} />
      </div>
    </div>
  );
}
