import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class SideMenu extends Component {
  render() {
    const { isMenuActive } = this.props;
    const sideMenuClasses = classnames("side-menu", {
      "side-menu--active": isMenuActive
    });
    const sideMenuContentClasses = classnames("side-menu__content", {
      "side-menu__content--active": isMenuActive
    });
    return (
      <aside className={sideMenuClasses}>
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
          <section className="side-menu__body"></section>
          <section className="side-menu__footer"></section>
        </nav>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  isMenuActive: PropTypes.bool
};

export default SideMenu;
