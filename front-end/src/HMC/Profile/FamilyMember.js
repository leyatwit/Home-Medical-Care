import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../assets/scss/style.scss';
// import Aux from "../../hoc/_Aux";
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import add from '../../assets/images/user/add-member.png';
import DEMO from '../../store/constant';
class FamilyMember extends React.Component {
  state = {
    gender: 'f',
    isBasic: false,
    isVertically: false,
    isTooltip: false,
    isGrid: false,
    isScrolling: false,
    isLarge: false,
    title: ''
  };

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>
            <h5>Family Members</h5>
            {/* <a href={DEMO.BLANK_LINK} className="btn theme-bg text-uppercase text-white float-right"><i className="feather icon-user-plus f-20 text-white"/>Add Member</a> */}
          </Card.Title>
        </Card.Header>
        <Card.Body className=' text-center'>
          <div
            className='user-box assign-user taskboard-right-users'
            id='assign-users'
          >
            <div className='media mb-2'>
              <div className='media-left media-middle mr-3'>
                <a href={DEMO.BLANK_LINK}>
                  <img
                    className='media-object img-radius'
                    src={avatar1}
                    alt='Generic placeholder'
                  />
                  <div className='live-status bg-danger' />
                </a>
              </div>
              <div className='media-body'>
                <h6>Josephin Doe</h6>
                <p>Santa Ana,CA</p>
              </div>
            </div>
            <div className='media mb-2'>
              <div className='media-left media-middle mr-3'>
                <a href={DEMO.BLANK_LINK}>
                  <img
                    className='media-object img-radius'
                    src={avatar2}
                    alt='Generic placeholder'
                  />
                  <div className='live-status bg-success' />
                </a>
              </div>
              <div className='media-body'>
                <h6>Josephin Doe</h6>
                <p>Huntingston, NJ</p>
              </div>
            </div>
            <div className='media mb-2'>
              <div className='media-left media-middle mr-3'>
                <a href={DEMO.BLANK_LINK}>
                  <img
                    className='media-object img-radius'
                    src={avatar3}
                    alt='Generic placeholder'
                  />
                  <div className='live-status bg-danger' />
                </a>
              </div>
              <div className='media-body'>
                <h6>Josephin Doe</h6>
                <p>Willingstion, WA</p>
              </div>
            </div>
            <div className='media mb-2'>
              <div className='media-left media-middle mr-3'>
                <a href={DEMO.BLANK_LINK}>
                  <img
                    className='media-object img-radius'
                    src={avatar2}
                    alt='Generic placeholder'
                  />
                  <div className='live-status bg-success' />
                </a>
              </div>
              <div className='media-body'>
                <h6>Josephin Doe</h6>
                <p>Illions, IL</p>
              </div>
            </div>
          </div>
          <Button
            className='btn theme-bg text-uppercase text-white '
            onClick={() => {}}
          >
            {' '}
            <i className='feather icon-user-plus f-20 text-white' />
            Add New Member
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default FamilyMember;
