import "./globals.css";

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

            {/* Toggle invisible para menú mobile */}
            <input id="menuToggle" className="menuToggle" type="checkbox" />

            {/* Botón hamburguesa */}
            <label
              htmlFor="menuToggle"
              className="hamburger"
              aria-label="Abrir menú"
            >
              <span />
              <span />
              <span />
            </label>

            {/* Menú */}
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/live">En vivo</a>
              <a href="/leagues">Ligas</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}