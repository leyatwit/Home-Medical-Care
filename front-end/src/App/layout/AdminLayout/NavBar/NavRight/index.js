import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

import Aux from '../../../../../hoc/_Aux';
import DEMO from '../../../../../store/constant';

import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';

import { logout } from '../../../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const NavRight = ({ auth: { isAuthenticated }, logout }) => {
  // state = {
  //   listOpen: false
  // };

  return (
    <Aux>
      <ul className='navbar-nav ml-auto'>
        <li>
          <Dropdown className='drp-user'>
            <Dropdown.Toggle variant={'link'} id='dropdown-basic'>
              <h3>
                <i className='icon feather icon-settings' />
              </h3>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className='profile-notification'>
              <div className='pro-head'>
                <img src={Avatar2} className='img-radius' alt='User Profile' />
                <span>Test User</span>
              </div>
              <ul className='pro-body'>
                <li>
                  <a href={DEMO.BLANK_LINK} className='dropdown-item'>
                    <i className='feather icon-users' />
                    Switch Profile
                  </a>
                </li>
                <li>
                  <a href='/profile' className='dropdown-item'>
                    <i className='feather icon-user' /> Profile
                  </a>
                </li>
                <li>
                  <a href={DEMO.BLANK_LINK} className='dropdown-item'>
                    <i className='feather icon-user-plus' /> Add Member
                  </a>
                </li>
                <li>
                  <a
                    href='/auth/signin'
                    onClick={logout}
                    className='dropdown-item'
                  >
                    <i className='feather icon-log-out' />
                    Log out
                  </a>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </Aux>
  );
};
NavRight.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  listOpen: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  listOpen: false
});
export default connect(mapStateToProps, { logout })(NavRight);
