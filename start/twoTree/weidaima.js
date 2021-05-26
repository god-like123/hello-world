function NodeTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let ta = new NodeTree('a');
let tb = new NodeTree('b');
let tc = new NodeTree('c');
let td = new NodeTree('d');
let te = new NodeTree('e');
let tf = new NodeTree('f');
let tg = new NodeTree('g');

ta.left = tb;
ta.right = tc;
tb.left = td;
tb.right = te;
tc.left = tf;
tc.right = tg;

// 前序遍历
function treeFrontEach(treeList) {
    if(!treeList||treeList.value===null){
        return null
    }
    console.log(treeList.value);
    treeFrontEach(treeList.left);
    treeFrontEach(treeList.right)
}

treeFrontEach(ta)
//中序遍历
function treeCenterEach(treeList) {
    if(!treeList||treeList.value===null){
        return null
    }
    treeCenterEach(treeList.left)
    console.log(treeList.value)
    treeCenterEach(treeList.right)
}


//后序遍历
function treeEndEach(treeList) {
    if(!treeList||treeList.value===null){
        return null
    }
    treeEndEach(treeList.left)
    treeEndEach(treeList.right)
    console.log(treeList.value)
}
