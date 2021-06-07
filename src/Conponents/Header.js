import LeftMenu from './HeaderConponents/LeftMenu'
import Search from './HeaderConponents/Search'

function Header() {
  return (
    <header className="header">
      <LeftMenu />
      <Search />
    </header>
  )
}

export default Header
