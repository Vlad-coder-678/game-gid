import styled from "styled-components";

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export default Container;
