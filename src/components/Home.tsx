import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <TodoList />
    </React.Fragment>
  );
}

export default Home;
