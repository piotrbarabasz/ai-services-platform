import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HomePage } from "./routes/HomePage";
import { PrivacyPage } from "./routes/PrivacyPage";

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function App() {
  const path = normalizePath(window.location.pathname);
  const page = path === "/privacy" ? <PrivacyPage /> : <HomePage />;

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{page}</main>
      <Footer />
    </div>
  );
}
