import { thunkResolver }          from './thunk_resolver';
import { loggerResolver }         from './logger_resolver';
import authResolver               from './auth_resolver';
import todoResolver               from './todo_resolver';
import testResolver               from './test_resolver';
import routeResolver              from './route_resolver';
import remuxResolver              from './remux_resolver';
import signInUpResolver           from './signinup_resolver';


class ParallelAction {
  constructor(count, next) {
    this._count = count
    this._next = next
  }

  isAllDone() {
    this._count = this._count - 1
    return this._count === 0
  }

  get next() {
    return this._next
  }
 
  set next(value){
    this._next = value
  }
}

class Dispatcher {
  constructor() {
    this.stdResolversAll = []
  }

  addResolver(resolver) {
   this.stdResolversAll.push(resolver) 
  }

  next(err, result) {
    if (err) {
      console.log("Error:",err)
      return null
    } else {
      return result
    }
  }

  dispatch(action) {
    action.prefixType = action.type.substr(0, action.type.indexOf("_") + 1)
    var i = 0
    for(i = 0; i < this.stdResolversAll.length ; i++) {
      const resolver = this.stdResolversAll[i]
      action = resolver(action, this.next);
      if (!action) return;
    }    
  }

  dispatchNext(action) {
    action.min = action.min + 1
    if (action.min < action.max) {
      let nextAction = action.list[action.min]()

      if (typeof nextAction === 'function') {
        nextAction()
      } else {
        nextAction.min = action.min
        nextAction.max = action.max
        nextAction.list = action.list
        nextAction.next = dispatchNext
        dispatch(nextAction)
      }
    }
  }

  dispatchSynchronousActions(actionList) {
    let action = actionList[0]()
    if (typeof action === 'function') {
      action()
    } else {
      action.min = 0
      action.max = actionList.length
      action.list = actionList
      action.next = dispatchNext
      dispatch(action)
    }
  }

  dispatchParalleNext(action) {
    if (action.parallelAction.isAllDone()) {
      action.parallelAction.next()
    }
  }

  dispatchParallelActions(actionList, next) {
    var parallelAction = new ParallelAction(actionList.length, next)
    var i = 0
    for(i = 0; i < actionList.length ; i++) {
      let action = actionList[i]()
      action.parallelAction = parallelAction
      action.next = dispatchParalleNext
      dispatch(action)
    }
  }
}

export let dispatcher = new Dispatcher();
// logger first
dispatcher.addResolver( loggerResolver )

// event remux system
dispatcher.addResolver( remuxResolver )

// thunk for services
dispatcher.addResolver( thunkResolver )

// authentification
dispatcher.addResolver( authResolver )

// no special order for functionnal resolvers
dispatcher.addResolver( routeResolver )

dispatcher.addResolver( todoResolver )

// form resolvers
dispatcher.addResolver( signInUpResolver )

// resolvers for testing purpose at the end
dispatcher.addResolver( testResolver )

export const dispatch = dispatcher.dispatch.bind(dispatcher)
export const dispatchParalleNext = dispatcher.dispatchParalleNext.bind(dispatcher)
export const dispatchNext = dispatcher.dispatchNext.bind(dispatcher)
export const dispatchSynchronousActions = dispatcher.dispatchSynchronousActions.bind(dispatcher)
export const dispatchParallelActions = dispatcher.dispatchParallelActions.bind(dispatcher)
