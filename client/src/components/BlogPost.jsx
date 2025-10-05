

const BlogPost = () => {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-[#9fc2f3] bg-[#70a3ed]">
      <img
        className="rounded"
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="px-2">
        <h1 className="font-medium text-lg md:text-base lg:text-lg">Blog</h1>
        <p className="text-sm md:text-xs lg:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
    </div>
  )
}
export default BlogPost