// vendor imports
import React from "react";

// local imports
// data
import notFoundData from "../data/notFoundData";
// components
import Wrap from "../components/pages/notFound/styles";

const NotFound = () => (
  <Wrap>
    <h3>Error 404</h3>
    <p>This page not found.</p>
    <img src={notFoundData.imgPath} alt={notFoundData.imgAlt} width="300px" />
    {/* <p>Please keep calm and try again.</p> */}
  </Wrap>
);

export default NotFound;
