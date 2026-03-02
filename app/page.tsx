export default function Home() {
  return (
    <div className="container">
      <section className="hero card">
        <div className="kicker">
          <span className="dotLive" /> LIVE · Scores + Audio
        </div>

        <h1 className="h1">Next Play Live</h1>
        <p className="p">
          Scores en vivo con experiencia premium. Audio humano y narración IA (próximamente).
        </p>

        <div className="actions">
          <a className="btn btnPrimary" href="/live">Ver en vivo</a>
          <a className="btn btnGhost" href="/leagues">Ligas</a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3 className="h3">🔥 Partido destacado</h3>
          <p className="muted">América vs Monterrey · <span className="livePill">LIVE</span></p>
          <div className="scoreRow">
            <div className="score">2 - 1</div>
            <a className="btn btnSmall" href="/live">Abrir</a>
          </div>
        </div>

        <div className="card">
          <h3 className="h3">🎧 Audio</h3>
          <p className="muted">Player integrado (humano / IA)</p>
          <a className="btn btnGhost btnSmall" href="/live">Ver cómo se ve</a>
        </div>

        <div className="card">
          <h3 className="h3">⚡ Experiencia</h3>
          <p className="muted">Minimal + toque gaming, rápido y claro</p>
          <a className="btn btnGhost btnSmall" href="/leagues">Explorar</a>
        </div>
      </section>
    </div>
  );
}