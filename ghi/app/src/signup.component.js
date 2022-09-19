import React, { Component,useState } from 'react'
import PropTypes from 'prop-types';

async function signupUser(credentials) {
    return fetch('http://localhost:3000/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }



export default function SignUp({ setToken }) {
    const [firstname, setfirstname] = useState();
    const [lasttname, setlastname] = useState();
    const [useremail, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signupUser({
          firstname,
          lasttname,
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
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            onChange={e => setfirstname(e.target.value)}
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" 
          onChange={e => setlastname(e.target.value)}
          className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-dark">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
      </>
    )
  }

  