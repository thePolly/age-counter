import React, { useState, useEffect } from "react";
import DateSelector from "./components/DateSelector";
import Button from "./components/Button";
import AgeDisplay from "./components/AgeDisplay";
import MouseTrail from "./components/MouseTrail";
import dayjs from "dayjs";

function App() {
  const [birthDate, setBirthDate] = useState(null);
  const [timeCategory, setTimeCategory] = useState("day");
  const [ageInYears, setAgeInYears] = useState("0.0000000000");
  const [isConfirmed, setIsConfirmed] = useState(false);

  // 🎨 Стили
  const styles = {
    container: {
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a, #1e293b)", // Градиент темно-синий
      color: "#f8fafc",
      fontFamily: "'Orbitron', sans-serif",
      position: "relative",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      marginBottom: "20px",
    },
  };

  // 🕒 Функция для установки времени (06:00, 12:00, 18:00)
  const getApproximateTime = (category) => {
    switch (category) {
      case "morning":
        return "T06:00";
      case "evening":
        return "T18:00";
      default:
        return "T12:00"; // Если не знает — ставим 12:00 дня
    }
  };

  // 🔄 Обновляем возраст в реальном времени
  useEffect(() => {
    if (!birthDate) return;

    const calculateAge = () => {
      const fullBirthDate =
        birthDate.format("YYYY-MM-DD") + getApproximateTime(timeCategory);
      const birthTime = new Date(fullBirthDate).getTime();
      const now = Date.now();
      const ageInMilliseconds = now - birthTime;
      const ageInYears = (
        ageInMilliseconds /
        (1000 * 60 * 60 * 24 * 365.25)
      ).toFixed(10); // 10 знаков

      setAgeInYears(ageInYears);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 50); // Обновляем каждые 50 мс (20 раз в секунду)
    return () => clearInterval(interval);
  }, [birthDate, timeCategory]);

  return (

    <div style={styles.container}>
 
      {isConfirmed ? (
        <>
          <Button text="Change Date" isPrimary isFloating onClick={() => setIsConfirmed(false)} />
          <AgeDisplay age={ageInYears} />
        </>
      ) : (
        <>
          <DateSelector birthDate={birthDate} setBirthDate={setBirthDate} />
          <div style={styles.buttonGroup}>
            <Button text="Morning" isActive={timeCategory === "morning"} onClick={() => setTimeCategory("morning")} />
            <Button text="Day" isActive={timeCategory === "day"} onClick={() => setTimeCategory("day")} />
            <Button text="Evening" isActive={timeCategory === "evening"} onClick={() => setTimeCategory("evening")} />
          </div>
          <Button text="OK" isPrimary onClick={() => setIsConfirmed(true)} />
        </>
      )}
    </div>
  );
}

export default App;
