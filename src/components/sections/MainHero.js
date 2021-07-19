import React from 'react'
import styled from 'styled-components'

import { h1 } from '../styles'

import orbs from '/src/images/Orbs.png'

import rainbowHero from '/src/images/MainHeroBG.svg'

export const MainHero = (props) => {
  return (
    <ContentWrapper>
      <TextWrapper>
        <Header>{props.header}</Header>
        <Subheader>{props.subheader}</Subheader>
      </TextWrapper>
      <OrbWrapper>
        <Orbs src={orbs} />
      </OrbWrapper>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: calc(16px + 2vw) auto calc(16px + 2vw);
  grid-template-rows: calc(16px + 2vw) auto auto calc(16px + 2vw);
  height: 100vh;
  width: 100vw;
  max-width: 1080px;

  grid-column: 2 / 3;

  border-radius: 48px;

  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 1);
`

const SectionWrapper = styled.header`
  display: grid;
  grid-template-columns: 3vw auto auto 3vw;
  grid-template-rows: 100vh;

  /* background-image: url(${rainbowHero}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */

  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    /* min-height: 100vh; */
    height: auto;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 60vh auto;
    justify-items: center;
  }
`

const OrbWrapper = styled.div`
  display: grid;

  grid-column: 3/4;

  @media (max-width: 768px) {
    grid-column: 2/3;
    grid-row: 2 / 3;
  }
`

const Orbs = styled.div`
  /* height: calc(640px + 4vw);
  width: calc(123px + 4vw); */
  height: 640px;
  width: 123px;
  background-image: url(${orbs});
  background-repeat: no-repeat;
  background-size: cover;
`

const TextWrapper = styled.div`
  display: grid;
  grid-row: 10px 90%;

  grid-column: 2/3;
  @media (max-width: 768px) {
    grid-column: 2/3;
    justify-items: center;
  }
`

const Header = styled(h1)`
  margin-bottom: calc(-2px - 0.5vw);
  display: relative;

  @media (max-width: 768px) {
    place-self: center;
  }
`

const Subheader = styled(h1)`
  color: #888888;
  margin-top: 8px;
`
