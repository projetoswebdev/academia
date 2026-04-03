import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../css/header.css'

const Header = () => {
  const [scroll, setScroll] = useState(false)


  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/planos', label: 'Planos' },
    { to: '/Imc', label: 'Calc. IMC' },
    { to: '/contato', label: 'Contato' },
  ]

  return (
    <nav className={`navbar ${scroll ? 'navbar--scroll' : ''}`}>
      <div className="container navbar-container">
        <NavLink to="/" className='navbar-logo'>FORCE<span>X</span></NavLink>
        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'navbar-link navbar-link--active' : 'navbar-link'}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/planos" className="btn-planos navbar-cta">
              Comece Agora
            </NavLink>
          </li>
        </ul>


      </div>
    </nav>
  )
}

export default Header
