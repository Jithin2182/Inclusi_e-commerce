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

const Register = () => {
  return (
    <Container>
      <Heading>Register</Heading>
      <form action="submit">
        <StyledInput
          type="text"
          name="FirstName"
          placeholder="FirstName"
          id="username"
          required
        />
        <StyledInput
          type="text"
          name="Lastname"
          placeholder="Lastname"
          id="username"
          required
        />
        <center>
          <StyledInput
            type="text"
            name="EmailID"
            placeholder="EmailID"
            id="username"
            required
          />
        </center>
        <br />
        <center>
          <StyledInput
            type="password"
            name="Password"
            placeholder="password"
            id="password"
            required
          />
        </center>
        <br />
        <center>
          <StyledButton type="submit">
            <Link to="/">Register</Link>
          </StyledButton>
        </center>
      </form>
      <Link to="/">Alredy have an account?</Link>
    </Container>
  );
};

export default Register;
