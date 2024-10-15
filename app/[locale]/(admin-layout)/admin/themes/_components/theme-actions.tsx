"use client";
import { deleteTheme } from "@/actions/themes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical, Trash } from "lucide-react";
import React, { useState } from "react";
import DeleteAlertDialog from "../../../_components/common/delete-alert-dialog";

interface IThemeActionsProps {
  themeId: number;
}

const ThemeActions = ({ themeId }: IThemeActionsProps) => {
  const [openThemeActions, setOpenThemeActions] = useState(false);

  return (
    <Popover open={openThemeActions} onOpenChange={setOpenThemeActions}>
      <PopoverTrigger>
        <div className="rounded-full p-2 hover:bg-gray-100">
          <EllipsisVertical />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit px-4">
        <DeleteAlertDialog
          onOpenChange={setOpenThemeActions}
          title="Bạn có chắc muốn xoá chủ đề này không?"
          description="Hành động này không thể hoàn tác, chủ đề bị xoá sẽ không thể khôi phục."
          onConfirmed={deleteTheme.bind(null, themeId.toString())}
          TriggerComponent={
            <Button
              size="sm"
              variant={"destructive"}
              className="flex w-full items-center justify-start gap-1 px-4"
            >
              <Trash size={16} />
              <span className="text-sm">Xoá</span>
            </Button>
          }
        />
      </PopoverContent>
    </Popover>
  );
};

export default ThemeActions;
