(()=>{function t(){"scrollBehavior"in document.documentElement.style?window.scrollTo({top:0,behavior:"smooth"}):function(t){let e=window.pageYOffset;t=parseInt(t);const o=setInterval((function(){e-=e<t+20?1:e<t+40?6:e<t+80?16:e<t+160?36:e<t+200?48:e<t+300?80:120,window.scroll(0,e),e<=t&&clearInterval(o)}),15)}(0);const t=document.getElementById("content"),e=document.getElementById("scroll-to-top");t&&(e.blur(),t.focus())}window.addEventListener("load",(function(){!function(){const e=document.getElementById("scroll-to-top");if(!e)return!1;e.addEventListener("click",(function(){t()})),e.addEventListener("keydown",(function(e){"Enter"===e.key&&t()})),window.addEventListener("scroll",(function(){const t=window.pageYOffset,o=scrollOffset.offset;t>o&&(e.style.visibility="visible",e.style.opacity="1"),t<=o&&(e.style.opacity="0",e.style.visibility="hidden");const n=document.querySelector(".sticky-add-to-cart-bottom");if(n){e.style.bottom="30px";let t=document.querySelector(".hfg_footer");t&&t.classList.contains("has-sticky-rows")||(t=document.querySelector(".elementor-location-footer .elementor-sticky"));const o=t?t.offsetHeight:0;n.classList.contains("sticky-add-to-cart--active")&&(e.style.bottom=n.offsetHeight+o+10+"px")}}))}()}))})();
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */