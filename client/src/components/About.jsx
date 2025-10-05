import CanadaFlag from '../svg-components/CanadaFlag'
import curve from '../assets/icons/curve.png'

const About = () => {
  return (
    <div className="transform transition-transform duration-300 hover:scale-95 md:hover:scale-105">
      <div className="text-black bg-[#fdbf45] rounded-2xl p-2 lg:p-5 border-b-2 border-dashed border-black relative">
        <h1 className="font-medium text-center lg:text-left text-xl md:text-lg lg:text-xl">
          About Me
        </h1>
        <img src={curve} alt="" className="w-5 absolute top-[2px] right-1" />
      </div>
      <div className="text-black bg-[#fdbf45] rounded-2xl p-2 lg:p-5 border-b-2 border-dashed border-black">
        <div className="info flex md:flex-col lg:flex-row justify-between items-center md:items-start lg:items-center">
          <span className="font-light text-base md:text-sm lg:text-base">
            Location
          </span>
          <span className="font-medium flex items-center gap-2 text-base md:text-sm lg:text-base">
            <span>Toronto ON</span>
            <CanadaFlag className="w-10 md:w-8 lg:w-10 h-10 md:h-8 lg:h-10" />
          </span>
        </div>
        <hr className="border-[#7f5f22] mb-2" />
        <div className="info flex md:flex-col lg:flex-row justify-between">
          <span className="font-light text-base md:text-sm lg:text-base">
            School
          </span>
          <span className="font-medium text-base md:text-sm lg:text-base">
            Centennial College
          </span>
        </div>
        <hr className="border-[#7f5f22] my-2" />
        <div className="info flex md:flex-col lg:flex-row justify-between">
          <span className="font-light text-base md:text-sm lg:text-base">
            Soft Skills
          </span>
          <span className="font-medium text-base md:text-sm lg:text-base">
            Collaborative, Adaptability
          </span>
        </div>
        <hr className="border-[#7f5f22] my-2" />
        <div className="info flex md:flex-col lg:flex-row justify-between">
          <span className="font-light text-base md:text-sm lg:text-base">
            Hobbies
          </span>
          <span className="font-medium text-base md:text-sm lg:text-base">
            Hiking, Reading, Cooking
          </span>
        </div>
      </div>
    </div>
  )
}
export default About
