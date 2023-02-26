import { NavLink } from "react-router-dom";

import { Box, Button, Flex, Img } from "@chakra-ui/react";

import React, { useState } from "react";
import { useEffect } from "react";

// const links = [
//     {
//       path: "/",
//       title: "Request Demo"
//     },
   
//   ]
const links=[
    { path:"/",title:"Select City"},
    { path:"/pune",title:"About"},
    { path:"/becomehost",title:"Contact"},
    {   path:"/login",title:"Login/Signup"},
]


function Navbar(){
const activeLinkStyle={textDecoration:"none",color:"red"};
const defaultLinkStyle={textDecoration:"none",color:"teal"};
const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 2 && window.scrollY <= 720) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeNavbarColor()
    window.addEventListener('scroll', changeNavbarColor);
  })
  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY > 720) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
return (
    <nav>
      <Box className={show ? 'nav' : 'nav__show'} >

        <Box className={colorChange ? 'Navbar colorChange' : 'Navbar '} width="100%" margin="auto" >

          <Box w="100%" height="60px" 
          // border="solid red 1px" 
          >
            <Flex w="60%" margin="auto" alignItems='center' 
            // border="solid red 1px" 
            justifyContent="space-around" >
              <NavLink to="/" >
                <Box marginTop="10px">
                  <Img boxSize="15%" src="https://www.zoomcar.com/assets/component-images/zms-logo-white.2af37707ebe1f0942fd6285bb0fdf3d9.png" />
                </Box>
              </NavLink>

              <Box marginTop="10px">
                {links.map((link) => (
                  <NavLink key={link.path} to={link.path}>
                    <Button color="red" className="NavbarHover" fontSize='1.1vw'>{link.title}</Button>
                  </NavLink>
                ))}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </nav>
  )
}
export default Navbar