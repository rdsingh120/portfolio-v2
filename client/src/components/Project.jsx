const Project = ({
  labelColor = '#d33928',
  textColor = 'white',
  backgroundColor = '#3d8d75',
  borderColor = '#9ec6ba',
}) => {
  return (
    <div
      className="border border-[#9ec6ba] rounded-xl 
    flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:items-start gap-1 lg:p-2 overflow-hidden"
      style={{ backgroundColor: backgroundColor, borderColor }}
    >
      <div className="flex flex-col items-center lg:items-start gap-1 lg:p-0 px-1">
        <h1
          className="text-xs font-medium rounded-xl w-fit px-1 lg:py-1 lg:px-4"
          style={{
            backgroundColor: labelColor,
            color: textColor,
          }}
        >
          Project Name
        </h1>
        <p className="text-xs leading-relaxed">
          ReactJS • Spring • CSS • JavaScript
        </p>
        <p className="text-xs leading-relaxed  md:hidden xl:block">
          Lorem ipsum dolor sit amet cons ecte tur adipi sicing elit.
        </p>
      </div>
      <div className="rounded overflow-hidden lg:max-w-[30%] lg:aspect-square">
        <img
          src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
export default Project
