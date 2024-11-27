"use strict";
window.addEventListener("load", start);

import { Node, Tree } from "./tree.js";

function start() {
  console.log("Start");
  const nodeA = new Node(null, [], 5);
  const nodeB = new Node(nodeA, [], 50);
  nodeA.appendChild(nodeB);
  const nodeC = new Node(nodeA, [], 75);
  nodeA.appendChild(nodeC);

  console.log(nodeB);
  console.log(nodeC);
  console.log(nodeA);

  console.log("Does B have children?");
  console.log(nodeB.hasChildNodes());
  console.log("Does A have chidren?");
  console.log(nodeA.hasChildNodes());
  console.log("A's fisrt child");
  console.log(nodeA.firstChid());
  console.log("A's last child");
  console.log(nodeA.lastChild());
  console.log("Remove B from A");
  const b = nodeA.returnChildAtIndex(1);
  console.log(nodeA.removeChild(b));
  console.log(nodeA);
}
