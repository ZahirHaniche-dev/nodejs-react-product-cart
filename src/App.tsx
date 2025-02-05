import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div>
      <h1>React + Vite + Node.js</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
