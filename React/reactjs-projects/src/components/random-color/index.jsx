import { useEffect, useState, useCallback } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Utility function to generate a random value (used for RGB/HEX)
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // Memoize the handleCreateRandomColor function with useCallback
  const handleCreateRandomColor = useCallback((type) => {
    if (type === "hex") {
      const hex = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
    } else if (type === "rgb") {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  }, []); // Empty dependency array means the function is memoized and won't change

  // Set the initial color when the page loads
  useEffect(() => {
    handleCreateRandomColor(typeOfColor);
  }, [typeOfColor, handleCreateRandomColor]); // Add handleCreateRandomColor to the dependency array

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <h1 style={{ color: "#ffffff" }}>Project2 - Random Color Generator</h1>

      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>

      <button
        onClick={() => handleCreateRandomColor(typeOfColor)}
        style={{
          backgroundColor: color, // Show the current color as the button background
          color: typeOfColor === "hex" ? "#000000" : "#ffffff", // Adjust text color for readability
        }}
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
