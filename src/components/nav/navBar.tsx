import { ButtonSpacing, NavBarProps } from ".";
import { NavButtonFilled, NavButtonOutlined } from "./navButtons";

export default function NavBar(props: NavBarProps) {
  return (
    <div className="flex h-16 w-full flex-row flex-nowrap items-center justify-between gap-12 bg-accent-100 px-12 shadow-sm transition-all dark:bg-primary-900">
      <div className="text-lg font-bold text-primary-900 transition-all dark:text-primary-100">
        {props.title}
      </div>
      <div
        className={`flex grow flex-row flex-nowrap ${props.buttonAlignment} ${props.buttonSpacing ?? ButtonSpacing.md}`}
      >
        {props.buttons?.map((navButtonProps) => (
          <NavButtonFilled {...navButtonProps} />
        ))}
      </div>
    </div>
  );
}
