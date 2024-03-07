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
import PwaIcons from "./meta/pwa-icons";
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
        <PwaIcons />

        {process.env.NODE_ENV !== "development" && (
          <>
            <link rel="manifest" href="manifest.webmanifest" />
            <script
              async
              defer
              dangerouslySetInnerHTML={{
                __html: `
              if('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                })
              }
            `,
              }}
            />
          </>
        )}

        <Meta />
        <Links />
      </head>
      <body className="!transition-colors !duration-300 !ease-linear">
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
