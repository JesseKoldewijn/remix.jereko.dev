import { LoaderFunctionArgs, type MetaFunction, json } from "@remix-run/node";
import KeyboardButton from "~/components/ui/KeyboardButton";
import { commitSession, getSession } from "~/sessions.server";

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

export async function loader({ request }: LoaderFunctionArgs) {
  const reqUserAgent = request.headers.get("User-Agent");

  const toggleThemeHeader = !!request.headers.get("X-Toggle-Theme");

  if (!toggleThemeHeader) {
    return json({
      ua: reqUserAgent,
    });
  }

  const session = await getSession(request.headers.get("Cookie"));

  const data = {
    theme: session.data.theme == "light" ? "dark" : "light",
  } as const;

  session.set("theme", data.theme);

  const newSession = await commitSession(session);

  return json(
    {
      ...session.data,
    },
    {
      headers: {
        "Set-Cookie": newSession,
      },
    },
  );
}

const Index = () => {
  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center gap-4 px-2">
      <h1 className="text-2xl font-semibold">Welcome to Remix - Jereko</h1>
      <p className="max-w-md text-balance text-center md:text-pretty">
        This is a Remix.js app with some nice tech I love to use like Tailwind,
        TypeScript, and more.
      </p>
      <div className="flex max-w-md flex-col items-center gap-4 text-balance text-center md:text-pretty">
        <p>Please press the button below to inspect the page</p>
        <div className="flex gap-2">
          <KeyboardButton isLeadingKey />
          <KeyboardButton>Shift</KeyboardButton>
          <KeyboardButton>I</KeyboardButton>
        </div>
      </div>
    </div>
  );
};
export default Index;
