import { Link } from "@remix-run/react";
import ThemeToggle from "~/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 z-10 flex w-full">
      <div className="relative z-10 flex w-full items-center justify-between px-6 py-5">
        <div className="absolute inset-0 -z-[1] bg-background opacity-25" />
        <div className="z-10 flex items-center justify-center">
          <Link prefetch="intent" to="/">
            Remix - Jereko
          </Link>
        </div>
        <div className="z-10 hidden items-center justify-center sm:flex">
          <Link prefetch="intent" to="/">
            Home
          </Link>
        </div>
        <div className="z-10 flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
