// function getData(dataID, getnextData){
//     setTimeout(()=>{
//         console.log("Data", dataID);
//         if(getnextData){
//             getnextData();
//         }        
//     }, 2000)
// }

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4, ()=>{
//                 getData(5)
//             })
//         });
//     })
// })

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

function changeColor(element,text, textColor, bgColor, nextChangeColor){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.backgroundColor = bgColor;
            element.style.color = textColor;
        }
        if(nextChangeColor){
            nextChangeColor();
        }
    },1000)
}

changeColor(box1, "What's", "red", "green", ()=>{
    changeColor(box2, "up", "white", "black", ()=>{
        changeColor(box3, "bro", "aqua", "blue", ()=>{
            changeColor(box4, "!", "silver", "beige")
        })
    })
} );