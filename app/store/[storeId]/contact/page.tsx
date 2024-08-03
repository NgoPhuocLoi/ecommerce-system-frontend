import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <div className="px-10">
      <h1 className="text-3xl py-6 font-bold">Contact</h1>

      <div className="flex flex-col gap-4 w-[700px] mx-auto py-9 ">
        <div className="flex gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </div>

        <Input placeholder="Phone Number" />

        <Input placeholder="Comment" />

        <Button className="w-fit mt-4">Send</Button>
      </div>
    </div>
  );
};

export default Page;
