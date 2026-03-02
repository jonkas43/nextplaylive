// app/page.tsx
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
            <div className="badge">CA</div>
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
            <div className="badge">MTY</div>
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

      {/* GRID: MAIN + SIDEBAR */}
      <div className="grid">
        <main className="mainCol">
          {/* ESTADÍSTICAS */}
          <section className="panel">
            <div className="panelTitle">Estadísticas</div>

            <div className="stat">
              <div className="statTop">
                <span>Posesión</span>
                <span className="statNums">54% · 46%</span>
              </div>
              <div className="bar">
                <div className="barFill" style={{ width: "54%" }} />
              </div>
            </div>

            <div className="statGrid">
              <div className="miniStat">
                <div className="miniLabel">Tiros (Total)</div>
                <div className="miniNums">11 · 7</div>
                <div className="bar sm">
                  <div className="barFill" style={{ width: "61%" }} />
                </div>
              </div>

              <div className="miniStat">
                <div className="miniLabel">Tiros a puerta</div>
                <div className="miniNums">5 · 2</div>
                <div className="bar sm">
                  <div className="barFill" style={{ width: "71%" }} />
                </div>
              </div>

              <div className="miniStat">
                <div className="miniLabel">Corners</div>
                <div className="miniNums">6 · 3</div>
                <div className="bar sm">
                  <div className="barFill" style={{ width: "67%" }} />
                </div>
              </div>

              <div className="miniStat">
                <div className="miniLabel">Faltas</div>
                <div className="miniNums">12 · 9</div>
                <div className="bar sm">
                  <div className="barFill" style={{ width: "57%" }} />
                </div>
              </div>
            </div>
          </section>

          {/* PARTIDOS EN VIVO (lista horizontal tipo maqueta) */}
          <section className="panel">
            <div className="panelTitle">En vivo ahora</div>

            <div className="liveRow">
              <div className="liveItem">
                <div className="liveBadge">LIVE</div>
                <div className="liveTeams">Barcelona vs PSG</div>
                <div className="liveSmall">Champions League</div>
              </div>

              <div className="liveItem">
                <div className="liveBadge">LIVE</div>
                <div className="liveTeams">Knicks vs Pacers</div>
                <div className="liveSmall">NBA Playoffs</div>
              </div>
            </div>
          </section>

          {/* PLAYER */}
          <section className="player">
            <div className="playerLeft">
              <div className="dot" />
              <div>
                <div className="playerTitle">Club América vs Monterrey</div>
                <div className="playerSub">Humano</div>
              </div>
            </div>

            <div className="playerRight">
              <span className="playerTime">0:35</span>
              <button className="playerBtn">▶</button>
            </div>

            <div className="seek">
              <div className="seekFill" />
            </div>
          </section>
        </main>

        <aside className="sideCol">
          {/* AUDIO */}
          <section className="panel">
            <div className="panelTitleRow">
              <span>Audio</span>
              <span className="pillLive">● LIVE</span>
            </div>

            <div className="toggle">
              <button className="toggleBtn toggleActive">Humano</button>
              <button className="toggleBtn">IA</button>
            </div>

            <div className="audioLine">
              <div className="headphone">🎧</div>
              <div>
                <div className="audioName">Radio Next Play</div>
                <div className="audioSub">Narrador real</div>
              </div>
            </div>

            <button className="cta">▶ Escuchar ahora</button>
          </section>

          {/* EVENTOS */}
          <section className="panel">
            <div className="panelTitleRow">
              <span>Eventos en vivo</span>
              <span className="dots">⋯</span>
            </div>

            <div className="events">
              <div className="event">
                <div className="eventIcon">⚽</div>
                <div>
                  <div className="eventTop">Gol 62’</div>
                  <div className="eventSub">Henry Martín</div>
                </div>
                <div className="eventTag">CA</div>
              </div>

              <div className="event">
                <div className="eventIcon">🟨</div>
                <div>
                  <div className="eventTop">Amarilla 58’</div>
                  <div className="eventSub">Eduardo Aguirre</div>
                </div>
                <div className="eventTag">MTY</div>
              </div>

              <div className="event">
                <div className="eventIcon">⚽</div>
                <div>
                  <div className="eventTop">Gol 44’</div>
                  <div className="eventSub">Berterame</div>
                </div>
                <div className="eventTag">MTY</div>
              </div>
            </div>

            <a className="more" href="/live">Ver todas →</a>
          </section>
        </aside>
      </div>
    </div>
  );
}