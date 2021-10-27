let attribute = document.getElementById("attribute");
let show = document.getElementById("show");

const showHide = () =>{
    if(attribute.style.display == 'none'){
        attribute.style.display = "block";
    }else{
        attribute.style.display = "none";
    }
}
show.addEventListener("click",showHide);
