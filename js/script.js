"use strict";function main(){let e=document.querySelector(".burger__body"),t=document.querySelector(".burger__bg"),c=document.querySelector(".burger");const o=()=>{t.classList.toggle("active"),c.classList.toggle("active"),e.classList.toggle("active")};c.addEventListener("click",(e=>{e.stopPropagation(),o()})),document.addEventListener("click",(e=>{let s=e.target,i=s==t||t.contains(s),n=s==c,r=t.classList.contains("active");i||n||!r||o()})),console.log("work")}main();