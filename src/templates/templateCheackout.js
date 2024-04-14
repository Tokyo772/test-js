function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, qty }) => `<li>
      <img src="${img}" alt="${name}" />
      <h2>${name}</h2>
      <p>Quantity: ${qty}</p>
      <p>Total price: ${qty * price} грн</p>
    </li>`
    )
    .join('');
}

export { createMarkup };
