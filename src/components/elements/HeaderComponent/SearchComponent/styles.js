import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 15px;
    outline: none;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }

  button {
    margin-left: 10px;
  }
`;

const VisualHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export {
  Wrap,
  VisualHidden,
};
