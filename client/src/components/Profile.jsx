import photo from '../assets/photo.jpg'
const Profile = () => {
  return (
    <div className="bg-[#bbf2ff] rounded-2xl p-5 pt-10 md:p-2 md:pt-5 lg:p-5 lg:pt-5 border-b-2 border-dashed border-black flex flex-col items-center justify-between">
      <span className="bg-black h-3 w-16 rounded-xl mb-5"></span>
      <div className="mb-2 lg:mb-5">
        <h1 className="text-2xl md:text-lg lg:text-2xl font-medium text-center">
          Ripudaman Singh
        </h1>
        <h3 className="text-center text-base md:text-sm lg:text-base">
          Software Engineer in Toronto
        </h3>
      </div>
      <div className="rounded-2xl bg-[#eb5a35] w-full p-5 md:p-2 lg:p-5 flex items-center justify-center">
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
