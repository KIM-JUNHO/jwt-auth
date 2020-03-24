import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useByeQuery } from '../generated/graphql';

interface Props {}

export const Bye: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading, error } = useByeQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>err</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return <div>{data.bye}</div>;
};
