import React, { useState } from "react";


export default function ShortenerCard() {
  const [tab, setTab] = useState("short");

  return (
    <div
      className="card shadow-lg p-4 shortener-card"
      style={{
        width: "650px",
        borderRadius: "16px",
        backgroundColor: "#06224B",
      }}
    >
      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4 gap-3">
        <button
          className={`tab-btn ${tab === "short" ? "active" : ""}`}
          onClick={() => setTab("short")}
        >
          🔗 Short Link
        </button>

        <button
          className={`tab-btn ${tab === "qr" ? "active" : ""}`}
          onClick={() => setTab("qr")}
        >
          🧾 QR Code
        </button>
      </div>

      {/* Inside Card Body (White Background) */}
      <div
        className="p-4"
        style={{
          background: "white",
          borderRadius: "14px",
        }}
      >
        {tab === "short" && <ShortLinkUI />}
        {tab === "qr" && <QRCodeUI />}
      </div>
    </div>
  );
}

/* ---------------------------- SHORT LINK UI ---------------------------- */

function ShortLinkUI() {
  return (
    <>
      <h4 className="fw-bold mb-1">Shorten a long link</h4>
      <p className="text-muted mb-4">No credit card required.</p>

      <label className="fw-semibold">Paste your long link here</label>
      <input
        className="form-control mb-3"
        placeholder="https://example.com/my-long-url"
        type="text"
      />

      <button className="btn btn-primary w-50 float-start ">
        Get your link for free 
      </button>
    </>
  );
}

/* ---------------------------- QR CODE UI ---------------------------- */

function QRCodeUI() {
  return (
    <>
      <h4 className="fw-bold mb-1">Generate a QR Code</h4>
      <p className="text-muted mb-4">Turn any link into a scannable QR code.</p>

      <label className="fw-semibold">Enter your URL</label>
      <input
        className="form-control mb-3"
        placeholder="https://example.com"
        type="text"
      />

      <label className="fw-semibold mt-2">QR Code Color</label>
      <input type="color" className="form-control form-control-color mb-3" />

      <button className="btn btn-success w-100">
        Generate QR Code →
      </button>
    </>
  );
}
