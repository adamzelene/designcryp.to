import React from 'react';
import styled from 'styled-components';
import {
  MainHero,
  Rainbow,
  CenteredList,
  Footer,
} from '../components/sections';

import pic from '/src/images/0to1.png';

// const Home = () => {
//   return (
//     <HomePageWrapper>
//       <MainHero
//         header="Zack Lambert"
//         subheader="a human designing for humans"
//       />
//       <Rainbow
//         graphic
//         img={pic}
//         text="I help teams turn complex ideas into simple software."
//       />
//       <CenteredList
//         header="Former Clients"
//         listItemsArray={[
//           'Fortune 50 Banks',
//           'Fintech Startups',
//           'Eldertech Startup',
//         ]}
//       />
//       <Rainbow status header="Currently" text="Available for Work" />
//       <CenteredList
//         linkList
//         header="Find Me"
//         listLinks={[
//           {
//             id: 1,
//             linkName: 'Linkedin',
//             url: 'https://www.linkedin.com/in/zacklambert/',
//           },
//           {
//             id: 2,
//             linkName: 'Twitter',
//             url: 'https://twitter.com/zacklambert_',
//           },
//           {
//             id: 3,
//             linkName: 'Instagram',
//             url: 'https://www.instagram.com/zacklambert_/',
//           },
//         ]}
//       />
//       <Footer />
//     </HomePageWrapper>
//   );
// };

export default Home;

const HomePageWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  row-gap: 4em;
`;
