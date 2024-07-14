import { NavButtonProps } from ".";

export function NavButton(props: NavButtonProps) {
  return (
    <a
      href={props.route}
      className={`rounded-md ${props.route && "hover:bg-accent-200 dark:hover:bg-primary-600"} ${props.contents && ""} select-none px-4 py-2 text-base text-accent-950 transition-all dark:text-accent-50`}
    >
      {props.contents ?? "|"}
    </a>
  );
}
