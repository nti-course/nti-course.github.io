import{i as n,a as i,u as l,N as p,B as u,b as h,p as m}from"./basket-DtL46gUw.js";function v({title:a,imgSrc:e,alt:r,description:s,price:t,id:c}){return`<a href="/product.html?title=${encodeURIComponent(a)}" class="text-reset text-decoration-none product-wrapper">
            <div class="col">
              <div class="card h-100" title="${a}" data-product-id="${c}"">
                  <img
                    src="${e}"
                    class="card-img-top img-thumbnail object-fit-contain"
                    alt="${r}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${a}</h5>
                    <p class="card-text">
                    ${s}
                    </p>

                    <div class="card-footer">
                      <span class="text-body-secondary">$${t}</span>
                      <a href="#" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  </svg></a>
                    </div>
                  </div>
                </div>
            </div>
          </a>`}function b(a){const e=document.createElement("div");e.innerHTML=p(),document.querySelector(".products-container").before(e);const r=document.createElement("div");r.innerHTML=u(),document.body.appendChild(r),f(a)}function f(a){const e=document.querySelector(".products-container .row");e.innerHTML="",a.forEach(()=>{const t=document.createElement("div");t.classList.add("col"),e.appendChild(t)}),document.querySelectorAll("#products .col").forEach((t,c)=>{const o=a[c];t.innerHTML=v(o)}),document.querySelectorAll(".card .card-footer a").forEach((t,c)=>{t.addEventListener("click",o=>{const d=t.closest(".card").getAttribute("data-product-id");o.preventDefault(),h(parseInt(d))})})}b(m);n();i();l();export{f as r};
