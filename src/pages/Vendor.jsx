import React from "react";
import styled from "styled-components";
import Layout from "../common/Layout";

const Container = styled.div`
  margin: 50px;
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

const Label = styled.label`
  padding: 50px;
  border-radius: 10px;
  border: none;
  height: 200px;
  background-color: #e7e6e6;
  width: 400px;
`;

const Form = styled.form`
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: green;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

const Vendor = () => {
  return (
    <Layout>
      <div>
        <Container>
          <Form action="/products">
            <center>
              <h3> Upload your products </h3>
            </center>
            <Flex>
              <Input type="text" placeholder="Product Name" />
              <Input type="text" placeholder="Product type" />
            </Flex>
            <Flex>
              <Input type="text" placeholder="Category" />
              <Input type="text" placeholder="Quantity" />
              <Input type="text" placeholder="Dealer" />
            </Flex>
            <Flex>
              <TextArea
                id="textarea"
                rows={5}
                cols={80}
                maxLength={500}
                placeholder="description"
              />
            </Flex>
            <Flex>
              <Label>
                Main Image
                <Input type="file" name="image" />
              </Label>
            </Flex>
            <Flex>
              <h5> Upload your description Images: </h5>
              <Input type="file" name="image" multiple />
            </Flex>
            <Button type="submit"> Upload </Button>
          </Form>
        </Container>
      </div>
    </Layout>
  );
};

export default Vendor;
