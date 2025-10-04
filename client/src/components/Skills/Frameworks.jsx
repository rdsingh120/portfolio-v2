import { frameworks } from '../../assets/data/skills/frameworks'
import Skill from './Skill'

const Frameworks = () => {
  return (
    <div className="mb-2 bg-orange-100 rounded-xl py-5">
      <h3 className="font-medium text-center text-lg md:text-base lg:text-lg mb-1">
        Frameworks
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
