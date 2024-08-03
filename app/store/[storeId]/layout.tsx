import React, { ReactNode } from "react";
import { StoreHeader, StoreFooter, AnnouncementBar } from "../_components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AnnouncementBar />

      <StoreHeader />

      {children}

      <StoreFooter />
    </>
  );
};

export default Layout;
