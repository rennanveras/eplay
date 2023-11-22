import * as S from './styles'
import banner from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <S.Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.TituloBanner>
            Marvel&#39;s Spider-Man: Miles Morales PS4 & PS5
          </S.TituloBanner>
          <S.Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </S.Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar está oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
