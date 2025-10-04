import { programming } from '../../assets/data/skills/programming'
import Skill from './Skill'


const Programming = () => {
  return (
    <div className='mb-2 bg-orange-100 border border-orange-700 rounded-xl py-2'>
      <h3 className="font-medium text-center text-lg md:text-base lg:text-lg mb-1">
        Programming Languages
      </h3>
      <div className="flex justify-around">      
        {programming.map(({name, component}) => {
            return <Skill key={name} name={name} Component={component} className="w-10 h-10" />
        })}
      </div>
    </div>
  )
}
export default Programming
