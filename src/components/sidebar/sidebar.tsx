import { ArrowDownward, ExpandLess } from "@mui/icons-material";
import { SideBarProps, Section } from ".";
import { NavButtonProps } from "../nav/navButtons";

export default function SideBar(props: SideBarProps) {
  return (
    <div className="max-w-96">
      <div className="flex flex-col flex-nowrap gap-2">
        {props.sections.map((section: Section) => (
          <SideBarSection {...section} />
        ))}
      </div>
    </div>
  );
}


function SideBarSection(props: Section) {
  return (
    <div className="flex flex-col flex-nowrap overflow-y-auto bg-accent-100 dark:bg-accent-900 rounded-md gap-2">
      <div className="flex text-primary-950 dark:text-primary-50 cursor-pointer rounded-t-md flex-row flex-nowrap font-bold gap-4 text-sm items-center p-2 justify-between dark:hover:bg-accent-700 hover:bg-accent-200">
          <div>{props.icon}</div>
          <div>{props.heading}</div>
        <div className="grow" />
        <div><ExpandLess /></div>
      </div>
      <div className="flex flex-col flex-nowrap">
        {props.options?.map((option: NavButtonProps) => (
          <SideBarButton {...option} />
        ))}
      </div>
    </div>
  )
}

function SideBarButton(props: NavButtonProps) {
  return (
    <a
      className="text-sm w-full py-2 px-4 dark:text-accent-100 dark:hover:bg-accent-700 dark:hover:text-primary-50 text-primary-500 hover:text-primary-950 hover:bg-accent-200"
      href={props.route}
    >
      {props.contents}
    </a>
  )
}