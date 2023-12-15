import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Game from '../../types/Game'
import Button from '../Button'
import { formataPreco } from '../ProductList'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>

          {game.prices.current && (
            <Button
              title="Clique aqui para adicionar este jogo ao carrinho"
              type="button"
              variant="secondary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
