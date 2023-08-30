window.promises = [];
let x = promises.any([
		new promise(resolve,reject) => {
			setTimeout(() =>{
				resolve("one resolved");
			},1000)
		}
		new promise(resolve,reject) => {
			setTimeout(() =>{
				resolve("one resolved");
			},2000)
		}
		new promise(resolve,reject) => {
			setTimeout(() =>{
				resolve("one resolved");
			},2000)
		}
		new promise(resolve,reject) => {
			setTimeout(() =>{
				resolve("one resolved");
			},4000)
		}
		new promise(resolve,reject) => {
			setTimeout(() =>{
				resolve("one resolved");
			},3000)
		}
	])
const myDiv = document.getElementById("output");
x.then((data){
myDiv.innerHTML = data;
})
// Do not change the code above this
// add your promises to the array `promises`
