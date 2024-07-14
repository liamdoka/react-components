import { NavButtonProps } from ".";

export function NavButtonFilled(props: NavButtonProps) {
  return (
    <a
      href={`${props.route}`}
      className="text-md rounded-md bg-accent-700 px-4 py-2 font-bold text-accent-50 transition-all hover:bg-accent-600"
    >
      {props.title}
    </a>
  );
}
