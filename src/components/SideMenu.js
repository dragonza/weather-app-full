import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signout } from "../pages/Auth/auth-action";
import profile from './icons/profile.svg'
import { NavLink } from "react-router-dom";

class SideMenu extends Component {
  render() {
    const { isMenuActive, onOverLayClick, signout, user } = this.props;
    console.log("user", user);
    const sideMenuClasses = classnames("side-menu", {
      "side-menu--active": isMenuActive
    });
    const sideMenuContentClasses = classnames("side-menu__content", {
      "side-menu__content--active": isMenuActive
    });
    return (
      <aside className={sideMenuClasses}>
        <div className="side-menu__overlay" onClick={onOverLayClick} />
        <nav className={sideMenuContentClasses}>
          <section className="side-menu__header">
            <div className="side-menu__title">Welcome back</div>
            <div className="side-menu__account-detail">
              <div className="side-menu__user-photo-wrapper">
                <img src={profile} alt="profile" />

              </div>
              <div className="side-menu__user-info">
                <div className="side-menu__user-email">
                  {user && (
                    <div className="side-menu__email">{user.get("email")}</div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="side-menu__body">
            <NavLink exact to='/' activeClassName='is-active' className="side-menu__link side-menu__link--home">Home</NavLink>
            <NavLink exact to='/add' activeClassName='is-active' className="side-menu__link">Add City</NavLink>
            <button onClick={() => signout()} className="side-menu__button">
              Sign out
            </button>
          </section>
        </nav>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  isMenuActive: PropTypes.bool
};

export default connect(
  null,
  { signout }
)(SideMenu);
