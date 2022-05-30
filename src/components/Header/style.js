import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: auto;
  height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
`;

const Usuario = styled.div`
  width: 50px;
  height: 50px;
  background: url(image.png);
  border-radius: 98.5px;
`;

export {
  Container,
  Logo,
  Usuario
}
