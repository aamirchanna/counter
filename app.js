let counterr = 0;
let count1 =   document.getElementById("count");
let reset2 = document.getElementById("reset");
function counter(){
 counterr+=1;
  count1.innerHTML = counterr;
}



function dec(){

    let decrease1 = document.getElementById("decrease");
counterr-=1
count1.innerHTML = counterr;
}

function reset(){
    count1.innerHTML = 0 
}