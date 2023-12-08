import * as S from './styles'

import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import resident from '../../assets/images/resident.png'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <S.Items>
        <S.Item>
          <img src={zelda} alt="" />
        </S.Item>
        <S.Item>
          <img src={resident} alt="" />
        </S.Item>
        <S.Item>
          <img src={zelda} alt="" />
        </S.Item>
        <S.Item>
          <img src={resident} alt="" />
        </S.Item>
      </S.Items>
    </Section>
  )
}

export default Gallery
