// Your code here
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4'

// console.log(dodger.style.left);
// console.log(dodger.style.bottom);
dodger.style.bottom = '0px';

// document.addEventListener('keydown', function(e){
//     console.log(e.key);
// });


// document.addEventListener('keydown', function(e){
//     if (e.key === "ArrowLeft") {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left - 1}px`
//     }
// });

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left -10}px`
    }
}

function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
    if (right > 0) {
        dodger.style.left = `${right + 10}px`
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})

