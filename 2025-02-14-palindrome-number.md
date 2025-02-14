### Palindrome number Challenger

- This one is pretty simple: to find a number that, when reversed, keeps the same as it was in the first place. To solve this problem, I've applied these steps:

1. first of all, check whether the integer is negative. If yes, despite being the same when reversed, it can't be considered a palindrome because of the negative sign
2. make a decompososed copy of the integer and make a another copy but with its elements reversed.
3. check whether the decomposed and reversed elements match. If not, it means the integer is not a palindrome. However, if all match, return true.