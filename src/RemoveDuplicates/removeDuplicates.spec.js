import removeDuplicates from './removeDuplicates';

test('returns length 3 with Input Array Modified to [1, 2, 3, 3, 3]', () => {
    let inputArray = [1, 2, 2, 3, 3]
    expect(removeDuplicates(inputArray)).toBe(3);
    expect(inputArray).toEqual([1, 2, 3, 3, 3]);
});

test('input has less than 2 elements returns the original length', () => {
    let inputArray = [1];
    expect(removeDuplicates(inputArray)).toBe(1);
})

test('input has 2 elements and are duplicates', () => {
    let inputArray = [1,1];
    expect(removeDuplicates(inputArray)).toBe(1);
})

test('input has 2 elements and are not duplicates', () => {
    let inputArray = [1,2];
    expect(removeDuplicates(inputArray)).toBe(2);
})