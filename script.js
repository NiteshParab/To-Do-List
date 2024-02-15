let inputBox=document.querySelector(".inputBox");
let addButton=document.querySelector(".addButton");
let listContainer=document.querySelector(".list-container");
let task=document.querySelector(".task");


addButton.addEventListener("click",(e)=>{      
    if(inputBox.value!=""){
        let li=document.createElement("li");
        li.innerText=inputBox.value;
        task.append(li);
        inputBox.value="";
    }
    else{
        alert("please enter the Goal...");
    }
    e.stopPropagation();
});









