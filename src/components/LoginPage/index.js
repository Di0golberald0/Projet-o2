import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button";
import Input from "../Input";
import { Container, StyledLink } from "./style";

export default function LoginPage({ setUser, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password
      }
    );

    promise.then((response) => {
      setUser(response.data);
      setToken(response.data.token);
      navigate("/habitos");
    });
    promise.catch((error) => console.log(error.response));
  }

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
        />
        <Button type="submit">Entrar</Button>
      </form>
      <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
  );
}