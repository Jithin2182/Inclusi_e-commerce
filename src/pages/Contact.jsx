import React from "react";
import styled from "styled-components";
import Layout from "../common/Layout";
import ima from "./../images/flash-1.png";

const Container = styled.div`
  margin: 50px;
  color: white;
  background: #053056;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #e7e6e6;
  margin: 10px;
`;
const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #e7e6e6;
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

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: none;
  box-shadow: 10px 10px 10px red;
`

const Contact = () => {
  const submit = (e) => {
    alert("Your Query was submitted!!");
  };

  return (
    <Layout>
      <Container>
        <Flex>
          <div>
            <Image
              src={
              'https://res.cloudinary.com/dltvvelmx/image/upload/v1697540638/Agred/15184423_5579058_k5ufmc.jpg'  
              }
              alt="Image"
            />
          </div>
          <div>
            <Form action={submit}>
              <Input type="text" placeholder="Name" />
              <Input type="mobile" placeholder="Mobile" />
              <Input type="email" placeholder="example@gmail.com" />
              <TextArea placeholder="How may I help you?" rows={4} cols={10} />
              <StyledButton type="submit">Send</StyledButton>
            </Form>
          </div>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Contact;
