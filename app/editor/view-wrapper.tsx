import { useEditor } from "@craftjs/core";
import clsx from "clsx";
import React, { useEffect } from "react";

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
      <div className="flex h-full overflow-hidden flex-row w-full fixed">
        <h1>Tool box</h1>
        <div className="page-container flex flex-1 h-full flex-col">
          <h1>Header</h1>
          <div
            className={clsx(
              "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
              {
                "bg-red": enabled,
              }
            )}
            ref={(ref) => connectors.select(connectors.hover(ref!, ""), "")}
          >
            <div className="relative flex-col flex items-center pt-8">
              {children}
            </div>
          </div>
        </div>
        <h1>Sidebar</h1>
      </div>
    </div>
  );
};
