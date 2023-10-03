const incrementE1 =  document.querySelector("#increment");
const decrementE1 =  document.querySelector("#decrement");
const resetE1 =  document.querySelector("#reset");
const displaycount =  document.querySelector("#displaycount");
let myNumber = 0;

incrementE1.addEventListener("click", () =>{
myNumber += 1;
displaycount.textContent = myNumber;
})

decrementE1.addEventListener("click", () =>{
    myNumber -= 1;
    displaycount.textContent = myNumber;
    })

    resetE1.addEventListener("click", () =>{
        myNumber = 0;
        displaycount.textContent = myNumber;
        })