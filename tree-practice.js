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
// if tree is balanced, then height is equal to log n -> checks tree
// left and right subtrees differ in height by no more than 1,
// traverse the tree from a node all the way down and compare heights
// Need to compare the hieght of each node in tree
// If any child nodes are unbalanced, then the entire BT is unbalanced

  // Helper function to check if the tree is balanced
  function isBalanced(node) {
      if (!node) return true; // An empty tree is balanced

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) return false; // accounts for left - right, vice versa

      return isBalanced(node.left) && isBalanced(node.right);
  }
  // Check if the entire tree is balanced
  return isBalanced(rootNode);
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




function getParentNode (rootNode, target) {
// If target node, then we need to return that parent
// Traverse until we reach the parent node of target
// console.log(rootNode.val)

if (rootNode.val === target) return null;

    const queue = [rootNode];

    while (queue.length) {
        let currNode = queue.shift();

        if (currNode.left && currNode.left.val === target) {
            return currNode;
        }
        if (currNode.right && currNode.right.val === target) {
            return currNode;
        }

        if (currNode.left) {
            queue.push(currNode.left);
        }
        if (currNode.right) {
            queue.push(currNode.right);
        }
    }

    return undefined;

}
  



    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7

    //         8
    //       /   \
    //      3     10
    //    /   \     \
    //   2     5     11
    //  /    /  \     \
    // 1    4    7    12
    //          /      \
    //         6       15
    //                /
    //              14

      // 1
    //  \
    //   2
    //    \
    //     3
    //      \
    //       4
    //        \
    //         5
    //          \
    //           6
    //            \
    //             7
function inOrderPredecessor (rootNode, target) {
  // returns the number that precedes the target (e.g. 3 precedes 4)
  // We need to search the tree for an in-order value that preceded a target
      // If there is a node with value that is <target, then return
  // if the starting node is the smallest value in the tree (e.g. 1), then return null

  let predecessor = null; //the next integer that precedes the target
  if (target <= 1) return null

  // If the current node's value is less than the target, update the predecessor.
  // If the current node's value is greater than or equal to the target, we don't need to traverse further in this path.
  // Recursively traverse the right subtree.
  
  function inOrderTraversal(rootNode) {
    if (!rootNode) return 

      inOrderTraversal(rootNode.left)

      if (rootNode.val < target) predecessor = rootNode.val

      inOrderTraversal(rootNode.right)
          
  }

inOrderTraversal(rootNode)
return predecessor
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
