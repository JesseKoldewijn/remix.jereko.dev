import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/sessions.server";

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
  const session = await getSession(request.headers.get("Cookie"));

  return json({
    ...session.data,
  });
}

const About = () => {
  const session = useLoaderData<typeof loader>();

  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center gap-4 px-2">
      <h1 className="text-2xl font-semibold">Welcome to Remix - Jereko</h1>
      <p className="max-w-md text-balance text-center md:text-pretty">
        This is a Remix.js app with some nice tech I love to use like Tailwind,
        TypeScript, and more.
      </p>
      <p className="max-w-md text-balance text-center md:text-pretty">
        Your theme is currently set to: {session.theme}
      </p>
    </div>
  );
};

export default About;
