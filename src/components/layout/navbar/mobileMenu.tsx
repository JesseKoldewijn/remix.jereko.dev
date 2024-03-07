import { Link } from "@remix-run/react";
import { useRef } from "react";
import { LuMenu } from "react-icons/lu";
import ThemeToggle from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

const MobileMenu = () => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleLinkNavigation = () => {
    if (closeBtnRef.current) {
      closeBtnRef.current.click();
    }
  };

  return (
    <Drawer>
      <Button size="sm" asChild>
        <DrawerTrigger>
          <LuMenu className="h-6 w-6" />
          <span className="sr-only">Open Navigation Menu</span>
        </DrawerTrigger>
      </Button>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Remix - Jereko</DrawerTitle>
          <DrawerDescription>Navigation</DrawerDescription>
        </DrawerHeader>
        <div className="mx-4 flex flex-col gap-4">
          <ul className="flex w-full flex-col gap-4">
            <li className="w-full">
              <Button className="w-full" size="sm" asChild>
                <Link to="/" onClick={handleLinkNavigation}>
                  Home
                </Link>
              </Button>
            </li>
            <li className="w-full">
              <Button className="w-full" size="sm" asChild>
                <Link to="/about" onClick={handleLinkNavigation}>
                  About
                </Link>
              </Button>
            </li>
          </ul>
          <ul className="flex w-full flex-col gap-4 border-t-2 pt-3">
            <li className="flex w-full items-center justify-center gap-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
        <DrawerFooter className="flex flex-row justify-center gap-2">
          <DrawerClose ref={closeBtnRef} asChild>
            <Button className="border-foreground/50 w-full" variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
