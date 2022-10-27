# What we will learn
---

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197021644-ae828f49-2880-43f0-92e4-c494412e7523.png">

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197021713-e6547761-c041-47db-82d6-1402c48469cf.png">

Simply DOM is a tree about 

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197022350-ca6b1b43-d93b-4835-9b9f-0a514e277309.png">


- Change the color of an element

```JS
document.getElementById("lion").style.color = "red";

```

- Get all element nodes by ID

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197023801-dd2f5e03-731e-4339-a5c6-d943b753cb34.png">

```JS
const animal = document.getElementsByTagName("li");
animal.lion.style.color = "pink"
```

- Get elements by class name

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197024352-c1af9d8a-b3ec-442d-aa01-1b056fcef9cf.png">

```JS
//getElementsByClassName
document.getElementsByClassName('animal')[1].style.color = "red";
```


## Using CSS Elements
---

We can also get elements using css id.

```JS

// querySelectorAll
document.querySelectorAll(".animal")[0].style.color = "red";
```

## Manipulating DOM
---

- inner HTML
- classList: [link](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

```JS
// innerHTML
//// change text
document.querySelectorAll(".animal")[0].innerHTML = "dog";

//// add a new <li>
const animals = document.getElementById("animals");
animals.innerHTML += "<li class = 'animal'> Cat </li>"
```


We can also add some css elements using JS(classList).

```JS
// add and remove class
document.querySelectorAll(".box")[0].classList.add("purple");
document.querySelectorAll(".box")[0].classList.remove("purple");
```

We can use add and delete using "toggle".
```JS
// add and remove class using "toggle"
// add yellow
document.querySelectorAll(".box")[0].classList.toggle("yellow");
// delete yellow as it was already
document.querySelectorAll(".box")[0].classList.toggle("yellow");
```

# Event type, EventHandler, addEventListener
---

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78291267/197072010-116bc220-7eeb-4bca-bfc4-e72cacc4504b.png">

```JS
// Add EventListener
document.getElementById('btn').addEventListener("click", function() {
    console.log("click!!")
});
```

- Example: plus and minus

```html
    <button id="minus"> - </button>
    <span id="num"> 0 </span>
    <button id="plus"> + </button>
```

```JS

// example
var num = 0;
document.getElementById('plus').addEventListener("click", function() {
    num++;
    document.getElementById("num").innerHTML = num;
});

document.getElementById('minus').addEventListener("click", function() {
    num--;
    document.getElementById("num").innerHTML = num;
});
```

- Example: press button and appear new bar

```html
    <div class="bar"> Press here! </div>
    <div class="newBar"> div has been appeared! </div>

```

```JS

// example2: press here
document.querySelector('.bar').addEventListener("click", function(){
    document.querySelector('.newBar').style.display = "block";
});
```

# Timer
---

If you want to set your code to be executed after some time, you can use timer method. 

- setTimeout()
- setInterval(): Use when you want to repeat some codes by some time. 

