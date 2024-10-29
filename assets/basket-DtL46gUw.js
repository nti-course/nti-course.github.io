const c=[{id:0,title:"Xbox Core Wireless",price:1e3,imgSrc:"/images/xbox.jpg",alt:"",description:"Microsoft Xbox Wireless Controller for Xbox One, S/X and Other Platforms. Stay on target with the hybrid D-pad, textured grip on the triggers, bumpers, and back-case.. USB Type-C Port."},{id:1,title:"Sceptre Curved",price:400,imgSrc:"/images/sceptre.jpg",alt:"",description:"800R curve monitor the curved display delivers a revolutionary visual experience with a leading 1800R screen curvature as the images appear to wrap around you for an in depth, immersive experience "},{id:2,title:"Meta Quest 3 128GB",price:150,imgSrc:"/images/oculus.jpg",alt:"",description:"Dive into extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground, where virtual elements blend into your actual surroundings."},{id:3,title:"Redragon S101 Gaming Keyboard",price:90,imgSrc:"/images/keyboard.jpg",alt:"",description:"🌟PC GAMING KEYBOARD AND GAMING MOUSE COMBO: Includes Redragon RGB Backlit Computer Gaming Keyboard and RGB Backlit Gaming Mouse. ALL-IN-ONE PC GAMER VALUE KIT, Fantastic for Gamers (New Improved Version) "},{id:4,title:"Dowinx Gaming Chair",price:200,imgSrc:"/images/chair.jpg",alt:"",description:"Sitting Comfort Like Sofa: This seat cushion of gaming chair is composed of pocket springs and shaped foam, allowing for the same elasticity and comfort as a sofa."}],n="basket",d=()=>`<nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/products.html">Logo</a>
        <div class="navbar-right">
          <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Open basket
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>`,u=()=>{const a=window.localStorage.getItem(n);!Array.isArray(window.basket)&&a==null?(console.log("here"),window.basket=[]):window.basket=JSON.parse(a)||[],document.querySelector(".offcanvas-body button").addEventListener("click",()=>{window.basket=[],window.localStorage.setItem(n,JSON.stringify(window.basket)),r()})},m=()=>{const a=document.querySelector("nav form input");document.querySelector("nav form button").addEventListener("click",e=>{e.preventDefault();const t=a.value;window.location.href=`/search.html?q=${encodeURIComponent(t)}`})},b=a=>{window.basket.push(a),r()},r=()=>{const a=document.querySelector(".offcanvas-body .col");a.innerHTML="",window.basket.forEach(e=>{const t=document.createElement("div");t.classList.add("row");const s=c.find(i=>i.id==e);t.innerHTML=l(s.title,s.imgSrc,s.alt),a.appendChild(t)}),document.querySelectorAll(".offcanvas-body .card .btn-close").forEach((e,t)=>{e.addEventListener("click",()=>{window.basket.splice(t,1),r()})}),window.localStorage.setItem(n,JSON.stringify(basket))};function l(a,o,e){return`<div class="card">
              <img
                src="${o}"
                class="card-img-top img-thumbnail object-fit-contain"
                alt="${e}"
              />
              <div class="card-body">
                <h5 class="card-title">${a}</h5>
              <button
              type="button"
              class="btn-close"
              aria-label="Close"
            ></button>
              </div>
            </div>`}const p=()=>`<div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Your basket
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <button type="button" class="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
              /></svg
            >Empty basket
          </button>
          <div class="col"></div>
        </div>
      </div>`;export{p as B,d as N,u as a,b,m as i,c as p,r as u};
