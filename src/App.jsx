// ─────────────────────────────────────────────
// EDIT THESE
// ─────────────────────────────────────────────
// When you have Abel's picture: put it in /public (e.g. /public/abel.jpg)
// and set PHOTO to "/abel.jpg". While it's empty, a framed gap shows instead.
const PHOTO = "";

const FROM = "Favour";
const DATE = "11 November 2026";
// ─────────────────────────────────────────────

const wrap = {
  width: "100%",
  maxWidth: 1080,
  margin: "0 auto",
  padding: "0 clamp(22px, 5vw, 48px)",
};

const display = {
  fontFamily: "var(--font-display)",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  lineHeight: 1.04,
};

function PhotoFrame() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "4 / 5",
        borderRadius: "999px 999px 14px 14px",
        border: "2px solid var(--brass)",
        padding: 10,
        justifySelf: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "999px 999px 6px 6px",
          background: "var(--petrol-deep)",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: 24,
        }}
      >
        {PHOTO ? (
          <img
            src={PHOTO}
            alt="Abel Awe"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "var(--lichen)",
              fontSize: 20,
              lineHeight: 1.4,
              maxWidth: 200,
            }}
          >
            Abel's picture goes here
          </p>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header
      style={{
        background: "var(--petrol)",
        padding: "clamp(48px, 10vw, 110px) 0 clamp(56px, 10vw, 120px)",
      }}
    >
      <div
        style={{
          ...wrap,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "clamp(36px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        <div className="settle">
          <p style={{ color: "var(--lichen)", fontSize: 17, marginBottom: 28 }}>
            Convocation day, {DATE}
          </p>
          <h1
            style={{
              ...display,
              fontSize: "clamp(46px, 9vw, 104px)",
              color: "var(--mist)",
            }}
          >
            Congratulations, Abel&nbsp;Awe.
          </h1>
          <p
            style={{
              marginTop: 32,
              maxWidth: 440,
              fontSize: 20,
              color: "var(--mist)",
              opacity: 0.88,
            }}
          >
            You graduated today. This little page is how I'm saying thank you.
          </p>
        </div>

        <div className="settle" style={{ animationDelay: "250ms", display: "grid" }}>
          <PhotoFrame />
        </div>
      </div>
    </header>
  );
}

function Letter() {
  const para = {
    fontFamily: "var(--font-display)",
    fontWeight: 300,
    fontSize: "clamp(21px, 2.6vw, 27px)",
    lineHeight: 1.6,
    color: "var(--ink)",
    maxWidth: 640,
  };

  return (
    <section
      style={{
        background: "var(--mist)",
        padding: "clamp(64px, 10vw, 120px) 0",
      }}
    >
      <div style={{ ...wrap, display: "grid", gap: "clamp(28px, 4vw, 44px)" }}>
        <h2
          style={{
            ...display,
            fontSize: "clamp(32px, 5vw, 54px)",
            color: "var(--petrol)",
            maxWidth: 620,
          }}
        >
          The first kind face I met in Ibadan.
        </h2>

        <p style={para}>
          When I came to the University of Ibadan, everything was new to me. At
          Abadina congregation, you were the first person I met, and the first
          person who was kind to me.
        </p>
        <p style={para}>
          You were cool. You were calm. You were welcoming without making a
          show of it, and I have not forgotten that.
        </p>
        <p style={para}>
          After a while, you left Ibadan for Lagos. We have missed you at
          Abadina congregation ever since.
        </p>
      </div>
    </section>
  );
}

function Journey() {
  const stops = [
    { place: "Ibadan", note: "Where I arrived, and where we met." },
    { place: "Abadina congregation", note: "Where you were kind to me first." },
    { place: "Lagos", note: "Where you are now, graduating." },
  ];

  return (
    <section
      style={{
        background: "var(--petrol-deep)",
        padding: "clamp(56px, 9vw, 100px) 0",
      }}
    >
      <div style={wrap}>
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(32px, 5vw, 56px)",
          }}
        >
          {stops.map((s) => (
            <li
              key={s.place}
              style={{
                borderTop: "2px solid var(--lichen)",
                paddingTop: 20,
              }}
            >
              <p
                style={{
                  ...display,
                  fontSize: 28,
                  color: "var(--mist)",
                  marginBottom: 8,
                }}
              >
                {s.place}
              </p>
              <p style={{ color: "var(--lichen)", fontSize: 17 }}>{s.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <footer
      style={{
        background: "var(--petrol)",
        padding: "clamp(72px, 11vw, 130px) 0 clamp(56px, 8vw, 90px)",
      }}
    >
      <div style={wrap}>
        <h2
          style={{
            ...display,
            fontSize: "clamp(38px, 7vw, 80px)",
            color: "var(--mist)",
            maxWidth: 820,
          }}
        >
          Thank you for being kind to me, Abel.
        </h2>

        <p
          style={{
            marginTop: 36,
            maxWidth: 560,
            fontSize: 21,
            color: "var(--mist)",
            opacity: 0.88,
          }}
        >
          Congratulations on your convocation. We are proud of you, and we
          miss you at Abadina congregation.
        </p>

        <p
          style={{
            marginTop: 48,
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 26,
            color: "var(--brass)",
          }}
        >
          {FROM}
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Letter />
      <Journey />
      <Closing />
    </main>
  );
}