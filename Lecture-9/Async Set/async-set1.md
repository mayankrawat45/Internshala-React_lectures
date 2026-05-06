# Async JavaScript Practice Set (Questions & Answers)

---

## Q1. Basic setTimeout

### Question

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

### Answer

```text
Start
End
Timeout
```

### Explanation

* Sync runs first → Start, End
* setTimeout → macrotask → runs later

---

## Q2. Promise Microtask

### Question

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Answer

```text
Start
End
Promise
```

### Explanation

* Promise → microtask
* Microtasks run after sync

---

## Q3. Promise vs setTimeout

### Question

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Answer

```text
Start
End
Promise
Timeout
```

### Explanation

* Microtask (Promise) runs before macrotask (Timeout)

---

## Q4. Chained Promises

### Question

```js
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  });

console.log(3);
```

### Answer

```text
3
1
2
```

### Explanation

* Sync → 3
* then1 → 1
* then2 → 2
* Each `.then()` returns a promise

---

## Q5. Multiple setTimeout

### Question

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
```

### Answer

```text
Start
End
Promise 1
Timeout 1
Timeout 2
```

### Explanation

* Microtask first
* Macrotasks run in FIFO order

---

## Q6. Chained Promise vs Timeout

### Question

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

### Answer

```text
Start
End
Promise 1
Promise 2
Timeout
```

### Explanation

* Both `.then()` run before Timeout

---

## Q7. setTimeout inside Promise

### Question

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout inside Promise");
  }, 0);
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

### Answer

```text
Start
End
Promise 1
Timeout
Timeout inside Promise
```

### Explanation

* Inner timeout is registered later
* So it runs after outer timeout

---

## Q8. async/await behavior

### Question

```js
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

console.log(3);
test();
console.log(4);
```

### Answer

```text
3
1
4
2
```

### Explanation

* `await` pauses function
* Rest runs as microtask

---

## Q9. Final Boss (Mixed)

### Question

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async After Await");

  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
}

test();

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Answer

```text
Start
Async Start
End
Async After Await
Promise
Timeout 1
Timeout 2
```

### Explanation

* Sync → Start, Async Start, End
* Microtasks:

  * Async continuation (from await)
  * Promise.then
* Macrotasks:

  * Timeout 1
  * Timeout 2

---

# 🔥 Key Rules

```text
1. Sync code runs first
2. Microtasks (Promise, await) run next
3. Macrotasks (setTimeout) run last
4. Microtasks execute in order they are added
5. setTimeout executes in FIFO order
```

---

# 🚀 Conclusion

* ✔ Event Loop understood
* ✔ Microtask vs Macrotask clear
* ✔ async/await behavior clear
* ✔ Interview-level traps covered

---
