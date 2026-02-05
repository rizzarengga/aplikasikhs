// ===============================
// 1. Class Node
// ===============================
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// ===============================
// 2. Class Binary Tree
// ===============================
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert data (BST)
  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // ===============================
  // Traversal
  // ===============================

  // Inorder (Left, Root, Right)
  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Preorder (Root, Left, Right)
  preorder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Postorder (Left, Right, Root)
  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}

// ===============================
// 3. Cara Menggunakan
// ===============================
const tree = new BinaryTree();

// Insert data
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// ===============================
// 4. Output
// ===============================
console.log("Inorder Traversal:");
tree.inorder();

console.log("Preorder Traversal:");
tree.preorder();

console.log("Postorder Traversal:");
tree.postorder();