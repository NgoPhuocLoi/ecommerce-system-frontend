import { useEditor } from "@craftjs/core";
import SettingPanel from "./setting-panel";
import Image from "next/image";
import { icons } from "@/public/icons";
import { Layout, Text } from "@/components/editable/v2";
import { useEditorCreate } from "@/hooks/useEditorCreate";

const ELEMEMENTS = [
  {
    id: 1,
    label: "Layout",
    icon: icons.layout,
    component: Layout,
    hasChildren: true,
  },
  {
    id: 2,
    label: "Text",
    icon: icons.text,
    component: Text,
  },
  {
    id: 3,
    label: "Image",
    icon: icons.image,
    component: Layout,
  },
  {
    id: 4,
    label: "Hero Banner",
    icon: icons.heroBanner,
    component: Layout,
  },
  {
    id: 5,
    label: "Carousel",
    icon: icons.carousel,
    component: Layout,
  },
  {
    id: 6,
    label: "Video",
    icon: icons.video,
    component: Layout,
  },
  {
    id: 7,
    label: "Product",
    icon: icons.product,
    component: Layout,
  },
  {
    id: 8,
    label: "Product Set",
    icon: icons.productSet,
    component: Layout,
  },
  {
    id: 9,
    label: "Button",
    icon: icons.button,
    component: Layout,
  },
  {
    id: 10,
    label: "HTML",
    icon: icons.html,
    component: Layout,
  },
  {
    id: 11,
    label: "Spacer",
    icon: icons.spacer,
    component: Layout,
  },
  {
    id: 12,
    label: "Divider",
    icon: icons.divider,
    component: Layout,
  },
];

const Toolbox = () => {
  const { createElement } = useEditorCreate();
  return (
    <div className="h-full w-[264px] bg-white">
      <div className="grid grid-cols-2 gap-2 p-2">
        {ELEMEMENTS.map((element) => (
          <div
            ref={(ref) => {
              if (element.hasChildren) {
                return createElement(
                  ref,
                  <element.component>Hello</element.component>,
                );
              }
              return createElement(ref, <element.component />);
            }}
            key={element.id}
            className="flex h-fit cursor-pointer flex-col items-center gap-1 rounded-md border border-transparent p-2 hover:border-gray-100 hover:shadow-md"
          >
            <Image alt="img" className="min-h-7" src={element.icon} />
            <p className="text-sm">{element.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbox;
