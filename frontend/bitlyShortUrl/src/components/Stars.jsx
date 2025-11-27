import React from "react";

export default function Stars() {
  const stars = Array.from({ length: 20 }); // number of stars you want

  return (
    <div className="star-container">
      {stars.map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 6 + 3; // random size 3–9px

        return (
          <div  key={i}
            className="star shape-star"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size
            }}>✦</div>
        );
      })}
    </div>
  );
}
