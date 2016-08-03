import { thunkResolver }          from './thunk_resolver';
import { loggerResolver }         from './logger_resolver';
import authResolver               from './auth_resolver';
import todoResolver               from './todo_resolver';
import testResolver               from './test_resolver';
import routeResolver              from './route_resolver';
import signInUpResolver           from './signinup_resolver';

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
}

export let dispatcher = new Dispatcher();
// logger first
dispatcher.addResolver( loggerResolver )
// second second
dispatcher.addResolver( thunkResolver )

dispatcher.addResolver( authResolver )

// no special order functionnal resolvers
dispatcher.addResolver( routeResolver )

dispatcher.addResolver( todoResolver )

dispatcher.addResolver( signInUpResolver )

// resolvers for testing purpose at the end
dispatcher.addResolver( testResolver )

export const dispatch = dispatcher.dispatch.bind(dispatcher)
export const dispatchNext = dispatcher.dispatchNext.bind(dispatcher)
export const dispatchSynchronousActions = dispatcher.dispatchSynchronousActions.bind(dispatcher)
