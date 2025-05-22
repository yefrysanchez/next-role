import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="relative">
        <header className="flex sticky top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-white border border-gray-100" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          
          </div>
        </header>
        <main className="pt-0">
         {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
