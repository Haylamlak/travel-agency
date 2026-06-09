import "./about.css";
import img from "../../img/plane.jpg";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About FUTURE FIT ✈️</h1>
        <p>
          A global travel company helping people explore the world safely,
          affordably, and comfortably.
        </p>
      </section>

      {/* MAIN IMAGE */}
      <div className="about-image">
        <img src={img} alt="plane" />
      </div>

      {/* MISSION */}
      <section className="mission">
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to make travel easy for everyone.
          We connect people with the best flights, hotels, and travel experiences
          across the world at affordable prices.
        </p>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-box">
          <h3>10K+</h3>
          <p>Happy Travelers</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Countries</p>
        </div>

        <div className="stat-box">
          <h3>1K+</h3>
          <p>Hotels Partnered</p>
        </div>

        <div className="stat-box">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <h2>🌍 Our Story</h2>

        <p>
          FUTURE FIT started with a simple idea — travel should not be expensive or complicated.
          We began as a small team and grew into a global travel platform.
        </p>

        <p>
          Today, we help thousands of people every year to travel, explore new cultures,
          and create unforgettable memories.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>⭐ Why Choose Us</h2>

        <ul>
          <li>✔️ Cheap and reliable travel packages</li>
          <li>✔️ Easy booking system</li>
          <li>✔️ Trusted worldwide partners</li>
          <li>✔️ 24/7 customer support</li>
          <li>✔️ Safe and secure travel planning</li>
        </ul>
      </section>

      {/* TEAM */}
      <section className="team">
        <h2>👨‍💼 Our Team</h2>

        <div className="team-grid">

          <div className="team-card">
            <h3>CEO</h3>
            <p>Travel Expert Leader</p>
          </div>

          <div className="team-card">
            <h3>Manager</h3>
            <p>Customer Experience</p>
          </div>

          <div className="team-card">
            <h3>Support Team</h3>
            <p>24/7 Assistance</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Travel With Us? ✈️</h2>
        <p>Start your journey today with FUTURE FIT.</p>
        <button>Explore Now</button>
      </section>

    </div>
  );
}