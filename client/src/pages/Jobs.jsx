import { useState } from "react";
import "./jobs.css";

export default function Jobs() {

  const [search, setSearch] = useState("");

  const jobs = [
    { title: "Travel Agent", type: "Full-time", salary: "$800", location: "Addis Ababa" },
    { title: "Customer Support", type: "Full-time", salary: "$600", location: "Remote" },
    { title: "Tour Guide", type: "Part-time", salary: "$400", location: "Europe Tours" },
    { title: "Marketing Specialist", type: "Full-time", salary: "$1000", location: "Hybrid" },
    { title: "Frontend Developer", type: "Remote", salary: "$1200", location: "Remote" },
  ];

  const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">

      {/* HEADER */}
      <h1>🚀 Jobs & Careers</h1>

      <p className="subtitle">
        Join our team and build your future with us.
      </p>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* JOB GRID */}
      <div className="grid">

        {filtered.map((job, index) => (
          <div className="job-card" key={index}>

            <h3>{job.title}</h3>

            <div className="tags">
              <span>{job.type}</span>
              <span>{job.location}</span>
            </div>

            <p className="salary">{job.salary}</p>

            <button>Apply Now</button>

          </div>
        ))}

      </div>

      {/* FEATURED JOB */}
      <section className="featured">
        <h2>🔥 Featured Job</h2>

        <div className="featured-card">
          <h3>Senior Frontend Developer</h3>
          <p>Work with React, Node.js and modern UI systems</p>
          <span>$1500 / month</span>

          <button>Apply Fast</button>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="apply-section">
        <h2>🧾 Quick Application</h2>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Job Title" />

          <button type="submit">Submit Application</button>
        </form>
      </section>

    </div>
  );
}