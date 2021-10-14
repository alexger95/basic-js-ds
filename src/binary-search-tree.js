const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.start = null; // root of bst
}

  root() {
    return this.start;
  }

  add(data) {
    let newNode = new Node(data);

    if(this.start === null) {
        this.start = newNode;
    } else {
        this.insertNode(this.start, newNode); // helper method below
    }
}

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
        if(node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if(node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}

find(data, node = this.start) {
  if(node === null) {
      return null;
  } else if(data < node.data) {
      return this.find(data, node.left);
  } else if(data > node.data) {
      return this.find(data, node.right);
  } else {
      return node;
  }
}

  has(data) {
    const node = this.find(data);
    if (node === null) {
      return false;
    }
    return node.data === data?true:false;
  }


  remove(data) {
    this.start = this.removeNode(data, this.start); // helper method below
}

removeNode(data, node = this.start) {
    if(node === null) {
        return null;
    // if data to be deleted is less than the root's data, move to the left subtree
    } else if(data < node.data) {
        node.left = this.removeNode(data, node.left);
        return node;
    // if data to be deleted is greater than the root's data, move to the right subtree
    } else if(data > node.data) {
        node.right = this.removeNode(data, node.right);
        return node;
    // if data is similar to the root's data, delete the node
    } else {
        // delete node with no children (leaf node)
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }

        // delete node with one child
        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }

        // delete node with two children
        // minimum node of the right subtree is stored in newNode
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(newNode.data, node.right);
        return node;
    }
}

minNode(node = this.start) {
  let tempNode = node;
  while (tempNode.left != null) {
    tempNode = tempNode.left;
  }
  return tempNode;
}

  min(node = this.start) {
    let tempNode = node;
    while (tempNode.left != null) {
      tempNode = tempNode.left;
    }
    return tempNode.data;
  }

  max(node = this.start) {
    let tempNode = node;
    while (tempNode.right != null) {
      tempNode = tempNode.right;
    }
    return tempNode.data;
  }

}