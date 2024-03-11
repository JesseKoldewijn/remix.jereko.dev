import { Link } from "@remix-run/react";
import ThemeToggle from "~/components/theme-toggle";

import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex w-full">
      <div className="relative z-10 flex w-full items-center justify-between px-6 py-5">
        <div className="absolute inset-0 -z-[1] bg-background opacity-25" />
        <div className="z-10 flex items-center justify-center font-semibold">
          <Link prefetch="intent" to="/">
            Remix - Jereko
          </Link>
        </div>
        <DesktopMenu />
        <div className="z-10 flex items-center justify-center gap-3">
          <div className="hidden sm:flex">
            <ThemeToggle />
          </div>
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
