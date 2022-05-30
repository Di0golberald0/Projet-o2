import { Container } from "./style";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import TrackIt2 from "../../img/TrackIt2.png";

export default function Header() {
    const { user } = useContext(UserContext)

    return(
        <Container>
            <img src={TrackIt2} alt="Logo da Trackit" />
            <img className="usuario" src={user.image} alt="Imagem do Usuario" />
        </Container>
    )
}