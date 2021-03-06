import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = event => {
    event.preventDefault();
    (this.state.username && this.state.password) ? this.state : alert('Please enter both username and password')
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="test-username" 
                   type="text" 
                   name="username" 
                   value={this.state.username} 
                   onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
                   type="password"
                   name="username" 
                   value={this.state.password} 
                   onChange={this.handleInputChange}  />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
