import { frameworks } from '../../assets/data/skills/frameworks'
import Skill from './Skill'

const Frameworks = () => {
  return (
    <div className="mb-2 bg-orange-100 border border-orange-700 rounded-xl py-2">
      <h3 className="font-medium text-center text-lg md:text-base lg:text-lg mb-1">
        Frameworks & Libraries 
      </h3>
      <div className="flex justify-around">
        {frameworks.map(({ name, component }) => {
          return (
            <Skill
              key={name}
              name={name}
              Component={component}
              className="w-10 h-10"
            />
          )
        })}
      </div>
    </div>
  )
}
export default Frameworks
