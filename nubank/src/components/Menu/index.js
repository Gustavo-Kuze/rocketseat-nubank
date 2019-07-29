import React from "react";
import { Container, Code } from "./styles";
import QRCode from "react-native-qrcode";

const Menu = () => {
  return <Container >
      <Code>
          <QRCode 
            value="https://rockeseat.com.br"
            size={80}
            bgColor="#FFF"
            fgColor="#8B10AE"
          />
      </Code>
  </Container>;
};

export default Menu;
