import React from 'react'
import { Link } from 'react-router'

export let Header = () =>
  <div className="pure-g header">
      <div className="pure-u-1-4"><div>ReMux</div></div>
      <div className="pure-u-3-4" >
        <Link to='/welcome' >Welcome</Link>
        <Link to='/todos' >Todos</Link>
        <Link to='/signin' >SignIn</Link>
        <Link to='/signup' >SignUp</Link>
        <Link to='/signout' >SignOut</Link>
        <div
            onClick= { () => alert('ReMux example : https://github.com/vinej/react-portal') } 
            style={{float: 'right'}}>?</div></div>
  </div>
