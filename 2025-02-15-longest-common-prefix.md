### Longest COmmon Prefix

1. Set one of the strings to be the reference to the others
2. compare whether the other strings contains the same strings as the first one. remove a string from it every time it doesn't match
3. when finally both strings matches a sliced portion of the refered string, return the value as it is the longest prefix.