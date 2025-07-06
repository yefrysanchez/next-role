"use client";

import * as React from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex items-center ">
        <div className="h-8 w-8">
          <Image className="h-full w-full object-cover" height={32} width={32} src={"/logo.png"} alt="Logo" />
        </div>
        <h2 className="text-xl font-medium tracking-tighter">
          <span className="font-semibold">Next</span>
          <span className="font-semibold text-gray-500">Role</span>
        </h2>
      </div>
    </SidebarMenuButton>
  );
}
