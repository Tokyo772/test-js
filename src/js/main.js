import instruments from '../products.json';
import common from '../common.json';
import { createMarkup } from '../templates/templatesPLP';

const products = JSON.parse(localStorage.getItem(common.LS_PRODUCTS)) ?? [];

const selectors = {
  list: document.querySelector('.js-list'),
};

selectors.list.insertAdjacentHTML('beforeend', createMarkup(instruments));
selectors.list.addEventListener('click', handlerAdd);

function handlerAdd(evt) {
  if (!evt.target.classList.contains('js-add')) {
    return;
  }

  const product = evt.target.closest('.js-product');
  const productId = Number(product.dataset.id);
  const currentProduct = instruments.find(({ id }) => id === productId);
  const idx = products.findIndex(({ id }) => id === productId);

  if (idx !== -1) {
    products[idx].qty += 1;
  } else {
    currentProduct.qty = 1;
    products.push(currentProduct);
  }

  localStorage.setItem(common.LS_PRODUCTS, JSON.stringify(products));
}
