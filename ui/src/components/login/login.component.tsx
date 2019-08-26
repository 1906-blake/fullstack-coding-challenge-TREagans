import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props extends RouteComponentProps {

}

interface IState {
  credentials: {
    username: string;
    password: string;
  };
  modal: boolean;
  errorMessage?: string;
}

class Login extends Component<Props, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      credentials: {
        username: '',
        password: '',
      },
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    this.setState({
      credentials: {
        ...this.state.credentials,
        [name]: event.target.value,
      },
    });
  };

  submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resp = await fetch('http://localhost:8012/members/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state.credentials),
        headers: {
          'content-type': 'application/json',
        },
      });
      const user = await resp.json();

      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
      this.props.history.push('/index'); // navigate pages
      window.location.reload();

    } catch (err) {
      console.log(err);
      console.log('invalid credentials');
      this.setState({
        errorMessage: 'Invalid Credentials',
      });
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='card-body'>
          <form className='form-signin' onSubmit={this.submit}>
            <h2>Member Login</h2>
            <FormGroup>
              <Label for='exampleEmail' />
              <Input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                onChange={this.handleChange}
                value={this.state.credentials.username}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' />
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={this.handleChange}
                value={this.state.credentials.password}
                required
              />
            </FormGroup>

            <FormGroup>
              {this.state.errorMessage && (
                <p id='error-message'>{this.state.errorMessage}</p>
              )}
              <p>
                Don't have an account?
                <Link to='/register'> Create Account</Link>
              </p>
              <Button
                color='primary'
                type='submit'
                onClick={this.submit}
                className='float-right'>
                Login
              </Button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
