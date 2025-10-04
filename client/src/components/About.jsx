import CanadaFlag from "../svg-components/CanadaFlag"

const About = () => {
  return (
    <>
      <div className="text-black bg-[#fdbf45] rounded-2xl p-2 lg:p-5 border-b-2 border-dashed border-black">
        <h1 className="font-medium text-center text-xl md:text-base lg:text-left lg:text-xl">
          About Me
        </h1>
      </div>
      <div className="text-black bg-[#fdbf45] rounded-2xl p-2 lg:p-5 border-b-2 border-dashed border-black">
        <div className="flex justify-between items-center">
          <span className="font-light">Location</span>
          <span className="font-medium flex items-center gap-2">
            <span>Toronto ON</span>
            <CanadaFlag className="w-10 h-10" />
          </span>
        </div>
        <hr className="border-[#7f5f22] mb-2" />
        <div className="flex justify-between">
          <span className="font-light">School</span>
          <span className="font-medium">Centennial College</span>
        </div>
        <hr className="border-[#7f5f22] my-2" />
        <div className="flex justify-between">
          <span className="font-light">Soft Skills</span>
          <span className="font-medium">Collaborative, Adaptability</span>
        </div>
        <hr className="border-[#7f5f22] my-2" />
        <div className="flex justify-between">
          <span className="font-light">Hobbies</span>
          <span className="font-medium">Hiking, Reading, Cooking</span>
        </div>
      </div>
    </>
  )
}
export default About