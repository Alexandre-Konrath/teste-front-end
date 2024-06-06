import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html, body {
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.colors.header};
  }

  h1 {
    font-weight: 400;
  }
`
