import React from 'react';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();
export default AuthContext;

export class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      token: null,
      login: this.login,
      logout: this.logout,
    };
  }

  login = (token) => {
    cookie.save('auth_token', token);
    this.setState({
      token,
      loggedIn: !!token,
    });
  };

  logout = () => {
    cookie.remove('auth_token');
    this.setState({
      token: null,
      loggedIn: false,
    });
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
