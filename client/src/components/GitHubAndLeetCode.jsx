import GitHubStats from './GitHubStats'
import LeetCodeStats from './LeetCodeStats'

const GitHubAndLeetCode = () => {
  return (
    <div className="flex gap-1">
      <LeetCodeStats />
      <GitHubStats />
    </div>
  )
}
export default GitHubAndLeetCode
