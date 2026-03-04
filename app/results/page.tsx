export default function ResultsPage() {
  return (
    <div className="page resultsPage">

      <div className="resultsTop">
        <button className="iconBtn">←</button>
        <h1 className="resultsTitle">RESULTADOS</h1>
        <button className="iconBtn">📅</button>
      </div>

      <div className="sportsChips">
        <div className="chip chipActive">Fútbol</div>
        <div className="chip">NFL</div>
        <div className="chip">NBA</div>
        <div className="chip">MLB</div>
        <div className="chip">Tenis</div>
      </div>

      <div className="card">
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
      </div>

      <div className="card">
        <div className="scoreRow">
          <div className="team">
            <div className="badge">PUM</div>
            <div>
              <div className="teamName">Pumas</div>
              <div className="teamSub">Local</div>
            </div>
          </div>

          <div className="score">0 - 0</div>

          <div className="team teamRight">
            <div>
              <div className="teamName">Chivas</div>
              <div className="teamSub">Visitante</div>
            </div>
            <div className="badge">CHI</div>
          </div>
        </div>
      </div>

    </div>
  );
}