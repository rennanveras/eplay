import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link>RPG</S.Link>
          </li>
          <li>
            <S.Link>Ação</S.Link>
          </li>
          <li>
            <S.Link>Aventura</S.Link>
          </li>
          <li>
            <S.Link>Esportes</S.Link>
          </li>
          <li>
            <S.Link>Simulação</S.Link>
          </li>
          <li>
            <S.Link>Estratégia</S.Link>
          </li>
          <li>
            <S.Link>FPS</S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link>Novidades</S.Link>
          </li>
          <li>
            <S.Link>Promoções</S.Link>
          </li>
          <li>
            <S.Link>Em breve</S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.Copyright>
        {currentYear} - &copy; E-PLAY Todos os direitos reservados <br />
        coded from
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rennan-veras/"
          rel="noreferrer"
        >
          <em> Rennan Veras</em>
        </a>
      </S.Copyright>
    </div>
  </S.Container>
)
export default Footer
