"use client";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
