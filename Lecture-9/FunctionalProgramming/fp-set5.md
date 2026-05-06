# Functional Programming Practice Set 5 (Questions & Answers)

---

## 1. Use map() to add discountedPrice (10% off)

### Question

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];
```

### Answer

```js
const result = products.map(item => ({
  ...item,
  discountedPrice: item.price * 0.9
}));

console.log(result);
```

---

## 2. Use filter() to get products with price > 30000

### Question

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];
```

### Answer

```js
const result = products.filter(({ price }) => price > 30000);
console.log(result);
```

---

## 3. Use reduce() to calculate total price

### Question

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];
```

### Answer

```js
const total = products.reduce((acc, { price }) => acc + price, 0);
console.log(total);
```

---

## 4. Use map() to convert names to uppercase

### Question

```js
const users = [
  { name: "john" },
  { name: "jane" }
];
```

### Answer

```js
const result = users.map(user => ({
  ...user,
  name: user.name.toUpperCase()
}));

console.log(result);
```

---

## 5. Use filter() to get users with name length > 4

### Question

```js
const users = [
  { name: "John" },
  { name: "Alexander" },
  { name: "Sam" }
];
```

### Answer

```js
const result = users.filter(({ name }) => name.length > 4);
console.log(result);
```

---

## 6. Use reduce() to group numbers into even and odd

### Question

```js
const numbers = [1, 2, 3, 4, 5, 6];
```

### Answer

```js
const result = numbers.reduce((acc, num) => {
  acc[num % 2 === 0 ? "even" : "odd"].push(num);
  return acc;
}, { even: [], odd: [] });

console.log(result);
```

---

## 7. Use map() to add isExpensive field

### Question

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];
```

### Answer

```js
const result = products.map(item => ({
  ...item,
  isExpensive: item.price > 30000
}));

console.log(result);
```

---

## 8. Use filter() to get products whose name includes "o"

### Question

```js
const products = [
  { name: "Laptop" },
  { name: "Phone" },
  { name: "Tablet" }
];
```

### Answer

```js
const result = products.filter(({ name }) => name.includes("o"));
console.log(result);
```

---

## 9. Use reduce() to find product with highest price

### Question

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];
```

### Answer

```js
const result = products.reduce(
  (max, item) => item.price > max.price ? item : max
);

console.log(result);
```

---

## 10. Use reduce() to convert array into object (name → price)

### Question

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];
```

### Answer

```js
const result = products.reduce((acc, { name, price }) => {
  acc[name] = price;
  return acc;
}, {});

console.log(result);
```

---
