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

const RendimentoDiario = styled.div`
  margin-bottom: 30px;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .weekday {
     font-family: 'Lexend Deca';
     font-size: 23px;
     color: #126BA5;
  }

  .progress{
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #BABABA;
  }
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
  height: 94px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;

  .title {
    font-family: 'Lexend Deca';
    font-size: 20px;
    color: #666666;
  }

  .information {
    font-family: 'Lexend Deca';
    font-size: 12px;
    color: #666666;
  }
`;

export {
Container,
RendimentoDiario,
ListaHabitos,
Habito
}