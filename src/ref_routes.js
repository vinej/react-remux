import { browserHistory} from 'react-router'

export default class RefRoutes {
  static routeTodo() {
    browserHistory.push('/todos')
  }

  static routeSignIn() {
    browserHistory.push('/signin')
  }
}
