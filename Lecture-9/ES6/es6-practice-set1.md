# ES6 Practice Questions & Answers

---

## 1. Convert a normal function into an arrow function

### Question

```js
function greet(name) {
  return "Hello " + name;
}
```

### Answer

```js
const greet = (name) => `Hello ${name}`;
```

---

## 2. Use template literals

### Question

Print: "My name is Mayank and I am 22 years old"

### Answer

```js
const name = "Mayank";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old`);
```

---

## 3. Use destructuring

### Question

```js
const person = {
  name: "John",
  age: 25
};
```

Extract name and age.

### Answer

```js
const { name, age } = person;
console.log(name, age);
```

---

## 4. Use spread operator to merge arrays

### Question

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
```

### Answer

```js
const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

---

## 5. Use rest operator

### Question

Create a function:

```
sum(1, 2, 3, 4) → 10
```

### Answer

```js
const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
```

---

## 6. Use map()

### Question

```js
const arr = [1, 2, 3, 4];
```

Return squares.

### Answer

```js
const squares = arr.map(num => num * num);
console.log(squares);
```

---

## 7. Use filter()

### Question

```js
const arr = [1, 2, 3, 4, 5, 6];
```

Get even numbers.

### Answer

```js
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);
```

---

## 8. Use reduce()

### Question

```js
const arr = [1, 2, 3, 4];
```

Find sum.

### Answer

```js
const sum = arr.reduce((acc, item) => acc + item, 0);
console.log(sum);
```

---

## 9. Extract names using map()

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];
```

### Answer

```js
const userNames = users.map(({ name }) => name);
console.log(userNames);
```

---

## 10. Extract ages

### Question

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Sam", age: 20 }
];
```

### Answer

```js
const userAges = users.map(({ age }) => age);
console.log(userAges);
```

---

## 11. Default parameters

### Question

Create:

```
greet() → "Hello Guest"
greet("Mayank") → "Hello Mayank"
```

### Answer

```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

---

## 12. Optional chaining

### Question

```js
const user = {
  name: "Mayank",
  address: {
    city: "Lucknow"
  }
};
```

Access city safely.

### Answer

```js
console.log(user?.address?.city);
```

---

## 13. Nullish coalescing

### Question

```js
const value = null;
```

Return default if null/undefined.

### Answer

```js
console.log(value ?? "default value");
```

---

## 14. Object shorthand

### Question

```js
const name = "Mayank";
const age = 22;
```

Create object.

### Answer

```js
const obj = { name, age };
console.log(obj);
```

---

## 15. Dynamic keys in object

### Question

```js
const key = "name";
const value = "Mayank";
```

### Answer

```js
const obj = {
  [key]: value
};
console.log(obj);
```

---

## 16. Create a Promise (2 seconds)

### Question

Resolve after 2 seconds.

### Answer

```js
const newPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });

newPromise().then(data => console.log(data));
```

---

## 17. Use then() and catch()

### Question

Handle resolve & reject.

### Answer

```js
function handlePromise(state) {
  return new Promise((resolve, reject) => {
    state
      ? resolve("promise is resolved")
      : reject("promise is rejected");
  });
}

handlePromise(false)
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

---

## 18. Convert to async/await

### Question

Use async/await instead of then/catch.

### Answer

```js
async function run(state) {
  try {
    const response = await handlePromise(state);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

run(false);
```

---

## 19. Remove duplicates using Set

### Question

```js
const arr = [1, 2, 2, 3, 4, 4];
```

### Answer

```js
const result = [...new Set(arr)];
console.log(result);
```

---

## 20. Use Map

### Question

Store key-value pairs:

* name → Mayank
* age → 22

### Answer

```js
const m1 = new Map();

m1.set("name", "Mayank");
m1.set("age", 22);

console.log(m1.get("name"));
console.log(m1.get("age"));
```

---
