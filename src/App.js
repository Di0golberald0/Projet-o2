import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./components/contexts/UserContext";
import LoginPage from "./components/Login";
import CadastroPage from "./components/CadastroPage";
import HabitosPage from "./components/HabitosPage";
import HojePage from "./components/HojePage";
import HistoricoPage from "./components/HistoricoPage";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserContext.Provider value={{ token, setToken }}>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<LoginPage />} />
             <Route path="/cadastro" element={<CadastroPage />} />
             <Route path="/habitos" element={<HabitosPage />} />
             <Route path="/hoje" element={<HojePage />} />
             <Route path="/historico" element={<HistoricoPage />} />
           </Routes>
         </BrowserRouter>
      </UserContext.Provider>
    </UserContext.Provider>
  );
}