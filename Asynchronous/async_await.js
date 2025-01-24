const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

function changeColor(element,text, textColor, bgColor, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.backgroundColor = bgColor;
                element.style.color = textColor;
                resolve("Success")
            }else{
                reject("error")
            }
        },time)
    })
}

// async function changingColor(){
//     await changeColor(box1, "What's", "white", "black", 1000);
//     await changeColor(box2, "up", "blue", "green", 1000);
//     await changeColor(box3, "bro", "aqua", "blue",1000);
//     await changeColor(box4, "!", "silver", "beige", 1000);
// }

// changingColor()

(async function(){
    await changeColor(box1, "What's", "white", "black", 1000);
    await changeColor(box2, "up", "blue", "green", 1000);
    await changeColor(box3, "bro", "aqua", "blue",1000);
    await changeColor(box4, "!", "silver", "beige", 1000);
})();