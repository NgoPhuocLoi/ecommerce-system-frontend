"use client";
import { getUploadedImages } from "@/actions/uploaded-content";
import { UploadedContent } from "@/app/interfaces/uploaded-content";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Upload } from "lucide-react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import prettyBytes from "pretty-bytes";
import { useEffect, useRef, useState } from "react";
import { UploadedContentPreview } from "./product-image-list";

interface IUploadButtonProps {
  folder: string;
  onSuccess: (result: CloudinaryUploadWidgetResults) => void;
  onSelectExisting: (selectedImages: UploadedContentPreview[]) => void;
  selectedImages: UploadedContentPreview[];
}

const ImageSkeleton = () => {
  return (
    <div className="p-1">
      <Skeleton className="h-[100px] w-[100px]" />
      <div className="mt-2 flex flex-col gap-1">
        <Skeleton className="h-2 w-[50px]" />
        <Skeleton className="h-2 w-[30px]" />
      </div>
    </div>
  );
};

const UploadButton = ({
  folder,
  onSuccess,
  onSelectExisting,
  selectedImages,
}: IUploadButtonProps) => {
  const [fetchingExistingImages, setFetchingExistingImages] = useState(false);
  const [existingImages, setExistingImages] = useState<UploadedContent[]>([]);
  const selectedExistingImages = useRef<Set<string>>(new Set());

  useEffect(() => {
    selectedExistingImages.current = new Set(
      selectedImages.map((image) => image.publicId),
    );
  }, [selectedImages]);

  const handleLoadUploadedImages = async () => {
    setFetchingExistingImages(true);
    const res = await getUploadedImages();
    setExistingImages(res.metadata);
    setFetchingExistingImages(false);
  };

  return (
    <CldUploadWidget
      options={{
        sources: ["local", "url"],
        folder,
      }}
      uploadPreset="buhtvapd"
      onSuccess={(result, { widget }) => {
        onSuccess(result);
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          open();
        }
        return (
          <div className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed">
            <button
              type="button"
              onClick={handleOnClick}
              className="flex flex-col items-center gap-1 rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              <Upload className="text-muted-foreground h-4 w-4" />
              <span className="text-xs text-gray-400">Upload</span>
            </button>
            <div className="text-xs text-black">or</div>
            <Dialog>
              <DialogTrigger onClick={handleLoadUploadedImages}>
                <div className="cursor-pointer text-xs text-gray-400 hover:text-gray-500 hover:underline">
                  Select existing
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select file</DialogTitle>
                  <DialogDescription>
                    Choose yout file from existing files
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-4 gap-4">
                  {existingImages.map((existingImage) => (
                    <div className="rounded-md p-2 hover:bg-gray-100">
                      <div
                        key={existingImage.public_id}
                        className="relative cursor-pointer"
                      >
                        <Checkbox
                          defaultChecked={selectedExistingImages.current.has(
                            existingImage.public_id,
                          )}
                          name="heelo"
                          className="absolute left-2 top-2"
                          id={existingImage.public_id}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              selectedExistingImages.current.add(
                                existingImage.public_id,
                              );
                            } else {
                              selectedExistingImages.current.delete(
                                existingImage.public_id,
                              );
                            }
                          }}
                        />
                        <label htmlFor={existingImage.public_id}>
                          <div className="cursor-pointer rounded-md border p-1">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-contain"
                              height="100"
                              src={existingImage.url}
                              width="100"
                            />
                          </div>
                        </label>
                      </div>

                      <div className="mt-2 flex flex-col gap-1 text-center text-xs">
                        <p className="text-gray-400">
                          {prettyBytes(existingImage.bytes)}
                        </p>
                        <p className="uppercase">{existingImage.format}</p>
                      </div>
                    </div>
                  ))}

                  {fetchingExistingImages && <ImageSkeleton />}
                </div>

                <DialogFooter className="flex gap-1">
                  <DialogClose asChild>
                    <Button size={"sm"} variant={"outline"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={() => {
                        const selectedImages = existingImages.filter(
                          (image) => {
                            return selectedExistingImages.current.has(
                              image.public_id,
                            );
                          },
                        );
                        onSelectExisting(
                          selectedImages.map((image) => ({
                            publicId: image.public_id,
                            url: image.url,
                          })),
                        );
                      }}
                      size={"sm"}
                    >
                      Done
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadButton;
