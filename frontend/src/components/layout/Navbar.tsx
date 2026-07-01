export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="/">
          AI Services Platform
        </a>
        <div className="nav-links">
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/#faq">FAQ</a>
          <a href="/privacy">Privacy</a>
          <a className="nav-cta" href="/#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
