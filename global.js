const colors = ['red','blue','orange','yellow','green'];
const btn = document.querySelector('.button').addEventListener('click', changeColor = () => {
	let random = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[random];
});


const hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D',
'E','F'];

const nextBtn = document.querySelector('.hex-button');
const place = document.querySelector('.color-hex');

nextBtn.addEventListener('click',changeHex);
function changeHex() { 
  let hex = '#';
  for(let i = 0; i < 6; i++){
  	 let randomHex = Math.floor(Math.random()*hexColors.length);
  	 hex += hexColors[randomHex];
  }
  document.body.style.backgroundColor = hex;
  place.innerHTML = hex;
}

const randomPlace = document.querySelector('.random-place');
const arrays = [1,2,3,4,5,6,7,8,9]
function random(){
	let b = 'number is: ';
  for(let i = 0; i < 5; i++ ){
        let a = Math.floor(Math.random()*arrays.length);
        b += arrays[a];
        console.log(b);
  }
  randomPlace.innerHTML = b;
}
random();