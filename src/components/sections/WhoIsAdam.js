import React from 'react'
import styled from 'styled-components'

import profPic from '../../images/ProfPic.png'

export const WhoIsAdam = () => {
  return (
    <IntroContainer>
      <img src={profPic} />
      <IntroHeader>Hi I'm Adam</IntroHeader>
      <IntroBody>
        I’m a digital product designer working in crypto. I help people, DAOs, &
        people that are DAOs design simple crypto apps.
      </IntroBody>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column;
`
