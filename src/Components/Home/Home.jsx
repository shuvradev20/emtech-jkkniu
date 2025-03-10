import React from 'react'
import researchLab from '../../assets/researchLab.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import emtech from '../../assets/emtech-jkkniu.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


function Home() {
  return (
    <div className='w-full min-h-screen text-gray-700 flex flex-col justify-start items-center'>
  
      <div className="relative w-full h-[30vh] md:h-[70vh] before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-sm">
        <video className="w-full z-1 h-full object-cover" autoPlay loop muted>
          <source src="/Wcr2.mp4" type="video/mp4" />
        </video>
        <div 
          style={{ backgroundImage: `url(${emtech})` }}
          className="absolute w-2/3 md:w-1/3 h-35 md:h-70 top-15 md:top-30 left-0 bg-cover bg-center">
        </div>
      </div>

      <div className='w-full px-4 py-9 md:px-18 md:pt-15 flex flex-col justify-center items-center min-h-70'>
        <p className='text-2xl font-semibold inline-block'>Laboratory Overview</p>
        <div className='text-justify py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam labore minima mollitia, alias doloribus quia expedita odit quo, consequuntur vel iste fuga voluptatum deserunt laboriosam quos, libero magni? Necessitatibus.
          Accusamus soluta eos rerum natus, delectus doloribus vitae adipisci ducimus et sapiente voluptatem sit quae perspiciatis perferendis doloremque dicta modi eligendi quos debitis? Possimus odio deserunt sit quia incidunt eveniet.
          Error, suunt quo mollitia, molestias praesentium saepe dicta beatae unde ipsum. Quae, magni totam eum consequatur non repellat minus cupiditate.
          Illum ipsum an usto ab enim odio.pit odio perspiciatis alias ratione nesciunt quo reprehenderit!ullam commodi, laborum repudiandae. Consequuntur maiores, autem voluptatum recusandae minima officiis aliquam rem temporibus ex nobis esse omnis delectus minus alias, porro sed?
        </div>
      </div>

      <div className='w-full relative min-h-80 m-4 z-[10]'>
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
            <div className='w-full min-h-75 bg-gray-100 px-4 pt-8 pb-10 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-1 text-bold h-auto text-xl text-start '>Project Aarohee</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 min-h-70 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full min-h-75 bg-gray-200 px-4 pt-8 pb-10 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-1 text-bold h-auto text-xl text-start '>Project Aarohee</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 min-h-70 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full min-h-75 bg-gray-200 px-4 pt-8 pb-10 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-1 text-bold h-auto text-xl text-start '>Project Aarohee</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 min-h-70 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className='w-full min-h-75 bg-gray-200 px-4 pt-8 pb-10 md:px-18 flex flex-wrap flex-col justify-start items-start'>
              <div className='w-full mb-1 text-bold h-auto text-xl text-start '>Project Aarohee</div>
              <div className='w-full h-min-75 flex flex-wrap flex-col md:flex-row justify-start items-start'>                 
                <div className='w-full md:w-2/3 pb-4 md:pr-12 h-full text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque, ipsum, autem illum suscipit, consequuntur placeat nemo explicabo doloribus voluptatem soluta officiis impedit repellat voluptate reprehenderit neque cumque similique at?
                  Voluptatem, aolorem libero possimus voluptatum officiis laudantium amet nemo eaque adipisci ribus hic, temporibus accusamus dolores alias iste autem cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi unde molestiae nobis. Harum ipsam alias dicta repellat, commodi obcaecati nesciunt quos beatae quibusdam, porro aut, consequatur deleniti distinctio asperiores?
                 distinctio laborum ex dolordiandae esse maiores. Voluptates ducimus mollitia vitae eligendi. Temporibus, beatae earum? deserunt vel rem mollitia necessitatibus fugiat id voluptate saepe error accusantium enim. Quia?molestias possimus accusantium, minus quasi eius rem dolorum? Dolor quo temporibus cum ullam, molestias quod dignissimos accusamus quaerat sint praesentium illo.
                </div>

                <div className='w-full md:w-1/3 min-h-70 bg-cover'
                  style={{backgroundImage:`url(${researchLab})`}}
                >
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

      <div className='w-full px-4 py-9 md:px-18 md:pt-15 flex flex-col justify-center items-center min-h-70'>
        <p className='text-2xl font-semibold inline-block'>Our Mission</p>
        <div className='text-justify py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam labore minima mollitia, alias doloribus quia expedita odit quo, consequuntur vel iste fuga voluptatum deserunt laboriosam quos, libero magni? Necessitatibus.
          Accusamus soluta eos rerum natus, delectus doloribus vitae adipisci ducimus et sapiente voluptatem sit quae perspiciatis perferendis doloremque dicta modi eligendi quos debitis? Possimus odio deserunt sit quia incidunt eveniet.
          Error, suunt quo mollitia, molestias praesentium saepe dicta beatae unde ipsum. Quae, magni totam eum consequatur non repellat minus cupiditate.
          Illum ipsum an usto ab enim odio.pit odio perspiciatis alias ratione nesciunt quo reprehenderit!ullam commodi, laborum repudiandae. Consequuntur maiores, autem voluptatum recusandae minima officiis aliquam rem temporibus ex nobis esse omnis delectus minus alias, porro sed?
        </div>
      </div>

    </div>
  )
}

export default Home