import React from "react";

const Button = ({ text, isActive, onClick, isPrimary = false, isFloating = false }) => {
  const styles = {
    button: {
      padding: "12px 24px",
      fontSize: "18px",
      borderRadius: "20px",
      border: "none",
      outline: "none",
      background: isPrimary ? "#1D617E" : isActive ? "#344765" : "#1e293b",
      color: isPrimary ? "#F8FAFC" : "#f8fafc",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      ...(isFloating && {
        position: "absolute",
        top: "20px",
        left: "20px",
        fontSize: "16px",
        padding: "10px 18px",
      }),
    },
  };

  return <button style={styles.button} onClick={onClick}>{text}</button>;
};

export default Button;
