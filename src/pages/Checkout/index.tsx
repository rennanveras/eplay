import { useState } from 'react'

import { useFormik } from 'formik'

import Button from '../../components/Button'
import Card from '../../components/Card'

import * as S from './styles'
import * as Yup from 'yup'

import boleto from '../../assets/images/gadgets/boleto.png'
import cartao from '../../assets/images/gadgets/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState<boolean>(false)

  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      cardNumber: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string().oneOf([
        Yup.ref('deliveryEmail'),
        'Os e-mails são diferentes'
      ]),

      //Pagemento
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log('submit', values)
    }
  })

  const getErrorMessage = (fildName: string, message?: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullname">Nome completo</label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullname', form.errors.fullname)}</small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input
                id="deliveryEmail"
                type="email"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <S.TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </S.TabButton>
          <S.TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão de crédito" />
            Cartão de crédito
          </S.TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    {getErrorMessage('cpfCardOwner', form.errors.cpfCardOwner)}
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    {getErrorMessage(
                      'cardDisplayName',
                      form.errors.cardDisplayName
                    )}
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="number"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </S.InputGroup>
                  <S.InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      id="expiresMonth"
                      type="number"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                  </S.InputGroup>
                  <S.InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input
                      id="expiresYear"
                      type="number"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </S.InputGroup>
                  <S.InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="number"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    {getErrorMessage('cardCode', form.errors.cardCode)}
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parecelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option value="">1x de R$200</option>
                      <option value="">2x de R$100</option>
                      <option value="">4x de R$50</option>
                    </select>
                  </S.InputGroup>
                </S.Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button
        variant="secondary"
        type="button"
        title="Clique aqui para finalizar sua compra"
        onClick={form.handleSubmit}
      >
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
