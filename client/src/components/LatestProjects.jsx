import starLogo from '../assets/icons/star.png'

import Project from "./Project"

const LatestProjects = () => {
  return (
    <div
      className="bg-[#005e42] text-white min-h-[16.66%] rounded-2xl p-2 lg:p-5 transform transition-transform duration-300
            hover:scale-105"
    >
      <h3 className="font-medium text-center lg:text-left text-xl md:text-lg lg:text-xl   mb-2">
        Latest{' '}
        <span className="relative">
          Projects
          <img
            src={starLogo}
            alt=""
            className="w-5 md:w-4 lg:w-5 absolute -top-1 -right-5"
          />
        </span>
      </h3>
      <div className="flex lg:flex-col gap-1 lg:gap-2">
        <Project labelColor={'#d33928'} />
        <Project labelColor="white" textColor="black" />
      </div>
      <div className="hidden md:flex lg:hidden flex-col md:flex-row gap-1 mt-2">
        <Project labelColor="white" textColor="black" />
        <Project labelColor="white" textColor="black" />
      </div>
      <button className="bg-[#3d8d75] border border-[#9ec6ba] rounded-xl text-sm lg:text-md w-full mt-1 lg:mt-2 lg:py-1">
        View All
      </button>
    </div>
  )
}
export default LatestProjects
