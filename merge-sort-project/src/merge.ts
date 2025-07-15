export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    const reversed_1 = reverseArray(collection_1);
  

    return mergeThreeSortedArrays(reversed_1, collection_2, collection_3);
  }
  
  function reverseArray(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
  
  function mergeTwoSortedArrays(a: number[], b: number[]): number[] {
    let i = 0, j = 0;
    const result: number[] = [];
  
    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        result.push(a[i++]);
      } else {
        result.push(b[j++]);
      }
    }
  
    while (i < a.length) result.push(a[i++]);
    while (j < b.length) result.push(b[j++]);
  
    return result;
  }
  
  function mergeThreeSortedArrays(a: number[], b: number[], c: number[]): number[] {
    return mergeTwoSortedArrays(mergeTwoSortedArrays(a, b), c);
  }
  