import { ButtonAlignment, ButtonSpacing, NavBarProps } from ".";
import NavBar from "./navBar";

export default function NavBarDemo() {
  const navBarProps: NavBarProps = {
    title: "LiamDoka Nav Bar",
    buttons: [
      {
        title: "Projects",
        route: "/projects",
      },
      {
        title: "About",
        route: "/about",
      },
      {
        title: "Contact",
        route: "/contact",
      },
    ],
    buttonSpacing: ButtonSpacing.sm,
    buttonAlignment: ButtonAlignment.left,
  };

  return <NavBar {...navBarProps} />;
}
