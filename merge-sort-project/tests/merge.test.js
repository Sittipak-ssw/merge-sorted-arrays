"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
describe("merge()", () => {
    it("should merge three arrays correctly", () => {
        const c1 = [9, 7, 5, 3]; // descending
        const c2 = [2, 4, 6]; // ascending
        const c3 = [0, 1, 8, 10]; // ascending
        const result = (0, merge_1.merge)(c1, c2, c3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("should handle empty arrays", () => {
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
        expect((0, merge_1.merge)([], [1, 2], [])).toEqual([1, 2]);
        expect((0, merge_1.merge)([5, 3], [], [1])).toEqual([1, 3, 5]);
    });
    it("should handle duplicate numbers", () => {
        const c1 = [5, 5, 3];
        const c2 = [1, 3, 5];
        const c3 = [3, 4, 5];
        expect((0, merge_1.merge)(c1, c2, c3)).toEqual([1, 3, 3, 3, 4, 5, 5, 5, 5]);
    });
});
