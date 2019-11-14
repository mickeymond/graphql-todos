import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './components/Home';
import EditTodo from './components/EditTodo';

const client = new ApolloClient({
  uri: 'https://plp0mopxq.sse.codesandbox.io'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <section className="App-header">
            <h1>GraphQL Todos</h1>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/todos/:id/edit" exact component={EditTodo} />
            </Switch>
          </section>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
