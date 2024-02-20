import { createCookieSessionStorage } from "@remix-run/node";

import { Theme } from "./providers/SessionProvider";

export type SessionData = {
  theme?: Theme;
};

export type SessionFlashData = {
  error: string;
};

const sessionSecret = process.env.REMIX_SESSION_SECRET;

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "strict",
      secrets: sessionSecret ? [sessionSecret] : undefined,
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
