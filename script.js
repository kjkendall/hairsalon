let menu = document.querySelector('#menubars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
          });
        };
    
      });

    }

document.querySelector('search-icon').onclick = () =>{
    document.querySelector('search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }


 
  const buttons = document.querySelectorAll('.project');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay__inner img');
  
  function open(e) {
    overlay.classList.add('open');
    const src= e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
  }
  
  function close() {
    overlay.classList.remove('open');
  }
  
  buttons.forEach(button => button.addEventListener('click', open));
  overlay.addEventListener('click', close);
  
  
  