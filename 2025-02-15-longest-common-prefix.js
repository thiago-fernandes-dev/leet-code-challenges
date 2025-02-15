function longestCommonPrefix(strs) {
    let length = strs[0].length;
    let longestPrefix = "";

    for(;length > 0; length-= 1) {
        const slicedStr = strs[0].slice(0, length);
        const x = strs.map(str => str.startsWith(slicedStr));
        
        if(x.every(Boolean)) {
            longestPrefix = slicedStr;
            break;
        } 
    }
    return longestPrefix;
};

longestCommonPrefix(['dog', 'dear', 'diamond']) // returns 'd'
longestCommonPrefix(['flower', 'flow', 'fluid']) // returns 'fl'