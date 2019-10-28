import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/index';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const setUsername = (e) => setData({
    ...data,
    username: e.target.value
  });

  const setPassword = (e) => setData({
    ...data,
    password: e.target.value
  });

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <LoginForm
      username={data.username}
      password={data.password}
      setPassword={setPassword}
      setUsername={setUsername}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
