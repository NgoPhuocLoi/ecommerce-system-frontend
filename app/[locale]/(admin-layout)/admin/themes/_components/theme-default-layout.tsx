import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";

const ThemeDefaultLayout = () => {
  return (
    <div className="mt-2 flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <Label className="mt-auto">Layout mặc định</Label>
        {/* <NewPageDialog /> */}
      </div>
      <div className="rounded-md border px-4 py-6">
        <div className="flex flex-col gap-2">
          <p className="text-center">Chủ đề này chưa có layout mặc định!</p>
          <Button className="mx-auto">+ Thêm layout mặc định</Button>
        </div>
      </div>
    </div>
  );
};

export default ThemeDefaultLayout;
