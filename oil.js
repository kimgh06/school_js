let totalCount;
const xMove = [-1, 1, 0, 0];
const yMove = [0, 0, -1, 1];

function solution(land) {
  totalCount = new Array(land[0].length).fill(0);
  for (let x = 0; x < land.length; x++) {
    for (let y = 0; y < land[0].length; y++) {
      if (land[x][y] == 0) continue;
      const [total, yAreas] = calculateAccumulated(land, x, y);
      for (let yArea of yAreas) {
        totalCount[yArea] += total;
      }
    }
  }

  return Math.max(...totalCount);
}

function calculateAccumulated(land, x, y) {
  const stack = [];
  const ySet = new Set();
  stack.push([x, y]);
  ySet.add(y);
  let total = 0;
  while (stack.length !== 0) {
    const [sourceX, sourceY] = stack.pop();
    if (land[sourceX][sourceY] === 0) continue; // 이미 방문한 지점은 스킵
    land[sourceX][sourceY] = 0; // 방문한 지점 표시
    total++;
    for (let i = 0; i < 4; i++) {
      const nextX = sourceX + xMove[i];
      const nextY = sourceY + yMove[i];
      if (
        nextX < 0 ||
        nextX >= land.length ||
        nextY < 0 ||
        nextY >= land[0].length
      )
        continue;
      if (land[nextX][nextY] == 0) continue;
      stack.push([nextX, nextY]);
      ySet.add(nextY);
    }
  }
  return [total, Array.from(ySet)];
}

console.log(solution(
  [
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1]]
))