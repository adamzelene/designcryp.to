import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles';

export const One = () => {
  return (
    <Wrapper>
      <Outer>
        <Inner></Inner>
      </Outer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 80px;
  height: 80px;
`;

const Outer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 8px solid ${colors.text};
  display: grid;
`;

const Inner = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: ${colors.text};
  place-self: center;
`;
