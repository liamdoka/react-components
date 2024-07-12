type NavBarProps = {
  title: string;
};

export default function NavBar(props: NavBarProps) {
  return (
    <div className="dark:bg-primary-700 h-96 w-full bg-red-200">
      <div>{props.title}</div>
    </div>
  );
}
