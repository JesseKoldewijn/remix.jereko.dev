const InteractiveElements = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold">Clickable Elements</h2>
      <p className="max-w-md text-balance text-center md:text-pretty">
        When building clickable elements, it is very important to add a
        description within them that explains what happens when the end-user
        clicks on the element. This is important for screen readers and other
        Accessibility tools.
      </p>
      <div className="flex max-w-md flex-col items-center justify-center gap-4">
        <h3 className="text-2xl font-semibold">Examples</h3>
        <p className="max-w-md text-balance text-center md:text-pretty">
          Below are some examples of clickable elements and how to mark them
          appropriately with descriptions.
        </p>
        <div className="flex max-w-[75vw] flex-col items-center justify-center gap-2 md:max-w-md lg:max-w-lg">
          <span className="text-lg font-medium">Good</span>
          <p className="max-w-md text-balance text-center md:text-pretty">
            The following examples are good examples of clickable elements.
            Sidenote, the example uses the sr-only class from TailwindCSS to
            hide the description from the visual user interface.
          </p>
          <code className="flex w-full flex-col overflow-auto text-wrap rounded-md bg-foreground/10 p-2">
            <span>{'<Link role="navigation" href="/some-url">'}</span>
            <span className="pl-4">{"<SomeIconComponent />"}</span>
            <span className="pl-4">{'<span className="sr-only">'}</span>
            <span className="pl-8"> {"Click me to go to the next page"}</span>
            <span className="pl-4">{"</span>"}</span>
            <span>{"</Link>"}</span>
          </code>
          <code className="flex w-full flex-col overflow-auto text-wrap rounded-md bg-foreground/10 p-2">
            <span>{'<Button role="button">'}</span>
            <span className="pl-4">{"<SomeIconComponent />"}</span>
            <span className="pl-4">{'<span className="sr-only">'}</span>
            <span className="pl-8"> {"Click me to go to do something"}</span>
            <span className="pl-4">{"</span>"}</span>
            <span>{"</Link>"}</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;
