import React from "react";

const TimeSelector = ({ timeCategory, setTimeCategory }) => {
  const styles = {
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    button: (isActive) => ({
      padding: "12px 24px",
      fontSize: "18px",
      borderRadius: "20px",
      border: "none",
      outline: "none",
      background: isActive ? "#344765" : "#1e293b",
      color: "#f8fafc",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    }),
  };

  return (
    <div style={styles.buttonGroup}>
      <button style={styles.button(timeCategory === "morning")} onClick={() => setTimeCategory("morning")}>
        Morning
      </button>
      <button style={styles.button(timeCategory === "day")} onClick={() => setTimeCategory("day")}>
        Day
      </button>
      <button style={styles.button(timeCategory === "evening")} onClick={() => setTimeCategory("evening")}>
        Evening
      </button>
    </div>
  );
};

export default TimeSelector;
