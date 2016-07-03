import React, { Component } from 'react'
import { Link } from 'react-router'

export let Header = () =>
  <div className="pure-g header">
      <div className="pure-u-1-2"><div>ReMux</div></div>
      <div className="pure-u-1-2" >
        <Link to='/todos' >Todos</Link>
        <Link to='/welcome' >Welcome</Link>
        <div
            onClick= { () => alert('ReMux example : https://github.com/vinej/react-portal') } 
            style={{float: 'right'}}>?</div></div>
  </div>
