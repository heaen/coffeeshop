let e,t,a;var r="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},c={},i={},n=r.parcelRequire9520;null==n&&((n=function(e){if(e in c)return c[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return c[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},r.parcelRequire9520=n),n.register,Object.assign(n.i??={},{bVb1E:"FEND_Coffee_Costa-Rica 2.aef094e2.png",fkwhX:"FEND-Coffee-beans-fresh.60b5c452.png","6J71v":"FEND-Coffee-roaster.16da8667.png","03qi1":"FEND-Coffee-machine-2.b97cf675.png",fXc68:"FEND-Coffee-machine.0f8cca2c.png","3CByO":"FEND-Coffee-latte-art-2.54048d46.png","9BIME":"Groupbag2.7c6fbb13.svg",apz81:"coffeebones.b5256a16.svg",cpMg2:"handcrafted.8372e8c6.svg","5iUo1":"Groupcup.2d952729.svg","3npVQ":"frenchpress.d041dd04.svg",cp14P:"Groupmachine1.a82e2c1e.svg",luWVf:"Groupbrew1.31f4b3a6.svg",jRHyb:"Groupmachine2.2cc261f7.svg",jKHuY:"Groupbrew2.cebdac4d.svg",iZzd1:"Groupbrew3.bb6a4e0d.svg"});let o="coffeeshop-cart-v1",s=[{id:"costa-rica",name:"Costa Rica",price:8.9,image:{},alt:"Kaffee aus Costa Rica",note:"Hell, fruchtig und klar im Abgang.",icons:[{src:{},alt:"Symbol Bohne"},{src:{},alt:"Symbol Röstaroma"},{src:{},alt:"Symbol Handarbeit"}]},{id:"ethiopia",name:"Äthiopien",price:9.4,image:{},alt:"Kaffee aus Äthiopien",note:"Florale Noten mit lebendiger Säure.",icons:[{src:{},alt:"Symbol Cup"},{src:{},alt:"Symbol French Press"},{src:{},alt:"Symbol Handarbeit"}]},{id:"brazil",name:"Brasilien",price:8.2,image:{},alt:"Kaffee aus Brasilien",note:"Nussig, weich und angenehm rund.",icons:[{src:{},alt:"Symbol Maschine"},{src:{},alt:"Symbol Röstaroma"},{src:{},alt:"Symbol Handarbeit"}]},{id:"house-roast",name:"Hausröstung",price:7.9,image:{},alt:"Hausröstung von Rustica",note:"Unser klassischer Alltagsfavorit.",icons:[{src:{},alt:"Symbol Brew"},{src:{},alt:"Symbol Maschine"},{src:{},alt:"Symbol Handarbeit"}]},{id:"espresso-blend",name:"Espresso Blend",price:9.8,image:{},alt:"Espresso Blend",note:"Kräftig, dicht und mit Crema-Fokus.",icons:[{src:{},alt:"Symbol Brew"},{src:{},alt:"Symbol French Press"},{src:{},alt:"Symbol Handarbeit"}]},{id:"filter-blend",name:"Filter Blend",price:8.6,image:{},alt:"Filter Blend",note:"Sauber, ruhig und sehr zugänglich.",icons:[{src:{},alt:"Symbol Brew"},{src:{},alt:"Symbol Cup"},{src:{},alt:"Symbol Handarbeit"}]}],l=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});function d(e){return s.find(t=>t.id===e)}function u(e){return l.format(e)}function m(e,t){e&&e.addEventListener("click",e=>{e.preventDefault(),t()})}e=document.querySelector(".menu-btn"),t=document.querySelector(".menu-close-button"),a=document.querySelector(".nav-mobile"),e&&t&&a&&(e.addEventListener("click",()=>{a.classList.add("open"),document.body.style.overflow="hidden",document.body.style.height="100vh",document.body.style.position="fixed"}),t.addEventListener("click",()=>{a.classList.remove("open"),document.body.style.overflow="auto",document.body.style.height="auto",document.body.style.position="static"})),/\/shop\.html$/i.test(window.location.pathname)&&function(){let e=document.querySelector("[data-shop-products]"),t=document.querySelector("[data-cart-drawer]"),a=document.querySelector("[data-cart-overlay]"),r=document.querySelector("[data-cart-items]"),c=document.querySelector("[data-cart-subtotal]"),i=Array.from(document.querySelectorAll("[data-cart-count]")),n=Array.from(document.querySelectorAll("[data-cart-close]")),l=Array.from(document.querySelectorAll("[data-cart-clear]")),p=Array.from(document.querySelectorAll(".header__cart")).map(e=>e.closest("a")).filter(Boolean),b=document.querySelector("[data-cart-toggle]");if(!e||!t||!a||!r||!c)return;p.forEach(e=>{if(e.classList.add("header__cart-link"),e.setAttribute("aria-label","Warenkorb öffnen"),!e.querySelector("[data-cart-count]")){let t=document.createElement("span");t.className="header__cart-badge is-empty",t.setAttribute("data-cart-count",""),t.textContent="0",e.appendChild(t)}}),e.innerHTML=s.map(e=>`
        <article class="shop-card reveal">
          <div class="shop-card__media background-color">
            <img
              src="${e.image}"
              alt="${e.alt}"
              class="image__explore shop-card__image u-margin-bottom-medium"
            />
          </div>
          <div class="shop-card__body">
            <p class="description__black shop-card__name">${e.name}</p>
            <p class="description__grey shop-card__price">${u(e.price)}</p>
            <p class="shop-card__note">${e.note}</p>
            <div class="shop-card__icons" aria-label="Zubereitungs- und Herkunftssymbole">
              ${e.icons.map(e=>`
                  <img
                    src="${e.src}"
                    alt="${e.alt}"
                    class="icon__explore icon_filter--black"
                    title="${e.alt}"
                  />
                `).join("")}
            </div>
            <button
              type="button"
							class="shop-card__button"
              data-add-to-cart="${e.id}"
            >
              In den Warenkorb
            </button>
          </div>
        </article>
      `).join("");let f=function(){try{let e=window.localStorage.getItem(o);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}(),g=()=>{t.classList.remove("is-open"),a.classList.remove("is-open"),t.setAttribute("aria-hidden","true")},_=()=>{t.classList.add("is-open"),a.classList.add("is-open"),t.setAttribute("aria-hidden","false")},y=()=>{var e;e=f,window.localStorage.setItem(o,JSON.stringify(e)),function(e,t){let{cartItems:a,cartSubtotal:r,cartCountBadges:c,cartDrawer:i}=t,n=e.reduce((e,t)=>e+t.quantity,0),o=e.reduce((e,t)=>{let a=d(t.id);return e+(a?a.price*t.quantity:0)},0);c.forEach(e=>{e.textContent=String(n),e.classList.toggle("is-empty",0===n)}),a&&(0===e.length?a.innerHTML=`
        <p class="cart-drawer__empty">Dein Warenkorb ist noch leer.</p>
      `:a.innerHTML=e.map(e=>{let t=d(e.id);return t?`
              <article class="cart-item">
                <img
                  src="${t.image}"
                  alt="${t.alt}"
                  class="cart-item__image"
                />
                <div class="cart-item__content">
                  <div class="cart-item__topline">
                    <h4 class="cart-item__name">${t.name}</h4>
                    <button
                      type="button"
                      class="cart-item__remove"
                      data-cart-remove="${t.id}"
                      aria-label="${t.name} aus dem Warenkorb entfernen"
                    >
                      Entfernen
                    </button>
                  </div>
                  <p class="cart-item__meta">${u(t.price)} pro St\xfcck</p>
                  <div class="cart-item__controls">
                    <button type="button" class="cart-item__step" data-cart-step="-1" data-cart-id="${t.id}">-</button>
                    <span class="cart-item__quantity">${e.quantity}</span>
                    <button type="button" class="cart-item__step" data-cart-step="1" data-cart-id="${t.id}">+</button>
                    <strong class="cart-item__sum">${u(t.price*e.quantity)}</strong>
                  </div>
                </div>
              </article>
            `:""}).join("")),r&&(r.textContent=u(o))}(f,{cartItems:r,cartSubtotal:c,cartCountBadges:i,cartDrawer:t})};e.addEventListener("click",e=>{let t,a=e.target.closest("[data-add-to-cart]");if(!a)return;let r=a.getAttribute("data-add-to-cart");r&&((t=f.find(e=>e.id===r))?t.quantity+=1:f=[...f,{id:r,quantity:1}],y(),_())}),r.addEventListener("click",e=>{let t=e.target.closest("[data-cart-step]"),a=e.target.closest("[data-cart-remove]");if(t){let e=t.getAttribute("data-cart-id"),a=Number(t.getAttribute("data-cart-step"));e&&Number.isFinite(a)&&(f=f.map(t=>t.id!==e?t:{...t,quantity:t.quantity+a}).filter(e=>e.quantity>0),y())}if(a){let e=a.getAttribute("data-cart-remove");e&&(f=f.filter(t=>t.id!==e),y())}}),m(b,_),p.forEach(e=>m(e,_)),n.forEach(e=>{e.addEventListener("click",g)}),l.forEach(e=>{e.addEventListener("click",()=>{f=[],y()})}),a.addEventListener("click",g),y()}();let p=Array.from(document.querySelectorAll(".header__text-box > *, main .heading-secondary, main .heading-tertiary, main .paragraph, main .description, main .btn, main .btn-secondary, main .btn-text, main .shop-card, main .row > [class^='col-'], main .section-about_image, main .gallery-image, main .image__explore, main .background-color, main iframe"));if(p.length>0){p.forEach((e,t)=>{e.classList.add("reveal"),e.style.setProperty("--reveal-delay",`${Math.min(30*t,180)}ms`)});let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),e.unobserve(t.target))})},{root:null,threshold:.1,rootMargin:"0px 0px -4% 0px"});p.forEach(t=>e.observe(t))}let b=document.querySelectorAll(".navD, .navM");if(/\/(shop|cafe|origin)\.html$/i.test(window.location.pathname)){let e=()=>{let e=window.scrollY>10;b.forEach(t=>{t.classList.toggle("scrolled",e)})};e(),window.addEventListener("scroll",e,{passive:!0})}
//# sourceMappingURL=coffeeshop.e4b3f000.js.map
