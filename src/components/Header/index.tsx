import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <img src={logo} alt="EPLAY" />
        <nav>
          <S.ListLinks>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
          </S.ListLinks>
        </nav>
      </div>
      <S.LinkCart href="#">
        0 - Produto(s)
        <img src={carinho} alt="Carrinho de compras" />
      </S.LinkCart>
    </S.HeaderBar>
  )
}

export default Header
