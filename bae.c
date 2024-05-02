#include <stdio.h>

int findNext(int a, int x, int max_x, int y, int max_y, int map[][50][50], int visited[][50])
{
  if (map[a][x][y] == 0 || visited[x][y] == 1)
  {
    return 0;
  }
  visited[x][y] = 1;
  if (x > 0)
  {
    findNext(a, x - 1, max_x, y, max_y, map, visited);
  }
  if (x < max_x - 1)
  {
    findNext(a, x + 1, max_x, y, max_y, map, visited);
  }
  if (y > 0)
  {
    findNext(a, x, max_x, y - 1, max_y, map, visited);
  }
  if (y < max_y - 1)
  {
    findNext(a, x, max_x, y + 1, max_y, map, visited);
  }
  return 1;
}

int main()
{
  int test_case, M[10] = {0}, N[10] = {0}, K[10] = {0}, map[10][50][50] = {0};
  scanf("%d", &test_case);
  for (int a = 0; a < test_case; a++)
  {
    scanf("%d %d %d", &M[a], &N[a], &K[a]);
    for (int i = 0; i < K[a]; i++)
    {
      int x, y;
      scanf("%d %d", &x, &y);
      map[a][x][y]++;
    }
  }
  for (int a = 0; a < test_case; a++)
  {
    int visited[50][50] = {0}, cnt = 0;
    for (int i = 0; i < M[a]; i++)
    {
      for (int j = 0; j < N[a]; j++)
      {
        int visit = findNext(a, i, M[a], j, N[a], map, visited);
        if (visit > 0)
        {
          cnt++;
        }
      }
    }
    printf("%d\n", cnt);
  }
  return 0;
}
