import styled from 'styled-components'
import { TagStyle } from '../Tag/styles'

export const Imagem = styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 560px;
  display: flex;
  align-items: end;
  font-weight: bold;
  position: relative;
  padding-bottom: 54px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagStyle} {
    position: absolute;
    top: 32px;
  }
`

export const TituloBanner = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
