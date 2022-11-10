"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{50045:function(e,t,n){n.d(t,{C:function(){return a},P:function(){return l},R:function(){return s}});var i=Object.defineProperty,r=(e,t)=>i(e,"name",{value:t,configurable:!0});class a{constructor(e){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>0===this._pos,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{let e=this._sourceText.charAt(this._pos);return this._pos++,e},this.eat=e=>{let t=this._testNextCharacter(e);if(t)return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=e=>{let t=this._testNextCharacter(e),n=!1;for(t&&(n=t,this._start=this._pos);t;)this._pos++,t=this._testNextCharacter(e),n=!0;return n},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=e=>{this._pos=e},this.match=(e,t=!0,n=!1)=>{let i=null,r=null;if("string"==typeof e){let a=RegExp(e,n?"i":"g");r=a.test(this._sourceText.substr(this._pos,e.length)),i=e}else e instanceof RegExp&&(i=null==(r=this._sourceText.slice(this._pos).match(e))?void 0:r[0]);return!!(null!=r&&("string"==typeof e||r instanceof Array&&this._sourceText.startsWith(r[0],this._pos)))&&(t&&(this._start=this._pos,i&&i.length&&(this._pos+=i.length)),r)},this.backUp=e=>{this._pos-=e},this.column=()=>this._pos,this.indentation=()=>{let e=this._sourceText.match(/\s*/),t=0;if(e&&0!==e.length){let n=e[0],i=0;for(;n.length>i;)9===n.charCodeAt(i)?t+=2:t++,i++}return t},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=e}_testNextCharacter(e){let t=this._sourceText.charAt(this._pos),n=!1;return"string"==typeof e?t===e:e instanceof RegExp?e.test(t):e(t)}}r(a,"CharacterStream");class s{constructor(e,t){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=t}setStart(e,t){this.start=new l(e,t)}setEnd(e,t){this.end=new l(e,t)}}r(s,"Range");class l{constructor(e,t){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=t}setLine(e){this.line=e}setCharacter(e){this.character=e}}r(l,"Position")},71441:function(e,t,n){n.r(t);var i=n(97480);n(26079);var r=n(93058),a=n(77304),s=n(60408),l=n(52433),o=n(3801),u=n(90316),c=n(97359),d=n(99878),p=n(34386),f=n(50045),E=n(92584);n(59361),n(67294),n(73935);var h=Object.defineProperty,T=(e,t)=>h(e,"name",{value:t,configurable:!0});function g(e){let t;return v(e,e=>{switch(e.kind){case"Query":case"ShortQuery":case"Mutation":case"Subscription":case"FragmentDefinition":t=e}}),t}function R(e,t,n){return n===E.S.name&&e.getQueryType()===t?E.S:n===E.T.name&&e.getQueryType()===t?E.T:n===E.a.name&&(0,r.Gv)(t)?E.a:"getFields"in t?t.getFields()[n]:null}function v(e,t){let n=[],i=e;for(;null==i?void 0:i.kind;)n.push(i),i=i.prevState;for(let r=n.length-1;r>=0;r--)t(n[r])}function m(e){let t=Object.keys(e),n=t.length,i=Array(n);for(let r=0;r<n;++r)i[r]=e[t[r]];return i}function _(e,t){return I(t,y(e.string))}function I(e,t){if(!t)return S(e,e=>!e.isDeprecated);let n=e.map(e=>({proximity:N(y(e.label),t),entry:e}));return S(S(n,e=>e.proximity<=2),e=>!e.entry.isDeprecated).sort((e,t)=>(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.label.length-t.entry.label.length).map(e=>e.entry)}function S(e,t){let n=e.filter(t);return 0===n.length?e:n}function y(e){return e.toLowerCase().replace(/\W/g,"")}function N(e,t){let n=D(t,e);return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}function D(e,t){let n,i,r=[],a=e.length,s=t.length;for(n=0;n<=a;n++)r[n]=[n];for(i=1;i<=s;i++)r[0][i]=i;for(n=1;n<=a;n++)for(i=1;i<=s;i++){let l=e[n-1]===t[i-1]?0:1;r[n][i]=Math.min(r[n-1][i]+1,r[n][i-1]+1,r[n-1][i-1]+l),n>1&&i>1&&e[n-1]===t[i-2]&&e[n-2]===t[i-1]&&(r[n][i]=Math.min(r[n][i],r[n-2][i-2]+l))}return r[a][s]}T(g,"getDefinitionState"),T(R,"getFieldDef"),T(v,"forEachState"),T(m,"objectValues"),T(_,"hintList"),T(I,"filterAndSortList"),T(S,"filterNonEmpty"),T(y,"normalizeText"),T(N,"getProximity"),T(D,"lexicalDistance");let F={command:"editor.action.triggerSuggest",title:"Suggestions"},C=T(e=>{let t=[];if(e)try{(0,a.Vn)((0,s.Qc)(e),{FragmentDefinition(e){t.push(e)}})}catch(n){return[]}return t},"collectFragmentDefs");function A(e,t,n,i,a,s){var l;let o=Object.assign(Object.assign({},s),{schema:e}),u=i||w(t,n),c="Invalid"===u.state.kind?u.state.prevState:u.state;if(!c)return[];let d=c.kind,f=c.step,E=J(e,u.state);if(d===p.R.DOCUMENT)return _(u,[{label:"query",kind:p.C.Function},{label:"mutation",kind:p.C.Function},{label:"subscription",kind:p.C.Function},{label:"fragment",kind:p.C.Function},{label:"{",kind:p.C.Constructor}]);if(d===p.R.IMPLEMENTS||d===p.R.NAMED_TYPE&&(null===(l=c.prevState)||void 0===l?void 0:l.kind)===p.R.IMPLEMENTS)return M(u,c,e,t,E);if(d===p.R.SELECTION_SET||d===p.R.FIELD||d===p.R.ALIASED_FIELD)return O(u,E,o);if(d===p.R.ARGUMENTS||d===p.R.ARGUMENT&&0===f){let h=E.argDefs;if(h)return _(u,h.map(e=>{var t;return{label:e.name,insertText:e.name+": ",command:F,detail:String(e.type),documentation:null!==(t=e.description)&&void 0!==t?t:void 0,kind:p.C.Variable,type:e.type}}))}if((d===p.R.OBJECT_VALUE||d===p.R.OBJECT_FIELD&&0===f)&&E.objectFieldDefs){let T=m(E.objectFieldDefs),g=d===p.R.OBJECT_VALUE?p.C.Value:p.C.Field;return _(u,T.map(e=>{var t;return{label:e.name,detail:String(e.type),documentation:null!==(t=e.description)&&void 0!==t?t:void 0,kind:g,type:e.type}}))}if(d===p.R.ENUM_VALUE||d===p.R.LIST_VALUE&&1===f||d===p.R.OBJECT_FIELD&&2===f||d===p.R.ARGUMENT&&2===f)return x(u,E,t,e);if(d===p.R.VARIABLE&&1===f){let R=(0,r.xC)(E.inputType),v=B(t,e,u);return _(u,v.filter(e=>e.detail===(null==R?void 0:R.name)))}return d===p.R.TYPE_CONDITION&&1===f||d===p.R.NAMED_TYPE&&null!=c.prevState&&c.prevState.kind===p.R.TYPE_CONDITION?L(u,E,e):d===p.R.FRAGMENT_SPREAD&&1===f?P(u,E,e,t,Array.isArray(a)?a:C(a)):d===p.R.VARIABLE_DEFINITION&&2===f||d===p.R.LIST_TYPE&&1===f||d===p.R.NAMED_TYPE&&c.prevState&&(c.prevState.kind===p.R.VARIABLE_DEFINITION||c.prevState.kind===p.R.LIST_TYPE||c.prevState.kind===p.R.NON_NULL_TYPE)?G(u,e):d===p.R.DIRECTIVE?j(u,c,e):[]}T(A,"getAutocompleteSuggestions");let k=` {
  $1
}`,b=T(e=>{let t=e.type;return(0,r.Gv)(t)||(0,r.HG)(t)&&(0,r.Gv)(t.ofType)||(0,r.zM)(t)&&((0,r.Gv)(t.ofType)||(0,r.HG)(t.ofType)&&(0,r.Gv)(t.ofType.ofType))?k:null},"getInsertText");function O(e,t,n){var i;if(t.parentType){let a=t.parentType,s=[];return"getFields"in a&&(s=m(a.getFields())),(0,r.Gv)(a)&&s.push(l.hU),a===(null===(i=null==n?void 0:n.schema)||void 0===i?void 0:i.getQueryType())&&s.push(l.Az,l.tF),_(e,s.map((e,t)=>{var n;let i={sortText:String(t)+e.name,label:e.name,detail:String(e.type),documentation:null!==(n=e.description)&&void 0!==n?n:void 0,deprecated:Boolean(e.deprecationReason),isDeprecated:Boolean(e.deprecationReason),deprecationReason:e.deprecationReason,kind:p.C.Field,type:e.type},r=b(e);return r&&(i.insertText=e.name+r,i.insertTextFormat=p.I.Snippet,i.command=F),i}))}return[]}function x(e,t,n,i){let a=(0,r.xC)(t.inputType),s=B(n,i,e).filter(e=>e.detail===a.name);if(a instanceof r.mR){let l=a.getValues();return _(e,l.map(e=>{var t;return{label:e.name,detail:String(a),documentation:null!==(t=e.description)&&void 0!==t?t:void 0,deprecated:Boolean(e.deprecationReason),isDeprecated:Boolean(e.deprecationReason),deprecationReason:e.deprecationReason,kind:p.C.EnumMember,type:a}}).concat(s))}return a===o.EZ?_(e,s.concat([{label:"true",detail:String(o.EZ),documentation:"Not false.",kind:p.C.Variable,type:o.EZ},{label:"false",detail:String(o.EZ),documentation:"Not true.",kind:p.C.Variable,type:o.EZ}])):s}function M(e,t,n,i,a){if(t.needsSeperator)return[];let s=n.getTypeMap(),l=m(s).filter(r.oT),o=l.map(({name:e})=>e),u=new Set;Y(i,(e,t)=>{var i,s,l,c,d;if(t.name&&(t.kind!==p.R.INTERFACE_DEF||o.includes(t.name)||u.add(t.name),t.kind===p.R.NAMED_TYPE&&(null===(i=t.prevState)||void 0===i?void 0:i.kind)===p.R.IMPLEMENTS)){if(a.interfaceDef){let f=null===(s=a.interfaceDef)||void 0===s?void 0:s.getInterfaces().find(({name:e})=>e===t.name);if(f)return;let E=n.getType(t.name),h=null===(l=a.interfaceDef)||void 0===l?void 0:l.toConfig();a.interfaceDef=new r.oW(Object.assign(Object.assign({},h),{interfaces:[...h.interfaces,E||new r.oW({name:t.name,fields:{}})]}))}else if(a.objectTypeDef){let T=null===(c=a.objectTypeDef)||void 0===c?void 0:c.getInterfaces().find(({name:e})=>e===t.name);if(T)return;let g=n.getType(t.name),R=null===(d=a.objectTypeDef)||void 0===d?void 0:d.toConfig();a.objectTypeDef=new r.h6(Object.assign(Object.assign({},R),{interfaces:[...R.interfaces,g||new r.oW({name:t.name,fields:{}})]}))}}});let c=a.interfaceDef||a.objectTypeDef,d=(null==c?void 0:c.getInterfaces())||[],f=d.map(({name:e})=>e),E=l.concat([...u].map(e=>({name:e}))).filter(({name:e})=>e!==(null==c?void 0:c.name)&&!f.includes(e));return _(e,E.map(e=>{let t={label:e.name,kind:p.C.Interface,type:e};return(null==e?void 0:e.description)&&(t.documentation=e.description),t}))}function L(e,t,n,i){let a;if(t.parentType){if((0,r.m0)(t.parentType)){let s=(0,r.fU)(t.parentType),l=n.getPossibleTypes(s),o=Object.create(null);l.forEach(e=>{e.getInterfaces().forEach(e=>{o[e.name]=e})}),a=l.concat(m(o))}else a=[t.parentType]}else{let u=n.getTypeMap();a=m(u).filter(r.Gv)}return _(e,a.map(e=>{let t=(0,r.xC)(e);return{label:String(e),documentation:(null==t?void 0:t.description)||"",kind:p.C.Field}}))}function P(e,t,n,i,a){if(!i)return[];let s=n.getTypeMap(),l=g(e.state),o=V(i);a&&a.length>0&&o.push(...a);let c=o.filter(e=>s[e.typeCondition.name.value]&&!(l&&l.kind===p.R.FRAGMENT_DEFINITION&&l.name===e.name.value)&&(0,r.Gv)(t.parentType)&&(0,r.Gv)(s[e.typeCondition.name.value])&&(0,u.zR)(n,t.parentType,s[e.typeCondition.name.value]));return _(e,c.map(e=>({label:e.name.value,detail:String(s[e.typeCondition.name.value]),documentation:`fragment ${e.name.value} on ${e.typeCondition.name.value}`,kind:p.C.Field,type:s[e.typeCondition.name.value]})))}T(O,"getSuggestionsForFieldNames"),T(x,"getSuggestionsForInputValues"),T(M,"getSuggestionsForImplements"),T(L,"getSuggestionsForFragmentTypeConditions"),T(P,"getSuggestionsForFragmentSpread");let U=T((e,t)=>{var n,i,r,a,s,l,o,u,c,d;return(null===(n=e.prevState)||void 0===n?void 0:n.kind)===t?e.prevState:(null===(r=null===(i=e.prevState)||void 0===i?void 0:i.prevState)||void 0===r?void 0:r.kind)===t?e.prevState.prevState:(null===(l=null===(s=null===(a=e.prevState)||void 0===a?void 0:a.prevState)||void 0===s?void 0:s.prevState)||void 0===l?void 0:l.kind)===t?e.prevState.prevState.prevState:(null===(d=null===(c=null===(u=null===(o=e.prevState)||void 0===o?void 0:o.prevState)||void 0===u?void 0:u.prevState)||void 0===c?void 0:c.prevState)||void 0===d?void 0:d.kind)===t?e.prevState.prevState.prevState.prevState:void 0},"getParentDefinition");function B(e,t,n){let i=null,r,a=Object.create({});return Y(e,(e,s)=>{if((null==s?void 0:s.kind)===p.R.VARIABLE&&s.name&&(i=s.name),(null==s?void 0:s.kind)===p.R.NAMED_TYPE&&i){let l=U(s,p.R.TYPE);(null==l?void 0:l.type)&&(r=t.getType(null==l?void 0:l.type))}i&&r&&!a[i]&&(a[i]={detail:r.toString(),insertText:"$"===n.string?i:"$"+i,label:i,type:r,kind:p.C.Variable},i=null,r=null)}),m(a)}function V(e){let t=[];return Y(e,(e,n)=>{n.kind===p.R.FRAGMENT_DEFINITION&&n.name&&n.type&&t.push({kind:p.R.FRAGMENT_DEFINITION,name:{kind:c.h.NAME,value:n.name},selectionSet:{kind:p.R.SELECTION_SET,selections:[]},typeCondition:{kind:p.R.NAMED_TYPE,name:{kind:c.h.NAME,value:n.type}}})}),t}function G(e,t,n){let i=t.getTypeMap(),a=m(i).filter(r.j$);return _(e,a.map(e=>({label:e.name,documentation:e.description,kind:p.C.Variable})))}function j(e,t,n,i){var r;if(null===(r=t.prevState)||void 0===r?void 0:r.kind){let a=n.getDirectives().filter(e=>Q(t.prevState,e));return _(e,a.map(e=>({label:e.name,documentation:e.description||"",kind:p.C.Function})))}return[]}function w(e,t){let n=null,i=null,r=null,a=Y(e,(e,a,s,l)=>{if(l===t.line&&e.getCurrentPosition()>=t.character)return n=s,i=Object.assign({},a),r=e.current(),"BREAK"});return{start:a.start,end:a.end,string:r||a.string,state:i||a.state,style:n||a.style}}function Y(e,t){let n=e.split("\n"),i=(0,p.o)(),r=i.startState(),a="",s=new f.C("");for(let l=0;l<n.length;l++){for(s=new f.C(n[l]);!s.eol();){a=i.token(s,r);let o=t(s,r,a,l);if("BREAK"===o)break}t(s,r,a,l),r.kind||(r=i.startState())}return{start:s.getStartOfToken(),end:s.getCurrentPosition(),string:s.current(),state:r,style:a}}function Q(e,t){var n;if(!e||!e.kind)return!1;let i=e.kind,r=t.locations;switch(i){case p.R.QUERY:return -1!==r.indexOf(d.B.QUERY);case p.R.MUTATION:return -1!==r.indexOf(d.B.MUTATION);case p.R.SUBSCRIPTION:return -1!==r.indexOf(d.B.SUBSCRIPTION);case p.R.FIELD:case p.R.ALIASED_FIELD:return -1!==r.indexOf(d.B.FIELD);case p.R.FRAGMENT_DEFINITION:return -1!==r.indexOf(d.B.FRAGMENT_DEFINITION);case p.R.FRAGMENT_SPREAD:return -1!==r.indexOf(d.B.FRAGMENT_SPREAD);case p.R.INLINE_FRAGMENT:return -1!==r.indexOf(d.B.INLINE_FRAGMENT);case p.R.SCHEMA_DEF:return -1!==r.indexOf(d.B.SCHEMA);case p.R.SCALAR_DEF:return -1!==r.indexOf(d.B.SCALAR);case p.R.OBJECT_TYPE_DEF:return -1!==r.indexOf(d.B.OBJECT);case p.R.FIELD_DEF:return -1!==r.indexOf(d.B.FIELD_DEFINITION);case p.R.INTERFACE_DEF:return -1!==r.indexOf(d.B.INTERFACE);case p.R.UNION_DEF:return -1!==r.indexOf(d.B.UNION);case p.R.ENUM_DEF:return -1!==r.indexOf(d.B.ENUM);case p.R.ENUM_VALUE:return -1!==r.indexOf(d.B.ENUM_VALUE);case p.R.INPUT_DEF:return -1!==r.indexOf(d.B.INPUT_OBJECT);case p.R.INPUT_VALUE_DEF:let a=null===(n=e.prevState)||void 0===n?void 0:n.kind;switch(a){case p.R.ARGUMENTS_DEF:return -1!==r.indexOf(d.B.ARGUMENT_DEFINITION);case p.R.INPUT_DEF:return -1!==r.indexOf(d.B.INPUT_FIELD_DEFINITION)}}return!1}function J(e,t){let n,i,a,s,l,o,u,c,d,f,E;return v(t,t=>{var h;switch(t.kind){case p.R.QUERY:case"ShortQuery":f=e.getQueryType();break;case p.R.MUTATION:f=e.getMutationType();break;case p.R.SUBSCRIPTION:f=e.getSubscriptionType();break;case p.R.INLINE_FRAGMENT:case p.R.FRAGMENT_DEFINITION:t.type&&(f=e.getType(t.type));break;case p.R.FIELD:case p.R.ALIASED_FIELD:f&&t.name?f=(l=d?R(e,d,t.name):null)?l.type:null:l=null;break;case p.R.SELECTION_SET:d=(0,r.xC)(f);break;case p.R.DIRECTIVE:a=t.name?e.getDirective(t.name):null;break;case p.R.INTERFACE_DEF:t.name&&(u=null,E=new r.oW({name:t.name,interfaces:[],fields:{}}));break;case p.R.OBJECT_TYPE_DEF:t.name&&(E=null,u=new r.h6({name:t.name,interfaces:[],fields:{}}));break;case p.R.ARGUMENTS:if(t.prevState)switch(t.prevState.kind){case p.R.FIELD:i=l&&l.args;break;case p.R.DIRECTIVE:i=a&&a.args;break;case p.R.ALIASED_FIELD:{let T=null===(h=t.prevState)||void 0===h?void 0:h.name;if(!T){i=null;break}let g=d?R(e,d,T):null;if(!g){i=null;break}i=g.args;break}default:i=null}else i=null;break;case p.R.ARGUMENT:if(i){for(let v=0;v<i.length;v++)if(i[v].name===t.name){n=i[v];break}}o=null==n?void 0:n.type;break;case p.R.ENUM_VALUE:let m=(0,r.xC)(o);s=m instanceof r.mR?m.getValues().find(e=>e.value===t.name):null;break;case p.R.LIST_VALUE:let _=(0,r.tf)(o);o=_ instanceof r.p2?_.ofType:null;break;case p.R.OBJECT_VALUE:let I=(0,r.xC)(o);c=I instanceof r.sR?I.getFields():null;break;case p.R.OBJECT_FIELD:let S=t.name&&c?c[t.name]:null;o=null==S?void 0:S.type;break;case p.R.NAMED_TYPE:t.name&&(f=e.getType(t.name))}}),{argDef:n,argDefs:i,directiveDef:a,enumValue:s,fieldDef:l,inputType:o,objectFieldDefs:c,parentType:d,type:f,interfaceDef:E,objectTypeDef:u}}T(B,"getVariableCompletions"),T(V,"getFragmentDefinitions"),T(G,"getSuggestionsForVariableDefinition"),T(j,"getSuggestionsForDirective"),T(w,"getTokenAtPosition"),T(Y,"runOnlineParser"),T(Q,"canUseDirective"),T(J,"getTypeInfo"),i.C.registerHelper("hint","graphql",(e,t)=>{let n=t.schema;if(!n)return;let r=e.getCursor(),a=e.getTokenAt(r),s=null!==a.type&&/"|\w/.test(a.string[0])?a.start:a.end,l=new f.P(r.line,s),o=A(n,e.getValue(),l,a,t.externalFragments),u={list:o.map(e=>({text:e.label,type:e.type,description:e.documentation,isDeprecated:e.isDeprecated,deprecationReason:e.deprecationReason})),from:{line:r.line,ch:s},to:{line:r.line,ch:a.end}};return(null==u?void 0:u.list)&&u.list.length>0&&(u.from=i.C.Pos(u.from.line,u.from.ch),u.to=i.C.Pos(u.to.line,u.to.ch),i.C.signal(e,"hasCompletion",e,u,a)),u})}}]);