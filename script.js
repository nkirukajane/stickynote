var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click", function(){
    createNote();
})

function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}

function createNote(){
   var noteText = document.getElementById("note-text").value;
   var node0 = document.createElement('div');
   var node1 = document.createElement('h1');

   node1.innerHTML = noteText;

   node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();


   node0.appendChild(node1);
   container2.insertAdjacentElement('beforeend',node0); //adds element to conatiner2

   //to make the node/div bigger when hover
   node0.addEventListener("mouseenter", function(){
    node0.style.transform = "scale(1.1)";
   })

   //to return the square to its normal size
   node0.addEventListener("mouseleave", function(){
    node0.style.transform = "scale(1)";
   })

   //to delete the square on double click
   node0.addEventListener("dblclick", function(){
    node0.remove();
   })

   document.getElementById("note-text").value = ''; //will make the inital input disappear
}

function margin(){
    var random_margin = ['-5px','1px','5px', '10px', '15px', '20px'];
    return random_margin[Math.floor(Math.random() * random_margin.length)];// use to generate a random number
}

function rotate(){
    var random_rotate = ['rotate(3deg)', "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return random_rotate = [Math.floor(Math.random() * random_rotate.length)] //rotate at random degree
}

function color(){
    var random_color = ['#c2ff3d', "#ff3de8", '#3dc2ff', "#04e022", "#bc83e6", "#ebb328"];

    if(i > random_color.length - 1){ //this will return the color to the beginning when it get to the last one
        i = 0;
    }

    return random_color[i++];
}