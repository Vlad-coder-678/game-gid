import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 180px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTop = ({ bg, name }) => (
  <Wrap>
    <img src={bg} alt={name} />
  </Wrap>
);

export default CardTop;
