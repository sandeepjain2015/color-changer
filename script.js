const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach((element)=>{
    element.addEventListener('click',(e)=>{
     body.style.backgroundColor = e.target.id
    })
})