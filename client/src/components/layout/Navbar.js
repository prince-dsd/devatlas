import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="menu">

      <li >
        <Link to='/profiles'>
          <i className="fas fa-laptop-code"></i>
          <span >Developers</span>
        </Link>
      </li>
      <li >

        <Link to='/posts'><i class="far fa-newspaper"></i><span >Posts</span></Link>
      </li>
      <li >
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span >Dashboard</span>
        </Link>
      </li>
      <li >
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span >Logout</span>
        </a>
      </li>

    </ul>
  );

  const guestLinks = (
    <ul className="menu">

      <li >
        <Link to='/profiles'>
          <i className="fas fa-laptop-code"></i>
          <span >Developers</span>
        </Link>
      </li>
      <li >
        <Link to='/register'><i class="fas fa-coffee"></i> <span>Register</span></Link>
      </li>
      <li >
        <Link to='/login'><i class="fas fa-sign-in-alt"></i><span>Login</span></Link>
      </li>

    </ul>
  );

  return (
    <header className='navbar '>


      <Link className="logo" to='/'>
        <i className='fas fa-code' /> DevAtlas
      </Link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
