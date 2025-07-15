"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const reversed_1 = reverseArray(collection_1);
    return mergeThreeSortedArrays(reversed_1, collection_2, collection_3);
}
function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
function mergeTwoSortedArrays(a, b) {
    let i = 0, j = 0;
    const result = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i++]);
        }
        else {
            result.push(b[j++]);
        }
    }
    while (i < a.length)
        result.push(a[i++]);
    while (j < b.length)
        result.push(b[j++]);
    return result;
}
function mergeThreeSortedArrays(a, b, c) {
    return mergeTwoSortedArrays(mergeTwoSortedArrays(a, b), c);
}
