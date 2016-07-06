import { thunkResolver }          from './thunk_resolver';
import { loggerResolver }         from './logger_resolver';
import authResolver               from './auth_resolver';
import todoResolver               from './todo_resolver';
import testResolver               from './test_resolver';

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
    for(let resolver of this.stdResolversAll) {
      action = resolver(action, this.next);
      if (!action) return;
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
dispatcher.addResolver( todoResolver )

// resolvers for testing purpose at the end
dispatcher.addResolver( testResolver )

export const dispatch = dispatcher.dispatch.bind(dispatcher)
