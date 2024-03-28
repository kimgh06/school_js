const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []

rl.on("line", (line) => {
  input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
  console.log(fetma(input[0]))
  rl.close();
});

rl.on('close', () => {
  // input.forEach(el => {
  //   console.log(el);
  // })
  process.exit();
})

function fetma(value) {
  let tmp = value;
  while (true) {
    tmp = (tmp + tmp % 2) / 2;
    if (tmp === 1) {
      break;
    }
    let powed = (BigInt(tmp) ** BigInt(value - 1)) % BigInt(value)
    if (powed !== 1n) {
      return false;
    }
  }
  return true
}