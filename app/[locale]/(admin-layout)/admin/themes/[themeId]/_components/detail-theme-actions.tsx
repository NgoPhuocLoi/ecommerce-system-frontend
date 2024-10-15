"use client";

import { deleteTheme } from "@/actions/themes";
import DeleteAlertDialog from "@/app/[locale]/(admin-layout)/_components/common/delete-alert-dialog";
import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const DetailThemeAction = () => {
  const themeId = useParams().themeId as string;
  const router = useRouter();

  const handleDeleteTheme = async () => {
    await deleteTheme(themeId);
    router.push("/admin/themes");
  };

  return (
    <div className="flex gap-2">
      <Button variant={"secondary"}>
        <Link href={`/admin-builder?themeId=${themeId}`}>Chỉnh sửa</Link>
      </Button>
      {/* <Button variant="destructive">Xóa</Button> */}
      <DeleteAlertDialog
        title="Bạn có chắc muốn xoá chủ đề này không?"
        description="Hành động này không thể hoàn tác, chủ đề bị xoá sẽ không thể khôi phục."
        onConfirmed={handleDeleteTheme}
        TriggerComponent={
          <div>
            <Button variant="destructive">Xóa</Button>
          </div>
        }
      />
    </div>
  );
};

export default DetailThemeAction;
