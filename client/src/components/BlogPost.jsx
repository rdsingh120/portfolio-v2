

const BlogPost = ({name, desc, link, photo}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="rounded-xl overflow-hidden border-2 border-[#9fc2f3] bg-[#70a3ed]">
        <img
          className="rounded"
          src={photo}
          alt=""
        />
        <div className="px-2">
          <h1 className="font-bold text-sm md:text-xs lg:text-sm">
            {name}
          </h1>
          <p className="text-sm md:text-xs lg:text-sm">{desc}</p>
        </div>
      </div>
    </a>
  )
}
export default BlogPost