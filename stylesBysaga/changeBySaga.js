const brightness = document.getElementById("birightness-Btn");
const icon = document.getElementById("bright-icon")
icon.addEventListener("click", ()=>{
    icon.src = "./imgWithSaga/brightness-low1.svg"
    document.body.style.backgroundColor = "black"
    document.body.style.textColor = "white";
    icon.addEventListener("click",()=>{
        icon.src = "./imgWithSaga/brightness-low.svg"
         document.body.style.backgroundColor = "white"
    document.body.style.textColor = "black";
    });

});