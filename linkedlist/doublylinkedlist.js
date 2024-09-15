class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.indexes = 0;
  }

  /* ==================================================
  =====================================================
                 NODE METHODS:
  =====================================================
  ================================================== */

  first() {
    return this.head;
  }

  last() {
    return this.tail;
  }

  addNodeLast(node) {
    const newNode = node;

    // List is empty, new element is the only element
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
      // List is not empty, new element should be last element
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.indexes++;
  }

  addNodeFirst(node) {
    const newNode = node;

    // List is empty, new element is the only element
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
      // List is not empty, new element should be first element
    } else if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.indexes++;
  }

  removeNode(existingNode) {
    let current = this.tail;

    if (existingNode === this.head) {
      this.removeFirst();
    } else if (existingNode === this.tail) {
      this.removeLast();
    } else {
      while (current.prev != null) {
        if (current === existingNode) {
          const nextNode = current.next;
          const prevNode = current.prev;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          this.indexes--;
        }

        current = current.prev;
      }
    }
  }

  insertBefore(newNode, existingNode) {
    if (existingNode != null) {
      // If existing node is the first element
      if (existingNode === this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else {
        const prevNode = existingNode.prev;
        newNode.prev = prevNode;
        newNode.next = existingNode;
        // If the new node is now the first the prevToNode is null
        if (prevNode) {
          prevNode.next = newNode;
        }
        existingNode.prev = newNode;
      }
      this.length++;
    } else {
      console.log("Existing node not found");
      return null;
    }
  }

  insertAfter(newNode, existingNode) {
    if (existingNode != null) {
      // If the existing node is the last
      if (existingNode === this.tail) {
        existingNode.next = newNode;
        newNode.prev = existingNode;
        this.tail = newNode;
      } else {
        const nextNode = existingNode.next;
        newNode.next = nextNode;
        newNode.prev = existingNode;
        existingNode.next = newNode;
        // If the new node is now the last the nextToNode is null
        if (nextNode) {
          nextNode.prev = newNode;
        }
      }
      this.length++;
    } else {
      console.log("Existing node is null");
      return null;
    }
  }

  addFirst(data) {
    const newNode = new Node(data);
    this.addNodeFirst(newNode);
    this.indexes++;
  }

  addLast(data) {
    const newNode = new Node(data);
    this.addNodeLast(newNode);
    this.indexes++;
  }

  nodeAt(index) {
    let current = this.head;

    for (let i; i < index; i++) {
      if (i == index || index >= this.indexes) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  removeFirst() {
    const current = this.head;
    const currentNext = this.tail;

    if (current == null && currentNext == null) {
      console.log("List is empty");
      return null;
      // List has 1 element
    } else if (current == currentNext) {
      current = null;
      currentNext = null;
      // Remove the current fist
    } else {
      const nextNode = current.next;
      nextNode.prev = null;
      this.head = nextNode;
    }

    this.indexes--;
  }

  removeLast() {
    if (this.tail == null && this.head == null) {
      console.log("List is empty");
      return null;
      // List is has 1 element, removes both
    } else if (this.tail == this.head) {
      current = null;
      currentNext = null;
      // Removes current last element
    } else {
      const currentNextLast = this.tail.prev;
      currentNextLast.next = null;
      this.tail = currentNextLast;
    }
    this.indexes--;
  }

  removeIndex(index) {
    const nodeToRemove = this.nodeAt(index);
    this.removeNode(nodeToRemove);
  }

  get(index) {
    let current = this.head;

    for (let i; i < index; i++) {
      if (i == index || index >= this.indexes) {
        return current.data;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // swapNodes(nodeA, nodeB) {
  //   console.log(nodeA, nodeB);

  //   if (nodeA === this.head && nodeB === this.head) return null;

  //   if (nodeA === this.tail && nodeB === this.tail) return null;

  //   // kommer til at være A
  //   let next_to_node_a = nodeA.next;
  //   // kommer til at være null
  //   let next_to_node_b = nodeB.next;
  //   //  kommer til at være null
  //   let prev_to_node_a = nodeA.prev;
  //   // kommer til at være A
  //   let prev_to_node_b = nodeB.prev;

  //   console.log(next_to_node_a);

  //   next_to_node_a.next = nodeA;
  //   next_to_node_a.prev = nodeB;

  //   nodeA.next = next_to_node_b;
  //   nodeA.prev = next_to_node_a;

  //   nodeB.next = next_to_node_a;
  //   nodeB.prev = prev_to_node_a;
  // }

  /* ==================================================
  =====================================================
                DATA METHODS:
  =====================================================
  ================================================== */

  remove(data) {
    if (this.head !== null) {
      if (this.head.data == data) {
        this.removeFirst();
      } else if (this.tail.data == data) {
        this.removeLast();
      }

      let current = this.head;
      while (current.next != null) {
        if (current.data === data) {
          const nextToCurrent = current.next;
          const prevToCurrent = current.prev;
          prevToCurrent.next = nextToCurrent;
          nextToCurrent.prev = prevToCurrent;

          this.indexes--;
          return;
        }
        current = current.next;
      }
    } else {
      console.log("List is");
      return null;
    }
  }

  indexOf(data) {
    let current = this.head;
    let indexNo = 0;

    while (current != null) {
      if (current.data == data) {
        return indexNo;
      }
      indexNo++;
      current = current.next;
    }

    return null;
  }

  /* ==================================================
  =====================================================
                 LIST METHODS:
  =====================================================
  ================================================== */

  size() {
    return this.indexes;
  }

  clear() {
    this.tail = null;
    this.head = null;
  }

  dumpList() {
    let node = this.head;
    if (node === null) {
      return console.log("List is empty");
    } else {
      while (node != null) {
        console.log(node);
        node = node.next;
      }
    }
  }
}
