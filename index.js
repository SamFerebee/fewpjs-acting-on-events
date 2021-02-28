// Your code here

let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    console.log(leftNumbers);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNums = dodger.style.left.replace("px", "")
    let right = parseInt(rightNums, 10);
    console.log(right);
    if (right < 360)
        dodger.style.left = `${right + 1}px`;
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});

