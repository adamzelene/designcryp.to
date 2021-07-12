import React from 'react'
import styled from 'styled-components'

import rainbow from '/src/images/coolGradRight.svg'

import { h1, h3, p, cardDefault } from '../styles'

export const Services = () => {
  return (
    <>
      <RainbowSection>
        <ContentWrapper>
          <Title> How I Can Help</Title>
          <ServicesCard>
            <CardItem>
              <CardListItemTitle>Design</CardListItemTitle>
              <CardListItemBody>
                Idea to implementation. I help teams create simple software
                through empathetic, rapid prototyping. I believe we are all
                designers.
              </CardListItemBody>

              <CardListItemTitle>Product</CardListItemTitle>
              <CardListItemBody>
                Idea to implementation. I help teams create simple software
                through empathetic, rapid prototyping. I believe we are all
                designers.
              </CardListItemBody>
            </CardItem>
          </ServicesCard>
        </ContentWrapper>
      </RainbowSection>
    </>
  )
}
// Styles

const RainbowSection = styled.section`
  width: 100vw;
  height: 100vh;

  padding: 10vh 0;

  display: grid;
  align-items: center;
  justify-content: center;

  background-image: url(${rainbow});
  background-repeat: no-repeat;
  background-size: cover;

  grid-template-columns: 5vw 45vw 45vw 5vw;

  @media (max-width: 960px) {
    grid-template-columns: 5vw 1fr 5vw;
    /* grid-template-rows: 20vh 1fr; */
  } ;
`

const ContentWrapper = styled.div`
  grid-column: 2 /4;

  display: grid;
  align-items: center;
  justify-content: center;

  grid-template-columns: 1fr 1fr;

  @media (max-width: 960px) {
    grid-column: 2;
    grid-template-columns: 5vw 1fr 5vw;
  } ;
`

const ServicesCard = styled(cardDefault)`
  height: auto;
  max-width: 600px;

  display: grid;
  grid-template-columns: 3vw 1fr 3vw;

  grid-column: 2;

  @media (max-width: 960px) {
    grid-column: 2;
  }
`

const CardItem = styled.div`
  width: 100%;
  height: auto;
  grid-column: 2;
`

const CardListItemTitle = styled(h3)`
  line-height: 0;
`
const CardListItemBody = styled(p)``

//   Type

const Title = styled(h1)`
  text-align: center;
  grid-column: 1;
  width: 100%;

  @media (max-width: 960px) {
    grid-column: 2;
  }
`
