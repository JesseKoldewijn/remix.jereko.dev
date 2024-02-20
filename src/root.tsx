import { cssBundleHref } from "@remix-run/css-bundle";
import { type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import "~/styles/tailwind.css";

import RootLayout from "./layout";
import { commitSession, getSession } from "./sessions.server";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const data = {
    theme: session.data.theme == "light" ? "light" : "dark",
  } as const;
  session.set("theme", data.theme);

  const newSession = await commitSession(session);

  return json(
    {
      session: session,
    },
    {
      headers: {
        "Set-Cookie": newSession,
      },
    },
  );
}

export const action = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  return json({
    session: await commitSession(session),
  });
};

const App = () => {
  const { session } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className={session.data.theme ?? "dark"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="48x48"></link>
        <link
          rel="icon"
          href="/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
        <Meta />
        <Links />
      </head>
      <body>
        <RootLayout session={session.data}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </RootLayout>
      </body>
    </html>
  );
};
export default App;
