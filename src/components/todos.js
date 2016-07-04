import React, { Component } from 'react';
import { observer } from 'mobx-react'
import TodoStore, { todoShape } from '../stores/todo_store'
import { todoAdd, todoDelete, todoSetDesc } from '../actions/todo_actions'

@observer
class Todo extends Component {
  static propTypes = {
    todo:  React.PropTypes.shape(todoShape)  
  }

  getTodoDoneClass(todo) {
    if (todo.done) {
      return { textDecoration: "line-through", color: 'lightgray' }
    } else {
      return { textDecoration: "none", color : 'black'}
    }
  }
  render() {
    return (  <tr> 
                <td>{this.props.todo.id}</td> 
                <td onClick={ () => this.props.todo.done = !this.props.todo.done} 
                    style={ this.getTodoDoneClass(this.props.todo) }>{this.props.todo.desc}</td> 
                <td onClick={ () => todoDelete(this.props.todo.id)}>del</td>
              </tr> );
  }
}

@observer
export default class Todos extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    store: React.PropTypes.instanceOf(TodoStore),
  }

  render() {
      const store = this.props.store
      return ( 
        <div className="pure-form">
          <table className='pure-table'>
            <thead >
              <tr>
                <th>Id</th>
                <th style={{ width: '130px'}}>Description</th>
                <th >del</th>
              </tr>
            </thead>
            <tbody>
            { store.todos.map( (todo) => <Todo key={todo.id} todo={todo} /> ) }
            </tbody>
          </table>
          <div>
            <input    type='text'  
                      value={ store.desc }
                      onChange= { (event) => todoSetDesc(event.target.value) }/>
          </div>
          <button className="pure-button" onClick={ () => todoAdd() }> add </button>
        </div>
      )
   }
}
