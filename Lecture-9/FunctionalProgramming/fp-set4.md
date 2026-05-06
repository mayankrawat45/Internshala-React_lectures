# Functional Programming Practice Set 4 (Questions & Answers)

---

## 1. Use map() to convert numbers into objects

### Question

```js
const numbers = [1, 2, 3, 4];
```

Convert each number into:

```js
{ value: number }
```

### Answer

```js
const result = numbers.map(num => ({ value: num }));
console.log(result);
```

---

## 2. Use filter() to remove falsy values

### Question

```js
const arr = [0, 1, false, 2, "", 3, null, undefined];
```

Remove all falsy values.

### Answer

```js
const result = arr.filter(Boolean);
console.log(result);
```

---

## 3. Use reduce() to flatten an array

### Question

```js
const arr = [[1, 2], [3, 4], [5]];
```

Flatten the array.

### Answer

```js
const result = arr.reduce((acc, curr) => [...acc, ...curr], []);
console.log(result);
```

---

## 4. Use map() to add index to each element

### Question

```js
const arr = ["a", "b", "c"];
```

Convert into objects with value and index.

### Answer

```js
const result = arr.map((value, index) => ({ value, index }));
console.log(result);
```

---

## 5. Use reduce() to convert array into object

### Question

```js
const arr = ["a", "b", "c"];
```

Convert into:

```js
{ 0: "a", 1: "b", 2: "c" }
```

### Answer

```js
const result = arr.reduce((acc, value, index) => {
  acc[index] = value;
  return acc;
}, {});
console.log(result);
```

---

## 6. Use map() to extract first letter of each word

### Question

```js
const words = ["apple", "banana", "cherry"];
```

Extract first letters.

### Answer

```js
const result = words.map(word => word[0]);
console.log(result);
```

---

## 7. Use filter() to return words with length exactly 5

### Question

```js
const words = ["apple", "bat", "car", "grape", "mango"];
```

Return words of length 5.

### Answer

```js
const result = words.filter(word => word.length === 5);
console.log(result);
```

---

## 8. Use reduce() to count occurrences of elements

### Question

```js
const arr = [1, 2, 2, 3, 3, 3];
```

Count frequency.

### Answer

```js
const result = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(result);
```

---

## 9. Use map() to convert words into lengths

### Question

```js
const words = ["apple", "bat", "car"];
```

Convert into lengths.

### Answer

```js
const result = words.map(word => word.length);
console.log(result);
```

---

## 10. Use filter() to keep only even numbers

### Question

```js
const numbers = [1, 2, 3, 4, 5, 6];
```

Return only even numbers.

### Answer

```js
const result = numbers.filter(num => num % 2 === 0);
console.log(result);
```

---
