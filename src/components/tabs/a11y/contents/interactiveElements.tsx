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
        <div className="flex flex-col items-center justify-center gap-2">
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
          <code className="max-w-[75vw] overflow-auto text-nowrap rounded-md bg-foreground/10 p-2 md:max-w-md lg:max-w-lg">
            {`<Link role="navigation" href="/some-url">...</Link>`}
          </code>
          <code className="max-w-[75vw] overflow-auto text-nowrap rounded-md bg-foreground/10 p-2 md:max-w-md lg:max-w-lg">
            {`<button role="navigation" onClick={callback}>...</button>`}
          </code>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-lg font-medium">Bad</span>
          <code className="max-w-[75vw] overflow-auto text-nowrap rounded-md bg-foreground/10 p-2 md:max-w-md lg:max-w-lg">
            {`<a href="#" onClick={callback}>...</a>`}
          </code>
          <code className="max-w-[75vw] overflow-auto text-nowrap rounded-md bg-foreground/10 p-2 md:max-w-md lg:max-w-lg">
            {`<div onClick={callback}>...</div>`}
          </code>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;
