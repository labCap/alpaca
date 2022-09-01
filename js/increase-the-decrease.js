const numberBox = document.querySelectorAll(".number-box-action");
const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
let num = document.querySelectorAll(".num");
let numInner = document.querySelector(".num").innerHTML;

for (let i = 0; i < numberBox.length; i++) {
  const thisPlusBtn = plusBtn[i];
  const thisMinusBtn = minusBtn[i];
  const thisNum = num[i];
  const thisNumInner = numInner[i];
  let numValue = numInner;

  thisPlusBtn.addEventListener("click", () => {
    numInner.innerHTML = numValue++;

    thisNum.innerHTML = numValue;
  });

  thisMinusBtn.addEventListener("click", () => {
    numInner.innerHTML = numValue--;

    thisNum.innerHTML = numValue;
    console.log(numInner);
    if (numValue <= 1) {
      thisNum.innerHTML = "1";
      numValue = 1;
    }
  });
}
