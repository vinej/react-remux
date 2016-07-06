# ReMux

Welcome to ReMux

The boilerplate give you a minimum example to use Mobx with the ES6 syntax and the 'ReMux' flux pattern
* ReMux stand for : **Re**solver **M**obx Fl**ux** pattern

With 'ReMux' you have a very simple way to implement the following pattern
* component => action => resolver => store => component
 * components receive a store as props (the state of the component)
 * components use the store in read only mode
 * components call actions creators to apply modifications to the store (the state)
 * actions creators dispatch informations to resolvers
 * resolvers resolve actions and call stores
 * stores are observable with the Mobx @observable decorator
 * Mobx refresh the components with the @observer decorator
 * resolvers could be also middlewares to do something with the action before/after calling the stores
* TRY IT, IT'S VERY SIMPLE THIS WAY

Todo
* add SignIn, SignUp and SignOut pages

For a more complete example see: https://github.com/vinej/react-portal

  * npm install
  * npm start

JYV








