import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Orb = (props) => {
  return <Glow color={props.color} />;
};

const Glow = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  /* background-color: background: #A54994 1%; */
  /* box-shadow: 0px 0px 40px 0px ${(props) => props.color}; */

  background: radial-gradient(
    ellipse at center,
    rgba(206, 127, 0, 0.65) 0%,
    rgba(206, 127, 0, 0) 60%
  );
`;

/* box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.5); */
/* background: radial-gradient(
    50% 50% at 50% 50%,
    #a54994 0%,
    ${(props) => props.color} 40% 35%,
    ${(props) => props.color} 15% 65%,
    ${(props) => props.color} 0% 100%
  ); */
