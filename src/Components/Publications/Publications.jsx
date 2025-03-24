import React from 'react'

function Publications() {



  return (
    <div className='w-full min-h-screen text-gray-700 py-30 px-4 md:px-45 flex flex-col justify-start items-start'>
    <ol className="list-[upper-roman] space-y-8 pl-6">
    <li className='pl-2'>
        <h2 className="font-semibold text-xl">
          <a href="#" target="_blank">
           Hypertuning Random Forest for Enhancing Cyber Security in Industrial Power Electronics
          </a>
        </h2>
        <p className="text-base">
          <span className="font-bold pr-2 italic">Author:</span>
          <span className="italic"><span className='font-semibold'>MD. Shameem Ahammed, Md. Mahbubur Rahman, Sourav Sarker,</span> Mobussir Nur Sium, Faria Ferdous, Fatema Tanbin Mim, Md. Shake Farid Uddin and Arit Sarker </span>
        </p>
        <p><span className='font-semibold'>Conference: </span>27th International Conference on Computer and Information Technology (ICCIT-2024) 20-22 December 2024, Cox’s Bazar, Bangladesh.</p>
        <p className="font-semibold">DOI:</p>
      </li>

      <li className='pl-2'>
        <h2 className="font-semibold text-xl">
          <a href="#" target="_blank">
           ML Based Ammonia Converter Leakage Detector and Trip Predictor For Improving Safety
          </a>
        </h2>
        <p className="text-base">
          <span className="font-bold pr-2 italic">Author:</span>
          <span className="italic">Mritunjoy Sarker, <span className='font-semibold'>Md. Mahbubur Rahman, MD. Shameem Ahammed, Sourav Sarker, Zinia Jahan,</span> and Md. Shake Farid Uddin</span>
        </p>
        <p><span className='font-semibold'>Conference: </span>International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET), 07-08 December 2024, Faculty of Engineering, University of Rajshahi, Rajshahi-6205, Bangladesh.</p>
        <a href="#"><span className="font-semibold">DOI: </span><span className='underline'></span></a>
      </li>

      <li className='pl-2'>
        <h2 className="font-semibold text-xl">
          <a href="#" target="_blank">
           Optimizing Logistic Regression Model for Heart Disease Prediction with Machine Learning
          </a>
        </h2>
        <p className="text-base">
          <span className="font-bold pr-2 italic">Author:</span>
          <span className="italic"><span className='font-semibold'>MD. Shameem Ahammed, Md. Mahbubur Rahman, Md. Borhan Uddin, Zinia Jahan,</span> Md. Shake Farid Uddin and Sabnam Mushtari
          </span>
        </p>
        <p><span className='font-semibold'>Conference: </span>7th International Conference on Vocational Education and Electrical Engineering (ICVEE-2024), 30-31 October 2024, Malang, Indonesia.</p>
        <a href="https://doi.org/10.1109/ICVEE63912.2024.10823688"><span className="font-semibold">DOI: </span><span className='underline'>10.1109/ICVEE63912.2024.10823688</span></a>
      </li>

    </ol>
    </div>
  )
}

export default Publications