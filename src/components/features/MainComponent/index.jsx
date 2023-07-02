// vendor imports
import React from "react";

// local imports
import Title from "./Title";
import Controls from "../../elements/ControlsComponent";
import CardsComponent from "../CardsComponent";

import Wrap from "./styles";

const Main = () => (
  <Wrap>
    <Title />
    <Controls />
    <CardsComponent />
  </Wrap>
);

export default Main;
