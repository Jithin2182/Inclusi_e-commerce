import React from "react";
import styled from "styled-components";
import { AiTwotonePhone, AiFillMail } from "react-icons/ai";
import { FcInTransit } from "react-icons/fc";
import { BiSolidPackage } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { LiaNewspaperSolid } from "react-icons/lia";
import Layout from "../common/Layout";

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

const Text = styled.h3`
  color: white;
  padding: 10px;
`;

const Icon = styled.span`
  color: white;
  font-size: 30px;
  padding: 5px;
`;

const Order = () => {
  return (
    <Layout>
      <div>
        <Container>
          <h1> Order Status </h1>
          <h3> AWB Number-5335T5S </h3>
          <Flex>
            <Text>
              {" "}
              <Icon>
                <LiaNewspaperSolid />
              </Icon>{" "}
              Order Placed{" "}
            </Text>
            <Text>
              {" "}
              <Icon>
                <FcInTransit />
              </Icon>{" "}
              In Transit{" "}
            </Text>
            <Text>
              {" "}
              <Icon>
                <MdDeliveryDining />
              </Icon>{" "}
              Out for Delivery{" "}
            </Text>
            <Text style={{ color: "gray" }}>
              {" "}
              <Icon style={{ color: "gray" }}>
                <BiSolidPackage />
              </Icon>{" "}
              Delivered{" "}
            </Text>
          </Flex>
          <Flex>
            <div>
              <Text>Shipped with</Text>
            </div>
            <div>
              <Text>UPS Expedited</Text>
            </div>
            <div>
              <Icon>
                <AiTwotonePhone />
              </Icon>
            </div>
          </Flex>
          <Flex>
            <div>
              <Text>Estimated Delivery</Text>
            </div>
            <div>
              <Text>18/10/2023</Text>
            </div>
            <div>
              <Icon>
                <AiFillMail />
              </Icon>
            </div>
          </Flex>
        </Container>
      </div>
    </Layout>
  );
};

export default Order;
