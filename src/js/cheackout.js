import { createMarkup } from '../templates/templateCheackout';
import common from '../common.json';

const products = JSON.parse(localStorage.getItem(common.LS_PRODUCTS)) ?? [];
const selectors = {
  list: document.querySelector('.js-list'),
  bnt: document.querySelector('.js-clear'),
};

if (products.length) {
  selectors.bnt.hidden = false;
}

selectors.list.insertAdjacentHTML('beforeend', createMarkup(products));
selectors.bnt.addEventListener('click', handlerClear);
function handlerClear(evt) {
  localStorage.removeItem(common.LS_PRODUCTS);
  window.location.href = './index.html';
}
