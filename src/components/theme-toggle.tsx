import { Form, useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useSession } from "~/providers/SessionProvider";
import { loader } from "~/root";

const ThemeToggle = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { session } = useLoaderData<typeof loader>();

  const { session: sessionState, setSession } = useSession();

  useEffect(() => {
    if (session.data.theme === sessionState.theme) return;
    setSession(session.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.data]);

  const handleThemeToggle = async (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();

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
      },
    });

    if (!res.ok) return;
    const data = await res.json();
    setSession(data);
  };

  return (
    <Form method="post" ref={formRef}>
      <button
        type="button"
        className="rounded-full border border-foreground p-2"
        onClick={(e) => handleThemeToggle(e)}
      >
        {sessionState.theme === "light" ? (
          <LuMoon size={20} className="pointer-events-none" />
        ) : (
          <LuSun size={20} className="pointer-events-none" />
        )}
      </button>
    </Form>
  );
};

export default ThemeToggle;
