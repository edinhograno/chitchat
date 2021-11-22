import React, { useState } from "react";
import LoginPage from "./LoginPage";

function App() {
  const [move, setMove] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginPage
      move={move}
      setMove={setMove}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}

export default App;
