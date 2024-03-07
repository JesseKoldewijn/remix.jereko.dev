import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

const DesktopMenu = () => {
  return (
    <div className="absolute inset-x-1/2 z-10 hidden items-center justify-center gap-4 sm:flex">
      <Button role="navigation" size="sm" asChild>
        <Link prefetch="intent" to="/">
          Home
        </Link>
      </Button>
      <Button role="navigation" size="sm" asChild>
        <Link prefetch="intent" to="/about">
          About
        </Link>
      </Button>
    </div>
  );
};

export default DesktopMenu;
