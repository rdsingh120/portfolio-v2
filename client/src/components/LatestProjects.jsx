import starLogo from '../assets/icons/star.png'

import Project from "./Project"

const LatestProjects = () => {
  return (
    <div className="bg-[#005e42] text-white min-h-[16.66%] rounded-2xl p-2 lg:p-5">
      <h3 className="font-medium text-center text-lg md:text-sm lg:text-left lg:text-lg mb-2">
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
        <Project />
      </div>
      <button className="bg-[#3d8d75] border border-[#9ec6ba] rounded-xl text-sm lg:text-md w-full mt-1 lg:mt-2 lg:py-1">
        View All
      </button>
    </div>
  )
}
export default LatestProjects
