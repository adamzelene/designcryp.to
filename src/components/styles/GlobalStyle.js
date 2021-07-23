import { createGlobalStyle } from 'styled-components'

import { colors } from './Colors'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background}
  }
`

export default GlobalStyle
