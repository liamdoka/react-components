import { ReactNode } from "react";
import { NavButton } from "./navButton";
import { NavButtonFilled } from "./navButtonFilled";
import { NavButtonOutlined } from "./navButtonOutline";

type NavButtonProps = {
  contents?: string | ReactNode;
  route?: string;
};

export { NavButton, NavButtonFilled, NavButtonOutlined };
export type { NavButtonProps };
