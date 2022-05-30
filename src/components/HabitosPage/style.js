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

const AdicionarHabito = styled.div`
  margin-bottom: 30px;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
     font-family: 'Lexend Deca';
     font-size: 23px;
     color: #126BA5;
  }

  .button{
     width: 40px;
     height: 35px;
     background-color: #52B6FF;
     border-radius: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
  }

  img {
      width: 12px;
      height: 12px;
  }
`;

const NovoHabito = styled.div`
  height: 180px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;
`;

const ListaHabitos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;

  *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Habito = styled.div`
  height: 180px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;
`;

const NenhumHabito = styled.div`
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
  AdicionarHabito,
  NovoHabito,
  ListaHabitos,
  Habito,
  NenhumHabito
}