const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d;t.addEventListener("click",(function(){d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(()=>{t.hasAttribute("disabled")&&(clearInterval(d),t.removeAttribute("disabled"))}));
//# sourceMappingURL=01-color-switcher.0aa3bdeb.js.map