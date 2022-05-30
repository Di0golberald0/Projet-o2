import Footer from "../Footer";
import Header from "../Header";
import Adicionar from "../../img/Adicionar.png";
import { Container, AdicionarHabito, NovoHabito, ListaHabitos, NenhumHabito } from "./style"
  export default function HabitosPage() {
    return(
        <>
        <Header />
        <Container>
            <AdicionarHabito>
                <div className="text">Meus Hábitos</div>
                <div className="button"><img src={Adicionar} alt="Sinal de Soma" /></div>
            </AdicionarHabito>
            <NovoHabito />
            <ListaHabitos>
            </ListaHabitos>
            <NenhumHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NenhumHabito>
        </Container>
        <Footer />
        </>
    )
}
