import React from 'react'
import styled from 'styled-components'

import { One } from '../quarks'
import rainbow from '/src/images/RainbowTopVariant.svg'

export const Footer = () => {
  return (
    <RainbowFooter>
      <One />
    </RainbowFooter>
  )
}

export const RainbowFooter = styled.footer`
  width: 100vw;
  height: 100vh;

  display: grid;
  /* grid-template-columns: minmax(auto, 2em) minmax(320px, 860px) minmax(
      auto,
      2em
    ); */
  align-items: center;
  justify-items: center;
  background-image: url(${rainbow});
  background-repeat: no-repeat;
  background-size: cover;
`
