import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WrapItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 5px;
  }

  &:hover button {
    ${({ size }) => size !== "big" && "filter: invert(100%) saturate(7500%) hue-rotate(322deg) brightness(118%);"}
  }
`;

export {
  Wrap,
  WrapItem,
};
