import { type MetaFunction } from "@remix-run/node";
import A11YTabs from "~/components/tabs/a11y/root";

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

const A11Y = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-start gap-8 px-4 pb-20 pt-48">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Accessibility</h1>
        <p className="max-w-md text-balance text-center md:text-pretty">
          Things you sshould consider when building anything on the web.
        </p>

        <div className="relative flex flex-col">
          <A11YTabs />
        </div>
      </div>
    </div>
  );
};
export default A11Y;
