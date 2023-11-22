import { ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ type = 'button', title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <Button type="button" title={title} onClick={onClick}>
        {children}
      </Button>
    )
  } else {
    return (
      <ButtonLink type="button" title={title} to={to as string}>
        {children}
      </ButtonLink>
    )
  }
}

export default Button
