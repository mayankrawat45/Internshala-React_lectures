# Functional Programming Practice Set 3 (Questions & Answers)

---

## 1. Use map() to convert numbers into cubes

### Question

```js
const numbers = [1, 2, 3, 4];
```

Convert each number to its cube.

### Answer

```js
const result = numbers.map(num => num ** 3);
console.log(result);
```

---

## 2. Use filter() to return numbers greater than 10

### Question

```js
const numbers = [5, 12, 8, 130, 44];
```

Return numbers greater than 10.

### Answer

```js
const result = numbers.filter(num => num > 10);
console.log(result);
```

---

## 3. Use reduce() to find the maximum number

### Question

```js
const numbers = [10, 5, 20, 8];
```

Find the maximum number.

### Answer

```js
const result = numbers.reduce((acc, num) => 
  acc < num ? num : acc, 
numbers[0]);
console.log(result);
```

---

## 4. Use map() to convert numbers into strings

### Question

```js
const numbers = [1, 2, 3, 4];
```

Convert numbers into strings.

### Answer

```js
const result = numbers.map(String);
console.log(result);
```

---

## 5. Use filter() to return words starting with "a"

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

## 6. Use reduce() to find total length of all words

### Question

```js
const words = ["hi", "hello", "hey"];
```

Find total number of characters.

### Answer

```js
const result = words.reduce((acc, word) => acc + word.length, 0);
console.log(result);
```

---

## 7. Use map() to extract names from objects

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

## 8. Use filter() to return users with age < 30

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Sam", age: 20 }
];
```

Return users with age less than 30.

### Answer

```js
const result = users.filter(({ age }) => age < 30);
console.log(result);
```

---

## 9. Use reduce() to count total elements in array

### Question

```js
const numbers = [1, 2, 3, 4, 5];
```

Count total elements.

### Answer

```js
const result = numbers.reduce(acc => acc + 1, 0);
console.log(result);
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

* isAdult = true if age >= 18
* else false

### Answer

```js
const result = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));

console.log(result);
```

---
