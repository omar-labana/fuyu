import React, { useState } from 'react'
import { registerUser } from '../../api-service'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/user'
import { useHistory } from 'react-router';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    registerUser(user)
    dispatch(updateUser(user))
    history.push("/");
  }
  return (
    <main className="h-full flex flex-col items-center text-lg">
      <h2 className="text-3xl my-4">Register</h2>
      <p className="text-center text-base mx-6">Register to start making your wishlist!</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 my-4">
        <input
          type="text"
          name="username"
          placeholder="User Name"
          className="focus:outline-none border-2 rounded-3xl	px-3 py-2 focus:ring-2 focus:ring-yellow-600"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="focus:outline-none border-2 rounded-3xl	px-3 py-2 focus:ring-2 focus:ring-yellow-600"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="focus:outline-none border-2 rounded-3xl	px-3 py-2 focus:ring-2 focus:ring-yellow-600"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password Confirmation"
          className="focus:outline-none border-2 rounded-3xl	px-3 py-2 focus:ring-2 focus:ring-yellow-600"
          value={user.password_confirmation}
          onChange={e => setUser({ ...user, password_confirmation: e.target.value })}
          required
        />
        <button
          type="submit"
          className="px-3 py-2 rounded-3xl text-white bg-yellow-600"
        >
          Register</button>
      </form>
    </main>
  )
}

export default Register
