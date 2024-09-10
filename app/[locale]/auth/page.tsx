import { redirect } from "next/navigation";

const AuthLayouts = () => {
  redirect("/auth/login");
};

export default AuthLayouts;
