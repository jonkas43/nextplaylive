import Link from "next/link";

type Match = {
  id: string;
  homeCode: string;
  homeName: string;
  awayCode: string;
  awayName: string;
  homeScore: number;
  awayScore: number;
  status: string; // "Final", "EN VIVO 62'", etc.
};

const matches: Match[] = [
  {
    id: "america-monterrey",
    homeCode: "CA",
    homeName: "América",
    awayCode: "MTY",
    awayName: "Monterrey",
    homeScore: 2,
    awayScore: 1,
    status: "EN VIVO 62’",
  },
  {
    id: "pumas-chivas",
    homeCode: "PUM",
    homeName: "Pumas",
    awayCode: "CHI",
    awayName: "Chivas",
    homeScore: 0,
    awayScore: 0,
    status: "Final",
  },
];

export default function ResultsPage() {
  return (
    <div className="page resultsPage">
      {/* Top bar */}
      <div className="resultsTop">
        <Link href="/" className="iconBtn" aria-label="Volver a Home">
          ←
        </Link>

        <h1 className="resultsTitle">RESULTADOS</h1>

        <button className="iconBtn" aria-label="Calendario">
          📅
        </button>
      </div>

      {/* Chips */}
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

      {/* Matches */}
      {matches.map((m) => (
        <Link key={m.id} href={/match/${m.id}} className="card">
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
              <div className="badge">{m.homeCode}</div>
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
              <div className="badge">{m.awayCode}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}