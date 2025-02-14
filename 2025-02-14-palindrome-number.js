function isIntPalindrome(int) {
    if (int < 0) return false;

    const decomposedInt =  Array.from(String(int), Number);
    const reverserdArray = [...decomposedInt].reverse();

    for (let i = 0 ; i < decomposedInt.length ; i++)
        if (decomposedInt[i] != reverserdArray[i]) return false;

    return true;
}

console.log(isIntPalindrome(12321)) // must return true
console.log(isIntPalindrome(123521)) // must return false
