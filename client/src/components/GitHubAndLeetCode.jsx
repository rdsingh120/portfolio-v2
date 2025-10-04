import GitHubStats from './GitHubStats'
import LeetCodeStats from './LeetCodeStats'

const GitHubAndLeetCode = () => {
  return (
    <div className="flex flex-row md:flex-col lg:flex-row gap-1">
      <LeetCodeStats />
      <GitHubStats />
    </div>
  )
}
export default GitHubAndLeetCode
