import React from "react";
import ShortenerCard from "./ShortenerCard";
import Stars from "./Stars";

export default function Hero() {
  return (
    <div className="text-light py-5" style={{ background: "#031f39", minHeight: "60vh" }}>
      <div className="container text-center">
        <h1 className="fw-bold display-5">
          Build stronger digital connections
        </h1>
            <Stars/>
        <p className="mt-3 fs-5">
         Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform
        </p>

        <div className="mt-5 d-flex justify-content-center">
          <ShortenerCard />
        </div>
      </div>
    </div>
  );
}
