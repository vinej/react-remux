# ReMux

Welcome to ReMux

The boilerplate give you a minimum example to use Mobx with the ES6 syntax and the 'ReMux' flux pattern
* ReMux stand for : **Re**act **M**obx Fl**ux** pattern and it's inspired by Redux

With 'ReMux' you have a very simple way to implement the following pattern
* component => action => resolver => store => component
 * The application state is shared by all stores
 * each store uses (manages) a portion of the application store
 * components receive a store as props (state of the component, like mapStateToProps with Redux)
 * components use the store in read only mode
   *  the exception could be internal states that are not needed by all others components (form inputs use a vstate in write mode)
  * components call actions creators to apply modifications to the store (a portion of the the application state)
 * actions creators dispatch informations to resolvers
 * resolvers resolve actions and call stores
 * stores update a portion of the application state
 * stores are observable with the Mobx @observable decorator
 * Mobx refresh the components with the @observer decorator
 * resolvers could be also middlewares to do something with the action before/after calling the stores
 * the routing and the form **validators** are also using the dispatch pattern
* TRY IT, IT'S VERY SIMPLE THIS WAY

In the example, the services are Mocked : to test with real services use the REST services of this backend : https://github.com/vinej/react-portal-server

For a more complete example see: https://github.com/vinej/react-portal

  * npm install
  * npm start

JYV
