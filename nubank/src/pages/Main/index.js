import React from "react";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  Title,
  Description,
  Annotation
} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "~/components/Header/";
import Tabs from "~/components/Tabs/";
import Menu from "~/components/Menu";

export default () => (
  <Container>
    <Header />

    <Content>
      <Menu />
      <Card>
        <CardHeader>
          <Icon name="attach-money" color="#666" size={28} />
          <Icon name="visibility-off" color="#666" size={28} />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 197.233,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$ 20,00 recebida de Fulano da Silva
          </Annotation>
        </CardFooter>
      </Card>
    </Content>

    <Tabs />
  </Container>
);
