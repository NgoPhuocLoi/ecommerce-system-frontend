import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./uploaded-content-column";
import { getUploadedImages } from "@/actions/uploaded-content";

const UploadedContentTable = async () => {
  const uploadedContents = (await getUploadedImages()).metadata;
  return (
    <div>
      <DataTable columns={columns} data={uploadedContents} />
    </div>
  );
};

export default UploadedContentTable;
