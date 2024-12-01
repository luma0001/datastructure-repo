
class Node {
  constructor(parent, children, value) {
    this.parent = parent;
    this.childNodes = [];
    this.value = value;
  }

  returnChildAtIndex(index) {
    for (let i = 0; i < this.childNodes.length; i++) {
      if (index === i) {
        return this.childNodes[i];
      }
    }
  }

  firstChid() {
    return this.childNodes[0];
  }

  lastChild() {
    return this.childNodes[this.childNodes.length - 1];
  }

  hasChildNodes() {
    if (this.childNodes.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  appendChild(child) {
    this.childNodes.push(child);
  }

  removeChild(child) {
    let childToRemove = null;
    for (let i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i] === child) {
        childToRemove = this.childNodes[i];
        this.childNodes.splice(i, 1);
      }
    }
    return childToRemove;
  }

  replaceChild(newChild, oldChild) {
    let childToReplace = null;
    for (let i = 0; i < this.childNodes.length; i++) {
      console.log(i);
      if (this.childNodes[i] === oldChild) {
        console.log("Replace " + oldChild);
        childToReplace = this.childNodes[i];
        this.childNodes[i] = newChild;
      }
    }
    return childToReplace;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  root() {
    return this.root;
  }

  dump() {
    const treeRoot = this.root;
    console.log(treeRoot);

    let generation = 0;
    const generationList = [];
    for (const child of treeRoot.childNodes) {
      generationList.push(child);
    }

    logChildrenOfNode(this.root);

    function logChildrenOfNode(node) {
      // let newGenerationList = [];
      // if (generationList.find(node)) {
      //   generation = generation;
      //   for (const child of node) {
      //     newGenerationList.push(child);
      //     generationList.push(newGenerationList);
      //   }
      // }
      generation++;

      console.log("--------------------------------------");
      if (node != treeRoot) {
        console.log("Parrent node: ", node.parent.value);
      }
      // console.log("Generation: ", generation);
      console.log("All children in node: ", node);
      for (const child of node.childNodes) {
        console.log("-----------child-----------");
        console.log(child);
        console.log("Next Generation --------------");
        console.log(child.childNodes);

        if (child.hasChildNodes()) {
          logChildrenOfNode(child);
        }
      }
    }
  }

  addValue(value) {}

  // Function der leder efter den givne value i træet, og returnerer den (første) Node der har den
  findValue(value) {
    console.log("Find the value: ", value);
    const treeRoot = this.root;
    checkNode(treeRoot);
    // traverseTree(treeRoot);

    // // Traverse the tree to find a node with the value
    // function traverseTree(node) {
    //   for (const child of node.childNodes) {
    //     checkNode(child);
    //     if (child.hasChildNodes()) {
    //       traverseTree(child);
    //     }
    //   }
    // }

    // Test if the node has the value
    function checkNode(node) {
      if (node.value === value) {
        return node;
      }
    }
  }

  removeValue(value) {}

  // Udskriver vores note
  // kigger på vores nodes'children og udskrive dem
  // og så deres children...
}

export { Node, Tree };
