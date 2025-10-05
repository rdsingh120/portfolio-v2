import { useEffect, useState } from 'react'
import GitHub from '../svg-components/other-tools/GitHub'

const GitHubStats = () => {
  const [data, setData] = useState(null)
  const [repos, setRepos] = useState(0)
  const userName = 'rdsingh120'
  const gitHubApi = 'https://api.github.com/users/'

  const fetchData = async () => {
    const response = await fetch(gitHubApi + userName)
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data) setRepos(data.public_repos)
  }, [data])

  return (
    <a
      href="https://github.com/rdsingh120"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#151b23] border border-[#fff] rounded-xl py-2 w-full flex justify-center md:justify-around gap-1 md:gap-2 lg:gap-0 p-2
      transform transition-transform duration-300 hover:scale-95 md:hover:scale-105"
    >
      <GitHub fill="#fff" className={'w-[69px]'} />
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold text-[#56d364] w-fit bg-[#033a16] px-2 rounded-lg text-sm md:text-base">
          {userName}
        </span>
        <span className="text-base md:text-sm lg:text-base text-[#bda3a3]">
          Repos:<span className="text-[#f5f5f5]">{repos || ' Loading'}</span>
        </span>
      </div>
    </a>
  )
}
export default GitHubStats
