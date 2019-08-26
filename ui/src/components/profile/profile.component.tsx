import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import Trash from '../../assets/delete.png';


interface State {
   memberId: any;
   firstName: any;
   lastName: any;
   username: any;
   password: any;
   email: any;
   phone: any;
   points: any;
   user: any;
   books: [];
   disabled: any;
}

class Profile extends Component<{}, State> {
  books: any;
  constructor(props: any) {
    super(props);
    const user = localStorage.getItem('user');
    const currentUser = user && JSON.parse(user);
    this.state = {
      memberId: currentUser.memberId,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      username: currentUser.username,
      password: currentUser.password,
      email: currentUser.email,
      phone: currentUser.phone,
      points: currentUser.points,
      user: currentUser,
      books: [],
      disabled: true,
    };
  }

  async componentDidMount() {
    try {
      const req = await fetch(`http://localhost:8012/members/${this.state.memberId}`, {
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
      });
      const resUser = await req.json();
      // console.log(resUser);
      this.setState({
        ...this.state,
        user: resUser,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
      user: {
        ...this.state.user,
      }
    });
  };

  UpdateCurrentUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("update button clicked");
    let updateUser = {
      ...this.state.user
    }
  try {
        await fetch(
          `http://localhost:8012/members/${this.state.memberId}`,
          {
            credentials: 'include',
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(updateUser),
          },
        );

      // console.log(updateUser);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const book: any = this.state.user;
    // console.log(book);
    return (
      <div className='profile'>
        {/* <div className='container'> */}
        <div className='profile-cont'>
          <div className='card w-50'>
            <div className='card-body'>
              <h5 className='card-title'>My Profile</h5>
              <form onSubmit={this.UpdateCurrentUser}>
                <div className='row profile-row-space'>
                  <div className='col-7'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>First Name:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputFirst'
                        name='firstName'
                        onChange={this.handleChange}
                        value={this.state.firstName}
                      />
                    </p>
                  </div>
                  <div className='col-5'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>Last Name:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputLast'
                        name='lastName'
                        onChange={this.handleChange}
                        value={this.state.lastName}
                      />
                    </p>
                  </div>
                </div>

                <div className='row profile-row-space'>
                  <div className='col-7'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>Username:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputUsername'
                        name='username'
                        onChange={this.handleChange}
                        value={this.state.username}
                      />
                    </p>
                  </div>
                  <div className='col-5'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>Password:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputPassword'
                        placeholder='New Password'
                        name='password'
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                </div>

                <div className='row profile-row-space'>
                  <div className='col-5'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>Email:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputEmail'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className='col-4'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>Phone:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputPhone'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className='col-3'>
                    <p className='card-text lead profile-txt-align'>
                      <strong>Points:</strong>
                      <input
                        type='text'
                        className='form-control'
                        id='inputPoints'
                        name='points'
                        value={this.state.points}
                        disabled
                      />
                    </p>
                  </div>
                </div>

                {/* <Button color='info' className='wishlist-btn'>
                  View Wishlist
                </Button> */}
                <button
                  className='btn btn-info wishlist-btn'
                  type='button'
                  data-toggle='collapse'
                  data-target='#collapseExample'
                  aria-expanded='false'
                  aria-controls='collapseExample'>
                  View Wishlist
                </button>

                <button
                  // to='/profile'
                  // onClick={this.UpdateCurrentUser}
                  type='submit'
                  name='updateBtn'
                  className='btn btn-success profile-update-btn'>
                  Update
                </button>
                {/* <Button onClick={this.unlockFields} color='warning edit-btn'>
                  Edit
                </Button> */}
              </form>
            </div>
          </div>
        </div>

        {/* </div> */}

        <div className='profile-cont'>
          <div className='w-75'>
            <div className='card-body'>
              <div className='collapse' id='collapseExample'>
                <div className='card card-body'>
                  <h5 className='card-title'>My Wishlist</h5>

                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Author</th>
                        <th scope='col'>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={book.bookid.bookId}>
                        <td>{book.bookid.bookId}</td>
                        <td>{book.bookid.title}</td>
                        <td>{book.bookid.author}</td>
                        <td>
                          <img
                            className='btn trash-can'
                            src={Trash}
                            alt='Trash Icon'
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;