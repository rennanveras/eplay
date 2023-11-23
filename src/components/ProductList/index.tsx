import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <S.Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          <Product
            category="Ação"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="windows"
            title="Nome do jogo"
          />
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
