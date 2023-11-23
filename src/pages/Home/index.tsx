import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import di from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['R$ 199,90', '-10%'],
    image: di,
    id: 1
  },
  {
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '-10%'],
    image: zelda,
    id: 2
  },
  {
    title: 'Resident Evil 4 - Remaketring',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '-10%'],
    image: resident,
    id: 3
  },
  {
    title: 'Star Wars Jedi Survivor',
    category: 'Aventuras',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['R$ 199,90', '-10%'],
    image: starWars,
    id: 4
  }
]

const emBreve: Game[] = [
  {
    title: 'Zelda',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: zelda,
    id: 5
  },
  {
    title: 'resident',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: resident,
    id: 6
  },
  {
    title: 'star wars',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: starWars,
    id: 7
  },
  {
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: di,
    id: 8
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} background="gray" title="Promoções" />
    <ProductsList games={emBreve} background="black" title="Em breve" />
  </>
)

export default Home
