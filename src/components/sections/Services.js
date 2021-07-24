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
          <CardStructure>
            <ServicesCard>
              <Item>
                <CardListItemIcon />
                <TextContainer>
                  <CardListItemTitle>Design</CardListItemTitle>
                  <CardListItemBody>
                    Idea to implementation; I help teams design simple crypto
                    apps. I've designed web &amp; mobile experiences for large
                    companies &amp; startups.
                  </CardListItemBody>
                </TextContainer>
              </Item>

              <Item>
                <CardListItemIcon />
                <TextContainer>
                  <CardListItemTitle>Product</CardListItemTitle>
                  <CardListItemBody>
                    I believe great product teams dance on a thin line between
                    intuition and data-driven decisions. My product philosophy
                    values fluidly coordination between engineering, business,
                    &amp; design to create human-centered products.
                  </CardListItemBody>
                </TextContainer>
              </Item>
              <Item>
                <CardListItemIcon />
                <TextContainer>
                  <CardListItemTitle>Front End Dev</CardListItemTitle>
                  <CardListItemBody>
                    Proficient with HTML, CSS, and putting that HTML / CSS into
                    React. Getting better at JS all the time, but still pretty
                    junior. For me, Front End Dev is another tool in the
                    designer's toolbox to test assumptions quickly.
                  </CardListItemBody>
                </TextContainer>
              </Item>
            </ServicesCard>
          </CardStructure>
        </ContentWrapper>
      </RainbowSection>
    </>
  )
}
// Styles

const RainbowSection = styled.section`
  width: 100vw;

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

const CardStructure = styled.div`
  /* width: 100%; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    flex-flow: column;
    justify-content: space-between;
    /* height: calc(100% + 10vh); */
  }
`
const ServicesCard = styled(cardDefault)`
  padding: calc(16px + 2vw);
  max-width: 50vw;

  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 960px) {
    max-width: 95vw;
    margin-top: 5vh;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const CardListItemIcon = styled.img`
  width: 32px;
  height: 32px;
  /* width: calc(24px + 2vw); */
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-left: 16px;
`

const CardListItemTitle = styled(h4)`
  /* line-height: 0; */
  margin-bottom: 8px;
  margin: 0;
`
const CardListItemBody = styled(p)`
  margin: 0;
`

//   Type

const Title = styled(h1)`
  text-align: center;
  grid-column: 1;
  width: 100%;

  @media (max-width: 960px) {
    grid-column: 2;
  }
`
