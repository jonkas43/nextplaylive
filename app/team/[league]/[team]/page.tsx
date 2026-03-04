import { LEAGUES } from "@/app/data/leagues"

function formatName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default function TeamPage({ params }: any) {
  const { league, team } = params

  const leagueData = LEAGUES.find((l) => l.id === league)

  if (!leagueData) {
    return <div>Liga no encontrada</div>
  }

  const teamName = formatName(team)

  return (
    <div className="page">

      <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
        {teamName}
      </h1>

      <div style={{ opacity: 0.7, marginBottom: "30px" }}>
        {leagueData.name}
      </div>

      <div className="card">
        <h2>Próximamente</h2>

        <ul style={{ marginTop: "10px" }}>
          <li>Últimos juegos</li>
          <li>Próximos partidos</li>
          <li>Roster del equipo</li>
          <li>Estadísticas</li>
          <li>Posición en la liga</li>
        </ul>
      </div>

    </div>
  )
}