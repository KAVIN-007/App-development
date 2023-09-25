import React, { useState } from 'react'
import { Container } from './styles1'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import NavBar from '../../Navbar/Navbar';
import './Header.css';

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (<>
        <NavBar/>
      <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <div className='textname'><h2 >Employee Tax Calculator</h2></div>
    </Container>
  </>
  )
}
    

export default Header