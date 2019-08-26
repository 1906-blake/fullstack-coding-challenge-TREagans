import React, { Component } from 'react';
// import { RouteComponentProps } from 'react-router';
// import { environment } from '../../environment';
// import SignIn from '../../assets/sign-in.png';
import Magnify from '../../assets/magnifier.png';
import Logo from '../../assets/bic_logo.png';
import User from '../../assets/group.png';
import LoginImg from '../../assets/login.png';
// import Login from '../login/login.component';
import { Link, RouteComponentProps } from 'react-router-dom';
// import { Button } from 'reactstrap';


interface Props extends RouteComponentProps {

}

interface IState {
  currentUser: any;
}

class Navbar extends Component<Props, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: {},
    };

    this.getUser();
  }

  componentDidMount = () => {
    this.getUser();
  };

  getUser() {
    const user = localStorage.getItem('user');
    const getUser = user && JSON.parse(user);
    this.setState({
      ...this.state,
      currentUser: getUser,
    });
  }

  logout() {
    
    // this.props.history.push('/login');
      window.location.reload();
      localStorage.clear();
  }

  render() {
    return (
      <div>
        {/* top bar */}
        <div className='navbar navbar-expand-lg' id='navTopBar'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/leaderboard' className='nav-link topBarLink'>
                Leaderboard
              </Link>
            </li>

            {/* <li className='nav-item'>
              <a className='nav-link topBarLink' href='#!'>
                Volunteer Readers
              </a>
            </li> */}
          </ul>
        </div>

        {/* navbar */}
        <nav className='navbar navbar-expand-lg bg-navbar'>
          <Link to='/index'>
            <Link to='/index' className='nav-logo'>
              <img src={Logo} alt='BooksInCloud Logo' />
            </Link>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          {/* search form */}
          <form className='form-inline mx-40 my-lg-0 bookSearchForm'>
            <input
              className='form-control mr-sm-2 searchInput'
              type='search'
              placeholder='Search By Title, Author, or Genre'
              aria-label='Search'
            />
            <button
              className='btn btn-primary my-2 my-sm-0 searchButton'
              type='submit'>
              <img src={Magnify} alt='Magnifying Icon' />
            </button>
          </form>

          <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              {/* logged in */}
              <li className='nav-item logged-in-user'>
                <div className='dropdown'>
                  <button
                    className='btn dropdown-toggle username-btn'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    <img
                      src={User}
                      alt='Username'
                      className='username-img'
                    />
                    <span className='username-txt'>
                      {this.state.currentUser &&
                        this.state.currentUser.username}
                    </span>
                  </button>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'>
                    <Link to='/profile' className='dropdown-item'>
                      Profile
                    </Link>
                    <Link
                      onClick={this.logout}
                      className='dropdown-item'
                      to='/login'>
                      Logout
                    </Link>
                  </div>
                </div>
              </li>

              <li className='nav-item'>
                <Link to='/login'>
                  <img
                    src={LoginImg}
                    alt='Sign In Icon'
                    className='login-icon'
                  />
                  <br />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
