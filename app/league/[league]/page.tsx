import { LEAGUES } from "@/app/data/leagues"
import Link from "next/link"

export default function LeaguePage({ params }: any) {
  const league = LEAGUES.find((l) => l.id === params.league)

  if (!league) {
    return <div>Liga no encontrada</div>
  }

  return (
    <div className="page">
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        {league.name}
      </h1>

      <div style={{ display: "grid", gap: "10px" }}>
        {league.teams.map((team) => (
          <Link
            key={team}
            href={`/team/${league.id}/${team
              .toLowerCase()
              .replace(/ /g, "-")}`}
            style={{
              padding: "12px",
              border: "1px solid #222",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            {team}
          </Link>
        ))}
      </div>
    </div>
  )
}