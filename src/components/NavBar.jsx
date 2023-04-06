import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const hadlerLogout = () => {
    console.log('pa fuera')
    navigate('/login',{
      replace:true
    })
  }

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <Link to='/' className="text-2xl font-[Poppins] cursor-pointer">
            tailwind
        </Link>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <h1 name="menu" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Menu" }</h1>
        </span>
      </div>

      <ul className={`${isOpen ? 'top-[80px] opacity-100 z-10' : 'opacity-0 top-[-400px]'}` + " md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500"}>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/waifu" className="link">WAIFUS</NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/kitsune" className="link">KITSUNE</NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/neko" className="link">NEKO</NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/husbando" className="link">HUSBANDO</NavLink>
        </li>

        <button onClick={hadlerLogout} className="bg-purple-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-purple-500 rounded ">
          LOGOUT
        </button>
      </ul>
    </nav>
  )
}
