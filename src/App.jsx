import abelPhoto from "./assets/abel.jpg";

// ─────────────────────────────────────────────
// EDIT THESE
// ─────────────────────────────────────────────
// Photo lives in src/assets/abel.jpg (imported above).
// Set PHOTO to "" to show the empty frame instead.
const PHOTO = abelPhoto;

const FROM = "Favour";
const DATE = "11 November 2026";

// The letter, in your own words. Each string is one paragraph.
const LETTER = [
  "When I first came to the University of Ibadan, everything was new to me. I was still finding my feet, getting used to a new environment and trying to settle into the congregation. At Abadina Congregation, you were the third person I met, but you were the first person who made me feel genuinely welcomed through your kindness.",
  "What stood out to me was how naturally kind you were. You were cool, calm and approachable. You didn’t have to do anything extraordinary or make a big show of welcoming me; your simple gestures and the way you related with me made a lasting impression.",
  "Over time, I came to appreciate you even more, not just for your kindness but also for the kind of person you are. Your humility, calmness and the way you carry yourself are things I have come to admire.",
  "When you left for Lagos because of work, it wasn’t the same at Abadina Congregation. Your absence was felt, and honestly, we still miss having you around.",
  "I also want you to know that the talk you gave at Abadina Congregation remains one of the best talks I have ever listened to. It was one of those talks that stays with you long after it has been given. I still remember how much it meant to me, and I genuinely appreciate the effort and thought you put into it.",
];

const CLOSING = [
  "And congratulations on your convocation! It’s wonderful to see you reach this milestone. I pray that Jehovah continues to bless your efforts, guide your steps and help you achieve even greater things in the years ahead.",
  "Sometimes, people come into our lives without even realising the impact they make. You are one of those people for me. I’m grateful that I got to meet you, and I hope you know that your kindness and the memories you’ve left behind are truly appreciated.",
];
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

// The picture fills the whole arch edge to edge. No border, no padding.
function PhotoFrame() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        aspectRatio: "4 / 5",
        borderRadius: "999px 999px 16px 16px",
        background: "var(--petrol-deep)",
        overflow: "hidden",
        justifySelf: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      {PHOTO ? (
        <img
          src={PHOTO}
          alt="Bro Abel Awe"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 25%",
            display: "block",
          }}
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
            textAlign: "center",
          }}
        >
          Bro Abel's picture goes here
        </p>
      )}
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
      <div className="hero-grid" style={{ ...wrap, maxWidth: 1200 }}>
        <div className="hero-text settle">
          <p style={{ color: "var(--lichen)", fontSize: 17, marginBottom: 28 }}>
            Convocation day, {DATE}
          </p>
          <h1
            className="hero-title"
            style={{
              ...display,
              color: "var(--mist)",
            }}
          >
            Congratulations, Bro&nbsp;Abel.
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
            Abel Awe, you graduate from the University of Ibadan today. This
            little page is how I'm saying thank you.
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
    fontSize: "clamp(19px, 2.2vw, 23px)",
    lineHeight: 1.7,
    color: "var(--ink)",
    maxWidth: 660,
  };

  return (
    <section
      style={{
        background: "var(--mist)",
        padding: "clamp(64px, 10vw, 120px) 0",
      }}
    >
      <div style={{ ...wrap, display: "grid", gap: "clamp(24px, 3.5vw, 36px)" }}>
        <h2
          style={{
            ...display,
            fontSize: "clamp(32px, 5vw, 54px)",
            color: "var(--petrol)",
            maxWidth: 620,
            marginBottom: 8,
          }}
        >
          The first person who made me feel welcome.
        </h2>

        {LETTER.map((text, i) => (
          <p key={i} style={para}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  const stops = [
    { place: "Ibadan", note: "Where I arrived, and where we met." },
    { place: "Abadina congregation", note: "Where you were the first to welcome me." },
    { place: "Lagos", note: "Where you went to work, before coming back to graduate." },
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
            fontSize: "clamp(34px, 6.4vw, 72px)",
            color: "var(--mist)",
            maxWidth: 820,
          }}
        >
          Thank you for being kind to me, Bro Abel.
        </h2>

        <div
          style={{
            marginTop: 40,
            maxWidth: 620,
            display: "grid",
            gap: 24,
          }}
        >
          {CLOSING.map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(19px, 2.2vw, 23px)",
                lineHeight: 1.7,
                color: "var(--mist)",
                opacity: 0.92,
              }}
            >
              {text}
            </p>
          ))}
        </div>

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