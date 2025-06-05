"use client";

import * as React from "react";
import { SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const boards = [
  {
    title: "Software Engineer Board",
    url: "/boards/board",
  },
  {
    title: "Cloud Engineer Board",
    url: "/boards/board",
  },
  {
    title: "Back-end Board",
    url: "/boards/board",
  },
];

const navMain = [
  {
    title: "Boards",
    url: "/boards",
    icon: SquareTerminal,
    isActive: true,
    items: boards,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
