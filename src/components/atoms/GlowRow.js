import React from 'react';
import styled from 'styled-components';
import { Orb } from '../quarks';
import { colors } from '../styles/Colors';

export const GlowRow = () => {
  // convert object to values array
  const orbData = Object.values(colors.orbs);

  return (
    <Wrapper>
      {orbData.map((color, index) => (
        <Orb color={color} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 200px;
  height: 100vh;
`;
