import { LEAGUES } from "@/app/data/leagues";
import Link from "next/link";

export default function LeaguePage({ params }: { params: { league: string } }) {
  const leagueId = (params.league || "").toLowerCase();
  const league = LEAGUES.find((l) => l.id.toLowerCase() === leagueId);

  if (!league) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Liga no encontrada</h1>
        <p>
          Buscando: <b>{params.league}</b>
        </p>
        <p>IDs disponibles:</p>
        <ul>
          {LEAGUES.map((l) => (
            <li key={l.id}>
              <b>{l.id}</b> — {l.name}
            </li>
          ))}
        </ul>

        <p style={{ marginTop: 16 }}>
          Prueba: <a href="/league/nba">/league/nba</a>,{" "}
          <a href="/league/mlb">/league/mlb</a>,{" "}
          <a href="/league/nfl">/league/nfl</a>
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>{league.name}</h1>

      <div style={{ display: "grid", gap: "10px" }}>
        {league.teams.map((team) => {
          const slug = team.toLowerCase().trim().replace(/\s+/g, "-");

          return (
            <Link
              key={team}
              href={/team/${league.id}/${slug}}
              style={{
                padding: "12px",
                border: "1px solid #222",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              {team}
            </Link>
          );
        })}
      </div>
    </div>
  );
}