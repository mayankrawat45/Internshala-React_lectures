# ES6 Practice Set 2 (Questions & Answers)

---

## 1. Use map() to convert numbers into cubes

### Question

```js
const arr = [1, 2, 3, 4];
```

Convert each number into its cube.

### Answer

```js
const result = arr.map(num => num ** 3);
console.log(result);
```

---

## 2. Filter numbers greater than 10

### Question

```js
const arr = [5, 12, 8, 20, 3];
```

Return numbers greater than 10.

### Answer

```js
const result = arr.filter(num => num > 10);
console.log(result);
```

---

## 3. Use reduce() to find product of array

### Question

```js
const arr = [1, 2, 3, 4];
```

Find the product of all elements.

### Answer

```js
const product = arr.reduce((acc, num) => acc * num, 1);
console.log(product);
```

---

## 4. Convert array of strings to uppercase

### Question

```js
const words = ["hello", "world"];
```

Convert all strings to uppercase.

### Answer

```js
const result = words.map(word => word.toUpperCase());
console.log(result);
```

---

## 5. Filter users with age greater than 25

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Sam", age: 20 }
];
```

Return users whose age is greater than 25.

### Answer

```js
const result = users.filter(({ age }) => age > 25);
console.log(result);
```

---

## 6. Sum of even numbers using filter + reduce

### Question

```js
const arr = [1, 2, 3, 4, 5, 6];
```

Find the sum of even numbers.

### Answer

```js
const result = arr
  .filter(num => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);

console.log(result);
```

---

## 7. Use map + filter together

### Question

```js
const arr = [1, 2, 3, 4];
```

Double each number and return only values greater than 5.

### Answer

```js
const result = arr
  .map(num => num * 2)
  .filter(num => num > 5);

console.log(result);
```

---

## 8. Use default parameters

### Question

Create a function:

* multiply(5) → 10
* multiply(5, 3) → 15

### Answer

```js
function multiply(num1, num2 = 2) {
  return num1 * num2;
}

console.log(multiply(5));     // 10
console.log(multiply(5, 3));  // 15
```

---

## 9. Use destructuring in function parameters

### Question

```js
const user = {
  name: "Mayank",
  age: 22
};
```

Print name and age using destructuring in function parameters.

### Answer

```js
function printUser({ name, age }) {
  console.log(name, age);
}

printUser(user);
```

---

## 10. Use spread operator to copy object

### Question

```js
const obj = { a: 1, b: 2 };
```

Create a copy of this object.

### Answer

```js
const newObj = { ...obj };
console.log(newObj);
```

---

## 11. Merge two objects using spread

### Question

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
```

Merge both objects.

### Answer

```js
const result = { ...obj1, ...obj2 };
console.log(result);
```

---

## 12. Use optional chaining

### Question

```js
const user = {};
```

Safely access `user.address.city` without error.

### Answer

```js
console.log(user?.address?.city);
```

---

## 13. Use nullish coalescing

### Question

```js
const value = undefined;
```

Return `"default"` if value is null or undefined.

### Answer

```js
console.log(value ?? "default");
```

---

## 14. Create a Promise that rejects after 1 second

### Question

Reject with message `"Error occurred"` after 1 second.

### Answer

```js
function handlePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 1000);
  });
}

handlePromise()
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

---

## 15. Use async/await to handle the Promise

### Question

Use async/await instead of then/catch.

### Answer

```js
async function run() {
  try {
    const res = await handlePromise();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

run();
```

---

## 16. Remove duplicates using Set

### Question

```js
const arr = [1, 2, 2, 3, 4];
```

Remove duplicates.

### Answer

```js
const result = [...new Set(arr)];
console.log(result);
```

---

## 17. Use Map to store values

### Question

Store:

* name → Mayank
* age → 22

Print both values.

### Answer

```js
const map = new Map();

map.set("name", "Mayank");
map.set("age", 22);

console.log(map.get("name"));
console.log(map.get("age"));
```

---

## 18. Convert array into object using reduce

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
const obj = arr.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});

console.log(obj);
```

---
