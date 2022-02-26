// 定义根节点
function TreeNode(val,left,right) {
    this.val = (val === undefined?0:val)
    this.left = (left === undefined?null:left)
    this.right = (right === undefined?null:right)
}
const mergeTrees = (t1,t2) =>{
    if(t1 == null && t2){
        return t2;
    }
    if((t1&&t2==null) || (t1==null&&t2==null)){
        return t1
    }
    t1.val += t2.val;
    // const root = new TreeNode(t1.val + t2.val)

    t1.left = mergeTrees(t1.left,t2.left);
    t1.right = mergeTrees(t1.right,t2.right);

    return t1
}

const t1 = [1,3,2,5];
const t2 = [2,1,3,null,4,null,7]
const tree1 = TreeNode(t1,null,null)
const tree2 = TreeNode(t2,null,null)

console.log(tree1,tree2)
