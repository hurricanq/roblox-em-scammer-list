const Header = (props) => {
  return (
    <div className="h-20 py-5 px-9 shadow flex items-center bg-darkcard">
      <img src={props.logo} alt="Logo" className="h-14" />
    </div>
  )
}

export default Header
