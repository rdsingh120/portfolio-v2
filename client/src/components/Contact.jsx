import { BsChevronCompactRight } from 'react-icons/bs'
import qr from '../assets/qr.png'

const Contact = () => {
  return (
    <div
      className="text-white min-h-[16.66%] rounded-2xl p-2 lg:p-5 border border-gray-500 
      flex flex-col items-center justify-center transform transition-transform duration-300  hover:scale-95 md:hover:scale-105"
    >
      <div className="rounded-2xl p-1 lg:p-3 border border-white w-full flex justify-between items-center">
        <img
          src={qr}
          alt=""
          className="bg-white rounded w-20 md:w-10 lg:w-20"
        />
        <div className="ml-5 md:ml-3 lg:ml-5">
          <p className="text-sm md:text-xs lg:text-sm text-[#fdbf45]">
            rdsingh120@gmail.com
          </p>
          <p className="text-sm md:text-xs lg:text-sm">(902) 700-0800</p>
        </div>
        <BsChevronCompactRight className="text-6xl" />
      </div>
    </div>
  )
}
export default Contact
