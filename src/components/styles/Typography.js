import styled from 'styled-components'

import { colors } from './Colors'

export const h1 = styled.h1`
  font-family: 'Barlow', Helvetica, sans-serif;
  font-size: calc(42px + 3vw);
  font-weight: 600;
  line-height: calc(48px + 2vw);
  letter-spacing: calc(-1px - 0.1vw);
  text-align: left;
  color: ${colors.text};
`

export const h2 = styled.h2`
  font-family: 'Barlow', Helvetica, sans-serif;
  font-size: calc(24px + 2vw);
  font-style: normal;
  font-weight: 600;
  line-height: calc(24px + 2vw);
  letter-spacing: calc(-1px - 0.04vw);
  text-align: left;
  color: ${colors.text};
`

export const h3 = styled.h3`
  font-family: 'Barlow', Helvetica, sans-serif;
  font-size: calc(18px + 2vw);
  font-style: normal;
  font-weight: 600;
  line-height: calc(20px + 3vw);
  letter-spacing: -0.03em;
  text-align: left;
  color: ${colors.text};
`
export const h4 = styled.h4`
  font-family: 'Barlow', Helvetica, sans-serif;
  font-size: calc(16px + 2vw);
  font-style: normal;
  font-weight: 600;
  /* line-height: calc(24px + 2vw); */
  letter-spacing: calc(-1px - 0.04vw);
  text-align: left;
  color: ${colors.text};
`

export const h5 = styled.h5`
  font-family: 'Barlow', Helvetica, sans-serif;
  /* font-size: 32px; */
  font-size: calc(12px + 2vw);
  font-style: normal;
  font-weight: 300;
  line-height: calc(12px + 3vw);
  letter-spacing: 0.05em;
  text-align: left;
  text-transform: uppercase;
  color: ${colors.text};
`

export const p = styled.p`
  font-family: 'Barlow', Helvetica, sans-serif;
  font-size: calc(10px + 1vw);
  font-style: normal;
  font-weight: 300;
  line-height: calc(16px + 1vw);
  letter-spacing: -0.03em;
  text-align: left;
  color: ${colors.text};
`

export const a = styled.a`
  text-decoration: underline ${colors.text};
`
