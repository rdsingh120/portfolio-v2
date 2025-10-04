import About from './components/About'
import Availability from './components/Availability'
import Container from './components/Container'
import GitHubAndLeetCode from './components/GitHubAndLeetCode'
import Greeting from './components/Greeting'
import LatestProjects from './components/LatestProjects'
import Profile from './components/Profile'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div className="max-w-[1255px] mx-1 md:mx-2 xl:mx-auto mt-5 flex flex-wrap md:flex-nowrap gap-3 md:gap-2 lg:gap-3 justify-center">
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
        <About/>
        <GitHubAndLeetCode/>
      </Container>
    </div>
  )
}
export default App
