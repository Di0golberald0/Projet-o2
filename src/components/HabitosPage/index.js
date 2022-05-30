import Footer from "../Footer";
import Header from "../Header";
import Adicionar from "../../img/Adicionar.png";
import { Container, AdicionarHabito, NovoHabito, Input, ListaHabitos, NenhumHabito } from "./style";
import { useState } from "react";

export default function HabitosPage() {
      const [habit, setHabit] = useState("");
    return(
        <>
        <Header />
        <Container>
            <AdicionarHabito>
                <div className="text">Meus Hábitos</div>
                <div className="button"><img src={Adicionar} alt="Sinal de Soma" /></div>
            </AdicionarHabito>
            <NovoHabito>
                <Input value={habit} onChange={(e) => setHabit(e.target.value)} placeholder="nome do hábito" />
                <div className="days">
                    <div className="day">S</div>
                    <div className="day">T</div>
                </div>
                <div className="commands">
                <p className="cancel">Cancelar</p>
                <div className="save">Salvar</div>
                </div>
            </NovoHabito>
            <ListaHabitos>
            </ListaHabitos>
            <NenhumHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NenhumHabito>
        </Container>
        <Footer />
        </>
    )
}
