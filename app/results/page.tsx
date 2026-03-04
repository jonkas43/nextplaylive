import Image from "next/image";
import Link from "next/link";
import { getTeamLogoUrl } from "@/app/lib/logos";

type Match = {
  id: string;
  homeCode: string;
  homeName: string;
  awayCode: string;
  awayName: string;
  homeScore: number;
  awayScore: number;
  status: string;

  // 👇 clave para soccer logos (usa el map en logos.ts)
  homeLogoKey?: string;
  awayLogoKey?: string;

  // 👇 para futuro: nba / nfl / mlb / soccer
  sport?: "soccer" | "nba" | "nfl" | "mlb";
};

const matches: Match[] = [
  {
    id: "america-monterrey",
    sport: "soccer",
    homeCode: "CA",
    homeName: "América",
    homeLogoKey: "america",
    awayCode: "MTY",
    awayName: "Monterrey",
    awayLogoKey: "monterrey",
    homeScore: 2,
    awayScore: 1,
    status: "EN VIVO 62’",
  },
  {
    id: "pumas-chivas",
    sport: "soccer",
    homeCode: "PUM",
    homeName: "Pumas",
    homeLogoKey: "pumas", // hoy no existe en el map → caerá al badge
    awayCode: "CHI",
    awayName: "Chivas",
    awayLogoKey: "chivas", // hoy no existe en el map → caerá al badge
    homeScore: 0,
    awayScore: 0,
    status: "Final",
  },
];

function TeamBadgeOrLogo({
  sport,
  logoKey,
  fallback,
}: {
  sport: "soccer" | "nba" | "nfl" | "mlb";
  logoKey?: string;
  fallback: string;
}) {
  const src = logoKey ? getTeamLogoUrl(sport, logoKey) : null;

  if (!src) return <div className="badge">{fallback}</div>;

  return (
    <Image
      src={src}
      alt={fallback}
      width={38}
      height={38}
      className="teamLogoImg"
    />
  );
}

export default function ResultsPage() {
  return (
    <div className="page resultsPage">
      <div className="resultsTop">
        <Link href="/" className="iconBtn" aria-label="Volver a Home">
          ←
        </Link>

        <h1 className="resultsTitle">RESULTADOS</h1>

        <button className="iconBtn" aria-label="Calendario" type="button">
          📅
        </button>
      </div>

      <div className="sportsChips">
        <button className="chip chipActive" type="button">
          Fútbol
        </button>
        <button className="chip" type="button">
          NFL
        </button>
        <button className="chip" type="button">
          NBA
        </button>
        <button className="chip" type="button">
          MLB
        </button>
        <button className="chip" type="button">
          Tenis
        </button>
      </div>

      {matches.map((m) => (
        <Link key={m.id} href={"/match/" + m.id} className="card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 10,
              opacity: 0.9,
              fontSize: 12,
            }}
          >
            <span style={{ letterSpacing: 0.6, fontWeight: 800 }}>{m.status}</span>
            <span style={{ opacity: 0.75 }}>Liga MX</span>
          </div>

          <div className="scoreRow">
            <div className="team">
              <TeamBadgeOrLogo
                sport={m.sport || "soccer"}
                logoKey={m.homeLogoKey}
                fallback={m.homeCode}
              />
              <div>
                <div className="teamName">{m.homeName}</div>
                <div className="teamSub">Local</div>
              </div>
            </div>

            <div className="score">
              {m.homeScore} - {m.awayScore}
            </div>

            <div className="team teamRight">
              <div>
                <div className="teamName">{m.awayName}</div>
                <div className="teamSub">Visitante</div>
              </div>
              <TeamBadgeOrLogo
                sport={m.sport || "soccer"}
                logoKey={m.awayLogoKey}
                fallback={m.awayCode}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}