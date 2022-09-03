import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import ModalTemplate from "../component/ModalTemplate";

function NavbarTemplate() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Navbar className="my-0" color="secondary" dark>
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
              <img
                style={{ width: "30px", height: "30px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                alt=""
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink active href="/Login">
                Login
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink active href="/Register">
                Register
                </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <NavLink href="/UserDashboard">
                  User Dashboard
                  </NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarBrand>
      </Navbar>
      {/* <Nav>
        <NavItem>
          <NavLink active>
            <Link to="/Home">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav>
              <img
                style={{ width: "30px", height: "30px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                alt=""
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink active>
                  <Link to="/Login">Login</Link>
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink active>
                  <Link to="/Register">Register</Link>
                </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <NavLink>
                    <Link to="/UserDashboard">User Dashboard</Link>
                  </NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav> */}
    </>
  );
}

export default NavbarTemplate;
