// @flow
function foo (x: ?number): string {
  if (x) {
    return String(x);
  }
  return "default string";
}
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  })
})
function *fetchData () {
  const r1 = yield p
  console.log(r1)
}
(() => {
  var set = new Set()
  var map = new Map()
})()