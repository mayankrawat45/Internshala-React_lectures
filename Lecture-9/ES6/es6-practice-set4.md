# ES6 Practice Set 4 (Questions & Answers)

---

## 1. Use map() to multiply each number by 3

### Question

```js
const arr = [2, 4, 6, 8];
```

Multiply each element by 3.

### Answer

```js
const result = arr.map(num => num * 3);
console.log(result);
```

---

## 2. Use filter() to return numbers divisible by 3

### Question

```js
const arr = [3, 5, 9, 10, 15];
```

Return numbers divisible by 3.

### Answer

```js
const result = arr.filter(num => num % 3 === 0);
console.log(result);
```

---

## 3. Use reduce() to find sum of squares

### Question

```js
const arr = [1, 2, 3];
```

Find sum of squares.

### Answer

```js
const result = arr.reduce((sum, num) => sum + num ** 2, 0);
console.log(result);
```

---

## 4. Convert array of numbers into boolean values

### Question

```js
const arr = [1, 2, 3, 4];
```

Convert:

* Even → true
* Odd → false

### Answer

```js
const result = arr.map(num => num % 2 === 0);
console.log(result);
```

---

## 5. Filter objects where score is greater than 50

### Question

```js
const students = [
  { name: "A", score: 45 },
  { name: "B", score: 60 },
  { name: "C", score: 70 }
];
```

Return students with score > 50.

### Answer

```js
const result = students.filter(({ score }) => score > 50);
console.log(result);
```

---

## 6. Use map() to add a new field "grade"

### Question

```js
const students = [
  { name: "A", score: 45 },
  { name: "B", score: 60 }
];
```

Add:

* score >= 60 → "A"
* else → "B"

### Answer

```js
const result = students.map(student => ({
  ...student,
  grade: student.score >= 60 ? "A" : "B"
}));

console.log(result);
```

---

## 7. Use reduce() to count occurrences of numbers

### Question

```js
const arr = [1, 2, 2, 3, 3, 3];
```

Count occurrences.

### Answer

```js
const result = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(result);
```

---

## 8. Use map() to extract lengths of strings

### Question

```js
const words = ["apple", "bat", "car"];
```

Return lengths.

### Answer

```js
const lengths = words.map(word => word.length);
console.log(lengths);
```

---

## 9. Use filter() to remove falsy values

### Question

```js
const arr = [0, 1, false, 2, "", 3];
```

Remove falsy values.

### Answer

```js
const result = arr.filter(Boolean);
console.log(result);
```

---

## 10. Use reduce() to flatten array

### Question

```js
const arr = [[1, 2], [3, 4], [5]];
```

Flatten array.

### Answer

```js
const result = arr.reduce((acc, curr) => [...acc, ...curr], []);
console.log(result);
```

---
