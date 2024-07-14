import { useRef, useState } from "react";
import { TextBoxWithIconsProps } from ".";

export default function TextBoxWithIcons(props: TextBoxWithIconsProps) {
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
      <div className="px-1 font-bold text-primary-950 transition-all dark:text-primary-50">
        {props.title}
      </div>
      <div className="flex w-full grow flex-row flex-nowrap items-center justify-start gap-2 rounded-md bg-primary-200 px-2 outline outline-2 outline-transparent transition-all focus-within:outline-accent-500 dark:bg-primary-900">
        {props.leadingIcon && (
          <div
            className={`${props.trailingOnClick && "cursor-pointer hover:text-primary-950 dark:hover:text-primary-50"} rounded-sm text-primary-500 transition-all`}
            onClick={props.trailingOnClick}
          >
            {props.leadingIcon}
          </div>
        )}
        <input
          className="w-full grow bg-transparent py-2 text-primary-900 outline-none transition-colors dark:text-accent-100"
          ref={inputRef}
          placeholder={props.placeholder}
          type={props.inputType}
          onChange={handleInput}
          autoComplete="off"
          autoCorrect="false"
        />
        {props.trailingIcon && (
          <div
            className={`${props.trailingOnClick && "cursor-pointer hover:text-primary-950 dark:hover:text-primary-50"} rounded-sm text-primary-500 transition-all`}
            onClick={props.trailingOnClick}
          >
            {props.trailingIcon}
          </div>
        )}
      </div>
      <div className="text-xs font-bold leading-4 text-red-700 transition-all dark:text-red-500">
        <div className="min-h-4">{error && `*${error}`}</div>
      </div>
    </div>
  );
}
