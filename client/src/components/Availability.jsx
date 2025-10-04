import { FaDownload } from 'react-icons/fa6'

const Availability = () => {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-2 lg:p-5">
      <div className="flex items-center justify-center lg:justify-start gap-2 lg:mb-2">
        <h3 className="text-green-600 font-medium lg:text-left lg:text-lg">
          Open to Work
        </h3>
        <span className="w-3 h-3 bg-green-600 rounded-full"></span>
      </div>
      <p className="text-gray-700 text-sm lg:text-md leading-relaxed">
        I enjoy solving problems, learning along the way, and collaborating with
        others.
      </p>
      <div className="mt-2 flex">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#bbf2ff] text-black py-2 rounded-xl flex justify-center gap-2 text-lg md:text-base lg:text-lg font-medium w-full"
        >
          <FaDownload className='text-xl'/>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  )
}

export default Availability
