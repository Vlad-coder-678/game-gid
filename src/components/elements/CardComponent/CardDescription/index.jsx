// vendor imports
import React from "react";

// local imports
import { DescPosition, DescTitle, Wrap, WrapDesc } from "./styles";

const CardDescription = ({ released, genres }) => (
  <Wrap>
    {released && (
      <WrapDesc line={genres?.length > 0}>
        <DescTitle>Release date:</DescTitle>
        <DescPosition>{released}</DescPosition>
      </WrapDesc>
    )}
    {genres?.length > 0 && (
      <WrapDesc>
        <DescTitle>Genres:</DescTitle>
        <DescPosition>
          {genres.map(({ name }, index) => (
            <span key={name}>
              <button>{name}</button>
              {index < genres.length - 1 && ", "}
            </span>
          ))}
        </DescPosition>
      </WrapDesc>
    )}
  </Wrap>
);

export default CardDescription;
