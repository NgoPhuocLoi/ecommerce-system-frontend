import { auth } from "@/auth";
import ShopSelection from "@/components/shop-selection/shop-selection";
import { redirect } from "@/i18n/routing";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return redirect("/auth/login");
  }
  return (
    <>
      <ShopSelection />
    </>
  );
}
