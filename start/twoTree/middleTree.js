const inorderTraversal  = function (root) {
    const res = [];
    const inorder = root =>{
        if(!root){
            return;
        }
        inorder(root.left);
        res.push(root.value);
        inorder(root.right);
    }
    inorder(root);
    return res;
}
