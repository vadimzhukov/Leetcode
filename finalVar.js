var finalValueAfterOperations = function(operations) {
    let X = 0
    for (op of operations) {
        op.includes('--') ? X-- : op.includes('++') ? X++ : 0
    }
    return X
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))