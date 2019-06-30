const button = document.querySelectorAll('.offer-card__header');

for(let i = 0; i < button.length; i++){
	button[i].addEventListener('click', function(){
		
	this.classList.toggle("active");
    let content = this.nextElementSibling;
		 if(content.style.maxHeight){
   	 content.style.maxHeight = null;
   	 
   }
   else {
   	 content.style.maxHeight = content.scrollHeight + "px";
   	 
   }
	})
}