import { otherTools } from "../../assets/data/skills/other-tools"
import Skill from "./Skill"


const OtherTools = () => {
  return (
    <div className="mb-2 bg-yellow-100 border border-yellow-700 rounded-xl py-2 w-full">
      <h3 className="font-medium text-center text-lg md:text-base lg:text-lg mb-1">
        Other Tools
      </h3>
      <div className="flex justify-around">
        {otherTools.map(({name, Component}) =>{
            return <Skill key={name} name={name} Component={Component} className="w-10 h-10"/>
        })}
      </div>
    </div>
  )
}
export default OtherTools