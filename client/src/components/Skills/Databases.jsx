import { databases } from '../../assets/data/skills/databases'
import Skill from './Skill'

const Databases = () => {
  return (
    <div className="mb-2 bg-green-100 border border-green-700 rounded-xl py-2">
      <h3 className="font-medium text-center text-lg md:text-base lg:text-lg mb-1">
        Databases
      </h3>
      <div className="flex justify-around">
        {databases.map(({ name, Component }) => {
          return (
            <Skill
              key={name}
              name={name}
              Component={Component}
              className="w-10 h-10"
            />
          )
        })}
      </div>
    </div>
  )
}
export default Databases
