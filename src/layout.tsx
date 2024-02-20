import Navbar from "./components/layout/navbar/root";
import { SessionProvider } from "./providers/SessionProvider";
import { SessionData } from "./sessions.server";

// Visual structure of layout
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-app="remix-jereko">
      <Navbar />
      <main className="relative">{children}</main>
    </div>
  );
};

// Root layout wrapper
const RootLayout = ({
  session,
  children,
}: {
  session: SessionData;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Providers session={session}>
        <PageLayout>{children}</PageLayout>
      </Providers>
    </>
  );
};

// Providers wrapper
const Providers = ({
  session,
  children,
}: {
  session: SessionData;
  children: React.ReactNode;
}) => {
  return <SessionProvider initialSession={session}>{children}</SessionProvider>;
};

export default RootLayout;
