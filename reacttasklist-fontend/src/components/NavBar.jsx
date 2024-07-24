import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to={'/'}>Tasks</NavLink>
        <NavLink to={'/newtask'}>Nova Task</NavLink>
        <NavLink to={'/categories'}>Categorias</NavLink>
    </nav>
  )
}

export default NavBar