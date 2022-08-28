const arrowPrev = document.querySelector(".arrow__prev"),
  arrowNext = document.querySelector(".arrow__next");

const prev = {
  item: document.querySelector(".suggestions__item1"),
  itemImg: document.querySelector(".suggestions__img1").src,
  title: document.querySelector(".suggestions__title1").innerText,
  imgText: document.querySelector(".suggestions__img-text1").innerText,
  descr: document.querySelector(".suggestions__descr1").innerText,
  img: 1,
  num: 2,
};
const big = {
  item: document.querySelector(".suggestions__item3"),
  itemImg: document.querySelector(".suggestions__img3-src"),
  title: document.querySelector(".suggestions__title3").innerText,
  imgText: document.querySelector(".suggestions__img-text3").innerText,
  descr: document.querySelector(".suggestions__descr3").innerText,
  img: 3,
  num: 1,
};
const next = {
  item: document.querySelector(".suggestions__item2"),
  itemImg: document.querySelector(".suggestions__img2"),
  title: document.querySelector(".suggestions__title2").innerText,
  imgText: document.querySelector(".suggestions__img-text2").innerText,
  descr: document.querySelector(".suggestions__descr2").innerText,
  img: 2,
  num: 0,
};

const tegStyleArray = ["yellow-color-tag", "blue-color-tag", "red-color-tag"];

const tegTextArray = [
  "<div>-50%</div> up to",
  "<div>NEW</div> collection",
  "<div>NEW </div> print",
];

const titleArray = [prev.title, big.title, next.title],
  imgTextArray = [prev.imgText, big.imgText, next.imgText],
  descrArray = [prev.descr, big.descr, next.descr],
  imgArray = [prev.img, big.img, next.img];

function prevImgIf(imgOne, imgTwo, imgThree) {
  imgOne.img--;
  imgTwo.img--;
  imgThree.img--;

  if (imgOne.img == 0) {
    imgOne.img = 3;
  } else if (imgTwo.img == 0) {
    imgTwo.img = 3;
  } else if (imgThree.img == 0) {
    imgThree.img = 3;
  }
}

function prevNumIf(numOne, numTwo, numThree) {
  numOne.num--;
  numTwo.num--;
  numThree.num--;

  if (numOne.num == -1) {
    numOne.num = 2;
  } else if (numTwo.num == -1) {
    numTwo.num = 2;
  } else if (numThree.num == -1) {
    numThree.num = 2;
  }
}

function nextImgIf(imgOne, imgTwo, imgThree) {
  imgOne.img++;
  imgTwo.img++;
  imgThree.img++;

  if (imgOne.img > 3) {
    imgOne.img = 1;
  } else if (imgTwo.img > 3) {
    imgTwo.img = 1;
  } else if (imgThree.img > 3) {
    imgThree.img = 1;
  }
}

function nextNumIf(numOne, numTwo, numThree) {
  numOne.num++;
  numTwo.num++;
  numThree.num++;

  if (numOne.num > 2) {
    numOne.num = 0;
  } else if (numTwo.num > 2) {
    numTwo.num = 0;
  } else if (numThree.num > 2) {
    numThree.num = 0;
  }
}

function prevArr() {
  const randomTegStyle = Math.floor(Math.random() * 3);

  prev.item.innerHTML = `
          <div class="suggestions__img">
            <img class="color-white suggestions__img-prev" src="img/suggestions-img${
              imgArray[prev.num]
            }.png" alt="" />
            <div class="suggestions__img-text suggestions__img-text-prev">${
              imgTextArray[prev.num]
            }</div>
            <!-- suggestions__img-text -->
          </div>
          <!-- suggestions__img -->
          <a href="shop.html" class="suggestions__title suggestions__title-prev color-white">
            ${titleArray[prev.num]}
          </a>
          <!-- suggestions__title -->
          <p class="suggestions__descr suggestions__descr-prev">
            ${descrArray[prev.num]}
          </p>
          <!-- suggestions__descr -->
`;

  big.item.innerHTML = `
    <a href="shop.html" class="suggestions__title3 suggestions__title color-blue">
      ${titleArray[next.num]}
    </a>
    <!-- suggestions__title -->
    <div class="suggestions__img  suggestions__img-big">
      <img class=" suggestions__img3-src color-blue" src="img/suggestions-img-big${
        imgArray[next.num]
      }.png" alt="" />
      <div class="suggestions__img-title">Hand knitted<br />cashmere</div>
      <div class="suggestions__img-text3 suggestions__img-text">${
        imgTextArray[next.num]
      }</div>
    <div class="info-tag-circle ${tegStyleArray[randomTegStyle]}">
      ${tegTextArray[randomTegStyle]}
    </div>
  <!-- suggestions__img-text -->

    <div class="suggestions-management">
      <button class="arrow__prev arrow__btn arrow__btn-rotate arrow__btn-rotate" onclick="prevArr()">
        <i class="ico-arrow1"></i>
      </button>
      <a href="shop.html" class="view btn">shop now</a>
      <button class="arrow__next arrow__btn arrow__btn-rotate arrow__btn-rotate" onclick="nextArr()">
        <i class="ico-arrow2"></i>
      </button>
    </div>
  </div>
  <!-- suggestions__img -->
  <div class="suggestions__text-box-big suggestions__text-box">
    <p class="suggestions__descr suggestions__descr-big suggestions__descr-white">
    ${descrArray[next.num]}
    </p>
    <div class="info-tag ${
      tegStyleArray[randomTegStyle]
    }">Reserve for yourself</div>
  </div>
`;

  next.item.innerHTML = `
<div class="suggestions__img">
  <img class="color-pink suggestions__img-prev" src="img/suggestions-img${
    imgArray[big.num]
  }.png" alt="" />
  <div class="suggestions__img-text suggestions__img-text-prev">${
    imgTextArray[big.num]
  }</div>
  <!-- suggestions__img-text -->
</div>
<!-- suggestions__img -->
<a href="shop.html" class="suggestions__title suggestions__title-prev color-pink">
  ${titleArray[big.num]}
</a>
<!-- suggestions__title -->
<p class="suggestions__descr suggestions__descr-prev">
  ${descrArray[big.num]}
</p>
<!-- suggestions__descr -->
`;

  prevImgIf(prev, big, next);

  prevNumIf(prev, big, next);
}

function nextArr() {
  const randomTegStyle = Math.floor(Math.random() * 3);

  prev.item.innerHTML = `
        <div class="suggestions__img">
          <img class="color-white suggestions__img-prev" src="img/suggestions-img${
            imgArray[big.num]
          }.png" alt="" />
          <div class="suggestions__img-text suggestions__img-text-prev">${
            imgTextArray[big.num]
          }</div>
          <!-- suggestions__img-text -->
        </div>
        <!-- suggestions__img -->
        <a href="shop.html" class="suggestions__title suggestions__title-prev color-white">
          ${titleArray[big.num]}
        </a>
        <!-- suggestions__title -->
        <p class="suggestions__descr suggestions__descr-prev">
          ${descrArray[big.num]}
        </p>
        <!-- suggestions__descr -->
`;

  big.item.innerHTML = `
<a href="shop.html" class="suggestions__title3 suggestions__title color-blue">
  ${titleArray[prev.num]}
</a>
<!-- suggestions__title -->
<div class="suggestions__img  suggestions__img-big">
  <img class=" suggestions__img3-src color-blue" src="img/suggestions-img-big${
    imgArray[prev.num]
  }.png" alt="" />
  <div class="suggestions__img-title">Hand knitted<br />cashmere</div>
  <div class="suggestions__img-text3 suggestions__img-text">${
    imgTextArray[prev.num]
  }</div>
  
  <div class="info-tag-circle ${tegStyleArray[randomTegStyle]}">
  ${tegTextArray[randomTegStyle]}
  </div>
  <!-- suggestions__img-text -->

  <div class="suggestions-management">
    <button class="arrow__prev arrow__btn arrow__btn-rotate arrow__btn-rotate" onclick="prevArr()">
      <i class="ico-arrow1"></i>
    </button>
    <a href="shop.html" class="view btn">shop now</a>
    <button class="arrow__next arrow__btn arrow__btn-rotate arrow__btn-rotate" onclick="nextArr()">
      <i class="ico-arrow2"></i>
    </button>
  </div>

</div>
<!-- suggestions__img -->
<div class="suggestions__text-box-big suggestions__text-box">
  <p class="suggestions__descr suggestions__descr-big suggestions__descr-white">
  ${descrArray[prev.num]}
  </p>  
  <div class="info-tag ${
    tegStyleArray[randomTegStyle]
  }">Reserve for yourself</div>

</div>
`;

  next.item.innerHTML = `
<div class="suggestions__img">
  <img class="color-pink suggestions__img-prev" src="img/suggestions-img${
    imgArray[next.num]
  }.png" alt="" />
  <div class="suggestions__img-text suggestions__img-text-prev">${
    imgTextArray[next.num]
  }</div>
  <!-- suggestions__img-text -->
</div>
<!-- suggestions__img -->
<a href="shop.html" class="suggestions__title suggestions__title-prev color-pink">
  ${titleArray[next.num]}
</a>
<!-- suggestions__title -->
<p class="suggestions__descr suggestions__descr-prev">
  ${descrArray[next.num]}
</p>
<!-- suggestions__descr -->
`;

  nextImgIf(prev, big, next);

  nextNumIf(prev, big, next);
}
