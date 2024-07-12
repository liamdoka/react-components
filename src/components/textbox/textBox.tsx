import { useRef, useState } from "react";
import { TextBoxProps } from ".";

export default function TextBox(props: TextBoxProps) {
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
      <div className="dark:text-primary-50 text-primary-950 px-1 font-bold transition-all">
        {props.title}
      </div>
      <input
        className="bg-primary-200 dark:bg-primary-900 text-primary-900 dark:text-primary-100 focus:outline-accent-500 rounded-md p-2 outline outline-2 outline-transparent transition-all"
        ref={inputRef}
        placeholder={props.placeholder}
        type={props.inputType}
        onChange={handleInput}
      />
      <div className="text-xs font-bold leading-4 text-red-700 transition-all dark:text-red-500">
        {error ? <span>*{error}</span> : <pre> </pre>}
      </div>
    </div>
  );
}
