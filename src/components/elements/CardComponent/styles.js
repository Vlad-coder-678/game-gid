import styled from "styled-components";

const Wrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 12px;
  overflow: hidden;
  transition: ease 0.3s;
  background-color: #202020;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);

  a {
    cursor: default;
  }

  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

const CardInfo = styled.div`
  position: relative;
  padding: 10px;
`;

const CardTitle = styled.h2`
  word-wrap: break-word;
  white-space: normal;
`;

const CardMetacritic = styled.div`
  width: 27px;
  height: 25px;
  top: 10px;
  right: 10px;
  font-size: 14px;
  font-weight: 900;
  background-color: transparent;
  color: #6dc849;
  border: 1px solid #6dc849;
  border-radius: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  CardInfo,
  CardMetacritic,
  CardTitle,
  Wrap,
};
