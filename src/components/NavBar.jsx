import { Constants } from '../constants/Constants'
import React, { useEffect, useRef, useState } from 'react'
import { Box, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const NavBar = () => {
  const [NavControl, setNavControl] = useState(false)
  const [NavScroll, setNavScroll] = useState(false);

  const scrollToTarget = (target, offset = 100) => {
    console.log(target);
    const element = document.getElementById(target);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScroll(true)
      } else {
        setNavScroll(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box sx={{ display: { sm: "block", xs: "none" } }}>
        <div id='NavBar' style={{backgroundColor: NavScroll ? 'black' : 'transparent'}}>
          <a target="_blank" href="https://www.linkedin.com/in/hari-guptha-bb6a29208/"><h5 id="hiremebtn" className='glow-on-hover'>Hire me</h5></a>
          <div id='NavItems'>
            {Constants.Navbar.map((NavItem, index) => {
              return <h5 id='NavItem' key={index}>{NavItem}</h5>
            })}
          </div>
        </div>
      </Box>
      <Box sx={{ display: { sm: "none", xs: "block" } }}>
        <div id='PhoneNav' >
          <div></div>
          <MenuIcon id="menuicon" onClick={e => (setNavControl(true))} />
        </div>
      </Box>
      <Drawer
        anchor={'left'}
        open={NavControl}
        onClose={e => (setNavControl(false))} >
        <div style={{ width: "250px", zIndex: 1000 }}>
          <div id='SideBarFirstPart' style={{ display: "flex" }}>
            <CloseIcon id="closeicon" onClick={e => (setNavControl(false))} />
          </div>
          <div className='centerDiv'>
            <div id='SideBarContainer'>
              <div id='NavItems'>
                {Constants.Navbar.map((NavItem, index) => {
                  return <h5 id='NavItem' key={index}>{NavItem}</h5>
                })}
              </div>
              <a target="_blank" href="https://www.linkedin.com/in/hari-guptha-bb6a29208/"><h5 id="hiremebtn" className='glow-on-hover'>Hire me</h5></a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default NavBar
