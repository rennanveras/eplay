import ProductsList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'
import { Loading } from '../../styles'

const Categories = () => {
  const { data: actionGame } = useGetActionGamesQuery()
  const { data: fightGame } = useGetFightGamesQuery()
  const { data: rpgGame } = useGetRpgGamesQuery()
  const { data: simulationGame } = useGetSimulationGamesQuery()
  const { data: sportGame } = useGetSportGamesQuery()

  if (actionGame && fightGame && rpgGame && simulationGame && sportGame) {
    return (
      <>
        <ProductsList games={actionGame} title="Ação" background="black" />
        <ProductsList games={sportGame} title="Esportes" background="gray" />
        <ProductsList
          games={simulationGame}
          title="Simulação"
          background="black"
        />
        <ProductsList games={fightGame} title="Combate" background="gray" />
        <ProductsList games={rpgGame} title="RPG" background="black" />
      </>
    )
  }
  return <Loading></Loading>
}

export default Categories
