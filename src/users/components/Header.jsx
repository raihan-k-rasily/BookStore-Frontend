import React, { useEffect, useState } from "react";
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
  const [userData, setUserData] = useState({})
  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  // console.log(userDetails);
  useEffect(() => {
    setUserData(userDetails)
  }, [])
  return (


    <div>
      <Navbar>
        <NavbarBrand href="https://flowbite-react.com">
          <img src="../public/download.png" className="mr-3 h-6 sm:h-15 w-15" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BOOK STORE</span>
        </NavbarBrand>
        <div className="flex gap-7 md:order-2">
          {
            !userData ? (
              <Button href="/login" color="dark">Login</Button>
            ) : (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    // <Avatar
                    //   alt="User settings"
                    //   img={userDetails.profile}
                    //   rounded
                    // />
                    <img  className="w-10 h-10 rounded-4xl cursor-pointer " src={userDetails?.profile} alt="" />
                  }
                >
                  <DropdownHeader>
                    <span className="block text-sm">{userDetails?.username}</span>
                    <span className="block truncate text-sm font-medium">
                      {userDetails?.email}
                    </span>
                  </DropdownHeader>

                  <DropdownItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownItem>

                  <DropdownDivider />

                  <DropdownItem>Logout</DropdownItem>
                </Dropdown>

                <NavbarToggle />
              </>

            )
          }
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
