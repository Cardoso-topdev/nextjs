"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{26079:function(t,e,i){i.r(e),i.d(e,{s:function(){return h}});var n=i(97480),o=Object.defineProperty,s=(t,e)=>o(t,"name",{value:e,configurable:!0});function r(t,e){return e.forEach(function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach(function(i){if("default"!==i&&!(i in t)){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}s(r,"_mergeNamespaces");var c,l={exports:{}};(c=function(t){var e="CodeMirror-hint-active";function i(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}}t.showHint=function(t,e,i){if(!e)return t.showHint(i);i&&i.async&&(e.async=!0);var n={hint:e};if(i)for(var o in i)n[o]=i[o];return t.showHint(n)},t.defineExtension("showHint",function(e){e=r(this,this.getCursor("start"),e);var n=this.listSelections();if(!(n.length>1)){if(this.somethingSelected()){if(!e.hint.supportsSelection)return;for(var o=0;o<n.length;o++)if(n[o].head.line!=n[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var s=this.state.completionActive=new i(this,e);s.options.hint&&(t.signal(this,"startCompletion",this),s.update(!0))}}),t.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()}),s(i,"Completion");var n=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},o=window.cancelAnimationFrame||clearTimeout;function r(t,e,i){var n=t.options.hintOptions,o={};for(var s in d)o[s]=d[s];if(n)for(var s in n)void 0!==n[s]&&(o[s]=n[s]);if(i)for(var s in i)void 0!==i[s]&&(o[s]=i[s]);return o.hint.resolve&&(o.hint=o.hint.resolve(t,e)),o}function c(t){return"string"==typeof t?t:t.text}function l(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(-e.menuSize()+1,!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close};/Mac/.test(navigator.platform)&&(i["Ctrl-P"]=function(){e.moveFocus(-1)},i["Ctrl-N"]=function(){e.moveFocus(1)});var n=t.options.customKeys,o=n?{}:i;function r(t,n){var r;r="string"!=typeof n?s(function(t){return n(t,e)},"bound"):i.hasOwnProperty(n)?i[n]:n,o[t]=r}if(s(r,"addBinding"),n)for(var c in n)n.hasOwnProperty(c)&&r(c,n[c]);var l=t.options.extraKeys;if(l)for(var c in l)l.hasOwnProperty(c)&&r(c,l[c]);return o}function h(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function a(i,n){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=i,this.data=n,this.picked=!1;var o,s,r=this,a=i.cm,u=a.getInputField().ownerDocument,f=u.defaultView||u.parentWindow,p=this.hints=u.createElement("ul");p.setAttribute("role","listbox"),p.setAttribute("aria-expanded","true"),p.id=this.id;var d=i.cm.options.theme;p.className="CodeMirror-hints "+d,this.selectedHint=n.selectedHint||0;for(var m=n.list,g=0;g<m.length;++g){var v=p.appendChild(u.createElement("li")),y=m[g],b="CodeMirror-hint"+(g!=this.selectedHint?"":" "+e);null!=y.className&&(b=y.className+" "+b),v.className=b,g==this.selectedHint&&v.setAttribute("aria-selected","true"),v.id=this.id+"-"+g,v.setAttribute("role","option"),y.render?y.render(v,n,y):v.appendChild(u.createTextNode(y.displayText||c(y))),v.hintId=g}var w=i.options.container||u.body,H=a.cursorCoords(i.options.alignWithWord?n.from:null),A=H.left,C=H.bottom,k=!0,x=0,O=0;if(w!==u.body){var S=-1!==["absolute","relative","fixed"].indexOf(f.getComputedStyle(w).position)?w:w.offsetParent,T=S.getBoundingClientRect(),F=u.body.getBoundingClientRect();x=T.left-F.left-S.scrollLeft,O=T.top-F.top-S.scrollTop}p.style.left=A-x+"px",p.style.top=C-O+"px";var M=f.innerWidth||Math.max(u.body.offsetWidth,u.documentElement.offsetWidth),N=f.innerHeight||Math.max(u.body.offsetHeight,u.documentElement.offsetHeight);w.appendChild(p),a.getInputField().setAttribute("aria-autocomplete","list"),a.getInputField().setAttribute("aria-owns",this.id),a.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var E=i.options.moveOnOverlap?p.getBoundingClientRect():new DOMRect,P=!!i.options.paddingForScrollbar&&p.scrollHeight>p.clientHeight+1;if(setTimeout(function(){o=a.getScrollInfo()}),E.bottom-N>0){var I=E.bottom-E.top;if(H.top-(H.bottom-E.top)-I>0)p.style.top=(C=H.top-I-O)+"px",k=!1;else if(I>N){p.style.height=N-5+"px",p.style.top=(C=H.bottom-E.top-O)+"px";var W=a.getCursor();n.from.ch!=W.ch&&(H=a.cursorCoords(W),p.style.left=(A=H.left-x)+"px",E=p.getBoundingClientRect())}}var R=E.right-M;if(P&&(R+=a.display.nativeBarWidth),R>0&&(E.right-E.left>M&&(p.style.width=M-5+"px",R-=E.right-E.left-M),p.style.left=(A=H.left-R-x)+"px"),P)for(var B=p.firstChild;B;B=B.nextSibling)B.style.paddingRight=a.display.nativeBarWidth+"px";a.addKeyMap(this.keyMap=l(i,{moveFocus:function(t,e){r.changeActive(r.selectedHint+t,e)},setFocus:function(t){r.changeActive(t)},menuSize:function(){return r.screenAmount()},length:m.length,close:function(){i.close()},pick:function(){r.pick()},data:n})),i.options.closeOnUnfocus&&(a.on("blur",this.onBlur=function(){s=setTimeout(function(){i.close()},100)}),a.on("focus",this.onFocus=function(){clearTimeout(s)})),a.on("scroll",this.onScroll=function(){var t=a.getScrollInfo(),e=a.getWrapperElement().getBoundingClientRect();o||(o=a.getScrollInfo());var n=C+o.top-t.top,s=n-(f.pageYOffset||(u.documentElement||u.body).scrollTop);if(k||(s+=p.offsetHeight),s<=e.top||s>=e.bottom)return i.close();p.style.top=n+"px",p.style.left=A+o.left-t.left+"px"}),t.on(p,"dblclick",function(t){var e=h(p,t.target||t.srcElement);e&&null!=e.hintId&&(r.changeActive(e.hintId),r.pick())}),t.on(p,"click",function(t){var e=h(p,t.target||t.srcElement);e&&null!=e.hintId&&(r.changeActive(e.hintId),i.options.completeOnSingleClick&&r.pick())}),t.on(p,"mousedown",function(){setTimeout(function(){a.focus()},20)});var K=this.getSelectedHintRange();return(0!==K.from||0!==K.to)&&this.scrollToActive(),t.signal(n,"select",m[this.selectedHint],p.childNodes[this.selectedHint]),!0}function u(t,e){if(!t.somethingSelected())return e;for(var i=[],n=0;n<e.length;n++)e[n].supportsSelection&&i.push(e[n]);return i}function f(t,e,i,n){if(t.async)t(e,n,i);else{var o=t(e,i);o&&o.then?o.then(n):n(o)}}function p(e,i){var n,o=e.getHelpers(i,"hint");if(o.length){var r=s(function(t,e,i){var n=u(t,o);function r(o){if(o==n.length)return e(null);f(n[o],t,i,function(t){t&&t.list.length>0?e(t):r(o+1)})}s(r,"run"),r(0)},"resolved");return r.async=!0,r.supportsSelection=!0,r}return(n=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:n})}:t.hint.anyword?function(e,i){return t.hint.anyword(e,i)}:function(){}}i.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,i){var n=e.list[i],o=this;this.cm.operation(function(){n.hint?n.hint(o.cm,e,n):o.cm.replaceRange(c(n),n.from||e.from,n.to||e.to,"complete"),t.signal(e,"pick",n),o.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(o(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),i=this.cm.getLine(e.line);if(e.line!=this.startPos.line||i.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(i.charAt(e.ch-1)))this.close();else{var s=this;this.debounce=n(function(){s.update()}),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,i=++this.tick;f(this.options.hint,this.cm,this.options,function(n){e.tick==i&&e.finishUpdate(n,t)})}},finishUpdate:function(e,i){this.data&&t.signal(this.data,"update");var n=this.widget&&this.widget.picked||i&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=e,e&&e.list.length&&(n&&1==e.list.length?this.pick(e,0):(this.widget=new a(this,e),t.signal(e,"shown")))}},s(r,"parseOptions"),s(c,"getText"),s(l,"buildKeyMap"),s(h,"getHintElement"),s(a,"Widget"),a.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(i,n){if(i>=this.data.list.length?i=n?this.data.list.length-1:0:i<0&&(i=n?0:this.data.list.length-1),this.selectedHint!=i){var o=this.hints.childNodes[this.selectedHint];o&&(o.className=o.className.replace(" "+e,""),o.removeAttribute("aria-selected")),o=this.hints.childNodes[this.selectedHint=i],o.className+=" "+e,o.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",o.id),this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],o)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],i=this.hints.childNodes[t.to],n=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-n.offsetTop:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}},s(u,"applicableHelpers"),s(f,"fetchHints"),s(p,"resolveAutoHints"),t.registerHelper("hint","auto",{resolve:p}),t.registerHelper("hint","fromList",function(e,i){var n,o=e.getCursor(),s=e.getTokenAt(o),r=t.Pos(o.line,s.start);s.start<o.ch&&/\w/.test(s.string.charAt(o.ch-s.start-1))?n=s.string.substr(0,o.ch-s.start):(n="",r=o);for(var c=[],l=0;l<i.words.length;l++){var h=i.words[l];h.slice(0,n.length)==n&&c.push(h)}if(c.length)return{list:c,from:r,to:o}}),t.commands.autocomplete=t.showHint;var d={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};t.defineOption("hintOptions",null)})(n.a.exports);var h=r({__proto__:null,default:l.exports},[l.exports])}}]);