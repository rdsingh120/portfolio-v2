import BlogPost from "./BlogPost"
import Project from "./Project"

const Blog = () => {
  return (
    <div className="bg-[#4085e7] text-white rounded-2xl p-2 lg:p-5 mb-0 md:mb-0 lg:mb-2">
      <h3 className="font-medium text-center lg:text-left text-xl md:text-lg lg:text-xl   mb-2">
        Blogs
      </h3>
      <div className="flex gap-1">
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  )
}
export default Blog