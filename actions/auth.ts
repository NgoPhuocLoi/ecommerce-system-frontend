"use server";

import { signIn, signOut, updateSession } from "@/auth";

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
