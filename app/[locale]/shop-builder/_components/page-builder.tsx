"use client";

import * as theme2 from "@/components/editable/theme-2";
import * as editableComponentsV2 from "@/components/editable/v2";
import { useApplyRef } from "@/hooks/useApplyRef";
import { Editor, ROOT_NODE, useEditor, useNode } from "@craftjs/core";
import clsx from "clsx";
import { useHydrateAtoms } from "jotai/utils";
import { ReactElement, useCallback, useEffect, useRef } from "react";
import { pagesAtom } from "../_atoms/page-atom";
import EditorHeader from "./editor-header";
import EditorBody from "./editor-body";
import { Product } from "@/app/interfaces/product";
import { productsAtom } from "../_atoms/product-atom";
import { useAtom } from "jotai";
import { Page } from "@/app/interfaces/online-shop";
import ReactDOM from "react-dom";
import { ArrowUp, Delete, Move, Trash } from "lucide-react";

const RenderNode = ({ render }: { render: ReactElement }) => {
  const { id } = useNode();
  const { isActive, query, actions } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));
  const { dom, isHover, name, connectors, moveable, deletable, parent } =
    useNode((node) => {
      return {
        dom: node.dom,
        isHover: node.events.hovered,
        name: node.data.name,
        moveable: query.node(node.id).isDraggable(),
        deletable: query.node(node.id).isDeletable(),
        parent: node.data.parent,
      };
    });

  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom!);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <div
              ref={currentRef}
              className="fixed flex -translate-y-full items-center bg-blue-500 p-1 text-sm text-white"
              style={{
                left: getPos(dom!).left,
                top: getPos(dom!).top,
                zIndex: 9999,
              }}
            >
              <h2 className="mr-3 flex-1">{name ?? "Unknow"}</h2>
              {moveable ? (
                <div className="mr-2 cursor-move" ref={connectors.drag}>
                  <Move size={16} />
                </div>
              ) : null}
              {id !== ROOT_NODE && (
                <div
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    actions.selectNode(parent as string);
                  }}
                >
                  <ArrowUp size={16} />
                </div>
              )}
              {deletable ? (
                <div
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <Trash size={16} />
                </div>
              ) : null}
            </div>,
            document.querySelector(".page-container")!,
          )
        : null}
      {render}
    </>
  );
};

interface IShopHeaderProps {
  pages: Page[];
  products: Product[];
  returnLink?: string;
  isAdminBuilder?: boolean;
  defaultLayout?: string;
}

const PageBuilder = ({
  pages,
  products,
  returnLink,
  isAdminBuilder,
  defaultLayout,
}: IShopHeaderProps) => {
  useHydrateAtoms([[pagesAtom, pages]]);
  useHydrateAtoms([[productsAtom, products]]);
  return (
    <div className="flex w-full flex-col bg-gray-200">
      <Editor
        onRender={RenderNode}
        resolver={{ ...editableComponentsV2, ...theme2 }}
      >
        <EditorHeader returnLink={returnLink} isAdminBuilder={isAdminBuilder} />
        <EditorBody
          defaultLayout={defaultLayout}
          isAdminBuilder={isAdminBuilder}
        />
      </Editor>
    </div>
  );
};

export default PageBuilder;
