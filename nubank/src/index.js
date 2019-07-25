import React from "react";
import { StatusBar, View } from "react-native";

import "~/config/ReactotronConfig";

import Routes from "~/routes";

const App = () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </React.Fragment>
);

export default App;
