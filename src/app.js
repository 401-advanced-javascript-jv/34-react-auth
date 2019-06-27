import React from 'react';

import ToDo from './components/todo/todo.js';
import ContextProvider from './components/context/context.js';
import { AuthProvider } from './components/context/authContext.js';

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <ContextProvider>
          <ToDo />
        </ContextProvider>
      </AuthProvider>
    );
  }
}
