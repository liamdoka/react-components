import { NavButtonProps } from ".";

export function NavButton(props: NavButtonProps) {
  return (
    <a
      href={`${props.route}`}
      className="rounded-md px-4 py-2 text-base text-accent-950 transition-all hover:bg-accent-200 dark:text-accent-50 dark:hover:bg-primary-800"
    >
      {props.title}
    </a>
  );
}
