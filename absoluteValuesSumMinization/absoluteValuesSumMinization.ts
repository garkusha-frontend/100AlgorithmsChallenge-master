function absoluteValuesSumMinimization(a: number[]): number {
    return a.length % 2 === 0 ? a[Math.floor(a.length / 2) - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7, 1, 2, 3, 4]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

