# Multidimensional Array Search
Find an element if it exists in a collection of arrays within arrays.

## Specs
Write a function named "locate" that takes two arguments, a multidimensional array of values and a target. This function returns `true` if the target value exist in a multidimensional array otherwise it returns `false`

## Example:

    locate(['a','b',['c','d',['e']]],'e'); // should return true
    locate(['a','b',['c','d',['e']]],'a'); // should return true
    locate(['a','b',['c','d',['e']]],'f'); // should return false
