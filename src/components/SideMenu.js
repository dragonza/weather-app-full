import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signout } from "../pages/Auth/auth-action";

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
              <div className="side-menu__user-photo">photo</div>
              <div className="side-menu__user-info">
                <div className="side-menu__user-name">name</div>
                <div className="side-menu__user-email">email</div>
              </div>
            </div>
          </section>
          <section className="side-menu__body">
            {user && (
              <div className="side-menu__email">{user.get("email")}</div>
            )}
          </section>
          <section className="side-menu__footer">
            <button onClick={() => signout()}>Signout</button>
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
