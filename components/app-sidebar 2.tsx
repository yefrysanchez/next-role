"use client";

import * as React from "react";
import {
  Settings,
  SquareTerminal,
} from "lucide-react";

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
    url: "/boards/board"
  },
  {
    title: "Back-end Board",
    url: "/boards/board"
  },
];

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Boards",
      url: "/boards",
      icon: SquareTerminal,
      isActive: true,
      items: boards,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: true,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Account",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
