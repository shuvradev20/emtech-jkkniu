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
    <header className='sticky bg-[#1c251b] top-0 w-full border-b-4 border-b-[#00bf63] z-50 py-1 px-4 md:px-18 flex justify-between items-center'>

      <Link to={"/"} className='inline-block text-xl md:text-2xl font-bold py-5 transition duration-300 text-[#7ed957]'>Emerging Technologies Lab</Link>
      <nav className=' w-1/2 py-2 md:pl-80 hidden md:block md:text-lg'>
        <ul className=' w-auto text-base flex flex-row justify-between items-center'>
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
              Publications
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

      <button ref={buttonRef} className='md:hidden text-gray-200' onClick={() => setIsClose(!isClose)}>
        {isClose ?(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
      <g fill="#ffffff">
        <g transform="scale(5.12,5.12)">
          <path d="M3,9c-0.36,-0.005 -0.696,0.184 -0.878,0.496c-0.182,0.312 -0.182,0.697 0,1.008c0.182,0.312 0.517,0.501 0.878,0.496h44c0.361,0.005 0.696,-0.184 0.878,-0.496c0.182,-0.312 0.182,-0.697 0,-1.008c-0.182,-0.312 -0.517,-0.501 -0.878,-0.496zM3,24c-0.36,-0.005 -0.696,0.184 -0.878,0.496c-0.182,0.312 -0.182,0.697 0,1.008c0.182,0.312 0.517,0.501 0.878,0.496h44c0.361,0.005 0.696,-0.184 0.878,-0.496c0.182,-0.312 0.182,-0.697 0,-1.008c-0.182,-0.312 -0.517,-0.501 -0.878,-0.496zM3,39c-0.36,-0.005 -0.696,0.184 -0.878,0.496c-0.182,0.312 -0.182,0.697 0,1.008c0.182,0.312 0.517,0.501 0.878,0.496h44c0.361,0.005 0.696,-0.184 0.878,-0.496c0.182,-0.312 0.182,-0.697 0,-1.008c-0.182,-0.312 -0.517,-0.501 -0.878,-0.496z"></path>
        </g>
      </g>
    </svg>) : ( <FontAwesomeIcon icon={faX} size='lg' /> )}
      </button>

      {!isClose && (
        <div 
          ref={menuRef}
          className='md:hidden bg-[#1c251b] opacity-85 text-lg absolute top-20 right-0 w-1/2 h-screen space-y-8 z-50'
        >
          <NavLink 
            to={"/"} 
            onClick={() => setIsClose(true)}
            className={({isActive}) => `block pt-2 text-lg font-sm pr-4 text-right duration-200 ${isActive? `text-[#7ed957] `:`text-[#00bf63]`} hover:text-[#7ed957] `}
            >
            Home
          </NavLink>

          <NavLink
            to={"/people"}
            onClick={() => setIsClose(true)}
            className={({isActive}) => `block pt-2 text-lg font-sm pr-4 text-right duration-200 ${isActive? `text-[#7ed957] `:`text-[#00bf63]`} hover:text-[#7ed957] `}
            >
            People
          </NavLink>

          <NavLink
            to={"/publications"}
            onClick={() => setIsClose(true)}
            className={({isActive}) => `block pt-2 text-lg font-sm pr-4 text-right duration-200 ${isActive? `text-[#7ed957] `:`text-[#00bf63]`} hover:text-[#7ed957] `}
          >
            Publication
          </NavLink>

          <NavLink
            to={"/contact"}
            onClick={() => setIsClose(true)}
            className={({isActive}) => `block pt-2 text-lg font-sm pr-4 text-right duration-200 ${isActive? `text-[#7ed957] `:`text-[#00bf63]`} hover:text-[#7ed957] `}
            >
            Contact
          </NavLink>

        </div>
      )}

    </header>
  )
}

export default Header