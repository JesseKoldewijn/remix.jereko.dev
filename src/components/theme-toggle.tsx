import { Form } from "@remix-run/react";
import { useRef } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useSession } from "~/providers/SessionProvider";
import { cn } from "~/utils/cn";

import { Switch } from "./ui/switch";

const ThemeToggle = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { session: sessionState, setSession } = useSession();

  const handleThemeToggleSwitch = async (newValue: boolean) => {
    const newTheme = newValue ? "dark" : "light";

    if (!formRef.current) return;

    const url = new URL(window.location.href);
    url.pathname = "/";
    url.searchParams.set("_data", "routes/_index");

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Toggle-Theme": "true",
        "X-NEW-THEME": newTheme,
      },
    });

    if (!res.ok) return;
    const data = await res.json();
    setSession(data);
  };

  return (
    <Form method="post" ref={formRef}>
      <div className="inset-0 flex items-center justify-center gap-2">
        <LuSun
          size={20}
          className={cn(
            "pointer-events-none",
            sessionState.theme == "light" && "fill-foreground",
          )}
        />
        <Switch
          name="theme"
          checked={sessionState.theme == "dark"}
          onCheckedChange={(e) => handleThemeToggleSwitch(e)}
        />
        <LuMoon
          size={20}
          className={cn(
            "pointer-events-none",
            sessionState.theme == "dark" && "fill-foreground",
          )}
        />
      </div>
    </Form>
  );
};

export default ThemeToggle;
