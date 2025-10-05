import { useEffect, useState } from 'react'
import LeetCode from '../svg-components/LeetCode'

const LeetCodeStats = () => {
  const [data, setData] = useState(null)
  const [easySolved, setEasySolved] = useState(0)
  const [mediumSolved, setMediumSolved] = useState(0)
  const [hardSolved, setHardSolved] = useState(0)
  const userName = 'rdsingh120'
  const leetCodeApi = 'https://leetcode-stats-api.herokuapp.com/'

  const fetchData = async () => {
    const response = await fetch(leetCodeApi + userName)
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      setEasySolved(data.easySolved)
      setMediumSolved(data.mediumSolved)
      setHardSolved(data.hardSolved)
    }
  }, [data])
  return (
    <a
      href="https://leetcode.com/u/rdsingh120/"
      target="_black"
      rel="noopener noreferrer"
      className="bg-[#1a1a1a] border border-[#fff] rounded-xl py-2 w-full flex justify-center md:justify-around gap-0 md:gap-2 lg:gap-0 p-2
      transform transition-transform duration-300  hover:scale-95 md:hover:scale-105"
    >
      <LeetCode className="w-[69px]" />
      <div className="">
        <span className="font-semibold text-[#f3a11b] w-fit bg-[#423726] px-2 rounded-lg text-sm md:text-base">
          {userName}
        </span>
        <div className="flex flex-col items-center">
          <span className="text-xs md:text-sm text-[#1cbaba]">
            Easy: <span className="text-[#f5f5f5]">{easySolved}</span>
          </span>
          <span className="text-xs md:text-sm text-[#ffb700]">
            Med.: <span className="text-[#f5f5f5]">{mediumSolved}</span>
          </span>
          <span className="text-xs md:text-sm text-[#f63737]">
            Hard: <span className="text-[#f5f5f5]">{hardSolved}</span>
          </span>
        </div>
      </div>
    </a>
  )
}
export default LeetCodeStats
