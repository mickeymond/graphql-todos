import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { List, Icon, Spin, Alert } from 'antd/es';

import { Todo } from '../model/Todo';

import { FETCH_TODOS } from '../queries';

const TodoList: React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_TODOS);

  if (loading) return <Spin size="large" />;

  if (error) return <Alert message={error.message} type="error" />;

  return (
    <List
      size="large"
      dataSource={data.todos}
      renderItem={(item: Todo) => (
        <List.Item actions={[
          <Link to={`/todos/${item.id}/edit`}><Icon type="edit" theme="filled" /></Link>
        ]}>
          <Link to={`/todos/${item.id}`}>{item.type}</Link>
        </List.Item>
      )}
    />
  );
}

export default TodoList;
