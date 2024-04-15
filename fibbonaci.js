function iterativeFibbonaci(sequenceLength){
    let prev = 0
    let curr = 1

    let fibbonaci = prev + curr

    let fibbonaciSequence = [0]


    for (let i = 1; i < sequenceLength; i++) {
        fibbonaciSequence.push(fibbonaci)
        fibbonaci = prev + curr
        prev = curr
        curr = fibbonaci
    }

    return fibbonaciSequence

}


// function recursiveFibbonaci(sequenceLength){
//     const fibbonaciSequence = []

//     if(sequenceLength < 2){
//         return [sequenceLength]
//     }

//     return [].concat(recursiveFibbonaci(sequenceLength - 1)[0] + recursiveFibbonaci(sequenceLength - 2)[0])
// }

function recursiveFibbonaci(sequenceLength, sequence = [0, 1]){
    if (sequenceLength <= 1) return sequence


    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);


    return recursiveFibbonaci(sequenceLength - 1, sequence);

}

// console.log(iterativeFibbonaci(10))
console.log(recursiveFibbonaci(9))