let inputBox=document.querySelector(".inputBox");
let addButton=document.querySelector(".addButton");
let listContainer=document.querySelector(".list-container");
let goal=document.querySelector(".goal");
let checkBox=document.querySelector(".checkBox");
let clear=document.querySelector(".clear");


addButton.addEventListener("click",()=>{
    let newBox=`<div class="box">
                    <input type="checkbox" class="checkBox">
                    <p class="goal">${inputBox.value}</p>
                    <button class="clear"><i class="fa-regular fa-rectangle-xmark"></i></button>
                </div>`;
                
    if(inputBox.value!=""){
        listContainer.innerHTML=listContainer.innerHTML+newBox;
        inputBox.value="";
        goal.classList.toggle("strike")
    }
    else{
        alert("please enter the Goal...");
    }
});





