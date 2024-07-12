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
      <div className="dark:text-primary-50 text-primary-950 px-1 font-bold transition-colors">
        {props.title}
      </div>{" "}
      <div className="focus-within:outline-accent-500 flex grow flex-row flex-nowrap rounded-md outline outline-2 outline-transparent transition-all">
        <input
          className="bg-primary-200 dark:bg-primary-900 dark:text-accent-100 text-primary-900 grow rounded-s-md p-2 outline-none transition-colors"
          ref={inputRef}
          placeholder={props.placeholder}
          type={props.inputType}
          onChange={handleInput}
        />
        <button className="bg-accent-700 text-primary-100 hover:bg-accent-600 rounded-e-md p-2 font-bold transition-colors">
          {props.buttonContents}
        </button>
      </div>
      <div className="text-xs font-bold text-red-700 transition-all dark:text-red-500">
        {error ? <span>*{error}</span> : <pre> </pre>}
      </div>
    </div>
  );
}
