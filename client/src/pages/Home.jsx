import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import img1 from "../../img/dubai.jpg";
import img2 from "../../img/london.jpg";
import img3 from "../../img/paris.jpg";
import img4 from "../../img/saudi.jpg";

export default function Home() {
  const [likes, setLikes] = useState({});
  const [likeCount, setLikeCount] = useState({});
  const [showTop, setShowTop] = useState(false);
  const [search, setSearch] = useState("");

  // LIKE SYSTEM
  const toggleLike = (name) => {
    setLikes((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));

    setLikeCount((prev) => ({
      ...prev,
      [name]: prev[name] ? 0 : 1,
    }));
  };

  // BACK TO TOP
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // DESTINATIONS
  const destinations = [
    { img: img3, name: "Paris", desc: "City of love and lights." },
    { img: img1, name: "Dubai", desc: "Luxury and modern city life." },
    { img: img2, name: "London", desc: "Rich history and culture." },
    { img: img4, name: "Ottawa", desc: "Beautiful heritage and tourism." },
  ];

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <h1 className="typing-text">
            Explore The World With Future Fit 🌍
          </h1>

          {/* <iframe
            width="600"
            height="300"
            src="https://www.youtube.com/embed/H9GqF3B33Qw"
            title="video"
            frameBorder="0"
            allowFullScreen
          ></iframe> */}
          <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/8cKBc3wAuQI?start=192"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>

          <p>
            Book flights, hotels, and amazing travel packages at the best prices.
          </p>

          <div className="hero-buttons">
            <Link to="/services">
              <button>Get Started</button>
            </Link>

            <Link to="/about">
              <button className="secondary">Learn More</button>
            </Link>
          </div>

        </div>
      </section>

      {/* SEARCH */}
      <div className="search-bar">
        <input
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ABOUT */}
      <section className="home-about">
        <h2>Why Choose Us?</h2>
        <p>We are a trusted travel company helping thousands of people travel safely.</p>

        <div className="features">
          <div className="feature">✈️ Fast Booking</div>
          <div className="feature">💰 Best Prices</div>
          <div className="feature">🏨 Top Hotels</div>
          <div className="feature">📍 Global Destinations</div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destinations">
        <h2>Top Destinations</h2>

        <div className="grid">
          {filtered.map((d, i) => (
            <div className="card" key={i}>
              <img src={d.img} alt={d.name} />
              <h3>{d.name}</h3>
              <p>{d.desc}</p>

              <button
                className="like-btn"
                onClick={() => toggleLike(d.name)}
              >
                {likes[d.name] ? "❤️ Liked" : "🤍 Like"}
              </button>

              <p className="like-count">
                {likeCount[d.name] || 0} likes
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <h2>Contact Information</h2>

        <div className="contact-boxes">
          <div className="contact-box">
            <h3>📞 Phone</h3>
            <p>+251 912 275 566</p>
          </div>

          <div className="contact-box">
            <h3>📧 Email</h3>
            <p>futurefit@gmail.com</p>
          </div>

          <div className="contact-box">
            <h3>📍 Address</h3>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="social-media">
        <h2>Follow Us</h2>

        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready For Your Next Adventure?</h2>
        <p>Join thousands of happy travelers today.</p>

        <Link to="/auth">
          <button>Book Now</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>FutureFit ✈</h3>
        <p>© 2026 FutureFit</p>
      </footer>

      {/* WHATSAPP */}
      <a className="whatsapp" href="https://wa.me/251912275566">
        💬
      </a>

      {/* BACK TO TOP */}
      {showTop && (
        <button className="top-btn" onClick={scrollTop}>
          ↑ Top
        </button>
      )}

    </div>
  );
}