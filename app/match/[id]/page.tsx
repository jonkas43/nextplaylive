export default function MatchPage({ params }: { params: { id: string } }) {
  return (
    <div className="page">
      <div className="heroCard">
        <div className="heroTop">
          <div className="chipLive">EN VIVO</div>
          <div className="heroMeta">Liga MX · Jornada 7</div>
          <div className="heroTime">Segundo tiempo · 62:14</div>
        </div>

        <div className="scoreRow">
          <div className="team">
            <div className="badge">CA</div>
            <div>
              <div className="teamName">América</div>
              <div className="teamSub">Local</div>
            </div>
          </div>

          <div className="score">2 - 1</div>

          <div className="team teamRight">
            <div>
              <div className="teamName">Monterrey</div>
              <div className="teamSub">Visitante</div>
            </div>
            <div className="badge">MTY</div>
          </div>
        </div>

        <div className="tabs">
          <div className="tab tabActive">Resumen</div>
          <div className="tab">Estadísticas</div>
          <div className="tab">Alineaciones</div>
          <div className="tab">Eventos</div>
          <div className="tab">Tabla</div>
        </div>
      </div>

      <div className="grid">
        <div className="stack">
          <div className="sectionTitle">Narración en vivo</div>

          <div className="card">62' Gol de América. Disparo cruzado.</div>
          <div className="card">58' Cambio: entra X, sale Y.</div>
          <div className="card">51' Tarjeta amarilla.</div>
        </div>

        <div className="rail">
          <div className="card">
            <div className="cardTitleRow">
              <div className="cardTitle">Stats rápidas</div>
            </div>
            <div>Posesión: 54% - 46%</div>
            <div>Tiros: 11 - 7</div>
            <div>A puerta: 5 - 2</div>
          </div>
        </div>
      </div>

      <div style={{ opacity: 0.6, marginTop: 12 }}>ID: {params.id}</div>
    </div>
  );
}