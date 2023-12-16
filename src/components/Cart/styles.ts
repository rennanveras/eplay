import styled from 'styled-components'

import { cores } from '../../styles'
import { TagStyle } from '../Tag/styles'
import { ButtonStyle } from '../Button/styles'

import close from '../../assets/images/gadgets/close.png'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: inherit;
  height: inherit;
  background-color: #000;
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0;
  color: ${cores.branca};
  max-width: 360px;
  width: 100%;

  ${ButtonStyle} {
    width: 100%;
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  gap: 23px;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;

  img {
    height: 80px;
    width: 80px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  ${TagStyle} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 8px;
    cursor: pointer;
  }
`
