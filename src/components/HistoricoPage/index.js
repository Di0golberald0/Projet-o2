import Footer from "../Footer";
import Header from "../Header";
import { Container, Historico, Texto } from "./style";

export default function HistoricoPage() {
    return(
        <>
        <Header />
        <Container>
            <Historico>Histórico</Historico>
            <Texto>Em breve você poderá ver o histórico dos seus hábitos aqui!</Texto>
        </Container>
        <Footer />
        </>
    )
}
