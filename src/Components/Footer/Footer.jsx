import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareFacebook, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import jkkniu from '../../assets/jkkniu.png'

function Footer() {
  return (
    <footer className='w-full min-h-60 border-t-4 border-t-[#00bf63] bg-[#1c251b]'>
      <div className='flex w-full flex-wrap pt-8 pb-20 flex-col space-y-2 md:flex-row justify-between items-center md:items-start px-4 md:px-50'>  
        <div className='w-full md:w-1/3 pl-12 pr-10 md:px-0 min-h-40 text-gray-300 flex justify-start items-center text-start'>
          <ul>
            <li className='text-xl text-white'>Emerging Technologies Lab</li>
            <li>Dept. of EEE, 4th floor, Science Building</li>
            <li>Jatiya Kabi Kazi Nazrul Islam University</li> 
            <li>Trishal, Mymensingh-2224, BD</li>
          </ul>
        </div>

        <div className='w-full md:w-1/3 pb-4 min-h-40 px-14 md:px-25 flex flex-row md:flex-col justify-center items-center'>
          <a href="https://jkkniu.edu.bd/" target="_blank" rel="noopener noreferrer">
            <div className='w-15 md:w-30 h-15 md:h-30 bg-cover bg-center'
              style={{backgroundImage:`url(${jkkniu})`}}
            >
            </div >
          </a>

          <a href="https://jkkniu.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-lg text-start md:text-center hover:text-white">
            Jatiya Kabi Kazi Nazrul Islam University
          </a>
        </div>

        <div className='flex flex-row w-full py-2 md:py-0 md:w-1/3 md:min-h-40 justify-center md:justify-end space-x-8 items-start md:items-center'>
          <a href='#' target='blank'>
            <FontAwesomeIcon icon={faSquareFacebook} size='xl' className=' text-gray-300 hover:text-white transition duration-300'/>
          </a>

          <a href='#' target='blank'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' className=' text-gray-300 hover:text-white transition duration-300' />
          </a>
          <a href='#' target='blank'>
            <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' className=' text-gray-300 hover:text-white transition duration-300'/>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer