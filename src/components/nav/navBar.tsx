import { ButtonSpacing, NavBarProps, NavButtonProps } from ".";

export default function NavBar(props: NavBarProps) {
  return (
    <div className="flex h-20 w-full flex-row flex-nowrap items-center justify-between gap-12 bg-accent-100 px-12 shadow-sm transition-all dark:bg-primary-900">
      <div className="text-lg font-bold text-primary-900 transition-all dark:text-primary-100">
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
  );
}

export function NavButtonFilled(props: NavButtonProps) {
  return (
    <a
      href={`${props.route}`}
      className="text-md rounded-md bg-accent-700 px-4 py-1 font-bold text-accent-50 transition-all hover:bg-accent-600"
    >
      {props.title}
    </a>
  );
}

export function NavButton(props: NavButtonProps) {
  return (
    <a
      href={`${props.route}`}
      className="rounded-md px-4 py-1 text-base text-accent-950 transition-all hover:bg-accent-200 dark:text-accent-50 dark:hover:bg-primary-800"
    >
      {props.title}
    </a>
  );
}

export function NavButtonOutline() {
  return <></>;
}
