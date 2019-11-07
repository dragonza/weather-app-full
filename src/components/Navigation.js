import React from 'react';
import { Link } from 'react-router-dom';
import {ROUTES} from '../containers/App/constants';
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LOG_IN}>Log in</Link>
      </li>
      {/*<li>*/}
      {/*  <Link to={ROUTES.LANDING}>Landing</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to={ROUTES.HOME}>Home</Link>*/}
      {/*</li>*/}
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {/*<li>*/}
      {/*  <Link to={ROUTES.ADMIN}>Admin</Link>*/}
      {/*</li>*/}
    </ul>
  </div>
);
export default Navigation;
