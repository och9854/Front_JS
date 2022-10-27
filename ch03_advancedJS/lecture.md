# Type Casting
---

JS converts the type of data automatically. So we have to pass the type of data more precisely.

# Truthy & Falsy
---

```JS
const input = prompt();
if (!input) {
    console.log("There is no input.");
} else {
    console.log(input);
}
```

Like this, we can use not operator using the property of JS. 

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197359085-1e57fe74-ae32-4c52-82d9-42d6546a8cc6.png">

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197359099-500286ad-fc63-4aac-abcf-16cb446674c0.png">

# Function & First-class citizen
---

[reference](https://velog.io/@olzlel2000/%EC%9D%BC%EA%B8%89%EA%B0%9D%EC%B2%B4)

## function
----
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197359331-d5b51562-0d0b-4d4f-b3b4-01c78829074a.png">
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197359334-ad2d8c35-f4d5-4ef3-a5e2-92a2e1a59cb4.png">


## First-class citizen
---

<ol>
    <li>All items can be the actual parameters of functions</li>
    <li>All items can be returned as results of functions</li>
    <li>All items can be the subject of assignment statements</li>
    <li>All items can be tested for equality</li>
</ol>

- ex
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197359537-c5913252-e1c1-4b7e-97d9-3b01f04f725f.png">

# Asynchronous & Promise
---

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. 

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197360232-b85b7b64-6728-4a88-9087-3d8dbd4a8e5a.png">

## Promise
---

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197414872-fd023d83-ad16-4bab-a094-7420576eb612.png">


When we take a look of a function, sometimes we can see `Promise<Response>` as return type. Then this function will be processed in asynchronous way.

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197415238-41920d1d-bf70-47b1-acba-f77a72fb8cc1.png">

Compare to `fetch()`, we can see that `console.log()` does not return `Promise`. 

There are three State of Promise.

<ol>
    <li> Pending</li>
    <li> Fulfilled</li>
    <li> Rejected </li>
</ol>

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197415321-8fbe415f-469f-4cc8-85ab-5de6c4bcb305.png">

If you want to study more about Promise, search in Google.

# Destructing 
---

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197416519-a159c51f-616d-4e6e-a139-845f641f1ba3.png">

Not yet you might do not get why we need to use this. Just take a look and skip with keeping in mind that there is a thing like this.

# Spread
----

```JS
//ex1
const me = {
        name: "jake",
        age : 25,
        gender: "male"
    };

const healthMe = {
    ...me,
    insuranceState : false
};

console.log(healthMe);


//ex2
const animals = ["dog", "cat"];
const otherAnimals = [...animals, "rooster"];

console.log(otherAnimals);
```

CAUTION: obj and array can spread only to obj and array each.


# Rest 
----

Rest does opposite operation to spread.

```JS

// Rest
const me = {
        name: "jake",
        age : 25,
        gender: "male",
        insurance: false
}

const {insurance, ...another} = me;
console.log(another);

const numbers = [0,1,2,3,4,5,6];

const [zero, ...rest] = numbers;

console.log(rest);

```

