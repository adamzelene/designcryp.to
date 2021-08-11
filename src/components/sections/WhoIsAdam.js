import React from 'react'
import styled from 'styled-components'

import { h4, BodyMedium, colors } from '../styles'
import profPic from '../../images/ProfPic.png'

import midGrad from '../../images/midGrad.svg'

export const WhoIsAdam = () => {
  return (
    <IntroContainer>
      <ContentCard>
        <ProfPic src={profPic} />
        <IntroHeader>
          👋 <br />
          Hi I'm Adam
        </IntroHeader>
        <IntroBody>
          I’m a digital product designer helping bring Ethereum to the world.
          <br />
          <br />I help people &amp; DAOs design new apps or simplify existing
          ones.
        </IntroBody>
      </ContentCard>
    </IntroContainer>
  )
}

const ProfPic = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 32px;
`
const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;

  background-image: url(${midGrad});
  background-repeat: no-repeat;
  background-size: cover;
`

const ContentCard = styled.div`
  width: min(20vw 320px);
  height: auto;
  padding: 40px;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 13px 85px 0px ${colors.black};
  background-color: ${colors.background};
  border-radius: 42px;

  max-width: 800px;

  /* grid-column: 2 / 3; */
`

const IntroHeader = styled(h4)`
  margin: 0;
  text-align: center;
`
const IntroBody = styled(BodyMedium)`
  max-width: 600px;
  text-align: center;
  orphans: 0;

  @media (max-width: 960px) {
    max-width: 80vw;
  }
`
