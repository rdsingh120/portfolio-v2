import Cloud from './Cloud'
import Databases from './Databases'
import Framework from './Frameworks'
import OtherTools from './OtherTools'
import Programming from './Programming'
import { Tooltip } from 'react-tooltip'


const Skills = () => {
  return (
    <div className="bg-white rounded-2xl p-2 lg:p-5 mt-3 md:mt-2 lg:mt-3">
      <h1 className="font-medium text-center text-xl md:text-base lg:text-left lg:text-xl mb-2">
        Skills
      </h1>
      <Programming />
      <Framework />
      <Databases />
      <div className="flex gap-2">
        <Cloud />
        <OtherTools />
      </div>
      <Tooltip id="skill-tooltip" />
    </div>
  )
}
export default Skills
