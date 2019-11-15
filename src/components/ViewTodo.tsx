import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Typography, Button, Spin, Alert } from 'antd/es';

import { FETCH_TODO } from '../queries';

const ViewTodo: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(FETCH_TODO, { variables: { id } });

  if (loading) return (
    <React.Fragment>
      <Spin size="large" />
      <br />
      <Button type="primary" onClick={e => {
        history.goBack();
      }}>Back</Button>
    </React.Fragment>
  );

  if (error) return (
    <React.Fragment>
      <Alert message={error.message} type="error" />
      <br />
      <Button type="primary" onClick={e => {
        history.goBack();
      }}>Back</Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Typography>{data.todo.type}</Typography>
      <br />
      <Button type="primary" onClick={e => {
        history.goBack();
      }}>Back</Button>
    </React.Fragment>
  );
}

export default ViewTodo;
