import { MetaFunction } from "@remix-run/node";
import { LuPlus, LuRefreshCcwDot } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { useSession } from "~/providers/SessionProvider";
import { useCoreStore } from "~/stores/core";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix - Jereko" },
    {
      name: "description",
      content:
        "Remix - Jereko | A very performant web-app which uses all sorts of cool technologies.",
    },
  ];
};

const About = () => {
  const { session } = useSession();
  const { persistant, session: sessionStore } = useCoreStore((store) => {
    const { persistant, session } = store;
    const { foo } = persistant ?? {
      foo: 0,
    };
    const { bar } = session ?? {
      bar: 0,
    };
    return {
      persistant: { foo },
      session: { bar },
    };
  });
  const incrementFoo = useCoreStore((store) => store.incrementFoo);
  const incrementBar = useCoreStore((store) => store.incrementBar);
  const resetStore = useCoreStore((store) => store.resetStore);

  const incrementBarAndFoo = () => {
    incrementFoo();
    incrementBar();
  };

  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center gap-8 px-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Welcome to Remix - Jereko</h1>
        <p className="max-w-md text-balance text-center md:text-pretty">
          This is a Remix.js app with some nice tech I love to use like
          Tailwind, TypeScript, and more.
        </p>
        <p className="max-w-md text-balance text-center md:text-pretty">
          Your theme is currently set to: {session.theme}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">Zustand State Machine</h2>
        <p className="max-w-md text-balance text-center md:text-pretty">
          In this app I use a combination of cookie based session and local idb
          based persistant state. Meaning parts of the user&apos;s session is
          stored inside a encrypted cookie and parts within their browser.
        </p>
        <div className="flex max-w-md flex-col gap-2">
          <span className="text-balance text-center md:text-pretty">
            Current persistant state value:
          </span>
          <pre className="bg-foreground/10 w-full rounded-xl p-2">
            {JSON.stringify(
              {
                persistant,
                session: sessionStore,
              },
              null,
              2,
            )}
          </pre>
          <div className="flex items-center gap-2">
            <Button
              onClick={incrementBarAndFoo}
              size="sm"
              variant="outline"
              className="border-foreground/50 w-1/2"
            >
              <LuPlus className="h-6 w-6" />
            </Button>
            <Button
              onClick={resetStore}
              size="sm"
              variant="outline"
              className="border-foreground/50 w-1/2"
            >
              <LuRefreshCcwDot className="h-6 w-6" />
              <span className="sr-only">Reset persistant store</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
