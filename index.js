let menulist = document.querySelector ("#menulist");

let menuicon = document.querySelector (".menu-icon");

function play() {if(menulist.style.display==='block'){
                 menulist.style.display='none'
                 }
                 else{
                    menulist.style.display='block'
                 }
}
menuicon.addEventListener("click", play)

