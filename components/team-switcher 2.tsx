"use client";

import * as React from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function TeamSwitcher() {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex items-center gap-4 ">
        <h2 className="text-2xl font-bold tracking-[-6px]">
          <span className="text-gray-900">N</span>
          <span className="text-gray-500">R</span>
        </h2>
        <h2 className="text-lg tracking-tighter font-medium">NextRole</h2>
      </div>
    </SidebarMenuButton>
  );
}
