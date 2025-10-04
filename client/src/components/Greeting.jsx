const Greeting = () => {
  return (
    <div className="p-2 pt-5 lg:p-5 lg:pt-10 text-white lg:mb-2">
      <h3 className="font-medium text-2xl lg:text-3xl mb-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:underline"
        >
          View Resume
        </a>
      </h3>
      <p className="text-md lg:text-lg leading-relaxed">
        <span className="text-[#ffbad3]">Hi I am Ripudaman</span>, I love
        building things and exploring new technologies. I am looking forward to
        work with you.
      </p>
    </div>
  )
}
export default Greeting
