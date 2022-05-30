import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;

  .usuario {
    width: 50px;
    height: 50px;
    border-radius: 98px;
  }
  `;

export {
  Container
}
