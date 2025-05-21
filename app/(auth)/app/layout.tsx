import SideBar from "@/components/sidebar/SideBar";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
    <SideBar />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
