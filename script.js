//Selecting page elements

let display = document.querySelector(".calculatorDisplay")
let clearBtn = document.querySelector(".calculatorClearBtn")
let delBtn = document.querySelector(".calculatorDelBtn")
let eqBtn = document.querySelector(".calculatorEqBtn")
let allBtns = document.querySelectorAll("#calculatorBtn")

//Declaring functions

displayStuff = () =>{
	let number = event.srcElement.value
	display.append(number)
}

displayClear = () =>{
	if ( display.innerHTML != ""){
		display.innerHTML = ""
	}
}

displayDel = () =>{
	if ( display.innerHTML != ""){
		display.removeChild(display.lastChild)
	}
}

showAnswer = () =>{
	let total = display.innerHTML
	let totalValue = eval(total)
	display.innerHTML = String(totalValue)
}	

//Assigning the functions to their respective page element

for(let i = 0; i< allBtns.length; i++){ 
	allBtns[i].addEventListener("click", displayStuff)
}

clearBtn.addEventListener("click", displayClear)
delBtn.addEventListener("click", displayDel)
eqBtn.addEventListener("click", showAnswer)