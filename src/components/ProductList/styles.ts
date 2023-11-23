import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { CardProduct } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${CardProduct} {
    background-color: ${(props) =>
      props.background === 'gray' ? cores.preto : cores.cinza};
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`
