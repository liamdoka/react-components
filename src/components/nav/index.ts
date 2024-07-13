import NavBarDemo from "./demo";
import NavBar from "./navBar";

type NavBarProps = {
  title: string;
  buttons?: NavButtonProps[];
  buttonAlignment?: ButtonAlignment;
  buttonSpacing?: ButtonSpacing;
};

enum ButtonAlignment {
  left = "justify-start",
  right = "justify-end",
  center = "justify-center",
  around = "justify-around",
  between = "justify-between",
  evenly = "justify-evenly",
}

enum ButtonSpacing {
  sm = "gap-2",
  md = "gap-4",
  lg = "gap-8",
  xl = "gap-16",
}

type NavButtonProps = {
  title: string;
  route: string;
};

export { NavBar, NavBarDemo, ButtonAlignment, ButtonSpacing };
export type { NavBarProps, NavButtonProps };
