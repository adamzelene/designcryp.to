import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../components/styles'
import {
  MainHero,
  Rainbow,
  Services,
  CenteredList,
  WhoIsAdam,
} from '../components/sections'

import { Metadata } from '../components/quarks'

import pic from '/src/images/0to1.png'

const Home = () => {
  return (
    <>
      <Metadata />
      <GlobalStyle />

      <HomePageWrapper>
        <MainHero header="Adam Zelene" subheader="crypto product designer" />
        <WhoIsAdam />
        <CenteredList
          header="Work Experience"
          listItemsArray={[
            'Fortune 50 Banks',
            'Fintech Startups',
            'Inclusive Design Startup',
          ]}
        />
        <Rainbow graphic img={pic} text="I help create simple crypto apps." />
        {/* <Services /> */}
        <CenteredList
          header="Skills"
          listItemsArray={[
            'UX Design',
            'UI Design',
            'Web / Mobile',
            'Design Systems',
            'Audits & Redesigns',
            'Rapid Prototyping',

            'User Research',
            'Usability Testing',
            'HTML / CSS',
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
            {
              id: 2,
              linkName: 'adamzelene.eth',
              url:
                'https://etherscan.io/address/0xd56fb4d8b7c235af2a40f2fafab3f5888ad86726',
            },
          ]}
        />
      </HomePageWrapper>
    </>
  )
}

export default Home

const HomePageWrapper = styled.div`
  /* display: grid;
  grid-template-rows: repeat(7, auto);
  overflow: hidden; */

  @media (max-width: 768px) {
    row-gap: 1em;
  }
`
