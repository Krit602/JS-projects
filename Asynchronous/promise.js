// const promise = new Promise((resolve, reject)=>{
//     const value = false;
//     if(value){
//         resolve("success");
//     }else{
//         reject("error");
//     }
// })

// promise.then((data)=>{
//     console.log(data)
// }).catch((value)=>{
//     console.log(value)
// })

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

changeColor(box1, "What's", "white", "black", 1000)
.then(()=> changeColor(box2, "up", "blue", "green", 1000))
.then(()=> changeColor(box3, "bro", "aqua", "blue",1000))
.then(()=> changeColor(box4, "!", "silver", "beige", 1000))
.catch((error)=>{
    alert(error)
})


