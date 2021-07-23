import React from 'react'
import styled from 'styled-components'

import rainbow from '/src/images/coolGradRight.svg'

import { h1, h4, p, cardDefault } from '../styles'

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
                Idea to implementation; I help teams design simple crypto apps.
                I have experience working with bank analytics dashboards,
                lending applications, &amp; inclusively designed applications
                for all ages. I'm good at taking complicated things and working
                with myself or a team to distill it into its fundamentals.
              </CardListItemBody>

              <CardListItemTitle>Product</CardListItemTitle>
              <CardListItemBody>
                Product strategies aren't one-size-fits-all. Many factors play a
                role in helping teams acheive desired outcomes but one constant
                is focus on the human using the product. Without empathy,
                products fail to serve users; without frequent feedback loops,
                products become rooted in assumption. I believe good product
                teams dance on the line between intuition and rational decision
                making.
              </CardListItemBody>

              <CardListItemTitle>Front End Dev</CardListItemTitle>
              <CardListItemBody>
                Proficient with HTML, CSS, and putting that HTML / CSS into
                React. Getting better at JS all the time, but still pretty
                junior. For me, Front End Dev is another tool in the designer's
                toolbox to test assumptions quickly.
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
  /* height: 100vh; */

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

// const ContentWrapper = styled.div`
//   grid-column: 2 /4;

//   display: grid;
//   align-items: center;
//   justify-content: center;

//   grid-template-columns: 1fr 1fr;

//   @media (max-width: 960px) {
//     grid-column: 2;
//     grid-template-columns: 5vw 1fr 5vw;
//   } ;
// `
const ContentWrapper = styled.div`
  grid-column: 2 /4;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

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
  background: rgba(0, 0, 0, 0.7);
  @media (max-width: 960px) {
    grid-column: 2;
  }
`

const CardItem = styled.div`
  width: 100%;
  height: auto;
  grid-column: 2;
`

const CardListItemTitle = styled(h4)`
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
