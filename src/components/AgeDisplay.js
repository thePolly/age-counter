import React from "react";
import MouseTrail from "./MouseTrail";

const AgeDisplay = ({ age }) => {
  const styles = {
    ageText: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#f8fafc",
      textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
      fontFamily: "'DM Mono', monospace",
    },
  };

  return <div>
             <MouseTrail />
             <h3 style={styles.ageText}>{age}</h3>
    </div>
};

export default AgeDisplay;
