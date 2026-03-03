import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Play Live",
  description: "Scores en vivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="topbarInner">
            <img className="logo" src="/logo.png" alt="Next Play Live" />

            {/* Toggle */}
            <input id="menuToggle" className="menuToggle" type="checkbox" />
            <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú">
              <span />
              <span />
              <span />
            </label>

            {/* Nav desktop */}
            <nav className="nav navDesktop">
              <Link href="/">Home</Link>
              <Link href="/live">En vivo</Link>
              <Link href="/leagues">Ligas</Link>
              <Link href="/login">Login</Link>
            </nav>

            {/* Drawer mobile */}
            <div className="mobileMenu">
              <nav className="navMobile">
                <Link href="/">Home</Link>
                <Link href="/live">En vivo</Link>
                <Link href="/leagues">Ligas</Link>
                <Link href="/login">Login</Link>
              </nav>
            </div>

            {/* Overlay */}
            <label htmlFor="menuToggle" className="menuOverlay" aria-label="Cerrar menú" />
          </div>
        </header>

        {/* Contenido (deja espacio para tabbar) */}
        <main className="appMain">{children}</main>

        {/* Tab bar fijo */}
        <nav className="tabbar">
          <Link className="tabItem" href="/">Resumen</Link>
          <Link className="tabItem" href="/live">En vivo</Link>
          <Link className="tabItem" href="/leagues">Ligas</Link>
          <Link className="tabItem" href="/login">Perfil</Link>
        </nav>
      </body>
    </html>
  );
}