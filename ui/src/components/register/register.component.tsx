import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {

}

interface State {
  memberId: any;
   firstName: any;
   lastName: any;
   username: any;
   password: any;
   email: any;
   phone: any;
   membershipDate: any;
   points: any;
   role: any;
}

class Register extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      membershipDate: new Date(),
      points: 25,
      role: {
        roleId: 2
      },
      memberId: 0
    };
  }

  // grab all data (values) from the form fields 
  getUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      firstName: event.target.value,
      lastName: event.target.value,
      username: event.target.value,
      password: event.target.value,
      email: event.target.value,
      phone: event.target.value,
    });
  };

  // triggers when the form field changes
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  // handling form submittal
  onCreateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { memberId, firstName, lastName, username, password, email, phone, membershipDate, points, role } = this.state;

    let submitNewUser = {
      memberId,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      phone: phone,
      membershipDate,
      points,
      role,
    };

    // send submitNewUser object to database
    try {
            await fetch('http://localhost:8012/members', {
            credentials: 'include',
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(submitNewUser),
          });
          // const resp = await req.json();

          // redirect after registration
          this.props.history.push('/index'); // navigate pages
        } catch (err) {
           console.log(err)
       }
   }

  render() {
    return (
      <div className='register'>
        <h1>Member Registration</h1>
        <div className='container reg-container'>
          <form onSubmit={this.onCreateUser}>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                {/* <label htmlFor='inputEmail4'>Email</label> */}
                <input
                  type='text'
                  className='form-control'
                  id='inputFirst'
                  placeholder='First Name'
                  name='firstName'
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  // required
                />
              </div>
              <div className='form-group col-md-6'>
                {/* <label htmlFor='inputPassword4'>Password</label> */}
                <input
                  type='text'
                  className='form-control'
                  id='inputLast'
                  placeholder='Last Name'
                  name='lastName'
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  // required
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputUsername' />
                <input
                  type='text'
                  className='form-control'
                  id='inputUsername'
                  placeholder='Username'
                  name='username'
                  onChange={this.handleChange}
                  value={this.state.username}
                  // required
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputPassword' />
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  placeholder='Password'
                  name='password'
                  onChange={this.handleChange}
                  value={this.state.password}
                  // required
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputEmail' />
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  placeholder='Email'
                  name='email'
                  onChange={this.handleChange}
                  value={this.state.email}
                  // required
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputPhone' />
                <input
                  type='text'
                  className='form-control'
                  id='inputPhone'
                  placeholder='Phone'
                  name='phone'
                  onChange={this.handleChange}
                  value={this.state.phone}
                  // required
                />
              </div>
            </div>

            <div className='form-group' />
            {/* <Link to='/index'> */}
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
