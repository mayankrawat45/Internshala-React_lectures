# Functional Programming Practice Set 2 (Questions & Answers)

---

## 1. Use map() to convert each number into its square

### Question

```js id="k2m9sx"
const numbers = [2, 3, 4, 5];
```

Convert each number to its square.

### Answer

```js id="c8n4zd"
const result = numbers.map(num => num ** 2);
console.log(result);
```

---

## 2. Use filter() to return numbers less than 5

### Question

```js id="a7d2lk"
const numbers = [1, 6, 3, 8, 2];
```

Return numbers less than 5.

### Answer

```js id="x1v9jq"
const result = numbers.filter(num => num < 5);
console.log(result);
```

---

## 3. Use reduce() to find the sum of odd numbers

### Question

```js id="m8p4rt"
const numbers = [1, 2, 3, 4, 5, 6];
```

Find the sum of odd numbers.

### Answer

```js id="h3z7vn"
const result = numbers.reduce(
  (acc, num) => (num % 2 !== 0 ? acc + num : acc),
  0
);
console.log(result);
```

---

## 4. Use map() to convert strings to uppercase

### Question

```js id="v9s2be"
const words = ["hello", "world"];
```

Convert all strings to uppercase.

### Answer

```js id="q6x8tm"
const result = words.map(word => word.toUpperCase());
console.log(result);
```

---

## 5. Use filter() to return strings with length greater than 3

### Question

```js id="z2h8cv"
const words = ["hi", "hello", "hey", "world"];
```

Return words with length greater than 3.

### Answer

```js id="g7k5ds"
const result = words.filter(word => word.length > 3);
console.log(result);
```

---

## 6. Use reduce() to find the maximum number

### Question

```js id="f1n3qz"
const numbers = [10, 25, 5, 40];
```

Find the maximum number.

### Answer

```js id="p4r8yo"
const result = numbers.reduce((acc, num) => (num > acc ? num : acc));
console.log(result);
```

---

## 7. Use map() to extract ages from objects

### Question

```js id="k9w1ea"
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];
```

Extract ages.

### Answer

```js id="d3l7qt"
const ages = users.map(({ age }) => age);
console.log(ages);
```

---

## 8. Use filter() to return users whose name starts with "J"

### Question

```js id="h5v2un"
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Sam", age: 20 }
];
```

Return users whose name starts with "J".

### Answer

```js id="y8c6op"
const result = users.filter(({ name }) => name.startsWith("J"));
console.log(result);
```

---

## 9. Use reduce() to count total number of characters in all words

### Question

```js id="m2s9df"
const words = ["hi", "hello", "hey"];
```

Find total characters.

### Answer

```js id="w7n4kx"
const result = words.reduce((acc, word) => acc + word.length, 0);
console.log(result);
```

---

## 10. Use map() to add a new field "nameLength"

### Question

```js id="t6p3xr"
const users = [
  { name: "John" },
  { name: "Jane" }
];
```

Add:

* nameLength = length of name

### Answer

```js id="b1q7sm"
const result = users.map(user => ({
  ...user,
  nameLength: user.name.length
}));

console.log(result);
```

---
