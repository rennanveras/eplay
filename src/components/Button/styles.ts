import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  background-color: transparent;
  color: ${cores.branca};
  font-weight: bold;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  background-color: transparent;
  color: ${cores.branca};
  font-weight: bold;
  border-radius: 8px;
`
