"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[574],{1574:function(e,o,t){t.r(o);var n=t(97480);t(59361),t(67294),t(73935);var i=Object.defineProperty,r=(e,o)=>i(e,"name",{value:o,configurable:!0});function u(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}function m(e){let o=e.state.info.options;return(null==o?void 0:o.hoverTime)||500}function l(e,o){let t=e.state.info,i=o.target||o.srcElement;if(!(i instanceof HTMLElement)||"SPAN"!==i.nodeName||void 0!==t.hoverTimeout)return;let u=i.getBoundingClientRect(),l=r(function(){clearTimeout(t.hoverTimeout),t.hoverTimeout=setTimeout(f,p)},"onMouseMove"),s=r(function(){n.C.off(document,"mousemove",l),n.C.off(e.getWrapperElement(),"mouseout",s),clearTimeout(t.hoverTimeout),t.hoverTimeout=void 0},"onMouseOut"),f=r(function(){n.C.off(document,"mousemove",l),n.C.off(e.getWrapperElement(),"mouseout",s),t.hoverTimeout=void 0,a(e,u)},"onHover"),p=m(e);t.hoverTimeout=setTimeout(f,p),n.C.on(document,"mousemove",l),n.C.on(e.getWrapperElement(),"mouseout",s)}function a(e,o){let t=e.coordsChar({left:(o.left+o.right)/2,top:(o.top+o.bottom)/2}),n=e.state.info,i=n.options,r=i.render||e.getHelper(t,"info");if(r){let u=e.getTokenAt(t,!0);if(u){let m=r(u,i,e,t);m&&s(e,o,m)}}}function s(e,o,t){let i=document.createElement("div");i.className="CodeMirror-info",i.appendChild(t),document.body.appendChild(i);let u=i.getBoundingClientRect(),m=window.getComputedStyle(i),l=u.right-u.left+parseFloat(m.marginLeft)+parseFloat(m.marginRight),a=u.bottom-u.top+parseFloat(m.marginTop)+parseFloat(m.marginBottom),s=o.bottom;a>window.innerHeight-o.bottom-15&&o.top>window.innerHeight-o.bottom&&(s=o.top-a),s<0&&(s=o.bottom);let f=Math.max(0,window.innerWidth-l-15);f>o.left&&(f=o.left),i.style.opacity="1",i.style.top=s+"px",i.style.left=f+"px";let p,c=r(function(){clearTimeout(p)},"onMouseOverPopup"),d=r(function(){clearTimeout(p),p=setTimeout(v,200)},"onMouseOut"),v=r(function(){n.C.off(i,"mouseover",c),n.C.off(i,"mouseout",d),n.C.off(e.getWrapperElement(),"mouseout",d),i.style.opacity?(i.style.opacity="0",setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},600)):i.parentNode&&i.parentNode.removeChild(i)},"hidePopup");n.C.on(i,"mouseover",c),n.C.on(i,"mouseout",d),n.C.on(e.getWrapperElement(),"mouseout",d)}n.C.defineOption("info",!1,(e,o,t)=>{if(t&&t!==n.C.Init){let i=e.state.info.onMouseOver;n.C.off(e.getWrapperElement(),"mouseover",i),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(o){let r=e.state.info=u(o);r.onMouseOver=l.bind(null,e),n.C.on(e.getWrapperElement(),"mouseover",r.onMouseOver)}}),r(u,"createState"),r(m,"getHoverTime"),r(l,"onMouseOver"),r(a,"onMouseHover"),r(s,"showPopup")}}]);