import { NavButtonProps } from ".";

export function NavButtonOutlined(props: NavButtonProps) {
  return (
    <a
      href={`${props.route}`}
      className="rounded-md border-2 border-accent-950 px-4 py-2 text-base text-accent-950 transition-all hover:bg-accent-200 dark:border-2 dark:border-accent-50 dark:text-accent-50 dark:hover:bg-primary-800"
    >
      {props.title}
    </a>
  );
}
