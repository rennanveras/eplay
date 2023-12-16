import Button from '../Button'

import * as S from './styles'

import star from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.Sidebar>
        <ul>
          <S.CartItem>
            <img src={star} alt="" />
            <div>
              <h3>start wars</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={star} alt="" />
            <div>
              <h3>start wars</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.Quantity>2 jogos no carrinho</S.Quantity>
        <S.Prices>
          Total de R$250,00
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          variant="secondary"
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
