import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Input } from 'antd/es';

import { FETCH_TODOS } from '../queries';
import { ADD_TODO } from '../mutations';

const EditTodo: React.FC = (props) => {
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: FETCH_TODOS }],
  });

  console.log(props);

  return (
    <Input.Search
      style={{ width: '400px' }}
      placeholder="Enter Todo"
      enterButton="Update Todo"
      onSearch={(value, event) => {
        addTodo({ variables: { type: value } });
      }}
    />
  );
}

export default EditTodo;
