import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'

function Header() {

  const [isClose, setIsClose] = useState(true);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if(menuRef.current &&
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)){
          setIsClose(true)
        }
    }

    if(!isClose){
      document.addEventListener("mousedown", handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return() => document.removeEventListener("mousedown", handleClickOutside)
  }, [isClose])

  return (
    <header className='sticky bg-[#1c251b] top-0 w-full border-b-4 border-b-[#7ed957] z-50 py-1 px-5 md:px-18 flex justify-between items-center'>

      <Link to={"/"} className='inline-block text-lg md:text-2xl font-bold py-5 transition duration-300 text-[#7ed957]'>Emerging Technologies Lab</Link>
      <nav className=' w-1/2 py-2 md:pl-80 hidden md:block md:text-lg'>
        <ul className=' w-auto text-lg flex flex-row justify-between items-center'>
          <li>
            <NavLink 
              to={'/'}
              className={({isActive}) => `block pl-2 pr-2 transition duration-300 ${isActive? `text-[#7ed957] ` : `text-[#00bf63]`} hover:text-[#7ed957] `}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/people'}
              className={({isActive}) => `block pl-2 pr-2 transition duration-300 ${isActive? `text-[#7ed957] ` : `text-[#00bf63]`} hover:text-[#7ed957] `}
            >
              People
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/publications'}
              className={({isActive}) => `block pl-2 pr-2 transition duration-300 ${isActive? `text-[#7ed957] ` : `text-[#00bf63]`} hover:text-[#7ed957] `}
            >
              Publication
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/contact'}
              className={({isActive}) => `block pl-2 transition duration-300 ${isActive? `text-[#7ed957] `:`text-[#00bf63]`} hover:text-[#7ed957] `}
            >
              Contact
            </NavLink>
          </li>
          
        </ul>
      </nav>

      <button ref={buttonRef} className='md:hidden' onClick={() => setIsClose(!isClose)}>
        {isClose && (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
      <g fill="#7ed957">
        <g transform="scale(5.12,5.12)">
          <path d="M3,9c-0.36,-0.005 -0.696,0.184 -0.878,0.496c-0.182,0.312 -0.182,0.697 0,1.008c0.182,0.312 0.517,0.501 0.878,0.496h44c0.361,0.005 0.696,-0.184 0.878,-0.496c0.182,-0.312 0.182,-0.697 0,-1.008c-0.182,-0.312 -0.517,-0.501 -0.878,-0.496zM3,24c-0.36,-0.005 -0.696,0.184 -0.878,0.496c-0.182,0.312 -0.182,0.697 0,1.008c0.182,0.312 0.517,0.501 0.878,0.496h44c0.361,0.005 0.696,-0.184 0.878,-0.496c0.182,-0.312 0.182,-0.697 0,-1.008c-0.182,-0.312 -0.517,-0.501 -0.878,-0.496zM3,39c-0.36,-0.005 -0.696,0.184 -0.878,0.496c-0.182,0.312 -0.182,0.697 0,1.008c0.182,0.312 0.517,0.501 0.878,0.496h44c0.361,0.005 0.696,-0.184 0.878,-0.496c0.182,-0.312 0.182,-0.697 0,-1.008c-0.182,-0.312 -0.517,-0.501 -0.878,-0.496z"></path>
        </g>
      </g>
    </svg>)}
      </button>

      {!isClose && (
        <div 
          ref={menuRef}
          className={`md:hidden bg-[#1c251b] text-lg fixed top-0 pt-25 transition-transform duration-[10000] ease-in-out right-0 w-2/3 h-screen space-y-10 z-50 transform ${
            isClose ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <button 
            ref={buttonRef} 
            className="md:hidden fixed right-4 top-6 h-6 w-6" 
            onClick={() => setIsClose(!isClose)}
          >
            <FontAwesomeIcon icon={faX} size="md" color="#7ed957" />
          </button>

          <NavLink 
            to={"/"} 
            onClick={() => setIsClose(true)}
            className={({ isActive }) => `block pt-2 text-xl font-sm pr-4 text-right ${isActive ? "text-[#7ed957]" : "text-[#00bf63]"} hover:text-[#7ed957]`}
          >
            Home
          </NavLink>

          <NavLink
            to={"/people"}
            onClick={() => setIsClose(true)}
            className={({ isActive }) => `block pt-2 text-xl font-sm pr-4 text-right ${isActive ? "text-[#7ed957]" : "text-[#00bf63]"} hover:text-[#7ed957]`}
          >
            People
          </NavLink>

          <NavLink
            to={"/publications"}
            onClick={() => setIsClose(true)}
            className={({ isActive }) => `block pt-2 text-xl font-sm pr-4 text-right ${isActive ? "text-[#7ed957]" : "text-[#00bf63]"} hover:text-[#7ed957]`}
          >
            Publication
          </NavLink>

          <NavLink
            to={"/contact"}
            onClick={() => setIsClose(true)}
            className={({ isActive }) => `block pt-2 text-xl font-sm pr-4 text-right ${isActive ? "text-[#7ed957]" : "text-[#00bf63]"} hover:text-[#7ed957]`}
          >
            Contact
          </NavLink>
        </div>
      )}

    </header>
  )
}

export default Header