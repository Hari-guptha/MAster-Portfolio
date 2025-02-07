import { Constants } from '../constants/Constants';
import React, { useEffect, useState } from 'react';
import { Box, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navControl, setNavControl] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const scrollToTarget = (target, offset = 100) => {
    const element = document.getElementById(target);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setNavScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavItems = () => (
    Constants.Navbar.map((NavItem, index) => (
      <Link key={index} to="#" onClick={() => { scrollToTarget(NavItem.Name, NavItem.offset); setNavControl(false); }}>
        <h5 id='NavItem'>{NavItem.Name}</h5>
      </Link>
    ))
  );

  return (
    <>
      <Box sx={{ display: { sm: "block", xs: "none" } }}>
        <div id='NavBar' style={{ backgroundColor: navScroll ? 'rgba(0, 0, 0, 0.8)' : 'transparent', backdropFilter: navScroll ? 'blur(30px)' : 'none', boxShadow: navScroll ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none', border: navScroll ? '1px solid rgba(0, 0, 0, 0.3)' : 'none' }}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hari-guptha-bb6a29208/">
            <h5 id="hiremebtn" className='glow-on-hover'>Hire me</h5>
          </a>
          <div id='NavItems'>
            {renderNavItems()}
          </div>
        </div>
      </Box>
      <Box sx={{ display: { sm: "none", xs: "block" } }}>
        <div id='PhoneNav'>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: navScroll ? 'rgba(0, 0, 0, 0.8)' : 'transparent', backdropFilter: navScroll ? 'blur(30px)' : 'none', boxShadow: navScroll ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none', border: navScroll ? '1px solid rgba(0, 0, 0, 0.3)' : 'none' }}>
            <MenuIcon id="menuicon" onClick={() => setNavControl(true)} />
          </div>
        </div>
      </Box>

      <Drawer anchor='left' open={navControl} onClose={() => setNavControl(false)}>
        <div style={{ width: "250px", zIndex: 1000 }}>
          <div id='SideBarFirstPart' style={{ display: "flex" }}>
            <CloseIcon id="closeicon" onClick={() => setNavControl(false)} />
          </div>
          <div className='centerDiv'>
            <div id='SideBarContainer'>
              <div id='NavItems'>
                {renderNavItems()}
              </div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hari-guptha-bb6a29208/">
                <h5 id="hiremebtn" className='glow-on-hover'>Hire me</h5>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
