export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* HERO */}
      <div className="card" style={{ padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div>
            <div className="pill">
              <span className="dotLive" />
              <span style={{ fontWeight: 900, letterSpacing: 0.8 }}>LIVE</span>
              <span>·</span>
              <span>Scores + Audio</span>
            </div>

            <h1 style={{ margin: "12px 0 0 0", fontSize: 34, fontWeight: 950, letterSpacing: 0.3 }}>
              Next Play Live
            </h1>
            <p style={{ margin: "10px 0 0 0", color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>
              Scores en vivo con experiencia premium. Audio humano y narración IA (próximamente).
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a className="btn btnPrimary" href="/live">Ver En vivo</a>
            <a className="btn" href="/leagues">Ligas</a>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="grid3">
        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 900, fontSize: 14 }}>🔥 Partido destacado</div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
            América vs Monterrey · LIVE
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 26, fontWeight: 950 }}>
              2 <span style={{ color: "var(--muted)" }}>–</span> 1
            </div>
            <a className="btn btnPrimary" href="/match/ame-mty">Abrir</a>
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 900, fontSize: 14 }}>🎙️ Audio</div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
            Player integrado (humano / IA)
          </div>
          <div style={{ marginTop: 12 }}>
            <a className="btn" href="/match/ame-mty">Ver cómo se ve</a>
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 900, fontSize: 14 }}>⚡ Experiencia</div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
            Minimal + toque gaming, rápido y claro
          </div>
          <div style={{ marginTop: 12 }}>
            <a className="btn" href="/live">Explorar</a>
          </div>
        </div>
      </div>

      {/* SECTION */}
      <div className="card" style={{ padding: 18 }}>
        <div style={{ fontWeight: 950, fontSize: 16 }}>Hoy</div>
        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          <Row league="NBA" left="LAL" right="GSW" time="20:00" />
          <Row league="Liga MX" left="AME" right="MTY" time="LIVE" live />
          <Row league="UCL" left="RMA" right="MCI" time="18:45" />
        </div>
      </div>
    </div>
  );
}

function Row({
  league,
  left,
  right,
  time,
  live,
}: {
  league: string;
  left: string;
  right: string;
  time: string;
  live?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 12px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontWeight: 900, fontSize: 13 }}>{league}</div>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          {left} <span style={{ color: "var(--muted)" }}>vs</span> {right}
        </div>
      </div>

      <div className="pill" style={{ marginLeft: "auto" }}>
        {live ? <span className="dotLive" /> : null}
        <span style={{ fontWeight: 900 }}>{time}</span>
      </div>
    </div>
  );
}