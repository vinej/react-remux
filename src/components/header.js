import React, { Component} from 'react'
import { Link } from 'react-router'
import { observer } from "mobx-react";

@observer
export default class Header extends Component {
  renderSignInUp(authenticated) {
    if (authenticated === false) {
      return [ <span key='1'><Link to='/signin' >SignIn</Link></span>,
               <span key='2'><Link to='/signup' >SignUp</Link></span> ]
    } else {
      return [ <span key='4'><Link to='/todos' >Todos</Link></span>,
               <span key='3'><Link to='/signout' >SignOut</Link></span> ]
    }
  }

  render() {
    return (
      <div className="pure-g header">
          <div className="pure-u-1-4">
            <div>ReMux</div>
          </div>
          <div className="pure-u-3-4" >
            <span key='5'><Link to='/welcome' >Welcome</Link></span>
            { this.renderSignInUp(this.props.store.authenticated) }
            <div
                onClick= { () => alert('ReMux example : https://github.com/vinej/react-portal') } 
                style={{float: 'right'}}>?</div>
          </div>
     </div>
    )
  }
}
