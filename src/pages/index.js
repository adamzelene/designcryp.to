import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../components/styles'
import {
  MainHero,
  Rainbow,
  Services,
  CenteredList,
  Footer,
} from '../components/sections'

import { Metadata } from '../components/quarks'

import pic from '/src/images/0to1.png'

const Home = () => {
  const test = ''
  return (
    <>
      <Metadata />
      <GlobalStyle />

      <HomePageWrapper>
        <Services />
        <MainHero header="Adam Zelene" subheader="crypto designer" />
        <Rainbow
          graphic
          img={pic}
          text="I help create simple crypto apps."
        />
        <CenteredList
          header="Former Clients"
          listItemsArray={[
            'Fortune 50 Banks',
            'Fintech Startups',
            'Eldertech Startup',
          ]}
        />
        <Rainbow status header="Currently" text="Available for Work" />

        <CenteredList
          linkList
          header="Find Me"
          listLinks={[
            {
              id: 1,
              linkName: 'Linkedin',
              url: 'https://www.linkedin.com/in/zacklambert/',
            },
            {
              id: 2,
              linkName: 'Twitter',
              url: 'https://twitter.com/zacklambert_',
            },
            {
              id: 3,
              linkName: 'Instagram',
              url: 'https://www.instagram.com/zacklambert_/',
            },
          ]}
        />
        <Footer />
      </HomePageWrapper>
    </>
  )
}

export default Home

const HomePageWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  overflow: hidden;
  @media (max-width: 768px) {
    row-gap: 1em;
  }
`
