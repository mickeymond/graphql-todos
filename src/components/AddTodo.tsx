import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Input } from 'antd/es';

import { FETCH_TODOS } from '../queries';
import { ADD_TODO } from '../mutations';

const AddTodo: React.FC = () => {
  const [ inputValue, setInputValue ] = React.useState('');

  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: FETCH_TODOS }],
  });

  return (
    <Input.Search
      style={{ width: '400px' }}
      placeholder="Enter Todo"
      enterButton="Add Todo"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onSearch={(value, event) => {
        addTodo({ variables: { type: value } });
        setInputValue('');
      }}
    />
  );
}

export default AddTodo;
