function mergeTogether(leftHalf, rightHalf){
    const mergedArray = []

    let i = 0;
    let j = 0;

    while(i < leftHalf.length){
        if(leftHalf[i] > rightHalf[j]){
            mergedArray.push(rightHalf[j])
            j++
        }
        else{
            mergedArray.push(leftHalf[i])
            i++
        }
    }

    mergedArray.push(...leftHalf.slice(i))
    mergedArray.push(...rightHalf.slice(j))

    return mergedArray
}

function mergeSortAlgorithm(list){
    if(list.length == 1){
        return list
    }

    // const leftHalf = list.slice(0,Math.floor(list.length/2))
    // const rightHalf = list.slice(Math.floor(list.length/2))

    const sortedLeftHalf =  mergeSortAlgorithm(list.slice(0,Math.floor(list.length/2)))
    const sortedRightHalf = mergeSortAlgorithm(list.slice(Math.floor(list.length/2)))

    return mergeTogether(sortedLeftHalf, sortedRightHalf)
}

const randomArray = [87, 62, 45, 30, 51, 78, 23, 94, 16, 72, 39, 58, 84, 10, 67, 95, 27, 13, 76, 49];

console.log(mergeSortAlgorithm(randomArray))
// console.log(mergeTogether([17, 28, 42, 56, 93],[5, 11, 37, 63, 81]))