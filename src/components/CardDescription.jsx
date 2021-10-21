import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;

const WrapDesc = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: ${({ line }) => (line ? '2px solid #333' : 'none')};
`;

const DescTitle = styled.span`
  font-size: 12px;
  color: #fff;
  opacity: 0.4;
`;

const DescPosition = styled.span`
  max-width: 70%;
  text-align: end;
  font-size: 12px;
  color: #fff;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;

  button {
    font-size: 12px;
    color: #fff;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const CardDescription = ({ released, genres }) => (
  <Wrap>
    {released && (
      <WrapDesc line={genres.length > 0}>
        <DescTitle>Release date:</DescTitle>
        <DescPosition>{released}</DescPosition>
      </WrapDesc>
    )}
    {genres.length > 0 && (
      <WrapDesc>
        <DescTitle>Genres:</DescTitle>
        <DescPosition>
          {genres.map((genre, index) => (
            <span>
              <button key={genre.name}>{genre.name}</button>
              {index < genres.length - 1 && ', '}
            </span>
          ))}
        </DescPosition>
      </WrapDesc>
    )}
  </Wrap>
);

export default CardDescription;
