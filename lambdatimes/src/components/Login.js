import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = ({
      username: '',
      password: '',
    })
  }
   handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
   handleLogin = event => {
    event.preventDefault();
    if (this.state.username.length === 0){
      alert('You must provide a username');
      return;
    } else {
      if (this.state.password.length === 0){
        alert('You must provide a password');
        return;
      }
    }
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: '',
    })
  }
   render(){
    return(
      <div className='login'>
        <h1>Hello! Please sign in to access Lambda Times.</h1>
        <form  onSubmit={this.handleLogin}>
          <input
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}/>
            <input
              name='password'
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}/>
            <button className='login-button' >Login</button>
        </form>
      </div>
    )
  }
}
 export default Login;
