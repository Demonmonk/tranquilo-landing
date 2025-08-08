// src/components/LandingPage.jsx
export default function LandingPage() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <img src="/assets/tranquilo-logo.png" alt="Tranquilo Logo" className="logo" />
        <h1 className="headline">
          A Voice That Listens.<br />A Guide That Understands.
        </h1>
        <p className="subhead">
          Tranquilo is your voice-first meditation companion — born from our own burnout
          as ex-consultants, designed to feel warm and human, not clinical.
        </p>
        <div className="ctaRow">
          <button className="btnPrimary">Try the Demo</button>
          <a href="#waitlist" className="btnSecondary">Join the Waitlist</a>
        </div>
        <img src="/assets/sora-main.png" alt="Sora" className="sora" />
      </section>

      {/* STORY */}
      <section className="section alt">
        <div className="twoCol">
          <img src="/assets/founders-photo.png" alt="Founders" className="cardImg" />
          <div>
            <h2 className="h2">Our Story</h2>
            <p className="p">
              We’re 2Bo and Deepak. We lived the stress cycle—late nights, tight
              deadlines, burnout. Static meditation apps didn’t meet us where we were.
            </p>
            <p className="p">
              So we built Tranquilo: a conversation-led meditation guide that listens first,
              then creates a session that fits your moment—without calling it therapy.
            </p>
          </div>
        </div>
      </section>

      {/* MARKET RESEARCH */}
      <section className="section">
        <h2 className="h2 center">Why Tranquilo Matters</h2>
        <div className="cards">
          <div className="card">
            <h3 className="h3">Dynamic & Adaptive</h3>
            <p className="p">
              Every session adapts to your mood, needs, and past conversations.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Proven Demand</h3>
            <p className="p">
              Users want personalization and voice-first calm. We’re building exactly that.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Stigma-Free</h3>
            <p className="p">
              Mindfulness + CBT techniques presented as warm guidance, not clinical therapy.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section alt">
        <h2 className="h2 center">How It Works</h2>
        <div className="cards">
          <div className="card">
            <div className="emoji">🗣️</div>
            <h3 className="h3">Talk</h3>
            <p className="p">Share what’s on your mind.</p>
          </div>
          <div className="card">
            <div className="emoji">👂</div>
            <h3 className="h3">Listen</h3>
            <p className="p">Sora responds with warmth and insight.</p>
          </div>
          <div className="card">
            <div className="emoji">🧘</div>
            <h3 className="h3">Meditate</h3>
            <p className="p">Follow a session tailored to you.</p>
          </div>
          <div className="card">
            <div className="emoji">✨</div>
            <h3 className="h3">Reflect</h3>
            <p className="p">Check in and track your calm.</p>
          </div>
        </div>
      </section>

      {/* SNEAK PEEK */}
      <section className="section">
        <h2 className="h2 center">Sneak Peek — Mobile Experience</h2>
        <p className="p center">
          A glimpse of how Sora brings personalized, voice-led meditation to your pocket.
        </p>
        <div className="mockups">
          <img src="/assets/mockup-chat.png" alt="Voice screen" className="mock" />
          <img src="/assets/mockup-meditation.png" alt="Meditation screen" className="mock" />
          <img src="/assets/mockup-tracking.png" alt="Tracking screen" className="mock" />
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="section alt">
        <h2 className="h2 center">Join the Waitlist</h2>
        <p className="p center">
          Be the first to try Tranquilo and experience a conversation that changes your day.
        </p>
        <form className="waitlist" onSubmit={(e) => e.preventDefault()}>
          <input className="input" type="email" placeholder="Your email" />
          <button className="btnPrimary">Sign Up</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Tranquilo. All rights reserved.
      </footer>
    </div>
  );
}
