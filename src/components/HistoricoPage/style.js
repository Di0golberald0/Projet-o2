import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  margin: 70px 0px;
  width: 100%;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #E5E5E5;
`;

const Historico = styled.div`
  margin-bottom: 30px;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Lexend Deca';
  font-size: 23px;
  color: #126BA5;
`;

const Texto = styled.div`
margin-top: 30px;
width: 90%;
height: 74px;
font-family: 'Lexend Deca';
color: #666666;
display: flex;
justify-content: center;
align-items: center;
`;

export {
Container,
Historico,
Texto
}