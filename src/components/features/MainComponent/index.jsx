// vendor imports
import React from "react";

// local imports
// components
import Title from "components/features/MainComponent/Title";
import Controls from "components/elements/ControlsComponent";
import CardsComponent from "components/features/CardsComponent";
// styles
import Wrap from "./styles";

const Main = () => (
  <Wrap>
    <Title />
    <Controls />
    <CardsComponent />
  </Wrap>
);

export default Main;
