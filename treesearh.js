class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function dfsPreorder(node) {
    if (!node) return;

    console.log(node.value);
    for (let child of node.children) {
        dfsPreorder(child);
    }
}

// Contoh tree
const root = new TreeNode("A");
root.children.push(new TreeNode("B"));
root.children.push(new TreeNode("C"));
root.children[0].children.push(new TreeNode("D"));
root.children[0].children.push(new TreeNode("E"));

dfsPreorder(root);
// Output: A B D E C