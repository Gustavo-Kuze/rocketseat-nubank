import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, TabsContainer, TabItem, TabText } from "./styles";

const Tabs = (props) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: props.translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: "clamp"
            })
          }
        ],
        opacity: props.translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: "clamp"
        })
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
