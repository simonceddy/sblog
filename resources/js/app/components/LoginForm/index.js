import React from 'react';

function LoginForm({
  username = '',
  password = '',
  setUsername,
  setPassword,
  onSubmit = () => {}
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex flex-col"
      >
        <label htmlFor="username" className="flex flex-row justify-between">
          <span>Username:</span>
          <input
            type="text"
            value={username}
            name="username"
            id="username"
            onChange={setUsername}
          />
        </label>
        <label htmlFor="password" className="flex flex-row justify-between">
          <span>Password:</span>
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={setPassword}
          />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {}
    </>
  );
}

export default LoginForm;
