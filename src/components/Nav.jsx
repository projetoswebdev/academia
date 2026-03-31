import {Link} from 'react-router-dom'
const Nav = () => {
  return (
  <section>
      <Link to="/" className="link">Home</Link>
      <Link to="/sobre" className="link">Sobre</Link>
      <Link to="/planos" className="link">Planos</Link>
      <Link to="/calculadoraimc" className="link">Imc</Link>
      <Link to="/contato" className="link">Contato</Link>
  </section>
  )
}

export default Nav
