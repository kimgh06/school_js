asdf()

function asdf() {
  console.log('asdfasdf')
}

function sqrt(a) {
  var num = 2;
  return 1 / (a ** 2)
}

console.log(sqrt(3))

function argTest() {
  let one = 1;
  for (let i = 0; i < arguments.length; i++) {
    if (!(arguments[i] > 0)) {
      continue;
    }
    one *= arguments[i]
  }
  return one;
}

console.log(argTest(2, 2, 2, 2, 2, 2, 2, 2, 2))