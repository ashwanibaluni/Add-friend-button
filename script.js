var istatus = document.querySelector("h5")

var btn = document.querySelector("#Add")
var check = 0

btn.addEventListener("click",function(){
   if(check== 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML ="remove Friend"
    check = 1
   }else{
    istatus.innerHTML = "stranger"
    istatus.style.color = "coral"
    btn.innerHTML ="Add Friend"
    check = 0
    
    }
 
})



