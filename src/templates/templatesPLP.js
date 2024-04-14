function createMarkup(arr) {
  return arr
    .map(
      ({
        price,
        name,
        img,
        description,
        id,
      }) => `<li data-id="${id}" class="product-card js-product">
        <img src="${img}" alt="${name}" />
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${price} грн</p>
        <button class="js-add">Add to</button>
      </li>`
    )
    .join('');
}

export { createMarkup };
