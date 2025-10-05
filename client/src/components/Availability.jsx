import { FaDownload } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'

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
      <div className="mt-2 flex gap-2 md:gap-1 lg:gap-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00000065] text-white py-2 rounded-xl 
          flex justify-center items-center gap-2 text-lg md:text-base 
          lg:text-lg font-medium w-full border border-black hover:bg-[#00000080] duration-300"
        >
          <FaDownload className="text-xl md:text-lg lg:text-xl text-white" />
          <span className="text-lg md:text-base lg:text-lg">Resume</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rdsingh120/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#bbf2ff] text-black py-2 rounded-xl flex justify-center items-center gap-1 
          text-lg md:text-base lg:text-lg font-medium w-full border border-blue-700 hover:bg-[#a1ddec] duration-300"
        >
          <span className="text-lg md:text-base lg:text-lg">Linked</span>{' '}
          <FaLinkedin className="text-[#0a66c2] text-xl md:text-lg lg:text-xl" />
        </a>
      </div>
    </div>
  )
}

export default Availability
