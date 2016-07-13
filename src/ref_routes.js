import { browserHistory} from 'react-router'
import { stateNavigator } from './navigation'

export default class RefRoutes {
  static routeTodo() {
    stateNavigator.navigate('todos')
  }

  static routeSignIn() {
    stateNavigator.navigate('signin')
  }
}
