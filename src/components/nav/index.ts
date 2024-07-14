import NavBarDemo from "./demo";
import NavBar from "./navBar";
import NavBarClear from "./navBarClear";
import NavBarPattern from "./navBarPattern";
import { NavButtonProps } from "./navButtons";

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

export {
  NavBar,
  NavBarClear,
  NavBarPattern,
  NavBarDemo,
  ButtonAlignment,
  ButtonSpacing,
};
export type { NavBarProps };
