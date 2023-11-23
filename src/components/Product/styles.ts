import styled from 'styled-components'
import { cores } from '../../styles'
import { TagStyle } from '../Tag/styles'

export const CardProduct = styled.li`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;

  ${TagStyle} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
`

export const Description = styled.p`
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 16px;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
