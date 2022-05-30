import Footer from "../Footer";
import Header from "../Header";
import { Container, RendimentoDiario, ListaHabitos, Habito } from "./style";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function HojePage() {
    const { progress } = useContext(UserContext);
    return(
        <>
        <Header />
        <Container>
            <RendimentoDiario>
                <div className="weekday">Meus Hábitos</div>
                {progress !== 0 ? 
                <div className="progress">"porcentagem"% dos hábitos concluídos</div>
                :
                <div className="progress">Nenhum hábito concluído ainda</div> }
            </RendimentoDiario>
            <ListaHabitos>
                <Habito/>
            </ListaHabitos>
        </Container>
        <Footer />
        </>
    )
}
