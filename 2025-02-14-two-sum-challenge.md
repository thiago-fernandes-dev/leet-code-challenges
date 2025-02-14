### Two SUm challenge

- To solve this challenge, I broke down the solution into these steps:

1. Create a map to retrieve nums element by looping the array of nums while the second addend is not found
2. find the possible second addend by subtracting the first addend from the target
3. checks whether the second addend of the possible first addend is already stored on Map. If yes, it means that the pair of elements that results on target was found.
4. If the second addend is not stored on map yet, it means the pair was not found and the loop continues until the pair is found.