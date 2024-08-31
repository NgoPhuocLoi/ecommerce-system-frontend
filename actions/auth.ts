"use server";

import { signIn, signOut, updateSession } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export const handleLogin = async (data: FormData) => {
  await signIn("credentials", data);
};

export const logout = async () => {
  await signOut({
    redirectTo: "/auth/login",
  });
};

export const handleUpdateSession = async (session: any) => {
  await updateSession(session);
};
