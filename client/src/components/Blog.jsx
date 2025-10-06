import { PiLinkSimple } from 'react-icons/pi'

import BlogPost from './BlogPost'
import { blogs } from '../assets/data/blogs/blogs'

const Blog = () => {
  return (
    <div className="bg-[#4085e7] text-white rounded-2xl p-2 lg:p-5 mb-0 md:mb-0 lg:mb-2 transform transition-transform duration-300  hover:scale-95 md:hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-center lg:text-left text-xl md:text-lg lg:text-xl   mb-2">
          Blogs
        </h3>
        <a
          href="https://rdsingh.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#70a3ed] rounded-xl px-4 md:px-2 lg:px-4 flex items-center gap-1"
        >
          <PiLinkSimple />
          <span className="text-sm underline">rdsingh.dev/blog</span>
        </a>
      </div>
      <div className="flex gap-1">
        {blogs.map(({ name, desc, link }) => {
          return <BlogPost key={name} name={name} desc={desc} link={link} />
        })}
      </div>
    </div>
  )
}
export default Blog
