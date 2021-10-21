import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;

const WrapDesc = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescTitle = styled.span`
  font-size: 10px;
  color: #fff;
  opacity: 0.8;
`;

const DescPosition = styled.button`
  color: #fff;
`;

const CardDescription = ({ relaesed, genres }) => (
  <Wrap>
    {relaesed && (
      <WrapDesc>
        <DescTitle>Release date:</DescTitle>
        <DescPosition>{relaesed}</DescPosition>
      </WrapDesc>
    )}
    {genres.length > 0 && (
      <WrapDesc>
        <DescTitle>Genres:</DescTitle>
        <DescPosition>
          {genres.map((genre) => (
            <button key={genre.name}>{genre.name}</button>
          ))}
        </DescPosition>
      </WrapDesc>
    )}
  </Wrap>
);

export default CardDescription;
