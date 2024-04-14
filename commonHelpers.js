import{c as r}from"./assets/styles-4240beca.js";function a(t){return t.map(({img:l,name:n,price:i,qty:o})=>`<li>
      <img src="${l}" alt="${n}" />
      <h2>${n}</h2>
      <p>Quantity: ${o}</p>
      <p>Total price: ${o*i} грн</p>
    </li>`).join("")}const c=JSON.parse(localStorage.getItem(r.LS_PRODUCTS))??[],e={list:document.querySelector(".js-list"),bnt:document.querySelector(".js-clear")};c.length&&(e.bnt.hidden=!1);e.list.insertAdjacentHTML("beforeend",a(c));e.bnt.addEventListener("click",s);function s(t){localStorage.removeItem(r.LS_PRODUCTS),window.location.href="../index.html"}
//# sourceMappingURL=commonHelpers.js.map
