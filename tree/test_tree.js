"use strict";
window.addEventListener("load", start);

import { Node, Tree } from "./tree.js";

// ======================== Test the nodes functions

function start() {
  console.log("Start");
  const nodeA = new Node(null, [], "A");
  const nodeB = new Node(nodeA, [], "B");
  nodeA.appendChild(nodeB);
  const nodeC = new Node(nodeA, [], "C");
  nodeA.appendChild(nodeC);
  const nodeD = new Node(nodeA, [], "D");
  nodeA.appendChild(nodeD);
  const nodeE = new Node(nodeB, [], "E");
  nodeB.appendChild(nodeE);
  const nodeF = new Node(nodeD, [], "F");
  nodeD.appendChild(nodeF);
  const nodeG = new Node(nodeE, [], "G");
  nodeE.appendChild(nodeG);

  console.log(nodeB);
  console.log(nodeC);
  console.log(nodeA);

  // console.log("Does B have children?");
  // console.log(nodeB.hasChildNodes());
  // console.log("Does A have chidren?");
  // console.log(nodeA.hasChildNodes());
  // console.log("A's fisrt child");
  // console.log(nodeA.firstChid());
  // console.log("A's last child");
  // console.log(nodeA.lastChild());
  // console.log("Remove C from A");
  // // const c = nodeA.returnChildAtIndex(1);
  // console.log(nodeA.removeChild(nodeC));
  // console.log(nodeA);
  // console.log("Replace B with D");
  // console.log(nodeA.replaceChild(nodeD, nodeB));
  // console.log(nodeA);

  // ======================== Test the tree functions
  const tree = new Tree(nodeA);
  console.log(tree);

  console.log("Dump the tree");
  tree.dump();

  console.log("Find value");
  console.log(tree.findValue("E"));
}
