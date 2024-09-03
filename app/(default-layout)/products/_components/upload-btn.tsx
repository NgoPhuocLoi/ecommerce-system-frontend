"use client";
import { Upload } from "lucide-react";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

interface IUploadButtonProps {
  folder: string;
}

const UploadButton = ({ folder }: IUploadButtonProps) => {
  return (
    <CldUploadWidget
      options={{
        sources: ["local", "url"],
        folder,
      }}
      uploadPreset="buhtvapd"
      onSuccess={(result, { widget }) => {
        console.log({ result, widget });
        // setResource(result?.info); // { public_id, secure_url, etc }
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          //   setResource(undefined);
          open();
          //   console.log(folder);
        }
        return (
          <button
            onClick={handleOnClick}
            className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
          >
            <Upload className="text-muted-foreground h-4 w-4" />
            <span className="sr-only">Upload</span>
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadButton;
