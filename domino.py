N_MAX = 14
M_MAX = 14
MOD = 9901

def go(idx, status):
  if idx >= n * m:
    if idx == n * m and status == 0:
        return 1
    return 0

  if dp[idx][status] != -1:
    return dp[idx][status]
  
  ret = 0
  
  if status & (1 << 0):
    ret += go(idx + 1, status >> 1)
  else:
    if idx % m < (m - 1) and (status & (1 << 1)) == 0:
      ret += go(idx + 2, status >> 2)
    ret += go(idx + 1, (status >> 1) | (1 << (m - 1)))
  
  ret %= MOD
  dp[idx][status] = ret
  return ret

if __name__ == "__main__":
  dp = [[-1] * ((1 << M_MAX) - 1) for _ in range(N_MAX * M_MAX)]
  n, m = map(int, input().split())
  print(go(0, 0))
