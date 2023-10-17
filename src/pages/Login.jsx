import React, { useState } from "react";
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

const Head = styled.h1`
  color: green;
  font-size: 100px;
  font-weight: bolder;
`

const StyledButton = styled.button`
  width: 70px;
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Locate, setLocate] = useState("/");
  const [enabled, setEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate password and set passwordInvalid state accordingly
    if (password === "inclusi") {
      setLocate("/home");
    } else {
      alert("Password is Incorrect");
    }
  };

  const usernameEntered = (e) => {
    setUsername(e.target.value);
    // buttonEnabled(username, password)
  };

  const passwordEntered = (e) => {
    setPassword(e.target.value);
    // buttonEnabled(username, password)
  };

  return (
    <Container>
      <Head>INCLUSISHOP</Head>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit} action="submit">
        <StyledInput
          type="text"
          name="Username"
          placeholder="Username or EmailID"
          id="username"
          required
          value={username}
          onChange={(e) => usernameEntered(e)}
        />
        <br />
        <StyledInput
          type="password"
          name="Password"
          placeholder="password"
          id="password"
          required
          value={password}
          onChange={(e) => passwordEntered(e)}
        />
        <br />
        <StyledButton type="submit">
          <Link to={Locate} >Login</Link>
        </StyledButton>
      </form>
      <Link to="/register">Are you a new user?</Link>
    </Container>
  );
};

export default Login;
