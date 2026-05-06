# Functional Programming Practice Set 1 (Questions & Answers)

---

## 1. Use map() to double each number

### Question

```js
const numbers = [1, 2, 3, 4];
```

Double each number.

### Answer

```js
const result = numbers.map(num => num * 2);
console.log(result);
```

---

## 2. Use filter() to return even numbers

### Question

```js
const numbers = [1, 2, 3, 4, 5, 6];
```

Return even numbers.

### Answer

```js
const result = numbers.filter(num => num % 2 === 0);
console.log(result);
```

---

## 3. Use reduce() to find sum of all numbers

### Question

```js
const numbers = [1, 2, 3, 4];
```

Find the sum.

### Answer

```js
const result = numbers.reduce((acc, num) => acc + num, 0);
console.log(result);
```

---

## 4. Use map() to convert numbers into strings

### Question

```js
const numbers = [1, 2, 3];
```

Convert numbers to strings.

### Answer

```js
const result = numbers.map(String);
console.log(result);
```

---

## 5. Use filter() to return numbers greater than 10

### Question

```js
const numbers = [5, 12, 8, 20, 3];
```

Return numbers greater than 10.

### Answer

```js
const result = numbers.filter(num => num > 10);
console.log(result);
```

---

## 6. Use reduce() to find product of all numbers

### Question

```js
const numbers = [1, 2, 3, 4];
```

Find product of all numbers.

### Answer

```js
const result = numbers.reduce((acc, num) => acc * num, 1);
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

Return names.

### Answer

```js
const result = users.map(({ name }) => name);
console.log(result);
```

---

## 8. Use filter() to return users with age > 25

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Sam", age: 20 }
];
```

Return users with age greater than 25.

### Answer

```js
const result = users.filter(({ age }) => age > 25);
console.log(result);
```

---

## 9. Use reduce() to sum all even numbers

### Question

```js
const numbers = [1, 2, 3, 4, 5, 6];
```

Sum only even numbers.

### Answer

```js
const result = numbers.reduce(
  (acc, num) => (num % 2 === 0 ? acc + num : acc),
  0
);
console.log(result);
```

---

## 10. Use map() to add a new field "doubleAge"

### Question

```js
const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 }
];
```

Add a new field:

* doubleAge = age * 2

### Answer

```js
const result = users.map(user => ({
  ...user,
  doubleAge: user.age * 2
}));

console.log(result);
```

---
