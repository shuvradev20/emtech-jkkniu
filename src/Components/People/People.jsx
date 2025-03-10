import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import shuvra from '../../assets/shuvra.jpg'
import sabik from '../../assets/sabik.jpg'
import shakil from '../../assets/shakil.jpg'
import shameem from '../../assets/shameem.jpg'
import juthi from '../../assets/juthi.jpg'
import tahia from '../../assets/tahia.jpg'
import surojit from '../../assets/surojit.jpg'
import shila from '../../assets/shila.jpg'
import trapa from '../../assets/trapa.jpg'
import Imam from '../../assets/Imam.jpg'
import Anayet from '../../assets/Anayet.jpg'
import Siyam from '../../assets/Siyam.jpg'
import Shoukot from '../../assets/Shoukot.jpg'
import Atiq from '../../assets/Atiq.jpg'
import Shaugat from '../../assets/Shaugat.jpg'
import Mahjabin from '../../assets/Mahjabin.jpg'
import eashak from '../../assets/eashak.jpeg'
import sir from '../../assets/sir.jpg'

function People() {

  const undergradeResearcher = [
    {
      index:1,
      name: "A M Safayet Hossain",
      dept: "Dept. of EEE",
      varsity: "Jatiya Kabi Kazi Nazrul Islam University",
      email1: "safayetsabik@gmail.com",
      email2: "safayet_21102914@jkkniu.edu.bd",
      interest: "Structural Health Monitoring, Multimodal Locomotion System, Robotics",
      image: sabik
    },
    {
      index:2,
      name: "Shuvra Dev",
      dept: "Dept. of EEE",
      varsity: "Jatiya Kabi Kazi Nazrul Islam University",
      email1: "shuvra1149131@gmail.com",
      interest: "Blockchain, Multimodal Locomotion System, Robotics",
      image: shuvra
    },
    {
      index:3,
      name: "MD Sarowar Zaman",
      dept: "Dept. of EEE",
      varsity: "Jatiya Kabi Kazi Nazrul Islam University",
      email1: "sarowarzamanshakil@gmail.com",
      interest: "Robotics, Multimodal Locomotion System, Mechanical Designing",
      image: shakil
    }
  ]

  const labMembers = [
    { name: "Juthi Mondal", email: "mondaljuthi12@gmail.com", image: juthi },
    { name: "Mst Shila Khatun", email: "shilariya456@gmail.com", image: shila },
    { name: "Surojit Chandra Mohonta", email: "surojit.017019@gmail.com", image: surojit },
    { name: "Tahia Afsia", email: "tahiaafsia2021@gmail.com", image: tahia },
    { name: "Tapati Biswas Trapa", email: "tapatibiswas594@gmail.com", image: trapa },
    { name: "Anayet Ullah Maruf", email: "anayetullahmaruf2@gmail.com", image: Anayet },
    { name: "Imam Mehedi Hasan", email: "imammehedihasan22102930@gmail.com", image: Imam },
    { name: "Siyam Sheikh", email: "siyamsheikheee@gmail.com", image: Siyam },
    { name: "Shaugat Bin Rafiq Shifat", email: "shaugatbinrafiqshifat@gmail.com", image: Shaugat },
    { name: "Shoukot Islam", email: "shoukotislam1319@gmail.com", image: Shoukot },
    { name: "Md. Atiq Rahaman Mahi", email: "atiqrahaman01@gmail.com", image: Atiq },
    { name: "Mahjabin Ahmed Nabila", email: "nabila3182005@gmail.com", image: Mahjabin },
    { name: "MD. Eashak", email: "mdeashak519@gmail.com", image: eashak },
  ];

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full min-h-screen text-gray-700 flex pt-9 pb-4 px-4 md:px-18 flex-col flex-wrap justify-start items-center'>

      <div className='w-full min-h-45 md:px-80 my-8 flex flex-wrap flex-col justify-start items-center md:items-start'>
        <div className='  mb-4 border-b-1 border-b-black py-2 pl-4 text-xl md:text-2xl font-bold w-full'>Principle Investigator</div>
        <div className='w-full min-h-45 flex flex-wrap mt-4 flex-col-reverse md:flex-row-reverse justify-between items-center md:items-start'>
          <div className=' w-full md:w-2/3 min-h-50 py-4 md:pl-2'>
            <ul>
              <li className='font-semibold'>Dr. Md Mahbubur Rahman</li>
              <li>Associate Professor, Dept. of EEE</li>
              <li>Jatiya Kabi Kazi Nazrul Islam University, trishal, Mymensingh</li>
              <li>mahbubur.ice@gmail.com</li>
              <li> <span className='font-semibold'>Research Interest:</span> Li incidunt exercitationem sint, atque non ete aspernatur reiciendis nesciunt in explicabo mollitia neque id?</li>
              <li className='text-sm'>
                <a href="/CV_Mahbubur_latest.pdf" target="_blank" rel="noopener noreferrer" className=" pr-2 italic underline">
                  View CV
                </a>
                |
                <a href="/CV_Mahbubur_latest.pdf" download="CV_Mahbubur_latest.pdf" className="pl-2 italic underline">
                 Download
                </a>
              </li>
            </ul>
          </div>
      
          <div className='h-45 w-45 rounded-full bg-cover'
            style={{backgroundImage:`url(${sir})`}}
          >
          </div>
        </div>
      </div>

      <div className='w-full min-h-45 my-8 md:px-80 flex flex-wrap flex-col justify-start items-center md:items-start'>
        <div className='border-b-1 border-b-black mb-4 py-2 pl-4 text-xl md:text-2xl font-bold w-full'>Undergraduate Research Assistant</div>
          {undergradeResearcher.map((researcher, index) => (
            <div key={index} className='w-full min-h-45 flex flex-wrap mt-4 flex-col-reverse md:flex-row-reverse justify-between items-center md:items-start'>
              <div className='w-full md:w-2/3 min-h-50 py-4 md:pl-2'>
                <ul>
                  <li className='font-semibold'>{researcher.name}</li>
                  <li>{researcher.dept}</li>
                  <li>{researcher.varsity}</li>
                  <li className='underline'>{researcher.email1}</li>
                  <li className='underline'>{researcher.email2}</li>
                  <li> <span className='font-semibold'>Research Interest: </span>{researcher.interest}</li>
                </ul>
              </div>
              <div className='h-45 w-45 rounded-full bg-cover'
                style={{backgroundImage:`url(${researcher.image})`}}
              >
              </div>
            </div>
          ))}
      </div>

      <div className='w-full h-auto md:min-h-45 my-8 md:px-40 flex flex-wrap flex-col justify-start items-center'>
        <div className=' border-b-1 border-b-black mb-4 w-full flex justify-between'>
          <p className=' text-xl md:text-2xl py-2 pl-4 font-bold'>Lab Member</p>
          <button 
            onClick={()=>setIsOpen(!isOpen)}
            className='md:hidden text-3xl pr-2'
          >
            {isOpen ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowRight} /> }
          </button>
        </div>


        <div className={`w-full hidden duration-300 my-4 md:flex flex-wrap flex-col md:flex-row`}>

          {labMembers.map((member, index) => (
            <div key={index} className='w-1/4 p-4 mt-4 flex flex-col justify-center items-center h-auto'> 
              <div className='h-40 w-40 rounded-full bg-cover bg-center '
                style={{backgroundImage:`url(${member.image})`}}
              >
              </div>
              <div className='p-4'>
                <ul>
                  <li className='font-semibold text-center'>{member.name}</li>
                  <li className='underline'>{member.email}</li>
                </ul>
              </div>
            </div>
          ))}

        </div>

        <div className={`w-full transition-all duration-300 ${isOpen? "block" : "hidden"} my-4 flex flex-wrap flex-col md:flex-row`}>
          {labMembers.map((member, index) => (
            <div key={index} className='w-full md:hidden p-4 mt-4 flex flex-col justify-center items-center h-auto'> 
              <div className='h-40 w-40 rounded-full bg-cover bg-center'
                style={{backgroundImage:`url(${member.image})`}}
              >
              </div>
              <div className='p-4'>
                <ul>
                  <li className='font-semibold text-center'>{member.name}</li>
                  <li className='underline'>{member.email}</li>
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className='w-full min-h-45 my-8 md:px-80 flex flex-wrap flex-col justify-start items-center md:items-start'>
      <div className='border-b-1 border-b-black mb-4 py-2 pl-4 text-xl md:text-2xl font-bold w-full'>Alumni</div>
        <div className='w-full min-h-45 flex flex-wrap mt-4 flex-col-reverse md:flex-row-reverse justify-between items-center md:items-start'>
          <div className=' w-full md:w-2/3 min-h-50 py-4 md:pl-2'>
            <ul>
              <li className='font-semibold'>MD Shameem Ahammed</li>
              <li>Graduated from Dept. of EEE</li>
              <li>Jatiya Kabi Kazi Nazrul Islam University</li>
              <li className='underline'>shameemjkkniu.eee@gmail.com</li>
              <li> <span className='font-semibold'>Research Interest: </span>Machine Learning, Artificial Intelligence</li>
              <li className='text-sm italic underline'><a href="https://sites.google.com/view/shameem3e" target='blank'>Personal Website</a></li>
            </ul>
          </div>
      
          <div className='h-45 w-45 rounded-full bg-cover bg-center'
            style={{backgroundImage:`url(${shameem})`}}
          >
          </div>
        </div>
      </div>
    </div>
  )
}

export default People