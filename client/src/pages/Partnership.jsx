import { useState } from "react";
import img from "../../img/canada.jpg";
import "./partnership.css";

export default function Partnership() {

  const [search, setSearch] = useState("");

  const partners = [
    { name: "Emirates Airlines", type: "Airline", icon: "✈️" },
    { name: "Qatar Airways", type: "Airline", icon: "✈️" },
    { name: "Hilton Hotels", type: "Hotel", icon: "🏨" },
    { name: "Marriott Hotels", type: "Hotel", icon: "🏨" },
    { name: "Booking.com", type: "Platform", icon: "🌐" },
    { name: "Expedia", type: "Platform", icon: "🌐" },
  ];

  const filtered = partners.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="partnership-page">

      {/* HEADER */}
      <h1>🤝 Partnership</h1>

      <p className="subtitle">
        We work with global airlines, hotels, and travel companies.
      </p>

      {/* IMAGE */}
      <div className="hero-img">
        <img src={img} alt="partnership" />
      </div>

      {/* STATS */}
      <section className="stats">
        <div>
          <h2>50+</h2>
          <p>Airline Partners</p>
        </div>

        <div>
          <h2>200+</h2>
          <p>Hotel Chains</p>
        </div>

        <div>
          <h2>30+</h2>
          <p>Countries</p>
        </div>
      </section>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search partner..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PARTNERS LIST */}
      <div className="grid">

        {filtered.map((p, i) => (
          <div className="card" key={i}>
            <div className="icon">{p.icon}</div>
            <h3>{p.name}</h3>
            <p>{p.type}</p>
          </div>
        ))}

      </div>

      {/* BENEFITS */}
      <section className="benefits">
        <h2>⭐ Partnership Benefits</h2>

        <ul>
          <li>✔️ Global exposure</li>
          <li>✔️ Increased bookings</li>
          <li>✔️ Marketing support</li>
          <li>✔️ Trusted travel network</li>
        </ul>
      </section>

      {/* FORM */}
      <section className="form-section">
        <h2>Become a Partner</h2>

        <form>
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">Send Request</button>
        </form>
      </section>

    </div>
  );
}