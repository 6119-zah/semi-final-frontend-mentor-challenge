const dropdownBtns = document.querySelectorAll('.dropdownBtn');
for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show');
    dropDown.classList.toggle('dropdown-1');
    dropDown.classList.toggle('dropdown-2');
    dropDown.classList.toggle('dropdown-mobile');
  });
}
/*const burgermenu = document.querySelector('.menu-icon');
for(const burgermenu of buttons){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show');
    dropDown.classList.toggle('dropdown-1');
    dropDown.classList.toggle('dropdown-2');
  });
}
function toggleClasses(element){
  classNames.forEach(className => {
    element.classList.toggle(className);
  });
}*/
/*function toggleMore(element, class0, class1){
   elment.classList.toggle('class0');
   element.classList.toggle('class1');
}

for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
     toggleMore(dropdown-icon, dropdown-toggle)
  });
}*/