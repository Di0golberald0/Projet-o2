import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
`;

const StyledLink = styled(Link)`
  font-family: 'Lexend Deca';
  color: #52B6FF;
  text-decoration: none;
`;

export {
  Container,
  StyledLink,
}
