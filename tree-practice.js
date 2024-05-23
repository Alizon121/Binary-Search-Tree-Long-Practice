const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees


function findMinBST (rootNode) {
// Wht do we do about unbalanced trees?
  // let currentNode = new TreeNode(rootNode)
  // We need to find the left-most value to find min integer
while (rootNode.left !== null) {
  rootNode = rootNode.left
}
return rootNode.val
}

function findMaxBST (rootNode) {
// We need to find the right-m ost value to find max
while (rootNode.right !== null) {
  rootNode = rootNode.right
}
return rootNode.val
}

function findMinBT (rootNode) {
// should return the minimum value in a Binary Tree'
// traverse thorugh entire tree -> recursion
// Based on results, find miv val
// Need to traverse both right and left through entire tree
if (rootNode === undefined) return
let min = rootNode.val

if (rootNode.left) {
    min = Math.min(findMinBT(rootNode.left), min)
  }
if (rootNode.right) {
   min = Math.min(findMinBT(rootNode.right), min)
}
return min
}

function findMaxBT (rootNode) {
  if (rootNode === undefined) return
  let max = rootNode.val
  
  if (rootNode.left) {
      max = Math.max(findMaxBT(rootNode.left), max)
    }
  if (rootNode.right) {
     max = Math.max(findMaxBT(rootNode.right), max)
  }
  return max
  
}

function getHeight (rootNode) {
  // Do we have to balance the tree?
  if (!rootNode) return -1
  if (rootNode.left === null && rootNode.right === null) return 0
  let countLeft = 1
  let countRight = 1

countLeft += getHeight(rootNode.left)
countRight += getHeight(rootNode.right)

if (countLeft < countRight) {
  return countRight
} else {
  return countLeft
}
  }

function balancedTree (rootNode) {
  // Your code here 
}

function countNodes (rootNode) {
// We need to traverse through the entire tree, and count nodes
// we can add nodes to an array and count every time we pop() a node

const stack = [rootNode];
let count = 1
while (stack.length > 0) {
  let node = stack.pop()
  if (node.left) {
    stack.push(node.left)
    count++;
  }
  if (node.right) {
    stack.push(node.right)
    count++;
  }
}
return count
}

    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
function getParentNode (rootNode, target) {
  if (!target) return undefined
  if (target === rootNode.val) return null

  // if (rootNode.left === target || rootNode.right === target) return rootNode
// If target node, then we need to return that parent
// Traverse until we reach the parent node of target

if (rootNode.left !== target) {
  getParentNode(rootNode.left, target)
}
else {
  return rootNode.val
}
if (rootNode.right !== target) {
  getParentNode(rootNode.right, target)
}
else {
return rootNode.val
}


}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
