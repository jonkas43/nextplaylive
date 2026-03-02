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
            <div className="brand">
              <a href="/">
                <img src="/logo.png" alt="Next Play Live" />
              </a>
            </div>

            <nav className="nav">
              <a href="/">Home</a>
              <a href="/live">En vivo</a>
              <a href="/leagues">Ligas</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
