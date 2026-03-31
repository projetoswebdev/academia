import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className='nav'>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/imc">Imc</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/planos">Planos</Link>

    </section>
  )
}

export default Header
