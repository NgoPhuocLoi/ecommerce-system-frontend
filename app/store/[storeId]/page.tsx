import MyEditor from "@/app/editor/my-editor";

const Page = ({ params }: { params: { storeId: string } }) => {
  const storeId = params.storeId;
  return (
    <>
      {/* <ImageBanner />

      <FeaturedCollection /> */}

      <MyEditor />
    </>
  );
};

export default Page;
