import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { UserProfile } from "@clerk/nextjs";
import { Undo2 } from "lucide-react";

const UserProfilePage = () => (
  <div className="flex min-h-screen w-full flex-col">
    <Link href={"/dashboard"}>
      <Button variant={"link"} className="mx-4 my-2 w-fit">
        <Undo2 className="mr-2" />
        Trở về trang chủ
      </Button>
    </Link>
    <UserProfile
      appearance={{
        elements: {
          rootBox: "w-full h-full flex-1 flex",
          cardBox: "w-full min-h-[calc(100vh-80px)] mx-auto",
          scrollBox: "w-full h-full",
        },
      }}
      path="/vi/profile"
    />
  </div>
);

export default UserProfilePage;
