import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  word-wrap: break-word;
  white-space: normal;
`;

const CardTitle = ({ title }) => <Title>{title}</Title>;

export default CardTitle;
