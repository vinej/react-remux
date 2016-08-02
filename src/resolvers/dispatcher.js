import { thunkResolver }          from './thunk_resolver';
import { loggerResolver }         from './logger_resolver';
import authResolver               from './auth_resolver';
import todoResolver               from './todo_resolver';
import testResolver               from './test_resolver';
import routeResolver              from './route_resolver';
import signInUpResolver           from './signinup_resolver';
import validateResolver           from './validate_resolver';

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
    console.log('action', action)
    action.prefixType = action.type.substr(0, action.type.indexOf("_") + 1)
    for(let resolver of this.stdResolversAll) {
      action = resolver(action, this.next);
      if (!action) return;
    }    
  }

  dispatchSynchronousActions(actionList) {
    for(var i = 0; i < actionList.length - 1; i++) {
      let action = actionList[i]()
      action.next = actionList[i + 1]
      console.log('action', action)
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

// resolvers for validating at the end, before the test
dispatcher.addResolver( validateResolver )

// resolvers for testing purpose at the end
dispatcher.addResolver( testResolver )

export const dispatch = dispatcher.dispatch.bind(dispatcher)
export const dispatchSynchronousActions = dispatcher.dispatchSynchronousActions.bind(dispatcher)
