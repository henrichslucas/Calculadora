const btns = [
	...document.querySelectorAll(".numBtn"),
	...document.querySelectorAll(".symBtn")
]
const display = document.querySelector(".display")
const delBtn = document.querySelector("#deleteBtn")
const clearBtn = document.querySelector("#clearBtn")
const eqBtn = document.querySelector("#eqBtn")


function displayValue(event){
	display.append(event.target.value) 
}
function deleteDisplay(){
	display.removeChild(display.lastChild)
}
function clearDisplay(){
	display.innerHTML = ""
}
function solve(){
	let ans = eval(display.innerHTML)
	clearDisplay()
	display.innerHTML = ans
}

btns.map(btn => btn.addEventListener("click", displayValue))
delBtn.addEventListener("click", deleteDisplay)
clearBtn.addEventListener("click", clearDisplay)
eqBtn.addEventListener("click", solve)