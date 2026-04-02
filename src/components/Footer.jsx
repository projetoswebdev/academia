import { NavLink } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">FORCE<em>X</em></span>
          <p>A academia que usa tecnologia para transformar corpos e mentes. Inteligente do início ao fim.</p>
        </div>

        <div className="footer-nav">
          <h4>Navegação</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/planos">Planos</NavLink></li>
            <li><NavLink to="/calculadora-imc">Calculadora IMC</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
          </ul>
        </div>

        <div className="footer-contatos">
          <h4>Contato</h4>
          <p>📍 Av. Paulista, 1000 — São Paulo, SP</p>
          <p>📞 (11) 99999-9999</p>
          <p>✉️ contato@forcex.com.br</p>
        </div>
      </div>

      <div className="footer-btn container">
        <p>© {new Date().getFullYear()} ForceX Academia Inteligente. Todos os direitos reservados.</p>
        <p>Projeto FIAP — Web Development</p>
      </div>
    </footer>
    
  )
}

export default Footer
