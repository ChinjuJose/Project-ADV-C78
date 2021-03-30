var images = ["Daddy.png","Mommy.jpeg","Bro.png", "Sis.png","GP.png"];
var text = ["Daddy", "Mommy", "Brother", "Sister", "Grandpa and Grandma"];
var i=0;
function next(){
    if(i>4){
        i=0;
    }
    document.getElementById("images").src=images[i];
    document.getElementById("name").innerHTML = text[i]; 
    i++;
      
}