import { Done } from "@mui/icons-material";
import { TextBoxProps, InputType } from ".";
import TextBox from "./textBox";
import TextBoxWithButton from "./textBoxWithButton";
import { usernameValidator } from "./validators/username";

export default function TextBoxDemo() {
  const textBoxProps: TextBoxProps = {
    title: "Textbox",
    inputType: InputType.Text,
    placeholder: "Enter username...",
    validator: usernameValidator,
  };

  return (
    <div className="flex w-[480px] flex-col gap-8 rounded-lg px-12 py-8">
      <h1 className="dark:text-primary-100 text-primary-900 text-2xl font-bold transition-all">
        LiamDoka Textboxes
      </h1>
      <div className="flex w-full flex-col gap-4 rounded-lg">
        <TextBox {...textBoxProps} />
        <TextBoxWithButton
          {...textBoxProps}
          title="Textbox with icon button"
          buttonContents={<Done />}
        />
        <TextBoxWithButton
          {...textBoxProps}
          title="Textbox with text button"
          buttonContents="Submit"
        />
      </div>
    </div>
  );
}
