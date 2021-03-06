import React from 'react'
import Sidebar from './Sidebar'
import NavLinks from './NavLinks'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import Button from './Button'
import Search from './Search'

const Header = ({ width, links, sidebar, setSidebar }) => {
  return (
    <header>
		<nav className={`border-b border-gray-300`} >
          <div className="logo-details">
			  <h4 className="text-white">Glockchain<span>.com</span></h4>
          </div>
			{ width > 620 && !sidebar && <Search styles="order-1 flex items-center mr-5 ml-auto"/>}
			{ width <= 1023 ? <Button text={<BiMenuAltRight />} onClick={() => setSidebar(!sidebar)} styles={`text-white text-2xl order-1 ml-auto rounded-full md-620:ml-0`}/> : <NavLinks links={links} /> }
        </nav>
    </header>
  )
}

export default Header
