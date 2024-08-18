import MyEditor from "@/app/editor/my-editor";
import {
  FeaturedCollection,
  ImageBanner,
  StoreFooter,
} from "../../_components";

const Page = ({ params }: { params: { storeId: string } }) => {
  const storeId = params.storeId;
  return (
    <>
      <ImageBanner />

      <FeaturedCollection />
    </>
  );
};

export default Page;
