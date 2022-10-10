(()=>{var e={598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){t=!1}function r(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,o,d;s(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(d=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===d&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n(598),window,document,document.documentElement,document.body,new class{constructor(e){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},e),this.modal=document.querySelector(".graph-modal"),this.speed=300,this.animation="fade",this._reOpen=!1,this._nextContainer=!1,this.modalContainer=!1,this.isOpen=!1,this.previousActiveElement=!1,this._focusElements=["a[href]","input","select","textarea","button","iframe","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._fixBlocks=document.querySelectorAll(".fix-block"),this.events()}events(){this.modal&&(document.addEventListener("click",function(e){const t=e.target.closest("[data-graph-path]");if(t){let e=t.dataset.graphPath,n=t.dataset.graphAnimation,o=t.dataset.graphSpeed;return this.animation=n||"fade",this.speed=o?parseInt(o):300,this._nextContainer=document.querySelector(`[data-graph-target="${e}"]`),void this.open()}e.target.closest(".js-modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.which&&this.isOpen&&this.focusCatch(e)}.bind(this)),document.addEventListener("click",function(e){e.target.classList.contains("graph-modal")&&e.target.classList.contains("is-open")&&this.close()}.bind(this)))}open(e){if(this.previousActiveElement=document.activeElement,this.isOpen)return this.reOpen=!0,void this.close();this.modalContainer=this._nextContainer,e&&(this.modalContainer=document.querySelector(`[data-graph-target="${e}"]`)),this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.disableScroll(),this.modalContainer.classList.add("graph-modal-open"),this.modalContainer.classList.add(this.animation),setTimeout((()=>{this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()}),this.speed)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("graph-modal-open"),this.enableScroll(),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.options.isClose(this),this.isOpen=!1,this.focusTrap(),this.reOpen&&(this.reOpen=!1,this.open()))}focusCatch(e){const t=this.modalContainer.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(t),o=n.indexOf(document.activeElement);e.shiftKey&&0===o&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||o!==n.length-1||(n[0].focus(),e.preventDefault())}focusTrap(){const e=this.modalContainer.querySelectorAll(this._focusElements);this.isOpen?e.length&&e[0].focus():this.previousActiveElement.focus()}disableScroll(){let e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}enableScroll(){let e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let e=window.innerWidth-document.body.offsetWidth+"px";this._fixBlocks.forEach((t=>{t.style.paddingRight=e})),document.body.style.paddingRight=e}unlockPadding(){this._fixBlocks.forEach((e=>{e.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}};const t=function(){var t,n=document.querySelectorAll(".dot"),o=document.querySelector(".confetti"),i=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var i=0,s=function(){};return{s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,r=!1;return{s:function(){o=o.call(t)},n:function(){var e=o.next();return d=e.done,e},e:function(e){r=!0,a=e},f:function(){try{d||null==o.return||o.return()}finally{if(r)throw a}}}}(n);try{var s=function(){var e=t.value;e.addEventListener("click",(function(){e.style.backgroundImage="url('img/content/users/"+function(e,t){e<0&&(e=0),t<=e&&(t=t+(e-t)+1);var n=e+Math.random()*(t+1-e);return Math.floor(n)}(1,7)+".jpg')",o.classList.remove("visually-hidden")}))};for(i.s();!(t=i.n()).done;)s()}catch(e){i.e(e)}finally{i.f()}};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".dot").length&&t()}))})()})();