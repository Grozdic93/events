function greet(){
    console.log('greetings!');
}

 const btn = document.querySelector('.myBtn');
// btn.onclick = greetingsAgain;

function greetingsAgain(){
    console.log('greetings again!');
}

const myList = document.querySelector('.myList');
btn.addEventListener('click', ()=>{
    const myInputValue = document.querySelector('#myInput').value;
    if (myInputValue != '') {
        myList.innerHTML += `<li>${myInputValue}</li> <button class='deleteBtn'>delete</button>`
    }
    // else{
    //     alert('hey, your input is empty')
    // }
   
    
})
//if you want to delete, these are the steps for the challenge: 

//1 fetch all the elements

// 2 get the buttons

//3 determent which button is in which element, and when you press it, delete just specific list item


const myInput = document.querySelector('#myInput');
myInput.addEventListener('change', keyUpFunc);

function keyUpFunc(){
  console.log(myInput.value);
}


// NAVBAR

const navBtn = document.querySelector('.navBtn');
const navbar = document.querySelector('nav');

let isNavVisible = false;
navBtn.addEventListener('click', ()=>{
    if(isNavVisible === false){
        navbar.style.translate = '0px 0px'
        // isNavVisible = true;
    }else{
        navbar.style.translate = '-200px 0px';
        // isNavVisible = false;
    }
    isNavVisible = !isNavVisible;
})





// ========== NEW EVENT ==============
// fetch the element from HTML
const newBtn = document.getElementsByClassName('test')[0];

//create a function
let isThereAMargin = false;
function moveElementRight(){
    
    if (isThereAMargin){
        newBtn.style.marginLeft = '0px';
        isThereAMargin = false;
    }else{
        newBtn.style.marginLeft = '100px';
        isThereAMargin = true;
    }
    
}

// attach the event listener to it

 newBtn.addEventListener('click', moveElementRight)

//deleting sections

let sections = document.querySelectorAll('.section1');
let deleteBtns = document.querySelectorAll('.dbtn');
deleteBtns.forEach((element, index)=>{

    element.addEventListener('click', ()=>{
        sections[index].remove();
    })
})


// without btns 
// let sections = document.querySelectorAll('.section1');

// sections.forEach((element, index)=>{

//     element.addEventListener('click', ()=>{
//         element.remove();
//     })
// })
