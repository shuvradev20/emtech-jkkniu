import React from 'react'
import { useState } from 'react';
import researchLab from '../../assets/researchLab.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import emtech from '../../assets/emtech-jkkniu.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import wcr from '../../assets/wcr.jpg'
import drone from '../../assets/drone.jpg'
import ml from '../../assets/ml.jpeg'
import lift from '../../assets/lift.jpeg'
import event from '../../assets/event.jpg'


function Home() {

  return (
    <div className='w-full min-h-screen text-gray-700 flex flex-col justify-start items-center'>
  
      <div className="relative w-full h-[30vh] md:h-[70vh] before:content-[''] before:absolute before:inset-0 border-b-4 border-b-[#1c251b]">
        <video className="w-full z-1 h-full object-cover" autoPlay loop muted>
          <source src="./wcr.mp4" type="video/mp4" />
        </video>

        <div className="absolute w-1/2 md:w-1/3 h-full top-0 left-0 flex flex-col  items-start justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/0 backdrop-blur-sm"></div>
          <div 
            style={{ backgroundImage: `url(${emtech})` }}
            className="relative w-full h-2/3 bg-contain bg-no-repeat bg-center brightness-125">
          </div>
          <p className='text-black w-full md:w-2/3 text-left mb-4 pr-1 md:mb-8 text-[8px] md:text-[12px] relative left-2 md:left-36 z-20'>Technological Innovation, Contribution and Adaptation for the Nation and the World</p>
        </div>
      </div>

      <div className='w-full px-5 py-10 md:px-18 md:pt-15 flex flex-col justify-center items-center min-h-70'>
        <p className=' w-full text-2xl md:text-4xl text-center font-semibold inline-block'>Laboratory Overview</p>
        <div className='text-justify text-base py-6'>
        EmTech JKKNIU serves as a platform for students to work on their ideas and collaborate with national and international industries and institutions to conduct research on a global stage. Our current research areas include Structural Health Monitoring, Robotics, Machine Learning, and IoT. There are 22 individuals from the Department of EEE, JKKNIU, who are organized into four groups in this lab for their respective research projects. The lab provides as much support as possible and encourages high-quality research that benefits not only Bangladesh but also contributes to the international landscape. <br /><br />
        EmTech JKKNIU was launched in February 2025, with the help of three passionate students from the Department of EEE at Jatiya Kabi Kazi Nazrul Islam University— A M Safayet Hossain, Shuvra Dev, and MD Sarowar Zaman. The lab is maintained by the undergraduate RAs under the supervision of the principal investigator, Dr. Md Mahbubur Rahman. We also have alumni who worked under Dr. Md Mahbubur Rahman before the lab was officially launched. Their names have been included on the website to showcase previous notable individuals who have worked with our principal investigator. <br /> <br />
        Students from the Faculty of Science and Engineering at JKKNIU can join us by presenting their respective research ideas. The lab will provide facilities to students if their research/project proposals align with the lab’s mission and vision. <br /><br />
        Our mission includes solving technical problems related to automation, AI, and IoT that are useful for our country. Our researchers also aim to address global challenges with their inventions. They are committed to making our lab a world-class facility and aspire to contribute to leading research laboratories in the future to fully explore their potential.
        </div>
        
        <a href="https://forms.gle/9R34hXEGfmJi2sRLA" target='blank' rel="noopener noreferrer">
          <button class="text-xl bg-[#00bf63] mb-7 mt-10 hover:bg-[#1c251b] rounded-lg text-white hover:text-white py-3 px-25 border border-transparent transition duration-200 active:bg-[#1c251b] active:shadow-lg active:scale-95 cursor-pointer">
            Join Us
          </button>
        </a>
        <a href="https://forms.gle/pjZHjQNt1aUp7bwU8" target='blank' rel="noopener noreferrer">
          <button class="text-xl mb-5 bg-[#00bf63] hover:bg-[#1c251b] rounded-lg text-white hover:text-white py-3 px-13 border border-transparent  transition duration-200 active:bg-[#1c251b] active:shadow-lg active:scale-95 cursor-pointer ">
            Apply for Webmail
          </button>
        </a>
      
      </div>

      <div className="w-full min-h-100 bg-[#1c251b] text-gray-300 m-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }} 
        >
    
          <SwiperSlide>
            <div className="w-full h-full px-5 py-16 md:px-18 flex flex-col justify-start items-start">
              <div className="w-full mb-5 text-white text-2xl md:text-3xl">Project Aarohee</div>
              <div className="w-full h-full flex flex-col-reverse md:flex-row md:justify-between items-start">
                <div className="w-full md:w-2/3 h-full pt-8 md:pt-0 md:pr-20 text-base text-justify">
                  Project Aarohee is an advanced wall-climbing robot designed to automate structural health monitoring. It enhances efficiency, accuracy, and safety in inspections, minimizing the need for manual labor in hazardous environments. The robot features a propeller-based negative pressure adhesion system for a secure grip and a wheeled locomotion mechanism for smooth movement, making it suitable for various inspection tasks.
                  <br /><br />
                  Initial tests confirm its ability to operate on both vertical and ceiling surfaces, proving its reliability and adaptability. Its combination of adhesion technology and precise movement control ensures thorough inspections in challenging conditions. With its potential to transform structural health monitoring, Project Aarohee marks a significant step in automated inspection and maintenance.
                  <span className="underline cursor-pointer ml-2">See more</span>
                </div>
                <div
                  className="w-full md:w-1/3 aspect-[4/3] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${wcr})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-[#1c251b] px-5 py-16 md:px-18 flex flex-col justify-start items-start">
              <div className="w-full mb-5 text-white text-2xl md:text-3xl">Aarohee MLS</div>
              <div className="w-full h-full flex-1 flex flex-col-reverse md:flex-row md:justify-between items-start">
                <div className="w-full md:w-2/3 h-full pt-8 md:pt-0 md:pr-20 text-base text-justify">
                  Aarohee MLS is a multimodal locomotion system that integrates drone technology with wall-climbing capabilities. Designed for adaptability, it serves various applications, with a primary focus on structural health monitoring. As an extension of Project Aarohee, it aims to revolutionize inspection processes and enhance robotic mobility.
                  <br /><br />
                  Initially developed for Structural Health Monitoring (SHM), the system can also function as a multi-purpose robot. The goal is to create a versatile locomotion platform capable of climbing and flying. Future advancements may introduce floating and diving capabilities, further expanding Aarohee MLS’s potential.
                  <span className="underline cursor-pointer ml-2">See more</span>
                </div>
                <div
                  className="w-full md:w-1/3 aspect-[4/3] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${drone})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-[#1c251b] px-5 py-16 md:px-18 flex flex-col justify-start items-start">
              <div className="w-full mb-5 text-white text-2xl md:text-3xl">Machine Learning</div>
              <div className="w-full h-full flex-1 flex flex-col-reverse md:flex-row md:justify-between items-start">
                <div className="w-full md:w-2/3 h-full pt-8 md:pt-0 md:pr-20 text-base text-justify">
                  We have completed several machine learning projects across healthcare, industrial safety, and cybersecurity, each contributing to cutting-edge advancements. Our heart disease prediction model, using logistic regression, was presented at ICVEE-2024 and published in IEEE Xplore.
                  <br /><br />
                  Additionally, we developed an ammonia leakage detection and trip prediction system using a Naïve Bayes model, showcased at ICRPSET-2024. Our work on enhancing cybersecurity in industrial power electronics through Random Forest tuning was presented at ICCIT-2024. Another ongoing project involves an ANN-driven feature selection-based heart disease classification model, integrated into a web-based application, soon to be submitted to a journal.
                  <span className="underline cursor-pointer ml-2">See more</span>
                </div>
                <div
                  className="w-full md:w-1/3 aspect-[4/3] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${ml})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-[#1c251b] px-5 py-16 md:px-18 flex flex-col justify-start items-start">
              <div className="w-full mb-5 text-white text-2xl md:text-3xl">Lift Centralization</div>
              <div className="w-full h-full flex-1 flex flex-col-reverse md:flex-row md:justify-between items-start">
                <div className="w-full md:w-2/3 h-full pt-8 md:pt-0 md:pr-20 text-base text-justify">
                  The Lift Centralization Project, assigned by the university’s engineering department, aims to improve the monitoring and emergency response system for lifts across the campus. With approximately 48 lifts in different buildings, emergency alerts currently reach only the lobby intercom, requiring on-site technical staff in each building.
                  <br /><br />
                  This project seeks to wirelessly centralize the lift monitoring system. When an emergency button is pressed inside a lift, an alert is transmitted to a control room. Additionally, the system will enable direct communication, allowing passengers to speak with technical staff from inside the lift during emergencies, improving response efficiency.
                  <span className="underline cursor-pointer ml-2">See more</span>
                </div>
                <div
                  className="w-full md:w-1/3 aspect-[4/3] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${lift})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-[#1c251b] px-5 py-16 md:px-18 flex flex-col justify-start items-start">
              <div className="w-full mb-5 text-white text-2xl md:text-3xl">Event Participation Program</div>
              <div className="w-full h-full flex-1 flex flex-col-reverse md:flex-row md:justify-between items-start">
                <div className="w-full md:w-2/3 h-full pt-8 md:pt-0 md:pr-20 text-base text-justify">
                  The Event Participation Program in our lab focuses on designing and developing innovative robots and devices for national and international competitions. So far, we have built Soccer Bots and Line Following Robots (LFR) and successfully participated in events such as BITFEST 2025, organized by CSE, KUET, and NSU Tech Fest 2025.
                  <br /><br />
                  Beyond these, we are also working on drones, battle bots, and racing bots, preparing them for upcoming competitions. The program encourages junior students to join, offering them opportunities to gain hands-on technical experience while actively competing in robotics and engineering challenges. Future plans include expanding our participation in global tech events, further refining our innovations, and collaborating with industry professionals to push the boundaries of robotics.
                  <span className="underline cursor-pointer ml-2">See more</span>
                </div>
                <div
                  className="w-full md:w-1/3 aspect-[4/3] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${event})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


      <div className='w-full px-5 py-9 md:px-50 md:pt-15 flex flex-col md:flex-row justify-center items-start min-h-80'>
        <div className='w-full md:w-1/2 min-h-90'>
          <p className='w-full text-2xl md:text-4xl pb-8 font-semibold inline-block'>Latest News</p>
          <ul className='w-full min-h-40 text-base md:pr-16 md:border-r-2 md:border-black py-2'>
            <li> <span className='font-bold pr-4'>February 05, 2025</span>Emtech JKKNIU officially launched at Department of EEE.</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className=' w-full md:w-1/2 min-h-90'>
          <p className='w-full text-2xl md:text-4xl pb-6 md:pl-10 font-semibold inline-block'>Notice</p>
          <ul className=' min-h-40 py-2 text-base md:pl-10'>
            <li><span className='font-bold pr-4'>March 24, 2025</span>Recruitment Form Published.</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Home

