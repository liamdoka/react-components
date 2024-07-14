import { ButtonSpacing, NavBarProps } from ".";
import { NavButton, NavButtonFilled, NavButtonOutlined } from "./navButtons";

export default function NavBarPattern(props: NavBarProps) {
  return (
    <div className="flex h-16 w-full flex-row flex-nowrap items-center justify-center px-12 heropattern-banknote-accent-500/10">
      <div className="flex w-full max-w-screen-lg flex-row flex-nowrap items-center gap-12">
        <div className="text-lg font-bold text-accent-800 transition-all dark:text-accent-300">
          {props.title}
        </div>
        <div
          className={`flex grow flex-row flex-nowrap ${props.buttonAlignment} ${props.buttonSpacing ?? ButtonSpacing.md}`}
        >
          {props.buttons?.map((navButtonProps) => (
            <NavButton {...navButtonProps} />
          ))}
        </div>
      </div>
    </div>
  );
}
