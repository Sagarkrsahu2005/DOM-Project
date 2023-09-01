var istatus =  document.querySelector("h5")
                                                   
var addfriend = document.querySelector("#addFriend")

// var remove = document.querySelector("#remove")

var flag = 0

addfriend.addEventListener("click" , function(){

    if(flag == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addfriend.innerHTML = "Remove"
    addfriend.style.backgroundColor = "grey"

    flag = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addfriend.innerHTML = "Add Friend"
        addfriend.style.backgroundColor = "aqua"
        flag = 0
    }
})

// remove.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })
