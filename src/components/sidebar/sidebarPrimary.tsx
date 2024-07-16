import { ExpandLess } from "@mui/icons-material";
import { SideBarProps, Section } from ".";
import { NavButtonProps } from "../nav/navButtons";

export default function SideBarPrimary(props: SideBarProps) {
  return (
    <div className="max-w-96">
      <div className="flex flex-col flex-nowrap gap-2 rounded-lg bg-primary-200 dark:bg-primary-800 outline outline-2 dark:outline-primary-300 outline-primary-500">
        {props.sections.map((section: Section) => (
          <SideBarSection {...section} />
        ))}
      </div>
    </div>
  );
}

function SideBarSection(props: Section) {
  return (
    <div className="flex flex-col flex-nowrap gap-2 overflow-y-auto rounded-md transition-all">
      <div className="flex flex-row flex-nowrap items-center justify-between gap-4 first:rounded-t-md p-2 text-sm font-bold text-primary-950 transition-all dark:text-primary-50">
        <div>{props.icon}</div>
        <div>{props.heading}</div>
        <div className="grow" />
        <div className="cursor-pointer transition-all rounded-md p-1 hover:bg-primary-200 dark:hover:bg-primary-800">
          <ExpandLess />
        </div>
      </div>
      <div className="flex flex-col flex-nowrap">
        {props.options?.map((option: NavButtonProps) => (
          <SideBarButton {...option} />
        ))}
      </div>
    </div>
  );
}

function SideBarButton(props: NavButtonProps) {
  return (
    <a
      className="w-full px-4 py-2 text-sm last:rounded-b-md text-primary-500 outline-none transition-all hover:bg-accent-200 hover:text-primary-950 dark:text-accent-100 dark:hover:bg-accent-700 dark:hover:text-primary-50 dark:focus:bg-accent-700"
      href={props.route}
    >
      {props.contents}
    </a>
  );
}
