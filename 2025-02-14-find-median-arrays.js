function findMedianSortedArrays(arrA, arrB) {
    const mergedArr = [...arrA, ...arrB].sort();

    if(mergedArr.length % 2 == 1){
    const index = ((mergedArr.length + 1) / 2) - 1;
    return mergedArr[index];
    }

    if(mergedArr.length % 2 == 0) {
        const i1 = (mergedArr.length / 2) - 1;
        const i2 = i1 + 1
        return ( mergedArr[i1] + mergedArr[i2] ) / 2
    }        
}

console.log(
    findMedianSortedArrays([1, 3], [2])
)