import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";


function Header() {
  return (

    
 <div>
    <Navbar>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="../public/download.png" className="mr-3 h-6 sm:h-15 w-15" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BOOK STORE</span>
      </NavbarBrand>
      <div className="flex gap-7 md:order-2">
       <Button href="/login" color="dark">Login</Button>
        <Dropdown 
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <Link to={"/profile"}><DropdownItem>Profile</DropdownItem></Link>
          <DropdownDivider />
          <DropdownItem>Logout</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link to={"/"} className="text-amber-50">Home</Link>
        <Link to={"/allbooks"} className="text-amber-50">Book</Link>
        <Link to={"/careers"} className="text-amber-50">Carrier</Link>
        <Link to={"/contact"} className="text-amber-50">Contact</Link>
      </NavbarCollapse>
    </Navbar> 
  </div>

  )
 
}

export default Header;
