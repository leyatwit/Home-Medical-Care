import React from 'react';
import { Card } from 'react-bootstrap';
import '../../assets/scss/style.scss';
// import Aux from "../../hoc/_Aux";
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
// import DEMO from "../../store/constant";
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
        <Card.Body className='Design-sprint text-center'>
          <ul className='design-image mb-4'>
            <li>
              <img
                className='rounded-circle m-4'
                style={{ width: '70px' }}
                src={avatar1}
                alt='chat-user'
              />
              <h6>Test User</h6>
              <span>Father</span>
            </li>
            <li>
              <img
                className='rounded-circle m-4'
                style={{ width: '70px' }}
                src={avatar2}
                alt='chat-user'
              />
              <h6>Test User</h6>
              <span>Child</span>
            </li>
            <li>
              <img
                className='rounded-circle m-4 '
                style={{ width: '70px' }}
                src={avatar3}
                alt='chat-user'
              />
              <h6>Test User</h6>
              <span>Child</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    );
  }
}

export default FamilyMember;
