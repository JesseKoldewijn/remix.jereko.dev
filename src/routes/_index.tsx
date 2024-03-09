import { LoaderFunctionArgs, type MetaFunction, json } from "@remix-run/node";
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
        This is a Remix.js app with TailwindCSS, RadixUI, Typescript and some
        other tech.
      </p>
    </div>
  );
};
export default Index;
