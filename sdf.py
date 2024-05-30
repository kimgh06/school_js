def solution(edges):
    from collections import defaultdict, deque

    # Initialize graph structures
    graph = defaultdict(list)
    indegree = defaultdict(int)
    
    # Build the graph and count indegrees
    for a, b in edges:
        graph[a].append(b)
        indegree[b] += 1
        if a not in indegree:
            indegree[a] = 0

    # Find the generated node (indegree 0)
    generated_node = None
    for node in indegree:
        if indegree[node] == 0:
            generated_node = node
            break

    def bfs(start):
        q = deque([start])
        visited = set([start])
        nodes = set()
        edges_count = 0

        while q:
            current = q.popleft()
            nodes.add(current)
            for neighbor in graph[current]:
                edges_count += 1
                if neighbor not in visited:
                    visited.add(neighbor)
                    q.append(neighbor)
        
        return nodes, edges_count

    # Start from the generated node and explore each connected subgraph
    graph_counts = {"donut": 0, "bar": 0, "eight": 0}

    visited_subgraphs = set()
    for neighbor in graph[generated_node]:
        if neighbor not in visited_subgraphs:
            subgraph_nodes, edges_count = bfs(neighbor)
            visited_subgraphs.update(subgraph_nodes)
            node_count = len(subgraph_nodes)
            
            if node_count == edges_count:
                graph_counts["donut"] += 1
            elif node_count == edges_count + 1:
                graph_counts["bar"] += 1
            elif node_count == 2 * (edges_count // 2):
                graph_counts["eight"] += 1

    return [generated_node, graph_counts["donut"], graph_counts["bar"], graph_counts["eight"]]

# Example usage:
print(solution([[2, 3], [4, 3], [1, 1], [2, 1]]))  # Output: [2, 1, 1, 0]
print(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]))  # Output: [4, 0, 1, 2]
