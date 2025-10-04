import { cloud } from "../../assets/data/skills/cloud"
import Skill from "./Skill"

const Cloud = () => {
  return (
    <div className="mb-2 bg-yellow-100 border border-yellow-700 rounded-xl py-2 w-full">
      <h3 className="font-medium text-center text-lg md:text-base lg:text-lg mb-1">
        Cloud
      </h3>
      <div className="flex justify-around">
        {cloud.map(({name, Component}) =>{
            return <Skill key={name} name={name} Component={Component} className="w-10 h-10"/>
        })}
      </div>
    </div>
  )
}
export default Cloud