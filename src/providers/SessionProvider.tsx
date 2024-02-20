import { createContext, useContext, useEffect, useState } from "react";
import { SessionData } from "~/sessions.server";

export type Theme = "light" | "dark";

export type Session = SessionData;

type SessionContextType = {
  session?: Session;
  setSession?: (session: Session) => void;
};

export const SessionContext = createContext<SessionContextType>({});

type SessionProviderProps = {
  initialSession?: Session;
  children: React.ReactNode;
};

export const SessionProvider = ({
  initialSession,
  children,
}: SessionProviderProps) => {
  const [session, setSession] = useState<Session | undefined>(initialSession);

  const handleThemeChange = () => {
    const currentSessionState = session;

    if (!currentSessionState) return;

    const htmlRoot = document.querySelector("html");
    if (!htmlRoot) return;

    const currentThemeValue = htmlRoot.classList.contains("dark")
      ? "dark"
      : ("light" as Theme);

    if (currentSessionState.theme === currentThemeValue) return;

    const newTheme = currentThemeValue === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      htmlRoot.classList.add("dark");
      htmlRoot.classList.remove("light");
    } else {
      htmlRoot.classList.add("light");
      htmlRoot.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const val = {
    session,
    setSession,
  };

  return (
    <SessionContext.Provider value={val}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const { session, setSession } = useContext(SessionContext);

  if (!session || !setSession) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return {
    session,
    setSession,
  };
};

export const useTheme = () => {
  const { session, setSession } = useContext(SessionContext);

  if (!session || !setSession) {
    throw new Error("useTheme must be used within a SessionProvider");
  }

  return { theme: session.theme };
};
