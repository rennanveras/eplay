import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branca};
    border: 1px solid ${cores.branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
export const TabButton = styled.button.attrs<TabButtonProps>(() => ({
  as: 'button'
}))<TabButtonProps>`
  cursor: pointer;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  color: ${cores.branca};
  font-weight: bold;
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preto)};
  border: none;
  margin-right: 16px;

  img {
    margin-right: 8px;
  }
`
