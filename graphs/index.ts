export class Node {
  value: number;
  children: Node[] = [];

  constructor(value: number) {
    this.value = value;
  }
}

export function depthFirstSearch(root: Node, value: number): Node | null {
  let result: Node;
  const visited = {};
  function search(node: Node) {
    if (node.value === value) {
      result = node;
      return result;
    }
    visited[node.value] = true;
    node.children.forEach((child: Node) => {
      if (!visited[child.value]) {
        return search(child);
      }
    });
  }
  search(root);
  return result;
}

export function breadthFirstSearch(root: Node, value: number): Node | null {
  const queue: Node[] = [];
  const visited = {};
  queue.push(root);
  while (queue.length > 0) {
    let next = queue.shift();
    if (next.value === value) {
      return next;
    }
    if (!visited[next.value]) {
      visited[next.value] = true;
      next.children.forEach((n) => {
        queue.push(n);
      });
    }
  }
  return null;
}
