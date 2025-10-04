const Skill = ({name, className, Component}) => {
  return (
    <>
      <a
        data-tooltip-id={`skill-tooltip`}
        data-tooltip-content={`${name}`}
        className="cursor-pointer"
      >
        <Component className={className} />
      </a>
    </>
  )
}
export default Skill