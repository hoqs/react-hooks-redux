/**
 * Compare two arrays (of any dimensions) if they are equal return true.
 * @param arr1 Array 1
 * @param arr2 Array 2
 * @returns True or False
 */

function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 == arr2

  if (arr1.length !== arr2.length) return false

  for (let i = 0, len = arr1.length; i < len; i++)
    if (!compareArrays(arr1[i], arr2[i])) return false

  return true
}

export default compareArrays
