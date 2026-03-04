// app/page.tsx
import Image from "next/image";
import { getTeamLogoUrl } from "@/app/lib/logos";
import { getTeamLogo } from "@/lib/teamLogos";

function TeamLogo({
  sport,
  codeOrName,
  fallback,
}: {
  sport: "soccer" | "nba" | "nfl" | "mlb";
  codeOrName: string;
  fallback: string;
}) {
  // 1) Intento principal (tu sistema actual)
  const primary = getTeamLogoUrl(sport, codeOrName);

  // 2) Fallback (nuestro sistema definitivo por mapping)
  // OJO: getTeamLogo suele devolver "/team-placeholder.png" si no encuentra
  const mapped = getTeamLogo(codeOrName);

  // Decide src final:
  // - Si primary existe, úsalo
  // - Si no, usa mapped SOLO si no es el placeholder
  const src =
    primary || (mapped && mapped !== "/team-placeholder.png" ? mapped : "");

  // si no hay url válida, cae al badge
  if (!src) return <div className="badge">{fallback}</div>;

  // ✅ Soccer: usar <img> (evita que Next/Image lo “rompa” con SVG remotos)
  if (sport === "soccer") {
    return (
      <img
        src={src}
        alt={fallback}
        width={46}
        height={46}
        className="teamLogoImg"
        style={{ objectFit: "contain" }}
      />
    );
  }

  // NBA/NFL/MLB: next/image OK
  return (
    <Image
      src={src}
      alt={fallback}
      width={46}
      height={46}
      className="teamLogoImg"
      priority
    />
  );
}

export default function HomePage() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="heroCard">
        <div className="heroTop">
          <div className="chipLive">LIVE AHORA</div>
          <div className="heroMeta">Liga MX · Jornada 7</div>
          <div className="heroTime">Segundo tiempo · 62:14</div>
        </div>

        <div className="scoreRow">
          <div className="team">
            <TeamLogo sport="soccer" codeOrName="Club América" fallback="CA" />
            <div>
              <div className="teamName">Club América</div>
              <div className="teamSub">Local</div>
            </div>
          </div>

          <div className="score">2 - 1</div>

          <div className="team teamRight">
            <div>
              <div className="teamName">Monterrey</div>
              <div className="teamSub">Visitante</div>
            </div>
            <TeamLogo sport="soccer" codeOrName="Monterrey" fallback="MTY" />
          </div>
        </div>

        <div className="tabs">
          <button className="tab">Resumen</button>
          <button className="tab tabActive">Estadísticas</button>
          <button className="tab">Alineaciones</button>
          <button className="tab">Eventos</button>
          <button className="tab">Tabla</button>
        </div>
      </section>

      {/* BODY GRID */}
      <section className="grid">
        {/* LEFT */}
        <div className="stack">
          <div className="sectionTitle">Estadísticas</div>

          <div className="statsGrid">
            <div className="statCard">
              <div className="statLabelRow">
                <div className="statLabel">Posesión</div>
                <div className="statNums">
                  <span>54%</span>
                  <span className="muted"> · </span>
                  <span>46%</span>
                </div>
              </div>
              <div className="bar">
                <div className="barFill" style={{ width: "54%" }} />
              </div>
            </div>

            <div className="statCard">
              <div className="statLabelRow">
                <div className="statLabel">Tiros (Total)</div>
                <div className="statNums">
                  <span>11</span>
                  <span className="muted"> · </span>
                  <span>7</span>
                </div>
              </div>
              <div className="bar">
                <div className="barFill" style={{ width: "61%" }} />
              </div>
            </div>

            <div className="statCard">
              <div className="statLabelRow">
                <div className="statLabel">Tiros a puerta</div>
                <div className="statNums">
                  <span>5</span>
                  <span className="muted"> · </span>
                  <span>2</span>
                </div>
              </div>
              <div className="bar">
                <div className="barFill" style={{ width: "71%" }} />
              </div>
            </div>

            <div className="statCard">
              <div className="statLabelRow">
                <div className="statLabel">Corners</div>
                <div className="statNums">
                  <span>6</span>
                  <span className="muted"> · </span>
                  <span>3</span>
                </div>
              </div>
              <div className="bar">
                <div className="barFill" style={{ width: "67%" }} />
              </div>
            </div>

            <div className="statCard">
              <div className="statLabelRow">
                <div className="statLabel">Faltas</div>
                <div className="statNums">
                  <span>12</span>
                  <span className="muted"> · </span>
                  <span>9</span>
                </div>
              </div>
              <div className="bar">
                <div className="barFill" style={{ width: "57%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="rail">
          <div className="card">
            <div className="cardTitleRow">
              <div className="cardTitle">Audio</div>
              <div className="liveDot">LIVE</div>
            </div>

            <div className="pillRow">
              <button className="pill pillActive">Humano</button>
              <button className="pill">IA</button>
            </div>

            <div className="cardSub">Radio Next Play · Narrador real</div>

            <button className="cta">▶️ Escuchar ahora</button>
          </div>

          <div className="card">
            <div className="cardTitleRow">
              <div className="cardTitle">Eventos en vivo</div>
            </div>

            <div className="event">
              <div className="eventLeft">
                <div className="eventTag">Gol 62’</div>
                <div className="eventName">Henry Martin</div>
              </div>
              <div className="eventIcon">⚽</div>
            </div>

            <div className="event">
              <div className="eventLeft">
                <div className="eventTag">Amarilla 58’</div>
                <div className="eventName">Eduardo Aguirre</div>
              </div>
              <div className="eventIcon">🟨</div>
            </div>

            <div className="event">
              <div className="eventLeft">
                <div className="eventTag">Gol 44’</div>
                <div className="eventName">Berterame</div>
              </div>
              <div className="eventIcon">⚽</div>
            </div>

            <a className="linkMore" href="#">
              Ver todas →
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}