const e="https://api.thecatapi.com/v1",t="live_C9iEtPg54awJpTo4QX7RoGFsgMBvEc90dWA73rvw3AuZJatT06iGrkqCDbqdNZmr";const n=document.querySelector(".breed-select"),r=document.querySelector(".cat-info"),s=document.querySelector(".loader"),a=document.querySelector(".error");a.style.display="none";s.style.display="block",fetch(`${e}/breeds?api_key=${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e.forEach((e=>{n.insertAdjacentHTML("beforeend",`\n                <option value="${e.id}">${e.name}</option>\n            `)})))).catch((()=>{a.style.display="block"})).finally((()=>{s.style.display="none"})),n.addEventListener("change",(()=>{var o;a.style.display="none",r.innerHTML="",s.style.display="block",(o=n.value,fetch(`${e}/images/search?api_key=${t}&breed_ids=${o}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{const t=e[0];r.insertAdjacentHTML("beforeend",`\n                <img src="${t.url}" alt="" class="cat-image">\n                <div class="wrap-text">\n                    <h2 class="cat-info">${t.breeds[0].name}</h2>\n                    <p>${t.breeds[0].description}</p>\n                    <span><b>Temperament:</b> ${t.breeds[0].temperament}</span>\n                </div>\n            `)})).catch((()=>{a.style.display="block"})).finally((()=>{s.style.display="none"}))}));
//# sourceMappingURL=index.a399f430.js.map