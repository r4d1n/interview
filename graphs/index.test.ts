import { Node, depthFirstSearch, breadthFirstSearch } from "./index";

test("DFS finds a value when there is one node", () => {
  const root = new Node(10);
  const found = depthFirstSearch(root, 10);
  expect(found).toBeTruthy();
  expect(found.value).toBe(10);
});

test("DFS finds a value when there are many nodes", () => {
  // fill a few layers of the graph
  let i = 0;
  const root = new Node(i);
  while (root.children.length < 2) {
    let child = new Node(++i);
    root.children.push(child);
  }

  root.children.forEach((n) => {
    while (n.children.length < 2) {
      n.children.push(new Node(++i));
    }
    n.children.forEach((m) => {
      while (m.children.length < 2) {
        m.children.push(new Node(++i));
      }
    });
  });

  const found = depthFirstSearch(root, 10);
  expect(found).toBeTruthy();
  expect(found.value).toBe(10);
});

test("BFS finds a value when there is one node", () => {
  const root = new Node(10);
  const found = breadthFirstSearch(root, 10);
  expect(found).toBeTruthy();
  expect(found.value).toBe(10);
});

test("BFS finds a value when there are many nodes", () => {
  // fill a few layers of the graph
  let i = 0;
  const root = new Node(i);
  while (root.children.length < 2) {
    let child = new Node(++i);
    root.children.push(child);
  }

  root.children.forEach((n) => {
    while (n.children.length < 2) {
      n.children.push(new Node(++i));
    }
    n.children.forEach((m) => {
      while (m.children.length < 2) {
        m.children.push(new Node(++i));
      }
    });
  });

  const found = breadthFirstSearch(root, 10);
  expect(found).toBeTruthy();
  expect(found.value).toBe(10);
});
