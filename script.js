let inputbox=document.getElementById("input-box");
let listcontainer=document.getElementById("list-container");


function addTask(){
    if(inputbox.value==="")
    {
        alert("write something to add");
    }else{
        let li=document.createElement("li");
         li.innerHTML = inputbox.value.toUpperCase();
        listcontainer.appendChild(li);
        
        let span=document.createElement("span");
        span.classList.add("remove-btn");
        span.innerHTML="\u00d7"
        li.appendChild(span); 
        savedata();
    }
    inputbox.value=""; 

}

listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        
        if (e.target.classList.contains("checked")) {
            e.target.innerHTML = "✔ " + e.target.innerHTML;
        } else {
            e.target.innerHTML = e.target.innerHTML.replace("✔ ", "");
        }

        
        savedata();

    }
    
   else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            savedata();
        }
});

function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}

function getdata()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
  
getdata();