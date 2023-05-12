const dropdownContent = document.querySelector('.dropdown .dropdown-content')

const dropbtn = document.querySelector('.dropdown .dropbtn');

const dropAndDownMobile = ()=> {
  console.log(dropdownContent.style.height)
  
  
  if (dropdownContent.style.height > '0px') {
    dropdownContent.style.height = '0'
    dropdownContent.classList.remove('slide__down')
    
  } else {    
    dropdownContent.style.height = `${dropdownContent.childElementCount * 20}px`
    dropdownContent.classList.add('slide__down')
  }  
}

const dropAndDownDesktop = ()=> {
  if(window.innerWidth > 768){
    dropdownContent.classList.add('slide__down')
    dropdownContent.style.height = `${dropdownContent.childElementCount * 20}px`
  }
}

dropbtn.addEventListener('click', dropAndDownMobile);

dropbtn.addEventListener('mouseover', dropAndDownDesktop);




