import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: auto;
  height: 70px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const StyledLink = styled(Link)`
  font-family: 'Lexend Deca';
  color: #52B6FF;
`;

export {
  Container,
  StyledLink
}
