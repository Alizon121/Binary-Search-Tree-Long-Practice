// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file


class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null
    }
  
    insert(val, currentNode=this.root) {
      // inserting 4 into the empty tree will set the root node to 4
  if (!this.root) {
    this.root = new TreeNode(val)
  } 
  else {
    // Inserting 3, then 5 will insert two nodes to the left and right of the root respectively.
    if (val < currentNode.val) {
      if (currentNode.left) {
        this.insert(val, currentNode.left)
      } else {
        currentNode.left = new TreeNode(val)
       }
    }
    else if (val > currentNode.val) {
      if (currentNode.right) {
        this.insert(val, currentNode.right)
      } else {
        currentNode.right = new TreeNode(val)
       }
    }
  }
  }
  
    search(val) {
      // Move down left and right of the root to find a value
      if (!this.root) return false
      // Traverse the BST
      let currentNode = this.root
      while(currentNode) {
        if (val < currentNode.val) {
          currentNode = currentNode.left
        } 
        else if (val > currentNode.val) {
          currentNode = currentNode.right
        } else {
          return true
      }
    }
    return false
      }
  
  
  
  
    preOrderTraversal(currentNode = this.root) {
      if (currentNode) {
  console.log(currentNode.val)
  this.preOrderTraversal(currentNode.left)
  this.preOrderTraversal(currentNode.right)
      }
  
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      if (currentNode) {
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
            }
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if (currentNode) {
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)
            }
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [];
      let currentNode = this.root
      queue.push(currentNode)
      while(queue.length) {
        let node = queue.shift()
        console.log(node.val)
        
        if (node.left) {
        queue.push(node.left)
        }
        if (node.right) {
        queue.push(node.right)
        }
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
  // Put the starting node on a STACK
  // While the STACK is not empty, repeat steps 3-4
  // POP a node and print it
  // Put all of the node's children on the TOP of the STACK
  
      const stack = [];
      stack.push(this.root)
  
      while (stack.length > 0) {
        let node = stack.pop()
        console.log(node.val)
  
        if (node.left) {
          stack.push(node.left)
        }
        if (node.right) {
          stack.push(node.right)
        }
  
  
      }
  
    }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
  