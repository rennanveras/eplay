import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import * as Sg from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Sg.GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
