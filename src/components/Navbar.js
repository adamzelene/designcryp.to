import React from 'react'
import {Atom} from './quarks'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return(
    <nav>
    <Atom />
    <div className='textLinks'>
    <Link to='./About'>
    About
    </Link>

    <Link to='./Work'>
    Work
    </Link>
    </div>
    </nav>
  )
}
