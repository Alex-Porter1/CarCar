import React, { useState } from 'react'
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:3000/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }



export default function Login({ setToken }) {
    const [useremail, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          useremail,
          password
        });
        setToken(token);
      }

    return (
        <>
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <input
            type="email" onChange={e => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password" onChange={e => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-dark">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
      </>
    )
  
}




