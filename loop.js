let a = 0;

do { //while과 관련이 있음을 암시 중요함***
  a++;
  console.log(a);
} while (a < 2)

for (let i = 0; i < 5; i++) {
  console.log(i)
}
while (a < 5) {
  console.log(a++)
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j)
  }
}

while (true) {
  break;
}
for (let i = 0; i < 5; i++) {
  console.log(i)
  if (i > 2) {
    continue
  }
}