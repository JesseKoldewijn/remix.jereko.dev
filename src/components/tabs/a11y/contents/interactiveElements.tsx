const InteractiveElements = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold">Interactive Elements</h2>
      <p className="max-w-md text-balance text-center md:text-pretty">
        When building interactive elements, make sure to use the correct tags
        for them. If this is not possible for whatever reason, make sure to use
        the aria attributes to mark them appropriately.
      </p>
      <div className="flex max-w-md flex-col items-center justify-center gap-4">
        <h3 className="text-2xl font-semibold">Examples</h3>
        <p className="max-w-md text-balance text-center md:text-pretty">
          Below are some examples of interactive elements and how to mark them
          appropriately. And also some examples of how not to do it.
        </p>
        <div className="flex max-w-[75vw] flex-col items-center justify-center gap-2 md:max-w-md lg:max-w-lg">
          <span className="text-lg font-medium">Good</span>
          <p className="max-w-md text-balance text-center md:text-pretty">
            {`The following examples are good because they use the correct role
              for the interactive element. They also use the correct tag.
              Sidenote, you can use the `}
            <span className="font-mono">{"<Link/>"}</span>
            {` example
              interchangeable with an `}
            <span className="font-mono">{"<a/>"}</span>
            {` tag.`}
          </p>
          <code className="flex w-full flex-col overflow-auto text-wrap rounded-md bg-foreground/10 p-2">
            <span>{'<Link role="navigation" href="/some-url">'}</span>
            <span className="pl-4">{"..."}</span>
            <span className="pl-4">{'<span className="sr-only">'}</span>
            <span className="pl-8"> {"Click me to go to the next page"}</span>
            <span className="pl-4">{"</span>"}</span>
            <span>{"</Link>"}</span>
          </code>
          <code className="flex w-full flex-col overflow-auto text-wrap rounded-md bg-foreground/10 p-2">
            <span>{'<Button role="navigation" onClick={callback}>'}</span>
            <span className="pl-4">{"..."}</span>
            <span className="pl-4">{'<span className="sr-only">'}</span>
            <span className="pl-8"> {"Click me to go to do something"}</span>
            <span className="pl-4">{"</span>"}</span>
            <span>{"</Link>"}</span>
          </code>
        </div>
        <div className="flex max-w-[75vw] flex-col items-center justify-center gap-2 md:max-w-md lg:max-w-lg">
          <span className="text-lg font-medium">Bad</span>
          <code className="flex w-full overflow-auto text-nowrap rounded-md bg-foreground/10 p-2">
            {`<a href="#" onClick={callback}>...</a>`}
          </code>
          <code className="flex w-full overflow-auto text-nowrap rounded-md bg-foreground/10 p-2">
            {`<div onClick={callback}>...</div>`}
          </code>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;
