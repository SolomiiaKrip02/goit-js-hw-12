import{a as L,S as b,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const w="51941180-25d97e4841ef256248244227c",v="https://pixabay.com/api/";async function S(n,t){const o={key:w,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await L.get(v,{params:o})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more");let q=new b(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!0,animationSpeed:250});function B(n){const t=n.map(o=>`
        <div class="photo-card">
          <a href="${o.largeImageURL}">
            <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${o.likes}</p>
            <p><b>Views:</b> ${o.views}</p>
            <p><b>Comments:</b> ${o.comments}</p>
            <p><b>Downloads:</b> ${o.downloads}</p>
          </div>
        </div>
      `).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function $(){m.innerHTML=""}function M(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}function E(){h.classList.remove("hidden")}function y(){h.classList.add("hidden")}const f=document.querySelector(".search-form"),O=document.querySelector(".load-more");let d="",s=1,l=0;f.addEventListener("submit",async n=>{n.preventDefault(),d=f.elements.searchQuery.value.trim(),d&&(s=1,$(),y(),await g())});O.addEventListener("click",async()=>{s+=1,await g(!0)});async function g(n=!1){try{M();const t=await S(d,s);if(t.hits.length===0&&s===1){c.error({message:"No images found. Try again!"}),u();return}B(t.hits),l=t.totalHits,s===1&&l>15&&E(),s*15>=l&&(y(),c.info({message:"We're sorry, but you've reached the end of search results."})),n&&H()}catch{c.error({message:"Something went wrong!"})}finally{u()}}function H(){const{height:n}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
