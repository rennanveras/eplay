import Tag from '../Tag'
import * as S from './styles'

const Product = () => {
  return (
    <S.CardProduct>
      <img src="//placehold.it/222x250" alt="" />
      <S.TitleCard>Nome do jogo</S.TitleCard>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <S.DescriptionCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur
        adipisci voluptatum repellendus praesentium officia reiciendis facilis
        blanditiis aliquam, voluptate rerum recusandae beatae rem aspernatur
        minus autem, fugiat nesciunt maxime.
      </S.DescriptionCard>
    </S.CardProduct>
  )
}

export default Product
