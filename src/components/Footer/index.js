import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container, StyledLink } from "./style";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {
    const { progress } = useContext(UserContext);
    return(
        <Container>
            <StyledLink to="/habitos">Hábitos</StyledLink>
            <CircularProgressbar
            value={progress}
            text={<StyledLink to="/hoje">Hoje</StyledLink>}
            radius={90}
            margin-bottom={70}
            background
            backgroundPadding={6}
            styles={buildStyles({
                 backgroundColor: "#52B6FF",
                 textColor: "#FFFFFF",
                 pathColor: "#FFFFFF",
                 trailColor: "transparent"
            })} />
            <StyledLink to="/historico">Histórico</StyledLink>
        </Container>
    )
}