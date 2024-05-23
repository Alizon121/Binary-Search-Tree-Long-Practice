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

let min = rootNode.val
if (rootNode.left) {
  rootNode = rootNode.left
  if (min > rootNode.left) {
    Math.min(findMinBT(rootNode.left))
  }
  else return min
}
if (rootNode.right) {
  rootNode = rootNode.right
  if (min > rootNode.right) {
    Math.min(findMinBT(rootNode.right))
  }
  else return min
}



Math.min(findMintBt(rootNode.left))
}

function findMaxBT (rootNode) {
  // Your code here 
}

function getHeight (rootNode) {
  // Your code here 
}

function balancedTree (rootNode) {
  // Your code here 
}

function countNodes (rootNode) {
  // Your code here 
}

function getParentNode (rootNode, target) {
  // Your code here 
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
