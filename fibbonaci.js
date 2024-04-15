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

console.log(iterativeFibbonaci(10))