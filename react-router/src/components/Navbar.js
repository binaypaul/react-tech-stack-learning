import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className='bg-sky-300 text-cyan-50'>
      <ul className='flex p-2'>
        <li className='p-1 mr-6 rounded-lg bg-blue-600 '>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className='p-1 mr-6 rounded-lg bg-blue-600'>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar