import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  ${({ size }) => size === "small" && "width: auto;"}
  ${({ size }) => size === "medium" && "width: 30px;"}
  height: ${({ size }) => (size === "small" ? "20" : "30")}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000;
  border-radius: 3px;
  margin: 2px;
  padding: 3px;

  img {
    ${({ size }) => {
    switch (size) {
      case "small": return "height: 10px;";
      case "medium": return "height: 15px;";
      default: return "height: 30px;";
    }
  }}
  }

  span {
    margin-left: 3px;
    font-size: 10px;
  }

  ${({ size }) => size !== "big" && css`
    filter: invert(15%) saturate(192%) hue-rotate(183deg) contrast(85%);

    &:hover {
      filter: invert(100%) saturate(7500%) hue-rotate(322deg) brightness(118%);
    }
  `}
`;

export default Button;
