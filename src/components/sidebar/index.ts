import { ReactNode } from "react";
import { NavButtonProps } from "../nav/navButtons";
import SideBarDemo from "./demo";
import SideBar from "./sidebar";

type SideBarProps = {
  title?: string;
  sections: Section[];
};

type Section = {
  heading: string;
  icon?: ReactNode;
  options?: NavButtonProps[];
};

export { SideBar, SideBarDemo };
export type { SideBarProps, Section };
