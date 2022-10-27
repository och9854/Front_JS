// getElementById
// document.getElementById("lion").style.color = "red";
// document.getElementById("tiger").style.color = "green";
// document.getElementById("bear").style.color = "blue";

// getElementsByTagName
// const animal = document.getElementsByTagName("li");
// animal.lion.style.color = "pink"

//getElementsByClassName
// document.getElementsByClassName('animal')[1].style.color = "red";

// // querySelectorAll
// document.querySelectorAll(".animal")[0].style.color = "red";

// // innerHTML
// document.querySelectorAll(".animal")[0].innerHTML = "dog";

// const animals = document.getElementById("animals");
// animals.innerHTML += "<li class = 'animal'> Cat </li>";

// // add and remove class using "add"
// document.querySelectorAll(".box")[0].classList.add("purple");
// document.querySelectorAll(".box")[0].classList.remove("purple");

// // add and remove class using "toggle"
// // add yellow
// document.querySelectorAll(".box")[0].classList.toggle("yellow");
// // delete yellow as it was already
// // document.querySelectorAll(".box")[0].classList.toggle("yellow");

// // Add EventListener
// document.getElementById('btn').addEventListener("click", function() {
//     console.log("click!!")
// });
// // //Remove EventListener
// // document.getElementById('btn').removeEventListener("click", function() {
// //     console.log("click!!")
// // });

// // example1
// var num = 0;
// document.getElementById('plus').addEventListener("click", function() {
//     num++;
//     document.getElementById("num").innerHTML = num;
// });

// document.getElementById('minus').addEventListener("click", function() {
//     num--;
//     document.getElementById("num").innerHTML = num;
// });


// // example2: press here
// document.querySelector('.bar').addEventListener("click", function(){
//     document.querySelector(".bar").innerHTML = "Pressed!!";

//     document.querySelector('.newBar').classList.toggle("show");

// });

document.querySelectorAll(".list")[0].addEventListener("click", function(e) {
    tabBtn(e.target.dataset.id);
});

function tabBtn(a) {
    document
    .querySelectorAll(".tab-button")
    [a].addEventListener("click", function() {
        // function which 
        for (let i = 0; i < document.querySelectorAll(".tab-button").length;i++) {
            document.querySelectorAll(".tab-button")[i].classList.remove("here");
            document.querySelectorAll(".tab-content")[i].classList.remove("show");
        }
   
        document.querySelectorAll(".tab-button")[a].classList.add("here");
        document.querySelectorAll(".tab-content")[a].classList.add("show");
    });
}

