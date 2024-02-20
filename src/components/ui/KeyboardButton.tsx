import React, { memo, useEffect, useState } from "react";
import { type OS, RecognizedBrowser } from "sniffr";
import { cn } from "~/lib/cn";

type KeyboardButtonProps = {
  isLeadingKey?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const KeyboardButton = ({
  isLeadingKey = false,
  className,
  children,
  ...rest
}: KeyboardButtonProps) => {
  const [operatingSystem, setOperatingSystem] = useState<
    OS | "Unknown" | undefined
  >();

  const DisplayLeadingKeyByOS = memo(
    ({ os }: { os: OS | "Unknown" }) => {
      switch (os) {
        case "macos":
        case "ios":
          return (
            <code className="pointer-events-none mt-1 flex items-center justify-center text-center">
              ⌘
            </code>
          );
        default:
          return <code className="pointer-events-none">Ctrl</code>;
      }
    },
    (prev, next) => prev.os === next.os,
  );
  DisplayLeadingKeyByOS.displayName = "DisplayLeadingKeyByOS";

  useEffect(() => {
    const os = RecognizedBrowser.os;
    setOperatingSystem((prev) => {
      if (prev !== os.name) {
        return os.name as OS;
      } else {
        return prev;
      }
    });
  }, [isLeadingKey]);

  if (isLeadingKey && !operatingSystem) {
    return (
      <kbd
        className={cn(
          className,
          "min-w-14 animate-pulse cursor-default select-none rounded-md border-2 border-neutral-700/50 bg-foreground px-4 py-1 text-background hover:border-neutral-700/70",
        )}
        {...rest}
      >
        <span className="pointer-events-none mt-1 flex items-center justify-center text-center text-transparent">
          C
        </span>
      </kbd>
    );
  }

  return (
    <kbd
      className={cn(
        className,
        "flex cursor-default select-none items-center justify-center rounded-md border-2 border-neutral-700/50 bg-foreground px-4 py-1 text-center text-background hover:border-neutral-700/70",
      )}
      {...rest}
    >
      {!isLeadingKey ? (
        children
      ) : (
        <DisplayLeadingKeyByOS os={operatingSystem ?? "Unknown"} />
      )}
    </kbd>
  );
};

export default KeyboardButton;
