const btnSwitch =document.querySelector('#switch');

btnSwitch.addEventListener('click',()=>
{
    document.body.classList.toggle('dark');
btnSwitch.classList.toggle('active');

});









/*
var toogle=document.getElementById('dark-botom');
var body=document.querySelector('body');
var hero_color=document.querySelector('hero_color')
 

toogle.onclick = function(){
    toogle.classList.toggle('active');
    body.classList.toggle('active');
    hero_color.classList.toggle('active');

}
*/
/*
function load(){
    var darkmode =localStorage.getItem('darkmode');
    if(!darkmode){
            store('false');

    }else if(darkmode=='true'){
        body.classList.add('darkmode');
    }
}

function store (value){
    localStorage.setItem('darkmode',value);

}
*/
