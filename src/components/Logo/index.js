import Ellipse from "../../img/Ellipse.png";
import TrackIt from "../../img/TrackIt.png";
import VectorUm from "../../img/Vector 1.png";
import VectorDois from "../../img/Vector 2.png";
import VectorTres from "../../img/Vector 3.png";
import VectorQuatro from "../../img/Vector 4.png";
import { LogoTrackIt, Container } from './style';


export default function Logo() {
    <LogoTrackIt>
    <Container>
    <img src={VectorUm} alt="VectorUm" />
    <img src={VectorDois} alt="VectorDois" />
    <img src={VectorTres} alt="VectorTres" />
    </Container>
    <img src={VectorQuatro} alt="VectorQuatro" />
    <img src={Ellipse} alt="Ellipse" />
    <img src={TrackIt} alt="TrackIt" />
    </LogoTrackIt>
}