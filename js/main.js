const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('.nav')

let showMenu = false;

hamburgerIcon.addEventListener('click', toggler);
closeIcon.addEventListener('click', toggler);


function toggler(){

  if(showMenu!= true){
  hamburgerIcon.classList.add('dissapear');
  closeIcon.classList.add('appear');
  menu.classList.add('appear');

  showMenu = true
  }

  else{
  hamburgerIcon.classList.remove('dissapear');
  closeIcon.classList.remove('appear');
  menu.classList.remove('appear');
  
    showMenu = false
  }
}