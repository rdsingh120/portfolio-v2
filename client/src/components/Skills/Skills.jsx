import Framework from './Frameworks'
import Programming from './Programming'
import { Tooltip } from 'react-tooltip'


const Skills = () => {
  return (
    <div className="bg-white rounded-2xl p-2 lg:p-5 mt-2 lg:mt-5">
      <h1 className="font-medium text-center text-xl md:text-base lg:text-left lg:text-xl mb-2">
        Skills
      </h1>
      <Programming />
      <Framework/>
      <Programming />
      <Programming />
      <Tooltip id="skill-tooltip" />
    </div>
  )
}
export default Skills
