import styled from "styled-components";

const Wrap = styled.nav`
  width: 100%;
  height: 100px;
  padding: 24px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .activeLink {
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const LogWrap = styled.div`
  flex-basis: 25%;
  order: 1;

  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

const Logo = styled.button`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 5px;
  font-weight: 900;
  text-transform: uppercase;

  &:hover {
    color: #777;
  }
`;

const SearchWrap = styled.div`
  margin: 10px 0;
  flex-basis: 40%;
  order: 2;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    order: 3;
  }
`;

const LogIn = styled.button`
  flex-basis: 25%;
  order: 3;

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export {
  LogIn,
  Logo,
  LogWrap,
  SearchWrap,
  Wrap,
};
