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

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Header from "~/components/Header/";
import Tabs from "~/components/Tabs/";
import Menu from "~/components/Menu";

export default () => {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = e => {

  };

  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: "clamp",
                  })
                }
              ]
            }}
          >
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
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
};
