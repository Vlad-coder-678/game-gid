import React from "react";
import styled from "styled-components";

import notFoundData from "../data/notFoundData";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 10px 0;
  }
`;

const NotFound = () => (
  <Wrap>
    <h3>Error 404</h3>
    <p>This page not found.</p>
    <img src={notFoundData.imgPath} alt={notFoundData.imgAlt} width="300px" />
    {/* <p>Please keep calm and try again.</p> */}
  </Wrap>
);

export default NotFound;
