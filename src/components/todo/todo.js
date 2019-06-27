import React from 'react';
import Counter from '../counter/counter.js';
import { When } from '../if';

import './todo.scss';
import { AppContext } from '../context/context.js';
import Form from '../form/form.js';
import List from '../list/list.js';
import AuthContext from '../context/authContext.js';

class ToDo extends React.Component {
  static contextType = AppContext;
  static authContext = AuthContext;

  render() {
    return (
      <>
        <When condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </When>
        <When condition={!this.context.loggedIn}>
          <button onClick={this.context.login}>Log In</button>
        </When>
        <section className="todo">
          <div>
            <Counter count={this.context.count} />
          </div>

          <div>
            <Form />
          </div>

          <div>
            <List />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
