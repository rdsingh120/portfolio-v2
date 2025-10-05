import GitHubStats from './GitHubStats'
import LeetCodeStats from './LeetCodeStats'

const GitHubAndLeetCode = () => {
  return (
    <div className="flex flex-row md:flex-col lg:flex-row mb-3 md:mb-0 lg:mb-3">
      <LeetCodeStats />
      <GitHubStats />
    </div>
  )
}
export default GitHubAndLeetCode
