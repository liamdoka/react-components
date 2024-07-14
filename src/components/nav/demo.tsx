import { Person } from "@mui/icons-material";
import {
  ButtonAlignment,
  ButtonSpacing,
  NavBarClear,
  NavBarPattern,
  NavBarProps,
} from ".";

export default function NavBarDemo() {
  const navBarProps: NavBarProps = {
    title: "LiamDoka Nav Bar",
    buttons: [
      {
        contents: "Projects",
        route: "/projects",
      },
      {
        contents: "About",
        route: "/about",
      },
      {
        contents: "Contact",
        route: "/contact",
      },
      {},
      {
        contents: <Person />,
        route: "/profile",
      },
    ],
    buttonSpacing: ButtonSpacing.sm,
    buttonAlignment: ButtonAlignment.right,
  };

  return <NavBarPattern {...navBarProps} />;
}
