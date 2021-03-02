
//Q3. Create 2 div elements one having id=”root” and another having class=”blue-white” and have some header elements inside. 
//create 2 <p> tags one having no attributes to it and another having class=”blue-white” and have some text inside. 

//i) change the text color of the element with  id=”root” to red on mouseover event. 

//ii) for the class=”blue-white” set the CSS properties as background color blue and text color white on mouseover event. 

//iii) for p tag which doesn't have any attributes, change the font size to 50px on mouseover event; 


function changeColor(){
	var text = document.getElementById("root")
	text.style.color = "red";
}


var back = document.getElementsByClassName("blue-white")
back[0].addEventListener('mouseover',function()

{

		back[0].style.color = "white";
		back[0].style.backgroundColor = "blue";
})

back[1].addEventListener('mouseover',function()
{

		back[1].style.color = "white";
		back[1].style.backgroundColor = "blue";
})


var para = document.getElementsByTagName("p")
para[1].addEventListener('mouseover',function(){



		para[1].style.fontSize = "50px";
	}

)
var para = document.getElementsByTagName("p")
para[1].addEventListener('mouseout',function(){



		para[1].style.fontSize = "";
	}

)