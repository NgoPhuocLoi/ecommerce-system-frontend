"use client";
import CheckboxSetting from "@/components/settings/checkbox-setting";
import ColorSetting from "@/components/settings/color-setting";
import TabSelectionSetting from "@/components/settings/tab-selection-setting";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSetting } from "@/hooks/useSetting";
import clsx from "clsx";
import { CircleUser, Menu, Package2, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const headerModes = [
  {
    title: "Menu",
    value: "menu",
  },
  {
    title: "Drawer",
    value: "drawer",
  },
];

const StoreHeaderSetting = () => {
  const { props, handlePropChange } = useSetting();
  const { bgColor, headerMode, textColor, showSearchbar } = props;

  return (
    <div className="flex flex-col gap-4 pt-1">
      <TabSelectionSetting
        id="store-header-mode"
        title="Header mode"
        description="Config header mode"
        value={headerMode}
        selections={headerModes}
        onValueChange={(value) => {
          console.log({ value });
          handlePropChange("headerMode", value);
        }}
      />

      <ColorSetting
        id="store-header-bg"
        title="Background"
        description="Change background color"
        value={bgColor}
        onChange={(color) => {
          handlePropChange("bgColor", color);
        }}
      />

      <ColorSetting
        id="store-header-text-color"
        title="Text color"
        description="Change text color"
        value={textColor}
        onChange={(color) => {
          handlePropChange("textColor", color);
        }}
      />
      <CheckboxSetting
        id="store-header-show-search"
        title="Show searchbar"
        description="Show or hide the search bar"
        value={showSearchbar}
        onCheckedChange={() => {
          handlePropChange("showSearchbar", !showSearchbar);
        }}
      />
    </div>
  );
};

interface IStoreHeaderProps {
  bgColor?: string;
  headerMode?: "menu" | "drawer";
  textColor?: string;
  showSearchbar?: boolean;
}

const NavigationDrawer = ({ isDrawerMode }: { isDrawerMode: boolean }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={clsx("shrink-0", {
            "md:hidden": !isDrawerMode,
          })}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Customers
          </Link>
          <Link href="#" className="hover:text-foreground">
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const NavigationMenu = ({ isMenuMode }: { isMenuMode: boolean }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 whitespace-nowrap text-lg font-semibold md:text-xl"
      >
        My Store
      </Link>

      <div
        className={clsx("flex gap-6", {
          hidden: !isMenuMode,
        })}
      >
        {links.map((link) => {
          const isActiveLink = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={clsx("transition-colors", {
                "border-b-2 border-b-gray-800 text-gray-800": isActiveLink,
                "text-gray-600 hover:text-gray-800": !isActiveLink,
              })}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const StoreHeader = ({
  bgColor,
  headerMode,
  textColor,
  showSearchbar,
}: IStoreHeaderProps) => {
  return (
    <header
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className="bg-background flex h-16 items-center gap-4 border-b px-4 md:px-6"
    >
      <NavigationDrawer isDrawerMode={headerMode === "drawer"} />
      <NavigationMenu isMenuMode={headerMode === "menu"} />

      <div className="flex w-fit items-center gap-3 md:ml-auto md:gap-2 lg:gap-4">
        {showSearchbar ? (
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
        ) : (
          <div className="flex-center h-10 w-10 cursor-pointer rounded-full hover:bg-gray-100">
            <Search size={17} />
          </div>
        )}
        <div className="flex-center h-10 w-10 cursor-pointer rounded-full hover:bg-gray-100">
          <ShoppingCart size={17} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

StoreHeader.craft = {
  props: {
    bgColor: "#ffffff",
    headerMode: "drawer",
    textColor: "#000000",
    showSearchbar: true,
  },
  related: {
    setting: StoreHeaderSetting,
  },
};
