
var r1= Math.floor( Math.random()*100+1);


var count=0;
var g;


document.getElementById("submit").addEventListener("click",function Getvalue(){
    g = parseInt(document.getElementById("number").value);
    process(g);
})

function process(na){

    document.getElementById("correct").style.display = "none";
    document.getElementById("l").style.display = "none";
    document.getElementById("h").style.display = "none";
    document.getElementById("Wrong").style.display = "none";
    
    if (isNaN(g)) {
        document.getElementById("Wrong").style.display = "block"; // Show invalid input message
    }
else if(r1===g){

    document.getElementById("correct").style.display="block";
  
}

else if(r1>g){
    document.getElementById("l").style.display="block";
  }

else if(r1<g){
    document.getElementById("h").style.display="block";
  }
  else{
    document.getElementById("Wrong").style.display="block";
  }
  
}