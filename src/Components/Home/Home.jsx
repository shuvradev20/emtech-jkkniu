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


function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='w-full min-h-screen text-gray-700 flex flex-col justify-start items-center'>
  
      <div className="relative w-full h-[30vh] md:h-[70vh] before:content-[''] before:absolute before:inset-0 border-b-4 border-b-[#1c251b]">
        <video className="w-full z-1 h-full object-cover" autoPlay loop muted>
          {/* <source src="/video.mp4" type="video/mp4" /> */}
        </video>

        <div className="absolute w-1/2 md:w-1/3 h-full top-0 left-0 flex flex-col  items-start justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/0 backdrop-blur-sm"></div>
          <div 
            style={{ backgroundImage: `url(${emtech})` }}
            className="relative w-full h-2/3 bg-contain bg-no-repeat bg-center brightness-125">
          </div>
          <p className='text-black w-full md:w-2/3 text-left mb-4 md:mb-8 text-[10px] relative left-2 md:left-41 z-20'>Technological Innovation, Contribution and Adaptation for the Nation and the World</p>
      </div>

      </div>

      <div className='w-full px-5 py-10 md:px-18 md:pt-15 flex flex-col justify-center items-center min-h-70'>
        <p className=' w-full text-2xl md:text-4xl text-center font-semibold inline-block'>Laboratory Overview</p>
        <div className='text-justify md:text-lg py-6'>
        EmTech JKKNIU serves as a platform for students to work on their ideas and collaborate with national and international industries and institutions to conduct research on a global stage. Our current research areas include Structural Health Monitoring, Robotics, Machine Learning, and IoT. There are 22 individuals from the Department of EEE, JKKNIU, who are organized into four groups in this lab for their respective research projects. The lab provides as much support as possible and encourages high-quality research that benefits not only Bangladesh but also contributes to the international landscape. <br /><br />
        EmTech JKKNIU was launched in February 2025, with the help of three passionate students from the Department of EEE at Jatiya Kabi Kazi Nazrul Islam University— A M Safayet Hossain, Shuvra Dev, and MD Sarowar Zaman. The lab is maintained by the undergraduate RAs under the supervision of the principal investigator, Dr. Mahubur Rahman. We also have alumni who worked under Dr. Mahubur Rahman before the lab was officially launched. Their names have been included on the website to showcase previous notable individuals who have worked with our principal investigator. <br /> <br />
        Students from the Faculty of Science and Engineering at JKKNIU can join us by presenting their respective research ideas. The lab will provide facilities to students if their research/project proposals align with the lab’s mission and vision. <br /><br />
        Our mission includes solving technical problems related to automation, AI, and IoT that are useful for our country. Our researchers also aim to address global challenges with their inventions. They are committed to making our lab a world-class facility and aspire to contribute to leading research laboratories in the future to fully explore their potential.
        </div>
        
        <a href="https://forms.gle/9R34hXEGfmJi2sRLA" target='blank'>
          <button class="text-xl bg-[#00bf63] mb-7 mt-10 hover:bg-[#1c251b] rounded-lg text-white hover:text-white py-3 px-25 border border-transparent transition duration-200 active:bg-[#1c251b] active:shadow-lg active:scale-95 ">
            Join Us
          </button>
        </a>
        <a href="https://forms.gle/pjZHjQNt1aUp7bwU8" target='blank'>
          <button class="text-xl mb-5 bg-[#00bf63] hover:bg-[#1c251b] rounded-lg text-white hover:text-white py-3 px-13 border border-transparent  transition duration-200 active:bg-[#1c251b] active:shadow-lg active:scale-95 ">
            Apply for Webmail
          </button>
        </a>
      
      </div>

      <div className='w-full relative text-gray-300 min-h-80 m-4 z-[10]'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay:3000,
          disableOnInteraction: false
          }}
            loop={true}
            pagination={{
            clickable: true,
           }}
           
          
        >
          <SwiperSlide>
            <div className='w-full min-h-75 bg-[#1c251b] px-5 pt-16 pb-17 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-4 text-white h-auto text-3xl text-start '>Project Aarohee</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 text-lg md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 h-70 rounded-lg md:h-80 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full min-h-75 bg-[#1c251b] px-5 pt-16 pb-17 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-4 text-bold text-white h-auto text-3xl text-start '>Aarohee MLS</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 text-lg md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 h-70 rounded-lg md:h-80 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full min-h-75 bg-[#1c251b] px-5 pt-16 pb-17 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-4 text-bold text-white h-auto text-3xl text-start '>Lift Centralization</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 text-lg md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 h-70 rounded-lg md:h-80 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className='w-full min-h-75 bg-[#1c251b] px-5 pt-16 pb-17 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-4 text-bold text-white h-auto text-3xl text-start '>Machine Learning</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 text-lg md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 rounded-lg h-70 md:h-80 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full min-h-75 bg-[#1c251b] px-5 pt-16 pb-17 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-4 text-bold text-white h-auto text-3xl text-start '>Event Perticipation Program</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 text-lg md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 rounded-lg h-70 md:h-80 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

      <div className='w-full px-5 py-9 md:px-50 md:pt-15 flex flex-col md:flex-row justify-center items-start min-h-80'>
        <div className='w-full md:w-1/2 min-h-90'>
          <p className='w-full text-4xl pb-8 font-semibold inline-block'>Latest News</p>
          <ul className='w-full min-h-40 md:border-r-2 md:border-black py-2'>
            <li> <span className='font-bold pr-4'>February 05, 2025</span>Emtech JKKNIU officially launched at Department of EEE.</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className=' w-full md:w-1/2 min-h-90'>
          <p className='w-full text-4xl pb-6 md:pl-10 font-semibold inline-block'>Notice</p>
          <ul className=' min-h-40 py-2 md:pl-10'>
            <li><span className='font-bold pr-4'>March 19, 2025</span>Recruitment form published.</li>
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

