import styled from "styled-components";

const Platforms = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const PlatformLogo = styled.div`
  height: 10px;
  margin: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
  Platforms,
  PlatformLogo,
};
