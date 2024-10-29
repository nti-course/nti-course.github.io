import"./bootstrap.esm-D6HI6lrV.js";import"./main-Ct63Q_0u.js";import{p as s,i as c,a as i,u as r,N as l,B as u,b as p}from"./basket-DtL46gUw.js";const m=new URL(document.URL),h=decodeURIComponent(m.searchParams.get("title")),o=s.find(t=>h===t.title);function v({title:t,imgSrc:a,alt:d,description:e,price:n}){return`<div class="product-layout container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="${a}" class="w-100 h-auto object-fit-lg-contain" alt="${d}">
      </div>
      <div class="col-md-6">
        <h1 class="display-4">${t}</h1>
        <p class="lead">${e}</p>
        <h3 class="text-primary">$${n}</h3>
        <a href="#" class="btn btn-primary btn-lg mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg> Add to Basket
        </a>
      </div>
    </div>
  </div>`}function b(){document.body.innerHTML=l();const t=document.createElement("div");t.innerHTML=u(),document.body.appendChild(t);const a=document.createElement("div");document.body.appendChild(a),a.innerHTML=v(o),document.querySelector(".product-layout .btn").addEventListener("click",e=>{e.preventDefault(),p(o.id)})}b();c();i();r();
