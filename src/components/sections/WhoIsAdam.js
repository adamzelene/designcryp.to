import React from 'react'
import styled from 'styled-components'

import { h4, BodyMedium } from '../styles'
import profPic from '../../images/ProfPic.png'

export const WhoIsAdam = () => {
  return (
    <IntroContainer>
      <ProfPic src={profPic} />
      <IntroHeader>
        👋 <br />
        Hi I'm Adam
      </IntroHeader>
      <IntroBody>
        I’m a digital product designer working in the Ethereum ecosystem. <br />
        <br />I help people, DAOs, &amp; people that identify as DAOs design
        simple crypto apps.
      </IntroBody>
    </IntroContainer>
  )
}

const ProfPic = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 32px;
`
const IntroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center; ;
`

const IntroHeader = styled(h4)`
  margin: 0;
  text-align: center;
`
const IntroBody = styled(BodyMedium)`
  max-width: 600px;
  text-align: center;

  @media (max-width: 960px) {
    max-width: 80vw;
  }
`
