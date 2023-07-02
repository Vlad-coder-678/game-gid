import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-cntent: center;
  align-items: center;
`;

const DetailsTitle = styled.h1`
  margin: 10px;
`;

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  align-iems: center;
  margin: 10px;
  padding: 10px;
  width: 70%;
  border-bottom: 2px solid #333;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin: 10px auto 30px;
`;

export {
  Wrap,
  DetailsTitle,
  Desc,
  Buttons,
};
