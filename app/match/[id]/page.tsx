import Link from "next/link";

function BasketballCourt() {
  return (
    <svg className="courtSvg" viewBox="0 0 1000 520" preserveAspectRatio="none">
      {/* madera */}
      <defs>
        <linearGradient id="wood" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(200,150,90,.55)" />
          <stop offset="1" stopColor="rgba(150,110,70,.35)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1000" height="520" fill="url(#wood)" />
      {/* líneas */}
      <g stroke="rgba(255,255,255,.55)" strokeWidth="4" fill="none">
        <rect x="40" y="40" width="920" height="440" rx="14" />
        <line x1="500" y1="40" x2="500" y2="480" />
        <circle cx="500" cy="260" r="70" />

        {/* áreas */}
        <rect x="40" y="160" width="160" height="200" />
        <rect x="800" y="160" width="160" height="200" />

        {/* aro/semicírculos */}
        <circle cx="175" cy="260" r="60" />
        <circle cx="825" cy="260" r="60" />
      </g>

      {/* brillo */}
      <rect x="0" y="0" width="1000" height="520" fill="rgba(0,0,0,.20)" />
      <circle cx="820" cy="120" r="220" fill="rgba(80,180,255,.12)" />
      <circle cx="180" cy="120" r="220" fill="rgba(57,255,20,.10)" />
    </svg>
  );
}

const pbp = [
  { t: "6:48", main: "Moussa Diabaté encesta 1/2 TL — 33 - 40", sub: "Falta de tiro sobre Khris Middleton." },
  { t: "7:05", main: "Dallas pierde el balón", sub: "Robo de CHA en el perímetro." },
  { t: "7:22", main: "Triple de CHA — 33 - 39", sub: "Catch & shoot desde la esquina." },
];

export default function MatchPage({ params }: { params: { id: string } }) {
  return (
    <div className="page">
      {/* Header tipo SofaScore */}
      <div className="matchTop">
        <Link href="/results" className="backBtn" aria-label="Volver">
          ←
        </Link>

        <div className="matchHeader">
          <h1 className="matchHeaderTitle">PARTIDO</h1>
          <div className="matchHeaderMeta">NBA · 2Q · 6:48</div>
        </div>

        <button className="backBtn" type="button" aria-label="Alertas">
          🔔
        </button>
      </div>

      <div className="card">
        <div className="matchScoreBar">
          <div className="teamMini">
            <div className="teamLogo">DAL</div>
            <div className="teamMetaWrap">
              <div className="teamAbbr">DAL</div>
              <div className="teamRec">21-39</div>
            </div>
          </div>

          <div>
            <div className="clockMid">2Q · 6:48</div>
            <div className="scoreBig">33 — 40</div>
          </div>

          <div className="teamMini teamMiniRight">
            <div className="teamMetaWrap">
              <div className="teamAbbr">CHA</div>
              <div className="teamRec">30-31</div>
            </div>
            <div className="teamLogo">CHA</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="matchTabs" style={{ marginTop: 14 }}>
          <div className="matchTab matchTabActive">PARTIDO</div>
          <div className="matchTab">EST.</div>
          <div className="matchTab">JUGADAS</div>
        </div>
      </div>

      {/* Cancha */}
      <div className="card courtCard">
        <div className="court">
          <BasketballCourt />
        </div>
      </div>

      {/* Play by play */}
      <div className="sectionTitle" style={{ marginTop: 10 }}>
        Jugadas
      </div>

      <div className="playByPlay">
        {pbp.map((x, i) => (
          <div className="pbpRow" key={i}>
            <div className="pbpTime">{x.t}</div>
            <div>
              <div className="pbpText">{x.main}</div>
              <div className="pbpSub">{x.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ opacity: 0.55, marginTop: 12 }}>ID: {params.id}</div>
    </div>
  );
}