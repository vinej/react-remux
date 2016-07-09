import React, { Component } from 'react';
import { observer } from 'mobx-react'

const todoShape = {
  id : React.PropTypes.number,
  desc : React.PropTypes.string,
  done : React.PropTypes.bool
}

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
    const on = this.props.store.on
    const todo = this.props.todo
    return (  <tr> 
                <td>{todo.id}</td> 
                <td onClick={ () => on.todoSetDone(todo, !todo.done) } 
                    style={ this.getTodoDoneClass(todo) }>{todo.desc}</td> 
                <td onClick={ () => on.todoDelete(todo.id)}>del</td>
              </tr> );
  }
}

@observer
export default class Todos extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const on = this.props.store.on
    this.props.store.desc = ''
    on.todoGetAll()
  }

  render() {
      const store = this.props.store
      const on = store.on
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
            { store.todos.map( (todo) => <Todo key={todo.id} todo={todo} store={store} /> ) }
            </tbody>
          </table>
          <div>
            <input    type='text'  
                      value = { store.desc }
                      onChange = { (event) => store.desc = event.target.value }
                      onBlur= { (event) => on.todoSetDesc(event.target.value) }/>
          </div>
          <button className="pure-button" onClick={ () => { on.todoAdd(); store.desc = ''} }> add </button>
        </div>
      )
   }
}
