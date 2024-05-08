const nextIcon = document.querySelector(".next");

const previousIcon  =document.querySelector(".prev");

const imgs = document.querySelectorAll("img");

const imageContainer = document.querySelector(".imageContainer");

let currentImg = 1;

let timeOut;

previousIcon.addEventListener("click",() =>{
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
}); 



nextIcon.addEventListener("click",() =>{
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
}); 

function updateImg(){
    if(currentImg > imgs.length){
        currentImg=1;
    }
    else if(currentImg < 1){
        currentImg=imgs.length;
    }
    imageContainer.style.transform=`translateX(-${(currentImg - 1)*700}px)`;
    timeOut = setTimeout(() =>{
        currentImg++;
        updateImg();
    },4000);
};

updateImg();