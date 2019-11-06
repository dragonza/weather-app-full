import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { createStructuredSelector } from "reselect";
// import { makeAuthTokenSelector } from "../containers/Auth/auth-selector";
import Logo from "./icons/Logo";
import Toggle from "react-toggle";
import Hamburger from "./icons/Hamburger";

class Header extends Component {
  handleMenuClick = () => {
    this.props.onMenuClick()
  };

  handleThemeToggle = () => {
    const { onThemeToggleClick } = this.props;
    onThemeToggleClick();
  };

  render() {
    const { theme } = this.props;
    return (
      <header className="header">
        <div className="logo header__item header__item--left">
          <div className="icon icon__hamburger">
            <Hamburger theme={theme} onMenuClick={this.handleMenuClick} />
          </div>
          <Link to="/" className="logo__item">
            <Logo theme={theme} name="Minimis" />
          </Link>
        </div>
        <div className="date__text header__item">Today</div>
        <div className="toggle header__item header__item--right">
          <span className="toggle__label">Light</span>
          <Toggle
            icons={false}
            className="toggle__button toggle-theme"
            checked={theme === "dark"}
            onChange={this.handleThemeToggle}
          />
          <span className="toggle__label">dark</span>
        </div>
      </header>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   authenticated: makeAuthTokenSelector()
// });

Header.propTypes = {
  theme: PropTypes.string,
  onMenuClick: PropTypes.func,
};

Header.defaultProps = {};

export default Header;

// export default connect(mapStateToProps)(Header);
