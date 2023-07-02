import styled from "styled-components";

const Wrap = styled.select`
  background-color: #333;
  line-height: 2rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  outline: none;
`;

const Option = styled.option`
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 5px;
`;

export {
  Option,
  Wrap,
};
