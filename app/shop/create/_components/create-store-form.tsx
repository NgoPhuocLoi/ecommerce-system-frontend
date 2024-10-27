import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createShop } from "@/actions/shops";
import ServerTextField from "@/components/ui/server-text-field";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const CreateShopForm = async () => {
  const token = await auth().getToken();

  if (!token) {
    return null;
  }

  const handleCreateNewShop = async (formData: FormData) => {
    "use server";
    console.log(Object.fromEntries(formData));
    const shopName = formData.get("name") as string;
    await createShop(shopName, token);
    revalidatePath("/");
    redirect("/");
  };

  return (
    <div className="mx-auto flex h-screen w-1/3 items-center bg-gray-50 py-12">
      <form action={handleCreateNewShop}>
        <Card className="my-auto flex h-1/3 min-h-[240px] flex-col">
          <CardHeader>
            <CardTitle>Enter your shop details</CardTitle>
            <CardDescription>
              We’ll help you get set up based on your business needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ServerTextField
              name={"name"}
              label={"Name"}
              id={"create-shop-name"}
              type={"text"}
            />
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex w-full justify-between">
              <Button asChild variant={"ghost"}>
                <Link href={"/"}>Back</Link>
              </Button>

              <Button type="submit">Create</Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CreateShopForm;
