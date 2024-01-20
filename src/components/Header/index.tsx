import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const navLinks = [
    {
      to: '/categorias',
      label: 'Categorias',
      id: 1
    },
    {
      to: '/#on-sale',
      label: 'Novidades',
      id: 2
    },
    {
      to: '/#coming-soon',
      label: 'Promoções',
      id: 3
    }
  ]

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.ListLinks>
              {navLinks.map((itemsNav) => (
                <S.LinkItem key={itemsNav.id}>
                  <Link to={itemsNav.to}>{itemsNav.label}</Link>
                </S.LinkItem>
              ))}
            </S.ListLinks>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          <div>
            {items.length}
            <span> - {items.length > 1 ? 'Produtos' : 'Produto'}</span>
          </div>
          <img src={carinho} alt="Carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.ListLinks>
          {navLinks.map((itemsNav) => (
            <S.LinkItem key={itemsNav.id}>
              <Link to={itemsNav.to}>{itemsNav.label}</Link>
            </S.LinkItem>
          ))}
        </S.ListLinks>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
