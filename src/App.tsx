import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import * as Sg from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Sg.GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
