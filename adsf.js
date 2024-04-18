function solution(h1, m1, s1, h2, m2, s2) {
  let cnt = 0;
  for (let h = h1; h <= h2; h++) {
    let m_min = h !== h1 ? 0 : m1,
      m_max = h !== h2 ? 59 : m2;
    for (; m_min <= m_max; m_min++) {
      let s_min = (h === h1 && m_min === m1) ? s1 : 0,
        s_max = (h === h2 && m_min === m_max) ? s2 : 59,
        m_small = false, h_small = false;
      let h_tick = false, m_tick = false;
      for (; s_min <= s_max; s_min++) {
        if (s_min <= m_min + 1) {
          m_small = true;
        }
        if (s_min <= (h % 12) * 5) {
          h_small = true;
        }
        // console.log(s_min, m_min, !m_tick, m_small)

        if ((s_min >= (m_min + s_min / 60)) && (s_min >= (h % 12 + m_min / 60 + s_min / 3600) * 5) && !h_tick && !m_tick && h_small && m_small) {
          cnt++;
          m_tick = true;
          h_tick = true;
          if (m_min + s_min / 60 !== (h % 12 + m_min / 60 + s_min / 3600) * 5) {
            cnt++;
          }
          // console.log('both', h, m_min, s_min)
          break;
        }
        if (s_min >= (m_min + s_min / 60) && !m_tick && m_small) { // s >= 60/59*m
          cnt++;
          m_tick = true;
          // console.log('min', h, m_min, s_min)
        }
        if (s_min >= (h % 12 + m_min / 60 + s_min / 3600) * 5 && !h_tick && h_small) {
          cnt++;
          h_tick = true;
          // console.log('h', h, m_min, s_min)
        }
      }
    }
  }
  return cnt;
}

console.log(solution(
  0, 5, 30, 0, 7, 0
), 2)
console.log(solution(
  12, 0, 0, 12, 0, 30
), 1)
console.log(solution(
  0, 6, 1, 0, 6, 6
), 0)
console.log(solution(
  11, 59, 30, 12, 0, 0
), 1)
console.log(solution(
  11, 58, 59, 11, 59, 0
), 1)
console.log(solution(
  1, 5, 5, 1, 5, 6
), 2)
console.log(solution(
  0, 0, 0, 23, 59, 59
), 2852)