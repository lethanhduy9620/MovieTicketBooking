import React, { useEffect, useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import "./style_Navbar.scss";
import "./../../../_components/hamburgetIcon/style_hamburgerIcon.css";
import { FaSignInAlt } from "react-icons/fa";

const dataNavbar = [
  {
    name: "Phim đang chiếu",
    link: "/phim-dang-chieu",
  },
  {
    name: "Phim sắp chiếu",
    link: "/phim-sap-chieu",
  },
];

export default function NavbarComp() {
  const [isOpen, setOpen] = useState(false);
  const [isSignIn, setStateSignIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("GeneralUser")) {
      setStateSignIn(true);
    }
  }, []);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const renderNavItem = () => {
    return dataNavbar.map((navbarItem, index) => {
      return (
        <li className="nav-item" key={index}>
          <NavLink className="nav-link" to={navbarItem.link}>
            {navbarItem.name}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <Navbar
      id="navbarComp"
      container="lg"
      expand="md"
      className="navbar m-0 border-0 py-0"
    >
      {/* Navbrand */}
      <Link className="navbar-brand" to="/">
        <img src="/images/logo1.png" alt="" />
      </Link>
      <NavbarToggler
        className={clsx("toggle-button", isOpen && "change")}
        onClick={() => toggleNavbar()}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </NavbarToggler>
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          {renderNavItem()}
        </Nav>
        {!isSignIn && (
          <Link className="btn" to="/dang-nhap">
            Đăng nhập
          </Link>
        )}
        {isSignIn && (
          <>
            <div className="account">
              Xin chào {JSON.parse(localStorage.getItem("GeneralUser")).hoTen}
              <span
                onClick={() => {
                  localStorage.removeItem("GeneralUser");
                  setStateSignIn(false);
                }}
              >
                <FaSignInAlt />
              </span>
            </div>
          </>
        )}
      </Collapse>
    </Navbar>
  );
}
