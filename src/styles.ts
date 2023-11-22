import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84'
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
