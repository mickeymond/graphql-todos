import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';

import { Input, Spin, Alert } from 'antd/es';

import { FETCH_TODO } from '../queries';
import { UPDATE_TODO } from '../mutations';

const EditTodo: React.FC = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const [updateTodo] = useMutation(UPDATE_TODO);

  const { loading, error, data } = useQuery(FETCH_TODO, { variables: { id } });

  if (loading) return <Spin size="large" />;

  if (error) return <Alert message={error.message} type="error" />;


  return (
    <Input.Search
      style={{ width: '400px' }}
      placeholder="Enter Todo"
      enterButton="Update Todo"
      defaultValue={data.todo.type}
      onSearch={(value, event) => {
        updateTodo({ variables: { id: data.todo.id, type: value } });
        history.push('/');
      }}
    />
  );
}

export default EditTodo;
