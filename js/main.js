// add class active to header whin scroll 
let header=document.querySelector("header")
window.onscroll=function(){
    if(this.scrollY >= 50){
            header.classList.add("active")
         
    }
    else{
        header.classList.remove("active")

    }
}
document.getElementById('Abo').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
document.getElementById('ser').addEventListener('click', function() {
    document.getElementById('Services').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
document.getElementById('proj').addEventListener('click', function() {
    document.getElementById('Projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
document.getElementById('Abo').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
});