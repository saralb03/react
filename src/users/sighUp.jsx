import React, { useRef } from 'react'
import { useSignup } from '../hooks/useSignup'


export default function Signup() {
  const {error, signup} = useSignup()
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    signup(mailRef.current.value, passRef.current.value)
  }


  return (
    <div className="container">
      <h3 className="text-dark mt-4 mb-4">Sign up to CVmaker</h3>
      <form onSubmit={onSub} className="mt-2 p-4 rounded shadow-lg bg-light">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            ref={mailRef}
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            ref={passRef}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <h3 className="text-danger mb-3">{error}</h3>
        <button type="submit" className="btn btn-dark btn-block">
          Sign up
        </button>
      </form>
    </div>
  )
  }