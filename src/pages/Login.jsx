import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: large;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
const StyledInput = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
`;

const StyledButton = styled.button`
  width: 400px;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
`;

const Login = () => {
  return (
    <Container>
      <Heading>Login</Heading>
      <form action="submit">
        <StyledInput
          type="text"
          name="Username"
          placeholder="Username or EmailID"
          id="username"
          required
        />
        <br/>
        <StyledInput
          type="password"
          name="Password"
          placeholder="password"
          id="password"
          required
        />
        <br/>
        <StyledButton type="submit">
          <Link to="/home">Login</Link>
        </StyledButton>
      </form>
    </Container>
  );
};

export default Login;
