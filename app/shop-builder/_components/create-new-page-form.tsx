import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CreateNewPageForm = () => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Link
        </Label>
        <Input
          id="username"
          disabled
          defaultValue="@peduarte"
          className="col-span-3"
        />
      </div>
    </div>
  );
};

export default CreateNewPageForm;
