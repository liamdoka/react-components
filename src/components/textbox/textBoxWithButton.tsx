import { useRef, useState } from "react";
import { TextBoxWithButtonProps } from ".";

export default function TextBoxWithButton(props: TextBoxWithButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (_: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current == null) return;

    const input: string = inputRef.current.value;
    if (props.validator == null) {
      setValue(input);
      return;
    }

    const newError = props.validator(input);
    setError(newError);

    if (newError == null) {
      setValue(input);
    } else {
      setValue(null);
    }
  };

  return (
    <div className="flex grow flex-col gap-1">
      <div className="px-1 font-bold text-primary-950 transition-colors dark:text-primary-50">
        {props.title}
      </div>{" "}
      <div className="flex w-full grow flex-row flex-nowrap rounded-md outline outline-2 outline-transparent transition-all focus-within:outline-accent-500">
        <input
          className={`w-full grow rounded-s-md bg-primary-200 p-2 text-primary-900 outline-none transition-colors dark:bg-primary-900 dark:text-accent-100 ${props.outlined && "inset-1 border border-primary-500"}`}
          ref={inputRef}
          placeholder={props.placeholder}
          type={props.inputType}
          onChange={handleInput}
        />
        <button className="rounded-e-md bg-accent-700 p-2 font-bold text-primary-100 transition-colors hover:bg-accent-600">
          {props.buttonContents}
        </button>
      </div>
      <div className="text-xs font-bold text-red-700 transition-all dark:text-red-500">
        <div className="min-h-4">{error && `*${error}`}</div>
      </div>
    </div>
  );
}
