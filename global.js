const colors = ['red','blue','orange','yellow','green'];
const btn = document.querySelector('.button').addEventListener('click', changeColor = () => {
	let random = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[random];
});
