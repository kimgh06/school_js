class cl {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  wow() {
    console.log(this.x, this.y);
  }
}

const c = new cl(1, 3);
c.wow()

let charactor = {
  name: 'asdf',
  hp: 0,
  att: e => {
    console.log(charactor.name)
  }
}

let cd = charactor
cd.att()

function asdf(a, b) {
  this.a = a;
  this.b = b;
  this.hello = e => {
    console.log(this)
  }
}

new asdf(1, 2).hello()