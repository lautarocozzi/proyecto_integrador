import{c as L}from"./can-use-dom-7bdc58e0.js";import{a as Y,d as A}from"./lodash-es-6dc91650.js";var S=function(){return S=Object.assign||function(t){for(var i,e=1,r=arguments.length;e<r;e++){i=arguments[e];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},S.apply(this,arguments)},E=null,N=null;L&&window.addEventListener("resize",function(){N!==window.devicePixelRatio&&(N=window.devicePixelRatio,E=null)});function C(){if(E===null){if(typeof document>"u")return E=0,E;var s=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),s.appendChild(t);var i=t.getBoundingClientRect().right;s.removeChild(t),E=i}return E}function _(s){return!s||!s.ownerDocument||!s.ownerDocument.defaultView?window:s.ownerDocument.defaultView}function R(s){return!s||!s.ownerDocument?document:s.ownerDocument}var T=function(s){var t={},i=Array.prototype.reduce.call(s,function(e,r){var l=r.name.match(/data-simplebar-(.+)/);if(l){var o=l[1].replace(/\W+(.)/g,function(n,c){return c.toUpperCase()});switch(r.value){case"true":e[o]=!0;break;case"false":e[o]=!1;break;case void 0:e[o]=!0;break;default:e[o]=r.value}}return e},t);return i};function D(s,t){var i;s&&(i=s.classList).add.apply(i,t.split(" "))}function V(s,t){s&&t.split(" ").forEach(function(i){s.classList.remove(i)})}function H(s){return".".concat(s.split(" ").join("."))}var q=Object.freeze({__proto__:null,getElementWindow:_,getElementDocument:R,getOptions:T,addClasses:D,removeClasses:V,classNamesToQuery:H}),p=_,z=R,F=T,g=D,m=V,u=H,$=function(){function s(t,i){i===void 0&&(i={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var r=p(e.el);e.scrollXTicking||(r.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(r.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,g(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){m(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(g(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){m(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(r){e.mouseX=r.clientX,e.mouseY=r.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(r){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var l,o;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(l=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(o=e.isWithinBounds(e.axis.y.track.rect)),(l||o)&&(r.stopPropagation(),r.type==="pointerdown"&&r.pointerType!=="touch"&&(l&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(r,"x"):e.onTrackClick(r,"x")),o&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(r,"y"):e.onTrackClick(r,"y"))))}},this.drag=function(r){var l,o,n,c,a,d,h,v,f,w,b;if(!(!e.draggedAxis||!e.contentWrapperEl)){var y,x=e.axis[e.draggedAxis].track,O=(o=(l=x.rect)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].sizeAttr])!==null&&o!==void 0?o:0,M=e.axis[e.draggedAxis].scrollbar,B=(c=(n=e.contentWrapperEl)===null||n===void 0?void 0:n[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&c!==void 0?c:0,P=parseInt((d=(a=e.elStyles)===null||a===void 0?void 0:a[e.axis[e.draggedAxis].sizeAttr])!==null&&d!==void 0?d:"0px",10);r.preventDefault(),r.stopPropagation(),e.draggedAxis==="y"?y=r.pageY:y=r.pageX;var W=y-((v=(h=x.rect)===null||h===void 0?void 0:h[e.axis[e.draggedAxis].offsetAttr])!==null&&v!==void 0?v:0)-e.axis[e.draggedAxis].dragOffset;W=e.draggedAxis==="x"&&e.isRtl?((w=(f=x.rect)===null||f===void 0?void 0:f[e.axis[e.draggedAxis].sizeAttr])!==null&&w!==void 0?w:0)-M.size-W:W;var X=W/(O-M.size),k=X*(B-P);e.draggedAxis==="x"&&e.isRtl&&(k=!((b=s.getRtlHelpers())===null||b===void 0)&&b.isScrollingToNegative?-k:k),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=k}},this.onEndDrag=function(r){var l=z(e.el),o=p(e.el);r.preventDefault(),r.stopPropagation(),m(e.el,e.classNames.dragging),l.removeEventListener("mousemove",e.drag,!0),l.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=o.setTimeout(function(){l.removeEventListener("click",e.preventClick,!0),l.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(r){r.preventDefault(),r.stopPropagation()},this.el=t,this.options=S(S({},s.defaultOptions),i),this.classNames=S(S({},s.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=Y(this._onMouseMove,64),this.onWindowResize=A(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=A(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=A(this._onMouseEntered,this.stopScrollDelay),this.init()}return s.getRtlHelpers=function(){if(s.rtlHelpers)return s.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=t.firstElementChild,e=i==null?void 0:i.firstElementChild;if(!e)return null;document.body.appendChild(i),i.scrollLeft=0;var r=s.getOffset(i),l=s.getOffset(e);i.scrollLeft=-999;var o=s.getOffset(e);return document.body.removeChild(i),s.rtlHelpers={isScrollOriginAtZero:r.left!==l.left,isScrollingToNegative:l.left!==o.left},s.rtlHelpers},s.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:C()}catch{return C()}},s.getOffset=function(t){var i=t.getBoundingClientRect(),e=z(t),r=p(t);return{top:i.top+(r.pageYOffset||e.documentElement.scrollTop),left:i.left+(r.pageXOffset||e.documentElement.scrollLeft)}},s.prototype.init=function(){L&&(this.initDOM(),this.rtlHelpers=s.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},s.prototype.initDOM=function(){var t,i;this.wrapperEl=this.el.querySelector(u(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(u(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(u(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(u(this.classNames.offset)),this.maskEl=this.el.querySelector(u(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,u(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(u(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(u(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(u(this.classNames.track)).concat(u(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(u(this.classNames.track)).concat(u(this.classNames.vertical))),this.axis.x.scrollbar.el=((t=this.axis.x.track.el)===null||t===void 0?void 0:t.querySelector(u(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((i=this.axis.y.track.el)===null||i===void 0?void 0:i.querySelector(u(this.classNames.scrollbar)))||null,this.options.autoHide||(g(this.axis.x.scrollbar.el,this.classNames.visible),g(this.axis.y.scrollbar.el,this.classNames.visible))},s.prototype.initListeners=function(){var t=this,i,e=p(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(i=this.contentWrapperEl)===null||i===void 0||i.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var r=!1,l=e.ResizeObserver||ResizeObserver;this.resizeObserver=new l(function(){r&&e.requestAnimationFrame(function(){t.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){r=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){t.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},s.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var t=p(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var i=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,r=this.heightAutoObserverEl.offsetWidth<=1||i>0,l=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,n=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var c=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=r?"".concat(i||a,"px"):"auto",this.placeholderEl.style.height="".concat(c,"px");var d=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=i!==0&&a>i,this.axis.y.isOverflowing=c>d,this.axis.x.isOverflowing=o==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=n==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,v=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>l-v,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&c>d-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},s.prototype.getScrollbarSize=function(t){var i,e;if(t===void 0&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var r=this.contentEl[this.axis[t].scrollSizeAttr],l=(e=(i=this.axis[t].track.el)===null||i===void 0?void 0:i[this.axis[t].offsetSizeAttr])!==null&&e!==void 0?e:0,o=l/r,n;return n=Math.max(~~(o*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(n=Math.min(n,this.options.scrollbarMaxSize)),n},s.prototype.positionScrollbar=function(t){var i,e,r;t===void 0&&(t="y");var l=this.axis[t].scrollbar;if(!(!this.axis[t].isOverflowing||!this.contentWrapperEl||!l.el||!this.elStyles)){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],n=((i=this.axis[t].track.el)===null||i===void 0?void 0:i[this.axis[t].offsetSizeAttr])||0,c=parseInt(this.elStyles[this.axis[t].sizeAttr],10),a=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];a=t==="x"&&this.isRtl&&(!((e=s.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-a:a,t==="x"&&this.isRtl&&(a=!((r=s.getRtlHelpers())===null||r===void 0)&&r.isScrollingToNegative?a:-a);var d=a/(o-c),h=~~((n-l.size)*d);h=t==="x"&&this.isRtl?-h+(n-l.size):h,l.el.style.transform=t==="x"?"translate3d(".concat(h,"px, 0, 0)"):"translate3d(0, ".concat(h,"px, 0)")}},s.prototype.toggleTrackVisibility=function(t){t===void 0&&(t="y");var i=this.axis[t].track.el,e=this.axis[t].scrollbar.el;!i||!e||!this.contentWrapperEl||(this.axis[t].isOverflowing||this.axis[t].forceVisible?(i.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(i.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?e.style.display="block":e.style.display="none")},s.prototype.showScrollbar=function(t){t===void 0&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(g(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},s.prototype.hideScrollbar=function(t){t===void 0&&(t="y"),this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(m(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},s.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},s.prototype.onMouseMoveForAxis=function(t){t===void 0&&(t="y");var i=this.axis[t];!i.track.el||!i.scrollbar.el||(i.track.rect=i.track.el.getBoundingClientRect(),i.scrollbar.rect=i.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(i.track.rect)?(this.showScrollbar(t),g(i.track.el,this.classNames.hover),this.isWithinBounds(i.scrollbar.rect)?g(i.scrollbar.el,this.classNames.hover):m(i.scrollbar.el,this.classNames.hover)):(m(i.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},s.prototype.onMouseLeaveForAxis=function(t){t===void 0&&(t="y"),m(this.axis[t].track.el,this.classNames.hover),m(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},s.prototype.onDragStart=function(t,i){var e;i===void 0&&(i="y");var r=z(this.el),l=p(this.el),o=this.axis[i].scrollbar,n=i==="y"?t.pageY:t.pageX;this.axis[i].dragOffset=n-(((e=o.rect)===null||e===void 0?void 0:e[this.axis[i].offsetAttr])||0),this.draggedAxis=i,g(this.el,this.classNames.dragging),r.addEventListener("mousemove",this.drag,!0),r.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(r.addEventListener("click",this.preventClick,!0),r.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},s.prototype.onTrackClick=function(t,i){var e=this,r,l,o,n;i===void 0&&(i="y");var c=this.axis[i];if(!(!this.options.clickOnTrack||!c.scrollbar.el||!this.contentWrapperEl)){t.preventDefault();var a=p(this.el);this.axis[i].scrollbar.rect=c.scrollbar.el.getBoundingClientRect();var d=this.axis[i].scrollbar,h=(l=(r=d.rect)===null||r===void 0?void 0:r[this.axis[i].offsetAttr])!==null&&l!==void 0?l:0,v=parseInt((n=(o=this.elStyles)===null||o===void 0?void 0:o[this.axis[i].sizeAttr])!==null&&n!==void 0?n:"0px",10),f=this.contentWrapperEl[this.axis[i].scrollOffsetAttr],w=i==="y"?this.mouseY-h:this.mouseX-h,b=w<0?-1:1,y=b===-1?f-v:f+v,x=40,O=function(){e.contentWrapperEl&&(b===-1?f>y&&(f-=x,e.contentWrapperEl[e.axis[i].scrollOffsetAttr]=f,a.requestAnimationFrame(O)):f<y&&(f+=x,e.contentWrapperEl[e.axis[i].scrollOffsetAttr]=f,a.requestAnimationFrame(O)))};O()}},s.prototype.getContentElement=function(){return this.contentEl},s.prototype.getScrollElement=function(){return this.contentWrapperEl},s.prototype.removeListeners=function(){var t=p(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},s.prototype.unMount=function(){this.removeListeners()},s.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},s.prototype.findChild=function(t,i){var e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(r){return e.call(r,i)})[0]},s.rtlHelpers=null,s.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},s.getOptions=F,s.helpers=q,s}();export{$ as S};
