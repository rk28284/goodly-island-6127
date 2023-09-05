import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Flex, Img } from "@chakra-ui/react";
import img from "../Image/Bhart.jpg"
const links = [
  { path: "/", title: "Select City" },
  { path: "/pune", title: "Pune" },
  { path: "/becomehost", title: "Become Host" },
  { path: "/login", title: "Login/Signup" },
  { path: "/admin", title: "Admin" },
];

function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const [show, setShow] = useState(true);

  const changeNavbarColor = () => {
    if (window.scrollY >= 2 && window.scrollY <= 720) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > 720) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav>
      <Box
        className={show ? "nav" : "nav__show"}
        bg={colorChange ? "teal.500" : "transparent"} // Change background color dynamically
        transition="background-color 0.3s"
        position="fixed"
        width="100%"
        zIndex="999"
      >
        <Flex
          w="100%"
          height="60px"
          maxW="6xl"
          mx="auto"
          px={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <NavLink to="/">
            <Box mt={1}>
              <Img boxSize="40px" src={img}alt="Logo" />
            </Box>
          </NavLink>

          <Flex alignItems="center">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  color={colorChange ? "white" : "teal.500"}
                  _hover={{ color: "red.500" }}
                  fontSize="1.1vw"
                >
                  {link.title}
                </Button>
              </NavLink>
            ))}
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
}

export default Navbar;
