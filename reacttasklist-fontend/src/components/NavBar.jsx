import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to={'/'}>Início</NavLink>
        <NavLink to={'/categories'}>Categorias</NavLink>
    </nav>
  )
}

export default NavBar