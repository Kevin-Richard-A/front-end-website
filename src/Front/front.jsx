import React from 'react'
import './FRONT.css'

export default function Front() {
  return (
    <body className='front-body'>
      <center>

        <h2>The advent of React in Front end development</h2>
        <p>It all started in 2011 when Facebook, the social networking giant, created React JS for web development while maneuvering its own platform. The brand was trying to integrate the chat feature in 2013, which in due course would be available on every page of the app ie. they planned to integrate the chat feature across the app experience. Here, they faced a couple of challenges:

The asynchronicity of the multi-user I/O
The unpredictability and uncontrolled mutation of the DOM
All early web apps faced one common trouble – the DOM race condition. A bug that the predecessors of React couldn’t solve.</p>
<br/>
<br/>
<br/>
<br/>

        
        <div className='alignment'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Register Page</h5>
              <p1 class="card-text">The register page contains the form which have all the fields for registration</p1>
              <a href="/register" class="btn btn-primary">Register</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Login Page</h5>
              <p1 class="card-text">Login page which contains two things one is username and another is password</p1>
              <a href="/login" class="btn btn-primary">Login</a>
            </div>
          </div>
        </div>
      </center>
    </body>
  )
}
