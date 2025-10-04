import Availability from './components/Availability'
import Container from './components/Container'
import Greeting from './components/Greeting'
import LatestProjects from './components/LatestProjects'
import Profile from './components/Profile'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div className="max-w-[1255px] min-h-[90vh] xl:mx-auto mx-2 my-5 flex flex-wrap md:flex-nowrap gap-2 lg:gap-5 justify-center">
      <Container>
        <Profile />
        <Availability />
        <Greeting />
      </Container>
      <Container>
        <LatestProjects />
        <Skills />
      </Container>
      <Container>
        <LatestProjects />
      </Container>
    </div>
  )
}
export default App
