import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { SubMenu } = Menu;
  return (
    <div className="App">
      <Menu onClick={() => {}} mode="horizontal">
        <Menu.Item key="mail">
          <NavLink to="/home">
            <Icon type="home" />
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="app">
          <NavLink to="/ads">
            <Icon type="appstore" />
            Ads
          </NavLink>
        </Menu.Item>

        <Menu.Item key="alipay">
          <NavLink to="/login">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="login" />
              Sign in
            </a>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink to="/register">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="fire" />
              Sign in
            </a>
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
