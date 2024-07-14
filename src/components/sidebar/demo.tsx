import { ForkRight, Navigation, Notes } from "@mui/icons-material";
import { SideBar, SideBarProps } from ".";

export default function SideBarDemo() {
  const sideBarProps: SideBarProps = {
    title: "Components",
    sections: [
      {
        heading: "Forms",
        icon: <Notes />,
        options: [
          {
            contents: "Textboxes",
            route: "/components/textboxes",
          },
          {
            contents: "Buttons",
            route: "/components/buttons",
          },
        ],
      },
      {
        heading: "Navigation",
        icon: <ForkRight />,
        options: [
          {
            contents: "Header Bars",
            route: "/components/side-bars",
          },
          {
            contents: "Side Bars",
            route: "/components/nav-bars",
          },
        ],
      },
    ],
  };

  return <SideBar {...sideBarProps} />;
}
