import { useState } from "react";
import "./services.css";

export default function Services() {

  const [search, setSearch] = useState("");

  const services = [
    { icon: "✈️", name: "Flight Booking", price: "$299" },
    { icon: "🏨", name: "Hotel Reservation", price: "$199" },
    { icon: "🚗", name: "Transport Service", price: "$99" },
    { icon: "🧳", name: "Travel Packages", price: "$599" },
    { icon: "📍", name: "Tour Guides", price: "$149" },
    { icon: "🛂", name: "Visa Support", price: "$249" },
  ];

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">

      {/* HEADER */}
      <h1>Our Services ✈️</h1>

      <p className="subtitle">
        We provide complete travel solutions for your journey.
      </p>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid">

        {filtered.map((service, index) => (
          <div className="box" key={index}>

            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>

            <p className="price">{service.price}</p>

            <button className="btn">
              Book Now
            </button>

          </div>
        ))}

      </div>

      {/* POPULAR SECTION */}
      <section className="popular">
        <h2>🔥 Most Popular Service</h2>

        <div className="popular-card">
          <h3>Travel Package Deal</h3>
          <p>Flight + Hotel + Tour Guide</p>
          <span>$799</span>

          <button>Get Offer</button>
        </div>

      </section>

    </div>
  );
}