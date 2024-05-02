const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []

rl.on("line", (line) => {
  input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
  let list = []
  for (let i = 2; i <= input[0]; i++) {
    if (Fermat(i)) {
      console.log(i)
      list.push(i)
    }
  }
  console.log(list.length)
  rl.close();
});

rl.on('close', () => {
  // input.forEach(el => {
  //   console.log(el);
  // })
  process.exit();
})

function Fermat(p) {
  let a = p;
  while (true) {
    a = (a - a % 2) / 2;
    if (a === 1) {
      break;
    }
    let powed = (BigInt(a) ** BigInt(p - 1)) % BigInt(p)
    if (powed !== 1n) {
      return false;
    }
  }
  return true
}