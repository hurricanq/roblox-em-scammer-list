import logo from '../assets/epic-minigames.webp'

const Header = () => {
  return (
    <div className="h-20 py-5 px-9 shadow flex items-center bg-darkcard">
      <img src={logo} alt="Logo" className="h-14" />
    </div>
  )
}

export default Header
