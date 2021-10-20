import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Wrap = styled.div`
  ul {
    li {
      list-style: none;
      margin: 5px;
    }
  }
`;

const Content = ({ cards }) => (
  <Wrap>
    <ul>
      {cards
        && cards.map((item) => (
          <li key={item.title}>
            <Card img={item.urlToImage} title={item.title} desc={item.description} path={item.url} />
          </li>
        ))}
    </ul>
  </Wrap>
);

export default Content;
