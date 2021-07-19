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
  return (
    <>
      <Metadata />
      <GlobalStyle />

      <HomePageWrapper>
        <MainHero header="Adam Zelene" subheader="crypto designer" />
        <Rainbow graphic img={pic} text="I help create simple crypto apps." />
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
          header="Follow Me"
          listLinks={[
            {
              id: 1,
              linkName: 'Twitter',
              url: 'https://twitter.com/adamzelene',
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