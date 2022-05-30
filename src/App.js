import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import LoginPage from "./components/LoginPage";
import CadastroPage from "./components/CadastroPage";
import HabitosPage from "./components/HabitosPage";
import HojePage from "./components/HojePage";
import HistoricoPage from "./components/HistoricoPage";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{ user, token, progress }}>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<LoginPage setToken={setToken} setUser={setUser} />} />
             <Route path="/cadastro" element={<CadastroPage />} />
             <Route path="/habitos" element={<HabitosPage setProgress={setProgress} />} />
             <Route path="/hoje" element={<HojePage setProgress={setProgress} />} />
             <Route path="/historico" element={<HistoricoPage />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}