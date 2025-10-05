import photo from '../assets/photo.jpg'
import tag from '../assets/icons/tag.png'
const Profile = () => {
  return (
    <div
      className="bg-[#bbf2ff] rounded-2xl p-5 pt-10 md:pt-5 lg:p-5 lg:pt-5 border-b-2 border-dashed 
    border-black flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-95 md:hover:scale-105"
    >
      <span className="bg-black h-5 md:h-3 lg:h-5 w-24 md:w-16 lg:w-24 rounded-xl mb-5 relative">
        <img
          src={tag}
          alt=""
          className="w-20 md:w-10 lg:w-20 absolute -top-20 md:-top-10 lg:-top-20 right-2 md:right-3 lg:right-2"
        />
      </span>
      <div className="mb-2 lg:mb-5">
        <h1 className="text-2xl md:text-lg lg:text-2xl font-medium text-center">
          Ripudaman Singh
        </h1>
        <h3 className="text-center text-base md:text-xs lg:text-base">
          Software Engineer in Toronto
        </h3>
      </div>
      <div className="rounded-2xl bg-[#eb5a35] w-full p-5 md:p-3 lg:p-5 flex items-center justify-center">
        <img
          className="rounded-xl w-full h-full object-cover object-right"
          src={photo}
          alt=""
        />
      </div>
    </div>
  )
}
export default Profile
