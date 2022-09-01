const cartItem = document.querySelectorAll(".cart__item");
const cartBasket = document.querySelectorAll(".cart__basket");

for (let i = 0; i < cartItem.length; i++) {
  const thisCartItem = cartItem[i];
  const thisCartBasket = cartBasket[i];

  thisCartBasket.addEventListener("click", () => {
    thisCartItem.remove();
  });
}
