import React, { useState } from "react";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Label,
} from "reactstrap";
import { useCookies } from "react-cookie";

function NavbarTemplate() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const [cookies] = useCookies(["accessToken", "userId", "username"]);
  let menu;
  if (!cookies.accessToken) {
    menu = (
      <>
        <DropdownItem>
          <NavLink active href="/Login">
            Login
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink active href="/Register">
            Sign Up
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled id="userDasboard">
          <NavItem>
            <NavLink href="/UserDashboard">User Dashboard</NavLink>
          </NavItem>
        </DropdownItem>
      </>
    );
  } else {
    menu = (
      <>
        <DropdownItem>
          <NavLink
            onClick={() => {
              document.cookie =
                "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              document.cookie =
                "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              document.cookie =
                "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              window.location.reload();
            }}
          >
            Logout
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavItem>
            <NavLink href="/UserDashboard">User Dashboard</NavLink>
          </NavItem>
        </DropdownItem>
      </>
    );
  }

  return (
    <>
      <Navbar sticky="top" className="my-0" color="secondary" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/3959/3959420.png"
            style={{
              height: 40,
              width: 40,
              marginRight: 20,
            }}
          />
          Blog App
        </NavbarBrand>
        <NavbarBrand>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav>
              <Label style={{marginRight:"10px"}}>{cookies.username}</Label>
              <img
                style={{ width: "30px", height: "30px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                alt="UserManagement"
              />
            </DropdownToggle>
            <DropdownMenu>{menu}</DropdownMenu>
          </Dropdown>
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default NavbarTemplate;
