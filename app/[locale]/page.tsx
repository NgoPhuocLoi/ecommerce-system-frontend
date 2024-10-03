import { auth, currentUser } from "@clerk/nextjs/server";
import ShopSelection from "@/components/shop-selection/shop-selection";
import { redirect } from "@/i18n/routing";

export default async function Home() {
  // const session = await auth();
  // if (!session) {
  //   return redirect("/auth/login");
  // }
  const session = auth();
  const current = await currentUser();
  console.log({ session, current });
  return (
    <>
      <ShopSelection />
    </>
  );
}
