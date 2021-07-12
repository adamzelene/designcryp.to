import React from 'react'
import styled from 'styled-components'

import { h1, h5, a, colors } from '../styles'

export const CenteredList = (props) => {
  return (
    <SectionWrapper>
      <TextWrapper>
        <ListHeader>{props.header}</ListHeader>
        {props.linkList
          ? props.listLinks.map((item, index) => (
              <ListLink target="_blank" href={item.url} key={index}>
                {item.linkName}
              </ListLink>
            ))
          : props.listItemsArray.map((item, index) => (
              <ListItem key={index}> {item} </ListItem>
            ))}
      </TextWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100vw;
  height: auto;
  min-height: 66vh;
  display: grid;
  justify-items: center;
  align-items: center;

  margin: calc(10vh + 8vw) 0px;

  grid-template-columns:
    minmax(auto, 6vw)
    1fr
    minmax(auto, 6vw);

  @media (max-width: 768px) {
    min-height: 30vh;
  }
`

const ListHeader = styled(h5)`
  text-align: center;
  grid-column: 2/3;
`
const ListItem = styled(h1)`
  text-align: center;
  grid-column: 2/3;
`

const ListLink = styled(a)`
  font-family: 'Barlow', Helvetica, sans-serif;
  font-size: calc(42px + 3vw);
  font-weight: 600;
  line-height: calc(56px + 10vw);
  letter-spacing: -0.1vw;
  text-align: center;
  color: ${colors.text};

  display: block;

  &:hover {
    color: gray;
  }
`

const TextWrapper = styled.div`
  max-width: calc(900px + 6vw);
  grid-column: 2 / 3;
`
