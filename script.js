// const ishak = n => {
//     let total = 0;
//     for (let i = 1; i <= n; i++){
//         total += i;
//     }
//     return total;
// }

// console.log(ishak(3))


// const amzil = n => {
//     return (n * (n + 1)) / 2;
// }

// console.log(amzil(100))








// let num = document.querySelectorAll(".nums .num");
// let section = document.querySelector(".one");
// let started = false;




// window.onscroll = function () {

//     if (window.scrollY <= section.offsetTop){
//         if (!started){
//             num.forEach((num) => startCount(num))
//         }
//         started = true;
      
//     } else {
//         if (started){
//             num.forEach((num) => stopCount(num))
//         };
//         started = false;
       
//     }

// };



// function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if (el.textContent == goal){
//             clearInterval(count)
//         };
//     }, 2000 / goal);
// };


// function stopCount(el) {
//     let count = setInterval(() => {
//         el.textContent--;
//         if (el.textContent == 0){
//             clearInterval(count)
//         };
//     }, 0.5 / el);
// };







// let sectionTow = document.querySelector(".tow")
// let skills = document.querySelectorAll(".div .skill")


// window.onscroll = function () {
//     if (window.scrollY >= sectionTow.offsetTop) {
//         skills.forEach((skill) => {
//             skill.style.width = skill.dataset.width
//         });
//     }

// };




// let theTime = new Date("May 30, 2022 15:05:28").getTime();

// let count = setInterval(() => {
//     let allTime = new Date().getTime();
//     let dateDif = theTime - allTime;

//     let day = Math.floor(dateDif / (1000 * 60 *60 * 24));
//     let hours = Math.floor(dateDif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let minute = Math.floor(dateDif % (1000 * 60 * 60 ) / (1000 * 60));
//     let secund = Math.floor(dateDif % (1000 * 60) / (1000));

//     document.querySelector(".day").innerHTML = day;
//     document.querySelector(".hours").innerHTML = hours;
//     document.querySelector(".minute").innerHTML = minute;
//     document.querySelector(".secund").innerHTML = secund;

//      if (day == 0 ) {
//        clearInterval(count)
//      }

    
// }, 1000);


// let count = document.querySelector(".count");
// let progress = document.querySelector(".progress");
// let input = document.querySelector("input")
// let maxLength = input.getAttribute("maxlength");

// count.innerHTML = maxLength;

// input.oninput = function() {
//   count.innerHTML = maxLength - this.value.length;
//   count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");

//   progress.style.width = `${(this.value.length * 100) / (maxLength) }%`

// }


// let hexArayy = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D","E","F"];
// let finelColor = [];


// for (let i = 0; i < 6; i++) {
// finelColor.push(hexArayy[Math.floor(Math.random() * hexArayy.length )])
  
// }

// let color = `#${finelColor.join("")}`


//     document.body.style.backgroundColor = color;



let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];

if (window.localStorage.getItem("tasks")){
  arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
}


add.addEventListener("click", function(){
  if (input.value != ""){
   addTasksToArray(input.value);
   input.value = "";
  }
});


function addTasksToArray(taskText){
  let task  = {
    id: Date.now(),
    title: taskText,
    completed: false,
  }
  arrayOfTasks.push(task)
  addElementToPageFrom(arrayOfTasks);
  addtlsf(arrayOfTasks);
};
getDate();





function addElementToPageFrom(arrayOfTasks) {

  tasksDiv.innerHTML = "";

arrayOfTasks.forEach( (task) => {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id)
    div.appendChild(document.createTextNode(task.title))
    tasksDiv.appendChild(div) 
})
}








function addtlsf(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}

function getDate() {
  let date = window.localStorage.getItem("tasks");
  if(date){
    let tasks = JSON.parse(date)
    addElementToPageFrom(tasks)
  }
}