//add default local storage
document.body.classList.add(localStorage.getItem('pageColor')|| ('red'))

var el=document.querySelectorAll('.color_switcher li'); ///querySelectorAll(.class | element)
var classesList=[];//empty get it from the loop

//loop
for (var i=0; i< el.length; i++){
//get classesList
classesList.push(el[i].getAttribute('data-color')); //fill the array [classList]
el[i].addEventListener('click',function(){
    //remove old classes
    document.body.classList.remove(...classesList)
    //add current classes  li data-color
document.body.classList.add(this.getAttribute('data-color'))
//add Data to local storage
localStorage.setItem('pageColor',this.getAttribute('data-color'));

},false)
}
console.log(classesList);
localStorage.removeItem('pageColor')