function asdf() {
  for (let d = 0; d < 1000; d++) {
    for (let k = -1000; k < 1000; k++) {
      if (13 * d + 60 * k === 1) {
        console.log(d, k, 13 * d, 60 * k)
        return d, k
      }
    }
  }
}

console.log(asdf())