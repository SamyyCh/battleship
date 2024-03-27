(()=>{var t={208:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var r=n(601),i=n.n(r),o=n(314),s=n.n(o)()(i());s.push([t.id,"/* style.css */\n\n* {\n    margin: 0;\n}\n\nul {\n    padding-left: 0;\n}\n\n.header {\n    height: 5vh;\n    padding: 1%;\n    background-color: rgb(14, 134, 212);\n    color: white;\n    text-align: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr 3fr;\n    height: 85vh;\n    background-color: rgb(0, 48, 96);\n}\n\n.boatListPlayer, .boatListComputer {\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 50%;\n    height: 50vh;\n    line-height: 4;\n    color: white;\n}\n\n.boatListPlayer {\n    margin-left: 20%;\n}\n\n.playerGrid, .computerGrid {\n    margin: 0 auto;\n    margin-top: 13%;\n    height: 70%;\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid rgb(255, 255, 255);\n}\n\n.grid-cell {\n    border: 1px solid rgb(255, 255, 255);\n    background-color: rgb(5, 92, 157);\n}\n\n.grid-cell:hover {\n    background-color: rgba(157, 168, 255, 0.7);\n}\n\n.grid-cell.ship {\n    background-color: purple;\n}\n\n.grid-cell.hit {\n    background-color: red;\n}\n\n.grid-cell.miss {\n    background-color: gray;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    width: 100%;\n    height: 5.8vh;\n    color: white;\n    font-size: 20px;\n    font-weight: bold;\n    background-color: rgb(14, 134, 212);\n}\n\n",""]);const a=s},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],a=0;a<t.length;a++){var c=t[a],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var m=i(p,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=n(o[s]);e[a].references--}for(var c=r(t,i),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},721:(t,e,n)=>{const r=n(145);t.exports=class{constructor(){this.height=10,this.width=this.height,this.size=this.height*this.width,this.map=[],this.ships=[],this.hitCord=[],this.missed=[];for(let t=0;t<this.height;t++)this.map.push(Array(this.width).fill(null))}placeShip(t,e,n){const i=new r(n);if(t+n>this.width||e+n>this.height)throw new Error("Out of bounds");for(let r=0;r<n;r++)this.map[t+r][e]=i;i.position={x:t,y:e},this.ships.push(i)}receiveAttack(t,e){this.missed=[];const n=this.map[t][e];return n?(n.hit(),this.hitCord.push([t,e]),n.isSunk()&&(n.sunk=!0)):this.missed.push([t,e]),this.missed}allSunk(){for(const t of this.map)for(const e of t)if(e instanceof r&&!e.sunk)return!1;return!0}}},570:(t,e,n)=>{n(721),t.exports=class{constructor(t){this.name=t,this.hitCord=[],this.missed=[]}attack(t,e,n){n.missed.some((n=>n[0]===t&&n[1]===e))||n.hitCord.some((n=>n[0]===t&&n[1]===e))||n.receiveAttack(t,e)}randomAttack(t){if(this.hitCord.length+this.missed.length!==t.size){let e,n;do{e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random())}while(this.hitCord.some((t=>t[0]===e&&t[1]===n))||t.missed.some((t=>t[0]===e&&t[1]===n)));this.attack(e,n,t)}}}},145:t=>{t.exports=class{constructor(t){this.position=[],this.length=t,this.hits=0,this.sunk=!1}hit(){this.sunk||(this.hits++,this.isSunk())}isSunk(){this.hits===this.length&&(this.sunk=!0)}}},618:(t,e,n)=>{const r=n(721),i=n(570);n(145),t.exports=class{constructor(){}runGame(){new i("Samy"),new i("Computer");const t=new r,e=new r;t.placeShip(1,1,5),t.placeShip(1,3,4),e.placeShip(3,3,4),e.placeShip(7,7,1);for(let n=0;n<10;n++)for(let r=0;r<10;r++){const i=document.getElementById(`cell-${n}-${r}`),o=t.map[n][r],s=document.getElementById(`computer-cell-${n}-${r}`),a=e.map[n][r];o&&i.classList.add("ship"),a&&s.classList.add("ship")}document.querySelectorAll(".grid-cell").forEach((t=>{t.addEventListener("click",(()=>{t.querySelector(".grid-cell.ship")?t.classList.add("hit"):t.classList.add("miss")}))}))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),i=n.n(r),o=n(659),s=n.n(o),a=n(56),c=n.n(a),d=n(540),l=n.n(d),u=n(113),h=n.n(u),p=n(208),m={};function f(t,e){const n=document.createElement("div");n.classList.add(e);const r=document.createElement("ul");return t.forEach((t=>{const e=document.createElement("li");e.textContent=t,r.appendChild(e)})),n.appendChild(r),n}m.styleTagTransform=h(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals;const g=n(618);document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("root"),e=function(){const t=document.createElement("div");t.classList.add("header");const e=document.createElement("h1");return e.textContent="Battleship",t.appendChild(e),t}();t.appendChild(e);const n=document.createElement("div");n.classList.add("board");const r=["Carrier","Battleship","Cruiser","Submarine","Destroyer"],i=f(r,"boatListPlayer");n.appendChild(i);const o=function(t){const e=document.createElement("div");e.classList.add("playerGrid");for(let t=0;t<10;t++)for(let n=0;n<10;n++){const r=document.createElement("div");r.classList.add("grid-cell"),r.id=`cell-${n}-${t}`,e.appendChild(r)}return e}();n.appendChild(o);const s=f(r,"boatListComputer");n.appendChild(s);const a=function(t){const e=document.createElement("div");e.classList.add("computerGrid");for(let t=0;t<10;t++)for(let n=0;n<10;n++){const r=document.createElement("div");r.classList.add("grid-cell"),r.id=`computer-cell-${n}-${t}`,e.appendChild(r)}return e}();n.appendChild(a),t.appendChild(n);const c=function(){const t=document.createElement("div");return t.classList.add("footer"),t.textContent="Copyright © 2024 Samy Chattali (gitlink)",t}();t.appendChild(c),(new g).runGame()}))})()})();