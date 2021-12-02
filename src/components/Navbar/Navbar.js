import React, { useState } from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavUserLink,
} from "./NavbarElements";
import Logo from "../images/logo.svg";
const Navbar = () => {
  var role;

  {
    if(localStorage.getItem("role")!=null){
        role = localStorage.getItem("role").toLowerCase()
    }
    if(localStorage.getItem("role")==="CLASSADMIN"){
      role = localStorage.getItem("role").toLowerCase()+"/quanlykhoahoc"
    }
    else{
      role=""
    }
  }
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "250px", height: "200px", marginLeft: "-200px" }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Trang chủ
          </NavLink>
          <NavLink to="/diendan" activeStyle>
            Diễn đàn
          </NavLink>

          {/* <button onClick={handleClick} activeStyle >
            Đăng nhập
          </button> */}

          {!localStorage.getItem("accessToken") && (
            <>
              <NavLink to="/dangnhap" activeStyle>
                Đăng nhập
              </NavLink>

              <NavBtnLink to="/dangky">Đăng ký</NavBtnLink>
            </>
          )}
          {/* 
          <NavLink to="/dangnhap" activeStyle>
            Đăng nhập
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to="/dangky">Đăng ký</NavBtnLink> */}

          {localStorage.getItem("accessToken") && (
            <div>
              {/* <NavUserLink to="/" activeStyle>
                {localStorage.getItem("username")}
              </NavUserLink> */}
              <NavBtnLink
                to="/"
                activeStyle
                onClick={() => {
                  {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("role")
                    localStorage.removeItem("name")
                    localStorage.removeItem("username")
                  }
                }}
              >
                Đăng xuất
              </NavBtnLink>
              
              <NavUserLink to={`/${role}`} activeStyle>
                Trở về trang cá nhân
              </NavUserLink>
            </div>
          )}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
