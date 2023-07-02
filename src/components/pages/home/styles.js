import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BurgerMenu = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  width: 22px;
  height: 22px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export {
  BurgerMenu,
  Wrap,
};
