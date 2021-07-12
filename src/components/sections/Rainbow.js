import React from 'react'
import styled, { keyframes } from 'styled-components'

import { h1, h2, h5, colors } from '../styles'

import { RainbowBg } from '/src/components/atoms'

export const Rainbow = (props) => {
  if (props.graphic) {
    return (
      <RainbowBg>
        <ContentWrapper>
          <Image src={props.img} />
          <GraphicTextWrapper>
            <Text>{props.text}</Text>
          </GraphicTextWrapper>
        </ContentWrapper>
      </RainbowBg>
    )
  } else if (props.status) {
    return (
      <>
        <RainbowBg>
          <ContentWrapper>
            <StatusHeader>{props.header}</StatusHeader>
            <StatusWrapper>
              <BlinkingStatus />
              <BigText>{props.text}</BigText>
            </StatusWrapper>
          </ContentWrapper>
        </RainbowBg>
      </>
    )
  }
}

/// Base (shared across variants) Styling ///

// Dark Content BG
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: calc(16px + 2vw) auto calc(16px + 2vw);
  grid-template-rows: calc(16px + 2vw) auto auto calc(16px + 2vw);

  max-width: 1080px;

  grid-column: 2 / 3;

  border-radius: 48px;

  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 1);
`

// Text
const Text = styled(h2)`
  text-align: center;
`

////// Graphic Variant //////

const GraphicTextWrapper = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  place-self: center;

  max-width: calc(460px + 6vw);
`

const Image = styled.img`
  max-width: calc(50% + 6vw);
  height: auto;

  grid-row: 2 / 3;
  grid-column: 2 / 3;
  place-self: center;
`

////// Status Variant //////

const StatusHeader = styled(h5)`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  place-self: center;
`

const StatusWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  place-self: center;

  margin-top: 32px;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: calc(10px + 1vw) auto;
  column-gap: 2vw;

  @media (max-width: 500px) {
    grid-template-columns: auto;
  } ;
`

// Text
const BigText = styled(h1)`
  text-align: center;
`

// Blinking Status
const pulse = keyframes`
0%{
  opacity:.0;
}
50%{
  opacity:1;
}
100%{
  opacity:0;
}`

const BlinkingStatus = styled.div`
  height: calc(10px + 1vw);
  width: calc(10px + 1vw);
  border-radius: 100%;
  place-self: center;

  animation: ${pulse} 1.5s infinite ease-in-out;
  background-color: ${colors.orbs.anahataGreen};

  @media (max-width: 500px) {
    visibility: hidden;
  } ;
`
