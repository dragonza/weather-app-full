import React, { useState } from "react";
import classnames from "classnames";
import { useDarkMode } from "../pages/App/useDarkMode";
import SideMenu from "../components/SideMenu";
import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children, className, user }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const [isMenuActive, activeMenu] = useState(false);

  if (!componentMounted) {
    return <div />;
  }
  const layoutClass = classnames("layout", {
    dark: theme === "dark",
    [className]: className
  });



  return (
    <div className={layoutClass}>
      <SideMenu
        user={user}
        isMenuActive={isMenuActive}
        theme={theme}
        onOverLayClick={() => activeMenu(!isMenuActive)}
      />
      <Header
        theme={theme}
        onThemeToggleClick={toggleTheme}
        onMenuClick={() => activeMenu(!isMenuActive)}
      />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
