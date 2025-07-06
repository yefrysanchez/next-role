import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { Toaster } from "sonner";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <header
        className="absolute p-4 z-40 pointer-events-none mx-8 left-0 right-0 flex justify-center items-center"
      >
        <p className="bg-amber-100 max-w-[300px] md:max-w-fit md:w-full p-2 rounded-lg shadow-sm text-amber-800 lg:text-base text-xs">
          ⚠️ This page is still under development. Some features may not be
          available.
        </p>
      </header>
      <SidebarProvider>
        <Toaster />

        <AppSidebar />
        <SidebarInset className="relative flex flex-col">
          <header className="flex fixed top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 bg-white border border-gray-100" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
          </header>
          <main className="pt-0 flex-1">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
