import { BrowserRouter, Routes,Route } from "react-router-dom"
import Error from './routes/Error'
import Home from './routes/Home'
import Imc from './routes/Imc'
import Sobre from './routes/Sobre'
import Contato from './routes/Contato'
import Planos from './routes/Planos'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/imc" element={<Imc/>}/>
        <Route path="/planos" element={<Planos/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
