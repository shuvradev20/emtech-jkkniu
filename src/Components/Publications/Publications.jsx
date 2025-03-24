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
          <span className="italic">
            MD Shameem Ahmmed; MD Mahbubur Rahman; Sourav Sarker; Mobusshir Sium; Faria Ferdous; Fatema Tanbin Mim; MD Shake Farid Uddin; Arit Sarker
          </span>
        </p>
        <p className="font-semibold">DOI:</p>
      </li>

      <li className='pl-2'>
        <h2 className="font-semibold text-xl">
          <a href="#" target="_blank">
            ML Based Ammonia Converter Leakage Detector and Trip Predictor for Improving Safety
          </a>
        </h2>
        <p className="text-base">
          <span className="font-bold pr-2 italic">Author:</span>
          <span className="italic">MD Shameem Ahmmed; MD Mahbubur Rahman</span>
        </p>
        <p className="font-semibold">DOI:</p>
      </li>

      <li className='pl-2'>
        <h2 className="font-semibold text-xl">
          <a href="#" target="_blank">
            Optimizing Logistic Regression Model for Heart Disease Prediction with Machine Learning
          </a>
        </h2>
        <p className="text-base">
          <span className="font-bold pr-2 italic">Author:</span>
          <span className="italic">MD Shameem Ahmmed; MD Mahbubur Rahman; Rohan Akando; Zinia Jahan</span>
        </p>
        <p className="font-semibold">DOI:</p>
      </li>
    </ol>
    </div>
  )
}

export default Publications