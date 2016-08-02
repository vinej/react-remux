// here we know that the validate is finished, then we
// call the next one
export default function(action, next) {
  if (action.next != null) {
  	action.next()
  }

  return next(null, action);
}
