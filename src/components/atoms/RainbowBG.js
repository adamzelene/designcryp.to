import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles'

import rainbow from '/src/images/rainbowDefault.svg'

export const RainbowBg = (props) => {
  return <RainbowSection>{props.children}</RainbowSection>
}

const RainbowSection = styled.section`
  width: 100vw;
  height: 100vh;

  flex-flow: column;
  align-items: center;
  justify-content: center;

  background-image: url(${rainbow});
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  /* grid-template-columns: minmax(auto, 2em) minmax(320px, 860px) minmax(
      auto,
      2em
    ); */

  grid-template-columns: 10vw minmax(calc(320px - 1vw), calc(760px + 10vw)) 10vw;
`
