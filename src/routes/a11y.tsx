import { type MetaFunction } from "@remix-run/node";

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
    <div className="hue fixed inset-0 flex h-full w-full flex-col items-center justify-center gap-8 px-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Accessibility</h1>
        <p className="max-w-md text-balance text-center md:text-pretty">
          Things you sshould consider when building anything on the web.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Interactive Elements</h1>
        <p className="max-w-md text-balance text-center md:text-pretty">
          When building interactive elements, make sure to use the correct tags
          for them. If this is not possible for whatever reason, make sure to
          use the aria attributes to mark them appropriately.
        </p>
        <code className="max-w-md overflow-auto rounded-md bg-foreground/10 p-2">
          {`<button onClick={callback}>...</button>`}
        </code>
      </div>
    </div>
  );
};
export default A11Y;
