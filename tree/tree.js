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

  // replaceChild( newChild, oldChild ){

  // }
}

class Tree {
  constructor(node) {
    root: node;
  }

  root() {
    return this.root;
  }
}

export { Node, Tree };
