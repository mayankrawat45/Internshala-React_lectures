# ES6 Practice Set 3 (Questions & Answers)

---

## 1. Use map() to add 5 to each element

### Question

```js
const arr = [1, 2, 3, 4];
```

Add 5 to each element.

### Answer

```js
const result = arr.map(num => num + 5);
console.log(result);
```

---

## 2. Use filter() to return numbers less than 10

### Question

```js
const arr = [5, 12, 8, 130, 44];
```

Return numbers less than 10.

### Answer

```js
const result = arr.filter(num => num < 10);
console.log(result);
```

---

## 3. Use reduce() to find maximum number

### Question

```js
const arr = [10, 5, 20, 8];
```

Find the maximum number.

### Answer

```js
const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max);
```

---

## 4. Convert array of numbers to strings using map()

### Question

```js
const arr = [1, 2, 3, 4];
```

Convert numbers to strings.

### Answer

```js
const result = arr.map(String);
console.log(result);
```

---

## 5. Filter strings that start with letter "a"

### Question

```js
const words = ["apple", "banana", "avocado", "grape"];
```

Return words starting with "a".

### Answer

```js
const result = words.filter(word => word.startsWith("a"));
console.log(result);
```

---

## 6. Use reduce() to count total length of all strings

### Question

```js
const words = ["hi", "hello", "hey"];
```

Find total length.

### Answer

```js
const totalLength = words.reduce((sum, word) => sum + word.length, 0);
console.log(totalLength);
```

---

## 7. Use map() to return only names from objects

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];
```

Extract names.

### Answer

```js
const result = users.map(({ name }) => name);
console.log(result);
```

---

## 8. Filter users whose age is less than 30

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Sam", age: 20 }
];
```

Return users with age < 30.

### Answer

```js
const result = users.filter(({ age }) => age < 30);
console.log(result);
```

---

## 9. Use reduce() to count number of elements in array

### Question

```js
const arr = [1, 2, 3, 4, 5];
```

Count elements using reduce.

### Answer

```js
const count = arr.reduce(acc => acc + 1, 0);
console.log(count);
```

---

## 10. Use map() to add a new field "isAdult"

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 }
];
```

Add:

* age >= 18 → isAdult: true
* else → false

### Answer

```js
const result = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));

console.log(result);
```

---
