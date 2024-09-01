"use client";
import { logout } from "@/actions/auth";
import { ReactNode } from "react";

const LogoutButton = ({ children }: { children: ReactNode }) => {
  const handleLogout = async () => {
    await logout();
  };

  return <div onClick={handleLogout}>{children}</div>;
};

export default LogoutButton;
