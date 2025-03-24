import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareFacebook, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import jkkniu from '../../assets/jkkniu.png'

function Footer() {
  return (
    <footer className='w-full min-h-60 border-t-4 px-5 md:px-50 pt-8 pb-20 border-t-[#7ed957] bg-[#1c251b]'>
      <div className='flex w-full flex-wrap flex-col space-y-2 md:flex-row justify-between md:justify-center items-center md:items-start'>  
        <div className='w-full md:w-1/3 flex justify-center md:justify-start items-center min-h-40 text-gray-300'>
          <ul>
            <li className='text-xl text-white'>Emerging Technologies Lab</li>
            <li>Dept. of EEE, 4th Floor, Science Building</li>
            <li>Jatiya Kabi Kazi Nazrul Islam University</li> 
            <li>Trishal, Mymensingh-2224, BD</li>
          </ul>
        </div>

        <div className='w-full md:w-1/3 flex pb-6 md:pb-0 md:flex-col justify-center items-center text-start'>
          <a href="https://jkkniu.edu.bd/" target="_blank" rel="noopener noreferrer">
            <div className='w-15 md:w-35 h-15 md:h-35 bg-cover bg-center'
              style={{backgroundImage:`url(${jkkniu})`}}
            >
            </div >
          </a>

          <a href="https://jkkniu.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 pr-1 text-lg text-start md:text-center hover:text-white">
            Jatiya Kabi Kazi Nazrul <br />Islam University
          </a>
        </div>

        <div className='flex flex-row w-full py-2 md:py-0 md:w-1/3 md:min-h-40 justify-center md:justify-end space-x-8 items-start md:items-center'>
          <a href='https://www.facebook.com/people/Emerging-Technologies-Lab-JKKNIU/61573592052655/#' target='blank'>
            <FontAwesomeIcon icon={faSquareFacebook} className=' text-gray-300 hover:text-white text-xl md:text-2xl transition duration-300'/>
          </a>

          <a href='https://www.linkedin.com/company/emtechjkkniu/' target='blank'>
                <FontAwesomeIcon icon={faLinkedin} className=' text-gray-300 hover:text-white text-xl md:text-2xl transition duration-300' />
          </a>
          <a href="https://wa.me/0171256442" target="_blank">
            <FontAwesomeIcon icon={faSquareWhatsapp} className=' text-gray-300 hover:text-white text-xl md:text-2xl transition duration-300'/>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer