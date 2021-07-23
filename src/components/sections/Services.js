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
          <CardWrapper>
            <ServicesCard>
              <CardListItemTitle>Design</CardListItemTitle>
              <CardListItemBody>
                Idea to implementation; I help teams design simple crypto apps.
                I've designed web &amp; mobile experiences for large companies
                &amp; startups.
              </CardListItemBody>
            </ServicesCard>

            <ServicesCard>
              <CardListItemTitle>Product</CardListItemTitle>
              <CardListItemBody>
                I believe great product teams dance on a thin line between
                intuition and data-driven decisions. My product philosophy
                values fluidly coordination between engineering, business, &amp;
                design to create human-centered products.
              </CardListItemBody>
            </ServicesCard>

            <ServicesCard>
              <CardListItemTitle>Front End Dev</CardListItemTitle>
              <CardListItemBody>
                Proficient with HTML, CSS, and putting that HTML / CSS into
                React. Getting better at JS all the time, but still pretty
                junior. For me, Front End Dev is another tool in the designer's
                toolbox to test assumptions quickly.
              </CardListItemBody>
            </ServicesCard>
          </CardWrapper>
        </ContentWrapper>
      </RainbowSection>
    </>
  )
}
// Styles

const RainbowSection = styled.section`
  width: 100vw;
  /* height: 200vh; */

  padding: 6vh 0;

  display: grid;
  align-items: center;
  justify-content: center;

  background-image: url(${rainbow});
  background-repeat: no-repeat;
  background-size: cover;
  /* grid-template-columns: 5vw 45vw 45vw 5vw; */

  @media (max-width: 960px) {
    grid-template-columns: 5vw 1fr 5vw;
    /* grid-template-rows: 20vh 1fr; */
  } ;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  @media (max-width: 960px) {
    grid-column: 2;
    /* grid-template-columns: 5vw 1fr 5vw; */
  } ;
`

const CardWrapper = styled.div`
  /* width: 100%; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-flow: column;
    justify-content: space-between;
    /* height: calc(100% + 10vh); */
  }
`

const ServicesCard = styled(cardDefault)`
  padding: calc(16px + 2vw);
  max-width: 23%;

  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 960px) {
    max-width: 90vw;
    margin-top: 5vh;
  }
`

const CardListItemTitle = styled(h4)`
  /* line-height: 0; */
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
