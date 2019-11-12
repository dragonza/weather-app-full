import React, { useState } from "react";
import SideMenu from '../components/SideMenu'
import PropTypes from "prop-types";

function AuthenLayout({ children }) {
  return (
    <div className='layout layout__authen'>
      {children}
    </div>
  );
}

AuthenLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default AuthenLayout;
