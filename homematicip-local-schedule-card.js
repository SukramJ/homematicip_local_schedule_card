function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:d,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,v=g?g.emptyScript:"",_=m.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!d(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[f("elementProperties")]=new Map,$[f("finalized")]=new Map,_?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,w=t=>t,E=k.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+T,C=`<${D}>`,M=document,O=()=>M.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,R=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,W=/^(?:script|style|textarea|title)$/i,j=(t,...e)=>({_$litType$:1,strings:t,values:e}),H=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Y=new WeakMap,Z=M.createTreeWalker(M,129);function q(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[d,l]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=B;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,d=r.exec(i),null!==d);)c=r.lastIndex,r===B?"!--"===d[1]?r=P:void 0!==d[1]?r=U:void 0!==d[2]?(W.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=R):void 0!==d[3]&&(r=R):r===R?">"===d[0]?(r=o??B,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?R:'"'===d[3]?F:L):r===F||r===L?r=R:r===P||r===U?r=B:(r=R,o=void 0);const h=r===R&&t[e+1].startsWith("/>")?" ":"";n+=r===B?i+C:l>=0?(s.push(a),i.slice(0,l)+A+i.slice(l)+T+h):i+T+(-2===l?e:h)}return[q(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=J.createElement(d,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=l[n++],i=s.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:X}),s.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(T),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),Z.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===D)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(T,t+1));)a.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===H)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=I(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);Z.currentNode=s;let o=Z.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=Z.nextNode(),n++)}return Z.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),I(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new J(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=K(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=K(this,s[i+r],e,r),a===H&&(a=this._$AH[r]),n||=!I(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===H)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ot={I:Q},nt=k.litHtmlPolyfillSupport;nt?.(J,Q),(k.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;let at=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const dt=rt.litElementPolyfillSupport;dt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ct=(t=lt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ht({...t,state:!0,attribute:!1})}const ut=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],mt=["fixed_time","astro","fixed_if_before_astro","astro_if_before_fixed","fixed_if_after_astro","astro_if_after_fixed","earliest","latest"],gt={switch:{levelType:"binary",hasLevel2:!1,hasDuration:!0,hasRampTime:!1},light:{levelType:"percentage",hasLevel2:!1,hasDuration:!0,hasRampTime:!0},cover:{levelType:"percentage",hasLevel2:!0,hasDuration:!1,hasRampTime:!1},valve:{levelType:"percentage",hasLevel2:!1,hasDuration:!0,hasRampTime:!1}},vt=["ms","s","min","h"];function _t(t){const[e,i]=t.split(":").map(Number);return 60*e+i}function ft(t){const e=t%60;return`${Math.floor(t/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function yt(t,e="24"){if("24"===e)return t;const[i,s]=t.split(":");let o=parseInt(i,10);if(24===o)return"12:00 AM";const n=o>=12?"PM":"AM";return 0===o?o=12:o>12&&(o-=12),`${o}:${s||"00"} ${n}`}function bt(t){return t<10?"#2b9af9":t<14?"#40c4ff":t<17?"#26c6da":t<19?"#66bb6a":t<21?"#9ccc65":t<23?"#ffb74d":t<25?"#ff8100":"#f4511e"}function xt(t){const{base_temperature:e,periods:i}=t,s=[],o=[...i].sort((t,e)=>_t(t.starttime)-_t(e.starttime));for(let t=0;t<o.length;t++){const e=o[t];s.push({startTime:e.starttime,startMinutes:_t(e.starttime),endTime:e.endtime,endMinutes:_t(e.endtime),temperature:e.temperature,slot:t+1})}return{blocks:s,baseTemperature:e}}function $t(t){if(0===t.length)return[];const e=[...t].sort((t,e)=>t.startMinutes-e.startMinutes),i=[];let s={...e[0]};for(let t=1;t<e.length;t++){const o=e[t];s.endMinutes===o.startMinutes&&s.temperature===o.temperature?s={...s,endTime:o.endTime,endMinutes:o.endMinutes}:(i.push(s),s={...o})}return i.push(s),i.map((t,e)=>({...t,slot:e+1}))}function kt(t,e){if(0===t.length)return[{startTime:"00:00",startMinutes:0,endTime:"24:00",endMinutes:1440,temperature:e,slot:1}];const i=[...t].sort((t,e)=>t.startMinutes-e.startMinutes),s=[];let o=0;for(const t of i)t.startMinutes>o&&s.push({startTime:ft(o),startMinutes:o,endTime:t.startTime,endMinutes:t.startMinutes,temperature:e,slot:s.length+1}),s.push({...t,slot:s.length+1}),o=t.endMinutes;return o<1440&&s.push({startTime:ft(o),startMinutes:o,endTime:"24:00",endMinutes:1440,temperature:e,slot:s.length+1}),$t(s)}function wt(t){return[...t].sort((t,e)=>t.startMinutes-e.startMinutes).map((t,e)=>({...t,slot:e+1}))}function Et(t){return Boolean(Array.isArray(t.weekdays)&&t.weekdays.length>0&&Array.isArray(t.target_channels)&&t.target_channels.length>0)}function St(t){return"fixed_time"!==t}const At=/^(\d+(?:\.\d+)?)\s*(ms|s|min|h)$/;function Tt(t){const e=t.trim().match(At);return e?{value:parseFloat(e[1]),unit:e[2]}:null}function Dt(t,e){return`${t}${e}`}function Ct(t){return At.test(t.trim())}function Mt(t){const e={weekdays:t.weekdays,time:t.time,target_channels:t.target_channels,level:t.level};return"fixed_time"!==t.condition&&(e.condition=t.condition),null!==t.astro_type&&(e.astro_type=t.astro_type),0!==t.astro_offset_minutes&&(e.astro_offset_minutes=t.astro_offset_minutes),null!==t.level_2&&(e.level_2=t.level_2),null!==t.duration&&(e.duration=t.duration),null!==t.ramp_time&&(e.ramp_time=t.ramp_time),e}function Ot(t){const e={};for(const[i,s]of Object.entries(t))e[i]=Mt(s);return e}function It(t){return"default"===t.schedule_type&&"v1.0"===t.schedule_api_version}const zt=(t,e,i)=>{const s=new CustomEvent(e,{bubbles:!0,composed:!0,detail:i});t.dispatchEvent(s)};class Nt extends at{constructor(){super(...arguments),this._computeLabel=t=>({entities:"Entities",name:"Card Name (optional)",editable:"Allow editing",schedule_domain:"Schedule Domain",hour_format:"Time format"}[t.name]||t.name)}static{this.ENTITY_SCHEMA=[{name:"entities",required:!0,selector:{entity:{domain:"sensor",integration:"homematicip_local",multiple:!0}}}]}static{this.OPTIONS_SCHEMA=[{name:"name",selector:{text:{}}},{name:"editable",selector:{boolean:{}},default:!0},{name:"schedule_domain",selector:{select:{options:[{value:"",label:"Auto (from entity)"},{value:"switch",label:"Switch"},{value:"light",label:"Light"},{value:"cover",label:"Cover"},{value:"valve",label:"Valve"}],mode:"dropdown"}},default:""},{name:"hour_format",selector:{select:{options:[{value:"24",label:"24h"},{value:"12",label:"12h (AM/PM)"}]}},default:"24"}]}setConfig(t){this._config=t}_getEntityIds(){return this._config?this._config.entities?this._config.entities:this._config.entity?[this._config.entity]:[]:[]}_getCompatibleEntityIds(){return this._getEntityIds().filter(t=>{const e=this.hass?.states?.[t];return!!e&&It(e.attributes)})}render(){if(!this.hass||!this._config)return V;const t={entities:this._getEntityIds()},e=this._getEntityIds().filter(t=>!this._getCompatibleEntityIds().includes(t));return j`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${Nt.ENTITY_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._entitiesChanged}
      ></ha-form>

      ${e.length>0?j`
            <div class="warning">
              ${e.map(t=>j`
                  <div class="warning-item">
                    ⚠ ${t}: requires schedule_type "default" and schedule_api_version "v1.0"
                  </div>
                `)}
            </div>
          `:""}

      <ha-form
        .hass=${this.hass}
        .data=${{...this._config,schedule_domain:this._config.schedule_domain||""}}
        .schema=${Nt.OPTIONS_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._optionsChanged}
      ></ha-form>
    `}_entitiesChanged(t){t.stopPropagation();const e={...this._config,entities:t.detail.value?.entities||[]};delete e.entity,zt(this,"config-changed",{config:e})}_optionsChanged(t){t.stopPropagation();const e=t.detail.value,i=e.schedule_domain,s={...this._config,...e,entities:this._config.entities};i||delete s.schedule_domain,zt(this,"config-changed",{config:s})}static{this.styles=r`
    ha-form {
      display: block;
    }

    .warning {
      margin: 8px 0;
      padding: 8px 12px;
      background: var(--warning-color, #ffc107);
      color: var(--primary-text-color);
      border-radius: 4px;
      font-size: 13px;
    }

    .warning-item {
      padding: 2px 0;
    }
  `}}function Bt(t){return e=>(customElements.get(t)||customElements.define(t,e),e)}t([ht({attribute:!1})],Nt.prototype,"hass",void 0),t([pt()],Nt.prototype,"_config",void 0),customElements.define("homematicip-local-schedule-card-editor",Nt);let Pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:Ut}=ot,Rt=t=>t,Lt=()=>document.createComment(""),Ft=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(Lt(),o),n=s.insertBefore(Lt(),o);i=new Ut(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,r=n!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=Rt(t).nextSibling;Rt(s).insertBefore(t,o),t=e}}}return i},Wt=(t,e,i=t)=>(t._$AI(e,i),t),jt={},Ht=(t,e=jt)=>t._$AH=e,Vt=t=>{t._$AR(),t._$AA.remove()},Yt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},Zt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Pt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const e of t)o[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:n,keys:r}=this.dt(e,i,s);if(!Array.isArray(o))return this.ut=r,n;const a=this.ut??=[],d=[];let l,c,h=0,p=o.length-1,u=0,m=n.length-1;for(;h<=p&&u<=m;)if(null===o[h])h++;else if(null===o[p])p--;else if(a[h]===r[u])d[u]=Wt(o[h],n[u]),h++,u++;else if(a[p]===r[m])d[m]=Wt(o[p],n[m]),p--,m--;else if(a[h]===r[m])d[m]=Wt(o[h],n[m]),Ft(t,d[m+1],o[h]),h++,m--;else if(a[p]===r[u])d[u]=Wt(o[p],n[u]),Ft(t,o[h],o[p]),p--,u++;else if(void 0===l&&(l=Yt(r,u,m),c=Yt(a,h,p)),l.has(a[h]))if(l.has(a[p])){const e=c.get(r[u]),i=void 0!==e?o[e]:null;if(null===i){const e=Ft(t,o[h]);Wt(e,n[u]),d[u]=e}else d[u]=Wt(i,n[u]),Ft(t,o[h],i),o[e]=null;u++}else Vt(o[p]),p--;else Vt(o[h]),h++;for(;u<=m;){const e=Ft(t,d[m+1]);Wt(e,n[u]),d[u++]=e}for(;h<=p;){const t=o[h++];null!==t&&Vt(t)}return this.ut=r,Ht(t,d),H}}),qt=r`
  :host {
    display: block;
  }

  .schedule-container {
    display: grid;
    grid-template-columns: auto repeat(7, minmax(0, 1fr));
    grid-template-rows: auto 1fr;
    gap: 8px;
    min-height: 400px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
  }

  .time-axis-header {
    /* Empty cell in row 1, col 1 - height matches weekday headers */
  }

  .time-axis-labels {
    position: relative;
    border-right: 2px solid var(--divider-color);
    min-width: 50px;
  }

  .time-label {
    position: absolute;
    right: 8px;
    transform: translateY(-50%);
    font-size: 11px;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .schedule-content {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 8px;
    position: relative;
    min-height: 300px;
  }

  .current-time-indicator {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--error-color, #ff0000);
    border-top: 2px dashed var(--error-color, #ff0000);
    pointer-events: none;
    z-index: 10;
    transform: translateY(-50%);
    box-shadow: 0 0 4px rgba(255, 0, 0, 0.5);
    will-change: top;
  }

  .current-time-indicator::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: var(--error-color, #ff0000);
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(255, 0, 0, 0.7);
  }

  .weekday-header {
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
  }

  .weekday-label {
    font-weight: 500;
    font-size: 14px;
  }

  .weekday-actions {
    display: flex;
    gap: 4px;
  }

  .copy-btn,
  .paste-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    padding: 2px 4px;
    border-radius: 3px;
    transition: background-color 0.2s;
    opacity: 0.7;
  }

  .copy-btn:hover,
  .paste-btn:not(:disabled):hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .copy-btn.active {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.3);
    animation: pulse 1s ease-in-out;
    will-change: transform;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .paste-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .time-blocks {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: visible;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
  }

  .time-blocks.editable {
    cursor: pointer;
    will-change: transform, box-shadow;
  }

  .time-blocks.editable:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .time-block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s;
    cursor: pointer;
  }

  .time-block.base-temp-block {
    color: var(--secondary-text-color, #666);
    text-shadow: none;
    border-top: 1px dashed var(--divider-color, #ccc);
  }

  .time-block.base-temp-block:first-child {
    border-top: none;
  }

  .time-block:hover {
    opacity: 0.9;
  }

  .time-block:hover .time-block-tooltip {
    opacity: 1;
    visibility: visible;
  }

  .temperature {
    user-select: none;
    position: relative;
    z-index: 1;
  }

  /* Active block highlighting */
  .time-block.active {
    box-shadow:
      inset 0 0 0 3px rgba(255, 255, 255, 0.9),
      0 0 20px rgba(255, 255, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4);
    animation: pulse-glow 2s ease-in-out infinite;
    z-index: 10;
    will-change: box-shadow;
  }

  @keyframes pulse-glow {
    0%,
    100% {
      box-shadow:
        inset 0 0 0 3px rgba(255, 255, 255, 0.9),
        0 0 15px rgba(255, 255, 255, 0.5),
        0 0 25px rgba(255, 255, 255, 0.3);
    }
    50% {
      box-shadow:
        inset 0 0 0 3px rgba(255, 255, 255, 1),
        0 0 25px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(255, 255, 255, 0.6);
    }
  }

  /* Tooltip styling */
  .time-block-tooltip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 10px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s,
      visibility 0.2s;
    z-index: 1000;
    pointer-events: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    min-width: 80px;
  }

  .tooltip-time {
    font-weight: 500;
    margin-bottom: 2px;
    text-align: center;
    font-size: 10px;
    line-height: 1.2;
  }

  .tooltip-temp {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
  }

  .hint {
    margin-top: 12px;
    text-align: center;
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .schedule-container {
      gap: 4px;
      min-height: 350px;
    }

    .time-axis-labels {
      min-width: 40px;
    }

    .time-label {
      font-size: 10px;
      right: 4px;
    }

    .schedule-content {
      gap: 4px;
    }

    .weekday-header {
      padding: 6px 4px;
    }

    .weekday-label {
      font-size: 12px;
    }

    .weekday-actions {
      gap: 6px;
    }

    .copy-btn,
    .paste-btn {
      font-size: 16px;
      padding: 6px 8px;
      min-width: 44px;
      min-height: 44px;
    }

    .temperature {
      font-size: 11px;
    }

    .time-block-tooltip {
      font-size: 11px;
      padding: 8px 12px;
    }

    .hint {
      font-size: 14px;
    }
  }

  /* Small mobile devices (portrait phones) */
  @media (max-width: 480px) {
    .schedule-container {
      gap: 2px;
      min-height: 300px;
    }

    .time-axis-labels {
      min-width: 35px;
    }

    .time-label {
      font-size: 9px;
      right: 2px;
    }

    .schedule-content {
      gap: 2px;
    }

    .weekday-label {
      font-size: 11px;
    }

    .temperature {
      font-size: 10px;
    }
  }

  /* Touch-specific optimizations */
  @media (hover: none) and (pointer: coarse) {
    .time-blocks.editable:hover {
      transform: none;
      box-shadow: none;
    }

    .time-blocks.editable:active {
      transform: scale(0.98);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .time-block:hover {
      opacity: 1;
    }

    .time-block:active {
      opacity: 0.85;
    }

    /* Show tooltip on tap instead of hover */
    .time-block:active .time-block-tooltip {
      opacity: 1;
      visibility: visible;
    }

    /* Disable hover effects, use active states */
    .copy-btn:hover,
    .paste-btn:not(:disabled):hover {
      opacity: 1;
      background-color: transparent;
    }

    .copy-btn:active,
    .paste-btn:not(:disabled):active {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;var Jt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Kt=class extends at{constructor(){super(...arguments),this.editable=!1,this.showTemperature=!0,this.showGradient=!1,this.temperatureUnit="°C",this.hourFormat="24",this.editorOpen=!1,this._currentTimePercent=0,this._currentTimeMinutes=0}connectedCallback(){super.connectedCallback(),this._updateCurrentTime(),this._timeUpdateInterval=window.setInterval(()=>{this._updateCurrentTime()},6e4)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=void 0)}willUpdate(t){super.willUpdate(t)}_updateCurrentTime(){const t=new Date,e=60*t.getHours()+t.getMinutes();this._currentTimePercent=e/1440*100,this._currentTimeMinutes=e;const i=t.getDay();this._currentWeekday=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][i]}_isBlockActive(t,e){return!(!this._currentWeekday||this._currentWeekday!==t)&&this._currentTimeMinutes>=e.startMinutes&&this._currentTimeMinutes<e.endMinutes}_getTimeLabels(){const t=[];for(let e=0;e<=24;e+=3){const i=`${e.toString().padStart(2,"0")}:00`;t.push({hour:e,label:yt(i,this.hourFormat),position:e/24*100})}return t}_formatTimeDisplay(t){return yt(t,this.hourFormat)}_getBaseTemperature(t){if(this.scheduleData){const e=this.scheduleData[t];if(e){const{baseTemperature:t}=xt(e);return t}}return 20}_getParsedBlocks(t){if(this.scheduleData){const e=this.scheduleData[t];if(!e)return[];const{blocks:i}=xt(e);return i}return[]}_getWeekdayLabel(t){return this.translations?.weekdayShortLabels[t]??t.slice(0,2)}_handleWeekdayClick(t){this.editable&&this.dispatchEvent(new CustomEvent("weekday-click",{detail:{weekday:t},bubbles:!0,composed:!0}))}_handleCopy(t,e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("copy-schedule",{detail:{weekday:t},bubbles:!0,composed:!0}))}_handlePaste(t,e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("paste-schedule",{detail:{weekday:t},bubbles:!0,composed:!0}))}render(){return this.scheduleData?j`
      <div class="schedule-container">
        <!-- Empty cell for time-axis header alignment -->
        <div class="time-axis-header"></div>

        <!-- Weekday headers -->
        ${Zt(ut,t=>`header-${t}`,t=>{const e=this.copiedWeekday===t;return j`
              <div class="weekday-header">
                <div class="weekday-label">${this._getWeekdayLabel(t)}</div>
                ${this.editable?j`
                      <div class="weekday-actions">
                        <button
                          class="copy-btn ${e?"active":""}"
                          @click=${e=>this._handleCopy(t,e)}
                          title="${this.translations?.copySchedule??""}"
                        >
                          📋
                        </button>
                        <button
                          class="paste-btn"
                          @click=${e=>this._handlePaste(t,e)}
                          title="${this.translations?.pasteSchedule??""}"
                          ?disabled=${!this.copiedWeekday}
                        >
                          📄
                        </button>
                      </div>
                    `:""}
              </div>
            `})}

        <!-- Time axis labels -->
        <div class="time-axis-labels">
          ${Zt(this._getTimeLabels(),t=>t.hour,t=>j`
              <div class="time-label" style="top: ${t.position}%">${t.label}</div>
            `)}
        </div>

        <!-- Time blocks content wrapper (for correct indicator positioning) -->
        <div class="schedule-content">
          ${Zt(ut,t=>`${t}-${this.currentProfile}-${this.scheduleDataHash}`,t=>{const e=this._getParsedBlocks(t),i=this._getBaseTemperature(t),s=kt(e,i);return j`
                <div
                  class="time-blocks ${this.editable?"editable":""}"
                  @click=${()=>this._handleWeekdayClick(t)}
                >
                  ${Zt(s,t=>`${t.slot}-${t.startMinutes}-${this.currentProfile}`,(o,n)=>{const r=this._isBlockActive(t,o),a=o.temperature===i&&!e.some(t=>t.startMinutes===o.startMinutes&&t.endMinutes===o.endMinutes);let d;if(a)d="background-color: var(--secondary-background-color, #e0e0e0);";else if(this.showGradient){d=`background: ${function(t,e,i){const s=bt(t);return null===e&&null===i?s:null!==e&&null===i?`linear-gradient(to bottom, ${bt(e)}, ${s})`:null===e&&null!==i?`linear-gradient(to bottom, ${s}, ${bt(i)})`:`linear-gradient(to bottom, ${bt(e)}, ${s} 50%, ${bt(i)})`}(o.temperature,n>0?s[n-1].temperature:null,n<s.length-1?s[n+1].temperature:null)};`}else d=`background-color: ${bt(o.temperature)};`;return j`
                        <div
                          class="time-block ${r?"active":""} ${a?"base-temp-block":""}"
                          style="
                              height: ${(o.endMinutes-o.startMinutes)/1440*100}%;
                              ${d}
                            "
                        >
                          ${this.showTemperature?j`<span class="temperature"
                                >${o.temperature.toFixed(1)}°</span
                              >`:""}
                          <div class="time-block-tooltip">
                            <div class="tooltip-time">
                              ${this._formatTimeDisplay(o.startTime)} -
                              ${this._formatTimeDisplay(o.endTime)}
                            </div>
                            <div class="tooltip-temp">
                              ${function(t,e="°C"){return`${t.toFixed(1)}${e}`}(o.temperature,this.temperatureUnit)}
                            </div>
                          </div>
                        </div>
                      `})}
                </div>
              `})}

          <!-- Current time indicator line (hidden when editor is open) -->
          ${this.editorOpen?"":j`<div
                class="current-time-indicator"
                style="top: ${this._currentTimePercent}%"
              ></div>`}
        </div>
      </div>

      ${this.editable?j`<div class="hint">${this.translations?.clickToEdit??""}</div>`:""}
    `:j``}static{this.styles=qt}};Jt([ht({attribute:!1})],Kt.prototype,"scheduleData",void 0),Jt([ht({type:Boolean})],Kt.prototype,"editable",void 0),Jt([ht({type:Boolean})],Kt.prototype,"showTemperature",void 0),Jt([ht({type:Boolean})],Kt.prototype,"showGradient",void 0),Jt([ht({type:String})],Kt.prototype,"temperatureUnit",void 0),Jt([ht({type:String})],Kt.prototype,"hourFormat",void 0),Jt([ht({attribute:!1})],Kt.prototype,"translations",void 0),Jt([ht({type:String})],Kt.prototype,"copiedWeekday",void 0),Jt([ht({type:Boolean})],Kt.prototype,"editorOpen",void 0),Jt([ht({type:String})],Kt.prototype,"currentProfile",void 0),Jt([ht({type:String})],Kt.prototype,"scheduleDataHash",void 0),Jt([pt()],Kt.prototype,"_currentTimePercent",void 0),Jt([pt()],Kt.prototype,"_currentTimeMinutes",void 0),Jt([pt()],Kt.prototype,"_currentWeekday",void 0),Kt=Jt([Bt("hmip-schedule-grid")],Kt);const Gt=r`
  :host {
    display: block;
  }

  /* Dialog styles */
  ha-dialog {
    --mdc-dialog-max-width: 90vw;
    --mdc-dialog-max-height: 90vh;
  }

  .dialog-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    overflow-y: auto;
    max-height: calc(90vh - 200px);
  }

  .weekday-tabs {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .weekday-tab {
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
    cursor: pointer;
    transition:
      background-color 0.2s,
      border-color 0.2s;
    min-width: 40px;
    text-align: center;
  }

  .weekday-tab:hover {
    background-color: var(--divider-color);
  }

  .weekday-tab.active {
    background-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
  }

  .dialog-editor {
    flex: 1;
    min-height: 0;
  }

  .dialog-editor .editor {
    box-shadow: none;
    border: none;
    padding: 0;
  }

  .dialog-editor .editor-header {
    display: none;
  }

  .dialog-editor .editor-footer {
    display: none;
  }

  /* Editor Styles */
  .editor {
    background-color: var(--card-background-color);
  }

  .editor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--divider-color);
  }

  .editor-header h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }

  .editor-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .undo-btn,
  .redo-btn,
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--secondary-text-color);
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition:
      background-color 0.2s,
      opacity 0.2s;
  }

  .undo-btn:hover:not(:disabled),
  .redo-btn:hover:not(:disabled),
  .close-btn:hover {
    background-color: var(--divider-color);
  }

  .undo-btn:disabled,
  .redo-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .validation-warnings {
    background-color: rgba(255, 152, 0, 0.1);
    border: 1px solid rgba(255, 152, 0, 0.3);
    border-radius: 4px;
    padding: 12px;
    margin: 12px 0;
  }

  .warnings-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .warning-icon {
    font-size: 18px;
  }

  .warnings-title {
    font-size: 14px;
  }

  .warnings-list {
    margin: 0;
    padding-left: 28px;
    list-style-type: disc;
  }

  .warning-item {
    color: var(--secondary-text-color);
    font-size: 13px;
    line-height: 1.6;
    margin: 4px 0;
  }

  /* Base Temperature Section */
  .base-temperature-section {
    background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    padding: 12px;
    margin: 12px 0;
  }

  .base-temperature-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
  }

  .base-temp-label {
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .base-temp-description {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .base-temperature-input {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .base-temp-input {
    width: 80px;
    font-weight: 500;
  }

  .editor-content-label {
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-text-color);
    margin: 16px 0 8px 0;
    padding-left: 8px;
  }

  .editor-content {
    max-height: 500px;
    overflow-y: auto;
  }

  .time-block-header {
    display: grid;
    grid-template-columns: 100px 100px 90px 1fr 24px;
    gap: 8px;
    align-items: center;
    padding: 8px;
    border-bottom: 2px solid var(--divider-color);
    font-weight: 500;
    font-size: 12px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
  }

  .header-cell {
    text-align: left;
  }

  .time-block-editor {
    display: grid;
    grid-template-columns: 100px 100px 90px 1fr 24px;
    gap: 8px;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid var(--divider-color);
  }

  .time-block-editor.editing {
    background-color: var(--primary-color-light, rgba(3, 169, 244, 0.1));
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    margin: 4px 0;
  }

  .time-block-editor.base-temp-slot {
    opacity: 0.6;
    background-color: var(--divider-color);
  }

  .time-display {
    font-size: 14px;
    color: var(--primary-text-color);
    font-family: monospace;
  }

  .temp-display-group,
  .temp-input-group {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .temp-display {
    font-size: 14px;
    color: var(--primary-text-color);
    font-weight: 500;
  }

  .slot-actions {
    display: flex;
    gap: 4px;
    justify-content: flex-end;
  }

  .slot-edit-btn,
  .slot-save-btn,
  .slot-cancel-btn {
    padding: 4px 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
  }

  .slot-edit-btn:hover,
  .slot-save-btn:hover,
  .slot-cancel-btn:hover {
    background-color: var(--divider-color);
  }

  .slot-save-btn {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
  }

  .slot-cancel-btn {
    background-color: var(--error-color, #e74c3c);
    color: white;
    border-color: var(--error-color, #e74c3c);
  }

  .slot-edit-btn:disabled,
  .remove-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .block-number {
    font-weight: 500;
    color: var(--secondary-text-color);
  }

  .time-input,
  .temp-input {
    padding: 6px 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
  }

  .time-input {
    min-width: 100px;
    max-width: 120px;
  }

  .temp-input {
    max-width: 60px;
  }

  .temp-unit {
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  .remove-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 4px;
  }

  .remove-btn:hover {
    opacity: 0.7;
  }

  .color-indicator {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid var(--divider-color);
    flex-shrink: 0;
  }

  .add-btn {
    margin: 12px 0;
    padding: 10px 16px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
  }

  .add-btn:hover {
    opacity: 0.9;
  }

  .editor-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .cancel-btn,
  .save-btn {
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  .cancel-btn {
    background-color: var(--divider-color);
    color: var(--primary-text-color);
  }

  .save-btn {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  .cancel-btn:hover,
  .save-btn:hover {
    opacity: 0.9;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    ha-dialog {
      --mdc-dialog-max-width: 100vw;
      --mdc-dialog-max-height: 100vh;
    }

    .dialog-content {
      max-height: calc(100vh - 150px);
    }

    .editor-header h3 {
      font-size: 18px;
    }

    .undo-btn,
    .redo-btn,
    .close-btn {
      width: 44px;
      height: 44px;
      font-size: 28px;
    }

    .editor-content {
      max-height: 400px;
    }

    .time-block-editor {
      grid-template-columns: 30px 1fr 70px 40px 44px 20px;
      gap: 6px;
      padding: 10px 6px;
    }

    .block-number {
      font-size: 13px;
    }

    .time-input,
    .temp-input {
      padding: 10px 8px;
      font-size: 16px;
      min-height: 44px;
    }

    .temp-unit {
      font-size: 13px;
    }

    .remove-btn {
      font-size: 22px;
      padding: 8px;
      min-width: 44px;
      min-height: 44px;
    }

    .add-btn {
      padding: 14px 16px;
      font-size: 16px;
      min-height: 48px;
    }

    .editor-footer {
      flex-direction: column-reverse;
      gap: 8px;
    }

    .cancel-btn,
    .save-btn {
      width: 100%;
      padding: 14px 24px;
      font-size: 16px;
      min-height: 48px;
    }

    .validation-warnings {
      padding: 10px;
      margin: 10px 0;
    }

    .warnings-title {
      font-size: 13px;
    }

    .warning-item {
      font-size: 12px;
    }
  }

  /* Small mobile devices (portrait phones) */
  @media (max-width: 480px) {
    .time-block-editor {
      grid-template-columns: 25px 1fr 60px 35px 44px 16px;
      gap: 4px;
      padding: 8px 4px;
    }

    .block-number {
      font-size: 12px;
    }

    .editor-header h3 {
      font-size: 16px;
    }
  }

  /* Landscape mobile optimization */
  @media (max-width: 768px) and (orientation: landscape) {
    .editor-content {
      max-height: 200px;
    }
  }

  /* Touch-specific optimizations */
  @media (hover: none) and (pointer: coarse) {
    .undo-btn:hover:not(:disabled),
    .redo-btn:hover:not(:disabled),
    .close-btn:hover,
    .add-btn:hover,
    .cancel-btn:hover,
    .save-btn:hover,
    .remove-btn:hover {
      opacity: 1;
      background-color: transparent;
    }

    .undo-btn:active:not(:disabled),
    .redo-btn:active:not(:disabled),
    .close-btn:active {
      background-color: var(--divider-color);
    }

    .add-btn:active,
    .save-btn:active {
      opacity: 0.85;
    }

    .cancel-btn:active {
      opacity: 0.85;
    }

    .remove-btn:active {
      opacity: 0.5;
    }
  }
`;var Qt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Xt=class extends at{constructor(){super(),this.open=!1,this.minTemp=5,this.maxTemp=30.5,this.tempStep=.5,this.temperatureUnit="°C",this.hourFormat="24",this._validationWarnings=[],this._historyStack=[],this._historyIndex=-1,this._keyDownHandler=this._handleKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._keyDownHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._keyDownHandler)}willUpdate(t){if(super.willUpdate(t),(t.has("open")||t.has("weekday"))&&this.open&&this.weekday){const e=t.get("open"),i=t.get("weekday");(!e&&this.open||this.open&&i!==this.weekday)&&this._initializeEditor(this.weekday)}}_initializeEditor(t){this._editingWeekday=t,this._editingBlocks=this._getParsedBlocks(t),this._editingSlotIndex=void 0,this._editingSlotData=void 0;const e=this.scheduleData?.[t];if(e){const{baseTemperature:t}=xt(e);this._editingBaseTemperature=t}else this._editingBaseTemperature=20;this._historyStack=[JSON.parse(JSON.stringify(this._editingBlocks))],this._historyIndex=0,this._updateValidationWarnings()}_getParsedBlocks(t){if(this.scheduleData){const e=this.scheduleData[t];if(!e)return[];const{blocks:i}=xt(e);return i}return[]}_getWeekdayLabel(t,e){return"long"===e?this.translations?.weekdayLongLabels[t]??t:this.translations?.weekdayShortLabels[t]??t.slice(0,2)}_formatTimeDisplay(t){return yt(t,this.hourFormat)}_formatValidationParams(t){if(!t)return{};const e={};for(const[i,s]of Object.entries(t))"weekday"===i&&ut.includes(s)?e.weekday=this._getWeekdayLabel(s,"long"):e[i]=s;return e}_translateValidationMessage(t){const e=this.translations?.validationMessages[t.key]||t.key,i=this._formatValidationParams(t.params);t.nested&&(i.details=this._translateValidationMessage(t.nested));let s=e;for(const[t,e]of Object.entries(i))s=s.replace(`{${t}}`,e);return s}_saveHistoryState(){if(!this._editingBlocks)return;const t=JSON.parse(JSON.stringify(this._editingBlocks));this._historyStack=this._historyStack.slice(0,this._historyIndex+1),this._historyStack.push(t),this._historyIndex++,this._historyStack.length>50&&(this._historyStack.shift(),this._historyIndex--)}_undo(){this._historyIndex<=0||(this._historyIndex--,this._editingBlocks=JSON.parse(JSON.stringify(this._historyStack[this._historyIndex])),this._updateValidationWarnings())}_redo(){this._historyIndex>=this._historyStack.length-1||(this._historyIndex++,this._editingBlocks=JSON.parse(JSON.stringify(this._historyStack[this._historyIndex])),this._updateValidationWarnings())}_canUndo(){return this._historyIndex>0}_canRedo(){return this._historyIndex<this._historyStack.length-1}_handleKeyDown(t){if(!this.open||!this._editingWeekday||!this._editingBlocks)return;const e=t.ctrlKey||t.metaKey;e&&"z"===t.key&&!t.shiftKey?(t.preventDefault(),this._undo()):e&&("y"===t.key||"z"===t.key&&t.shiftKey)&&(t.preventDefault(),this._redo())}_updateValidationWarnings(){this._validationWarnings=this._editingBlocks?function(t,e=5,i=30.5){const s=[];if(0===t.length)return s;for(let e=0;e<t.length-1;e++){const i=t[e];i.endMinutes<i.startMinutes&&s.push({key:"blockEndBeforeStart",params:{block:`${e+1}`}}),i.endMinutes===i.startMinutes&&s.push({key:"blockZeroDuration",params:{block:`${e+1}`}})}const o=t[t.length-1];return o.endMinutes<o.startMinutes&&s.push({key:"blockEndBeforeStart",params:{block:`${t.length}`}}),t.forEach((t,o)=>{(t.startMinutes<0||t.startMinutes>1440)&&s.push({key:"invalidStartTime",params:{block:`${o+1}`}}),(t.endMinutes<0||t.endMinutes>1440)&&s.push({key:"invalidEndTime",params:{block:`${o+1}`}}),(t.temperature<e||t.temperature>i)&&s.push({key:"temperatureOutOfRange",params:{block:`${o+1}`,min:`${e}`,max:`${i}`}})}),s}(this._editingBlocks,this.minTemp,this.maxTemp):[]}_startSlotEdit(t){if(!this._editingBlocks||t<0||t>=this._editingBlocks.length)return;const e=this._editingBlocks[t];this._editingSlotIndex=t,this._editingSlotData={startTime:e.startTime,endTime:e.endTime,temperature:e.temperature}}_startSlotEditFromDisplay(t,e){if(!this._editingBlocks)return;const i=e[t],s=this._editingBlocks.findIndex(t=>t.startMinutes===i.startMinutes&&t.endMinutes===i.endMinutes&&t.temperature===i.temperature);-1!==s&&this._startSlotEdit(s)}_cancelSlotEdit(){this._editingSlotIndex=void 0,this._editingSlotData=void 0}_saveSlotEdit(){if(void 0===this._editingSlotIndex||!this._editingSlotData||!this._editingBlocks||void 0===this._editingBaseTemperature)return;const t=this._editingSlotIndex,{startTime:e,endTime:i,temperature:s}=this._editingSlotData,o={startTime:e,startMinutes:_t(e),endTime:i,endMinutes:_t(i),temperature:s,slot:t+1},n=this._editingBlocks.filter((e,i)=>i!==t),r=function(t,e){const i=[],s=e.startMinutes,o=e.endMinutes,n=[...t].sort((t,e)=>t.startMinutes-e.startMinutes);for(const t of n){const e=t.startMinutes,n=t.endMinutes;n<=s||e>=o?i.push(t):(e<s&&i.push({...t,endTime:ft(s),endMinutes:s,slot:i.length+1}),n>o&&i.push({...t,startTime:ft(o),startMinutes:o,slot:i.length+1}))}i.push({...e,slot:i.length+1});const r=i.sort((t,e)=>t.startMinutes-e.startMinutes);return $t(r)}(n,o),a=$t(wt(r));this._saveHistoryState(),this._editingBlocks=a,this._editingSlotIndex=void 0,this._editingSlotData=void 0,this._updateValidationWarnings()}_addNewSlot(){if(!this._editingBlocks||void 0===this._editingBaseTemperature)return;if(this._editingBlocks.length>=12)return;let t=0,e=60;if(this._editingBlocks.length>0){const i=wt(this._editingBlocks),s=i[i.length-1];if(s.endMinutes<1440)t=s.endMinutes,e=Math.min(t+60,1440);else{let s=!1;for(let o=0;o<i.length;o++){const n=0===o?0:i[o-1].endMinutes;if(i[o].startMinutes>n){t=n,e=i[o].startMinutes,s=!0;break}}if(!s)return}}const i=Math.min(this._editingBaseTemperature+2,this.maxTemp),s={startTime:ft(t),startMinutes:t,endTime:ft(e),endMinutes:e,temperature:i,slot:this._editingBlocks.length+1};this._saveHistoryState();const o=wt([...this._editingBlocks,s]);this._editingBlocks=o;const n=o.findIndex(i=>i.startMinutes===t&&i.endMinutes===e);n>=0&&this._startSlotEdit(n),this._updateValidationWarnings()}_removeTimeBlockByIndex(t,e){if(!this._editingBlocks||void 0===this._editingBaseTemperature)return;const i=e[t],s=this._editingBlocks.findIndex(t=>t.startMinutes===i.startMinutes&&t.endMinutes===i.endMinutes&&t.temperature===i.temperature);if(-1===s)return;this._saveHistoryState();const o=this._editingBlocks.filter((t,e)=>e!==s);this._editingBlocks=$t(wt(o)),this._updateValidationWarnings()}_switchToWeekday(t){t!==this._editingWeekday&&this._initializeEditor(t)}_closeEditor(){this._editingWeekday=void 0,this._editingBlocks=void 0,this._editingBaseTemperature=void 0,this._editingSlotIndex=void 0,this._editingSlotData=void 0,this._historyStack=[],this._historyIndex=-1,this.dispatchEvent(new CustomEvent("editor-closed",{bubbles:!0,composed:!0}))}_saveSchedule(){if(!this._editingWeekday||!this._editingBlocks||void 0===this._editingBaseTemperature)return;const t=function(t,e){const i=[],s=[...t].sort((t,e)=>t.startMinutes-e.startMinutes);for(const t of s)i.push({starttime:t.startTime,endtime:t.endTime,temperature:t.temperature});return{base_temperature:e,periods:i}}(this._editingBlocks,this._editingBaseTemperature),e=function(t,e=5,i=30.5){const{base_temperature:s,periods:o}=t;if(s<e||s>i)return{key:"temperatureOutOfRange",params:{block:"base",min:`${e}`,max:`${i}`}};let n=0;for(let t=0;t<o.length;t++){const s=o[t];if(!s.starttime||!s.endtime||void 0===s.temperature)return{key:"slotMissingValues",params:{slot:`${t+1}`}};const r=_t(s.starttime),a=_t(s.endtime);if(a<=r)return{key:"blockEndBeforeStart",params:{block:`${t+1}`}};if(r<n)return{key:"slotTimeBackwards",params:{slot:`${t+1}`,time:s.starttime}};if(s.temperature<e||s.temperature>i)return{key:"temperatureOutOfRange",params:{block:`${t+1}`,min:`${e}`,max:`${i}`}};n=a}return null}(t,this.minTemp,this.maxTemp);if(e){const t=this._translateValidationMessage(e);return void this.dispatchEvent(new CustomEvent("validation-failed",{detail:{error:t},bubbles:!0,composed:!0}))}this.dispatchEvent(new CustomEvent("save-schedule",{detail:{weekday:this._editingWeekday,blocks:this._editingBlocks,baseTemperature:this._editingBaseTemperature},bubbles:!0,composed:!0}))}_saveAndClose(){this._saveSchedule()}render(){return this.open&&this._editingWeekday?j`
      <ha-dialog
        open
        @closed=${this._closeEditor}
        .heading=${this._formatEdit(this._editingWeekday)}
        scrimClickAction="close"
        escapeKeyAction="close"
      >
        <div class="dialog-content">
          <!-- Weekday selector tabs -->
          <div class="weekday-tabs">
            ${ut.map(t=>j`
                <button
                  class="weekday-tab ${t===this._editingWeekday?"active":""}"
                  @click=${()=>this._switchToWeekday(t)}
                >
                  ${this._getWeekdayLabel(t,"short")}
                </button>
              `)}
          </div>

          <!-- Editor content in dialog -->
          <div class="dialog-editor">${this._renderEditor()}</div>
        </div>

        <mwc-button slot="primaryAction" @click=${this._saveAndClose} dialogAction="close">
          ${this.translations?.save??"Save"}
        </mwc-button>
        <mwc-button slot="secondaryAction" @click=${this._closeEditor} dialogAction="close">
          ${this.translations?.cancel??"Cancel"}
        </mwc-button>
      </ha-dialog>
    `:j``}_formatEdit(t){return(this.translations?.edit??"Edit {weekday}").replace("{weekday}",this._getWeekdayLabel(t,"long"))}_renderEditor(){if(!this._editingWeekday||!this._editingBlocks)return j``;const t=void 0!==this._editingBaseTemperature?kt(this._editingBlocks,this._editingBaseTemperature):this._editingBlocks;return j`
      <div class="editor">
        <div class="editor-header">
          <h3>${this._formatEdit(this._editingWeekday)}</h3>
          <div class="editor-actions">
            <button
              class="undo-btn"
              @click=${this._undo}
              ?disabled=${!this._canUndo()}
              title="${this.translations?.undoShortcut??""}"
            >
              ↶
            </button>
            <button
              class="redo-btn"
              @click=${this._redo}
              ?disabled=${!this._canRedo()}
              title="${this.translations?.redoShortcut??""}"
            >
              ↷
            </button>
            <button class="close-btn" @click=${this._closeEditor}>✕</button>
          </div>
        </div>

        ${this._validationWarnings.length>0?j`
              <div class="validation-warnings">
                <div class="warnings-header">
                  <span class="warning-icon">⚠️</span>
                  <span class="warnings-title">${this.translations?.warningsTitle??""}</span>
                </div>
                <ul class="warnings-list">
                  ${this._validationWarnings.map(t=>j`<li class="warning-item">
                        ${this._translateValidationMessage(t)}
                      </li>`)}
                </ul>
              </div>
            `:""}

        <!-- Base Temperature Section -->
        <div class="base-temperature-section">
          <div class="base-temperature-header">
            <span class="base-temp-label">${this.translations?.baseTemperature??""}</span>
            <span class="base-temp-description"
              >${this.translations?.baseTemperatureDescription??""}</span
            >
          </div>
          <div class="base-temperature-input">
            <input
              type="number"
              class="temp-input base-temp-input"
              .value=${this._editingBaseTemperature?.toString()||"20.0"}
              step=${this.tempStep}
              min=${this.minTemp}
              max=${this.maxTemp}
              @change=${t=>{this._saveHistoryState(),this._editingBaseTemperature=parseFloat(t.target.value),this.requestUpdate()}}
            />
            <span class="temp-unit">${this.temperatureUnit}</span>
            <div
              class="color-indicator"
              style="background-color: ${bt(this._editingBaseTemperature||20)}"
            ></div>
          </div>
        </div>

        <div class="editor-content-label">${this.translations?.temperaturePeriods??""}</div>
        <div class="editor-content">
          <div class="time-block-header">
            <span class="header-cell header-from">${this.translations?.from??""}</span>
            <span class="header-cell header-to">${this.translations?.to??""}</span>
            <span class="header-cell header-temp">Temp</span>
            <span class="header-cell header-actions"></span>
          </div>
          ${t.map((e,i)=>{const s=this._editingBlocks.findIndex(t=>t.startMinutes===e.startMinutes&&t.endMinutes===e.endMinutes),o=!(-1!==s);return void 0!==this._editingSlotIndex&&this._editingSlotIndex===s&&void 0!==this._editingSlotData&&this._editingSlotData?j`
                <div class="time-block-editor editing">
                  <input
                    type="time"
                    class="time-input"
                    .value=${this._editingSlotData.startTime}
                    @change=${t=>{this._editingSlotData&&(this._editingSlotData={...this._editingSlotData,startTime:t.target.value},this.requestUpdate())}}
                  />
                  <input
                    type="time"
                    class="time-input"
                    .value=${"24:00"===this._editingSlotData.endTime?"23:59":this._editingSlotData.endTime}
                    @change=${t=>{if(this._editingSlotData){let e=t.target.value;"23:59"===e&&(e="24:00"),this._editingSlotData={...this._editingSlotData,endTime:e},this.requestUpdate()}}}
                  />
                  <div class="temp-input-group">
                    <input
                      type="number"
                      class="temp-input"
                      .value=${this._editingSlotData.temperature.toString()}
                      step=${this.tempStep}
                      min=${this.minTemp}
                      max=${this.maxTemp}
                      @change=${t=>{this._editingSlotData&&(this._editingSlotData={...this._editingSlotData,temperature:parseFloat(t.target.value)},this.requestUpdate())}}
                    />
                    <span class="temp-unit">${this.temperatureUnit}</span>
                  </div>
                  <div class="slot-actions">
                    <button class="slot-save-btn" @click=${this._saveSlotEdit}>
                      ${this.translations?.saveSlot??"Save"}
                    </button>
                    <button class="slot-cancel-btn" @click=${this._cancelSlotEdit}>
                      ${this.translations?.cancelSlotEdit??"Cancel"}
                    </button>
                  </div>
                  <div
                    class="color-indicator"
                    style="background-color: ${bt(this._editingSlotData.temperature)}"
                  ></div>
                </div>
              `:j`
              <div class="time-block-editor ${o?"base-temp-slot":""}">
                <span class="time-display">${this._formatTimeDisplay(e.startTime)}</span>
                <span class="time-display">${this._formatTimeDisplay(e.endTime)}</span>
                <div class="temp-display-group">
                  <span class="temp-display">${e.temperature.toFixed(1)}</span>
                  <span class="temp-unit">${this.temperatureUnit}</span>
                </div>
                <div class="slot-actions">
                  ${o?j``:j`
                        <button
                          class="slot-edit-btn"
                          @click=${()=>this._startSlotEditFromDisplay(i,t)}
                          ?disabled=${void 0!==this._editingSlotIndex}
                        >
                          ${this.translations?.editSlot??"Edit"}
                        </button>
                        <button
                          class="remove-btn"
                          @click=${()=>this._removeTimeBlockByIndex(i,t)}
                          ?disabled=${void 0!==this._editingSlotIndex}
                        >
                          🗑️
                        </button>
                      `}
                </div>
                <div
                  class="color-indicator"
                  style="background-color: ${bt(e.temperature)}"
                ></div>
              </div>
            `})}
          ${this._editingBlocks.length<12&&void 0===this._editingSlotIndex?j`
                <button class="add-btn" @click=${this._addNewSlot}>
                  ${this.translations?.addTimeBlock??"+ Add Time Block"}
                </button>
              `:""}
        </div>

        <div class="editor-footer">
          <button class="cancel-btn" @click=${this._closeEditor}>
            ${this.translations?.cancel??"Cancel"}
          </button>
          <button class="save-btn" @click=${this._saveSchedule}>
            ${this.translations?.save??"Save"}
          </button>
        </div>
      </div>
    `}static{this.styles=Gt}};Qt([ht({type:Boolean})],Xt.prototype,"open",void 0),Qt([ht({type:String})],Xt.prototype,"weekday",void 0),Qt([ht({attribute:!1})],Xt.prototype,"scheduleData",void 0),Qt([ht({type:Number})],Xt.prototype,"minTemp",void 0),Qt([ht({type:Number})],Xt.prototype,"maxTemp",void 0),Qt([ht({type:Number})],Xt.prototype,"tempStep",void 0),Qt([ht({type:String})],Xt.prototype,"temperatureUnit",void 0),Qt([ht({type:String})],Xt.prototype,"hourFormat",void 0),Qt([ht({attribute:!1})],Xt.prototype,"translations",void 0),Qt([pt()],Xt.prototype,"_editingWeekday",void 0),Qt([pt()],Xt.prototype,"_editingBlocks",void 0),Qt([pt()],Xt.prototype,"_editingBaseTemperature",void 0),Qt([pt()],Xt.prototype,"_validationWarnings",void 0),Qt([pt()],Xt.prototype,"_editingSlotIndex",void 0),Qt([pt()],Xt.prototype,"_editingSlotData",void 0),Xt=Qt([Bt("hmip-schedule-editor")],Xt);const te=r`
  :host {
    display: block;
  }

  .schedule-list {
    display: flex;
    flex-direction: column;
  }

  .toolbar {
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;
  }

  .add-button {
    padding: 10px 16px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .add-button:hover {
    opacity: 0.9;
  }

  .no-data {
    text-align: center;
    padding: 32px;
    color: var(--secondary-text-color);
  }

  .events-table {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    overflow: hidden;
  }

  .events-header {
    display: grid;
    grid-template-columns: 70px 1fr minmax(60px, auto) minmax(60px, auto) 70px;
    gap: 8px;
    padding: 8px 16px;
    background-color: var(--secondary-background-color);
    font-weight: 500;
    font-size: 13px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
  }

  .events-header.no-actions {
    grid-template-columns: 70px 1fr minmax(60px, auto) minmax(60px, auto);
  }

  .event-row {
    display: grid;
    grid-template-columns: 70px 1fr minmax(60px, auto) minmax(60px, auto) 70px;
    gap: 8px;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid var(--divider-color);
    transition: background-color 0.2s;
  }

  .event-row.no-actions {
    grid-template-columns: 70px 1fr minmax(60px, auto) minmax(60px, auto);
  }

  .event-row:last-child {
    border-bottom: none;
  }

  .event-row.inactive {
    opacity: 0.5;
  }

  .event-row:hover {
    background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
  }

  .col-time {
    font-weight: 500;
    font-family: monospace;
    color: var(--primary-text-color);
  }

  .col-weekdays {
    overflow: hidden;
  }

  .weekday-badges {
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
  }

  .weekday-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
  }

  .weekday-badge.active {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  .weekday-badge.inactive {
    background-color: var(--divider-color);
    color: var(--disabled-text-color, var(--secondary-text-color));
    opacity: 0.5;
  }

  .col-state {
    color: var(--primary-text-color);
  }

  .col-state .level-2 {
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }

  .col-duration {
    color: var(--secondary-text-color);
  }

  .col-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: 16px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .icon-button:hover {
    opacity: 1;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .add-button {
      min-height: 44px;
      padding: 10px 16px;
      font-size: 16px;
      width: 100%;
    }

    .events-header {
      grid-template-columns: 55px 1fr minmax(50px, auto) minmax(50px, auto) 60px;
      gap: 6px;
      padding: 8px 12px;
      font-size: 11px;
    }

    .event-row {
      grid-template-columns: 55px 1fr minmax(50px, auto) minmax(50px, auto) 60px;
      gap: 6px;
      padding: 10px 12px;
    }

    .weekday-badge {
      min-width: 22px;
      padding: 2px 3px;
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    .events-header {
      grid-template-columns: 50px 1fr 50px;
      gap: 6px;
      padding: 6px 8px;
      font-size: 10px;
    }

    .events-header .col-duration,
    .events-header .col-state {
      display: none;
    }

    .event-row {
      grid-template-columns: 50px 1fr 50px;
      gap: 6px;
      padding: 8px;
    }

    .event-row .col-duration,
    .event-row .col-state {
      display: none;
    }

    .col-time {
      font-size: 12px;
    }

    .weekday-badge {
      min-width: 20px;
      padding: 1px 2px;
      font-size: 9px;
    }
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .icon-button {
      padding: 8px;
      font-size: 20px;
    }

    .event-row:hover {
      background-color: transparent;
    }

    .event-row:active {
      background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
    }
  }
`;var ee=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ie=class extends at{constructor(){super(...arguments),this.editable=!0}static{this.styles=te}_handleAdd(){this.dispatchEvent(new CustomEvent("add-event",{bubbles:!0,composed:!0}))}_handleEdit(t){this.dispatchEvent(new CustomEvent("edit-event",{bubbles:!0,composed:!0,detail:{entry:t}}))}_handleDelete(t){this.dispatchEvent(new CustomEvent("delete-event",{bubbles:!0,composed:!0,detail:{entry:t}}))}render(){if(!this.scheduleData)return j`<div class="no-data">${this.translations.loading}</div>`;const t=function(t){const e=[];for(const[i,s]of Object.entries(t))e.push({...s,groupNo:i,isActive:Et(s)});return e.sort((t,e)=>t.time.localeCompare(e.time)),e}(this.scheduleData);return 0===t.length?j`
        <div class="no-data">
          <p>${this.translations.noScheduleEvents}</p>
          ${this.editable?j`<button @click=${this._handleAdd} class="add-button">
                ${this.translations.addEvent}
              </button>`:""}
        </div>
      `:j`
      <div class="schedule-list">
        ${this.editable?j`<div class="toolbar">
              <button @click=${this._handleAdd} class="add-button">
                ${this.translations.addEvent}
              </button>
            </div>`:""}
        <div class="events-table">
          <div class="events-header ${this.editable?"":"no-actions"}">
            <div class="col-time">${this.translations.time}</div>
            <div class="col-weekdays">${this.translations.weekdays}</div>
            <div class="col-state">${this.translations.state}</div>
            <div class="col-duration">${this.translations.duration}</div>
            ${this.editable?j`<div class="col-actions"></div>`:""}
          </div>
          ${Zt(t,t=>t.groupNo,t=>this._renderEvent(t))}
        </div>
      </div>
    `}_renderEvent(t){const e=function(t,e){const i=e?gt[e]:void 0;return"binary"===i?.levelType?0===t?"Off":"On":`${Math.round(100*t)}%`}(t.level,this.domain),i=function(t){if(!t)return"-";const e=Tt(t);return e?`${e.value}${{ms:"ms",s:"s",min:"min",h:"h"}[e.unit]}`:t}(t.duration);return j`
      <div
        class="event-row ${t.isActive?"active":"inactive"} ${this.editable?"":"no-actions"}"
      >
        <div class="col-time">${t.time}</div>
        <div class="col-weekdays">
          <div class="weekday-badges">
            ${ut.map(e=>{const i=t.weekdays.includes(e);return j`<span class="weekday-badge ${i?"active":"inactive"}"
                >${this.translations.weekdayShortLabels[e]}</span
              >`})}
          </div>
        </div>
        <div class="col-state">
          ${e}
          ${null!==t.level_2?j`<span class="level-2"
                >, ${this.translations.slat}: ${Math.round(100*t.level_2)}%</span
              >`:""}
        </div>
        <div class="col-duration">${i}</div>
        ${this.editable?j`<div class="col-actions">
              <button @click=${()=>this._handleEdit(t)} class="icon-button" title="Edit">
                ✏️
              </button>
              <button @click=${()=>this._handleDelete(t)} class="icon-button" title="Delete">
                🗑️
              </button>
            </div>`:""}
      </div>
    `}};ee([ht({attribute:!1})],ie.prototype,"scheduleData",void 0),ee([ht({attribute:!1})],ie.prototype,"domain",void 0),ee([ht({type:Boolean})],ie.prototype,"editable",void 0),ee([ht({attribute:!1})],ie.prototype,"translations",void 0),ie=ee([Bt("hmip-device-schedule-list")],ie);const se=r`
  :host {
    display: block;
  }

  /* Editor Overlay */
  .editor-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .editor-dialog {
    background-color: var(--card-background-color);
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .editor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid var(--divider-color);
  }

  .editor-header h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--secondary-text-color);
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  .close-button:hover {
    background-color: var(--divider-color);
    color: var(--primary-text-color);
  }

  .editor-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .form-group input[type="time"],
  .form-group input[type="text"],
  .form-group input[type="number"],
  .form-group select {
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
  }

  .form-group input[type="range"] {
    width: 100%;
  }

  .duration-row {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .duration-row input[type="number"] {
    flex: 1;
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
  }

  .duration-row select {
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
  }

  .weekday-checkboxes,
  .channel-checkboxes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 14px;
  }

  .checkbox-label input[type="checkbox"] {
    cursor: pointer;
  }

  .editor-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .button-primary,
  .button-secondary {
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .button-primary {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  .button-primary:hover {
    opacity: 0.9;
  }

  .button-secondary {
    background-color: var(--divider-color);
    color: var(--primary-text-color);
    border: none;
  }

  .button-secondary:hover {
    opacity: 0.9;
  }

  .validation-errors {
    background-color: rgba(231, 76, 60, 0.1);
    border: 1px solid rgba(231, 76, 60, 0.3);
    border-radius: 4px;
    padding: 12px;
    margin: 0;
  }

  .validation-errors ul {
    margin: 0;
    padding-left: 20px;
    list-style-type: disc;
  }

  .validation-errors li {
    color: var(--error-color, #e74c3c);
    font-size: 13px;
    line-height: 1.6;
    margin: 4px 0;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .button-primary,
    .button-secondary {
      min-height: 44px;
      padding: 10px 16px;
    }
  }
`;var oe=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ne=class extends at{constructor(){super(...arguments),this.open=!1,this.isNewEvent=!1,this._validationErrors=[]}static{this.styles=se}willUpdate(t){(t.has("open")||t.has("entry"))&&(this.open&&this.entry?(this._editingEntry={...this.entry},this._validationErrors=[]):this.open||(this._editingEntry=void 0,this._validationErrors=[]))}_updateEditingEntry(t){this._editingEntry&&(this._editingEntry={...this._editingEntry,...t},this._validationErrors=[],this.requestUpdate())}_handleClose(){this.dispatchEvent(new CustomEvent("editor-closed",{bubbles:!0,composed:!0}))}_handleSave(){if(!this._editingEntry||void 0===this.groupNo)return;const t=function(t,e){const i=[];(function(t){try{return function(t){const e=t.split(":");if(2!==e.length)throw new Error(`Invalid time format: ${t}`);const i=parseInt(e[0],10),s=parseInt(e[1],10);if(isNaN(i)||isNaN(s)||i<0||i>23||s<0||s>59)throw new Error(`Invalid time values: ${t}`)}(t),!0}catch{return!1}})(t.time)||i.push({field:"time",message:"Time must be in HH:MM format (00:00-23:59)"}),t.weekdays&&0!==t.weekdays.length||i.push({field:"weekdays",message:"At least one weekday must be selected"}),t.target_channels&&0!==t.target_channels.length||i.push({field:"target_channels",message:"At least one target channel must be selected"});const s=e?gt[e]:void 0;return"binary"===s?.levelType?0!==t.level&&1!==t.level&&i.push({field:"level",message:"Level must be 0 or 1 for switch"}):(t.level<0||t.level>1)&&i.push({field:"level",message:"Level must be between 0.0 and 1.0"}),"cover"===e&&null!==t.level_2&&(t.level_2<0||t.level_2>1)&&i.push({field:"level_2",message:"Slat position must be between 0.0 and 1.0"}),St(t.condition)&&(t.astro_offset_minutes<-720||t.astro_offset_minutes>720)&&i.push({field:"astro_offset_minutes",message:"Astro offset must be between -720 and 720 minutes"}),null===t.duration||Ct(t.duration)||i.push({field:"duration",message:"Invalid duration format"}),null===t.ramp_time||Ct(t.ramp_time)||i.push({field:"ramp_time",message:"Invalid ramp time format"}),i}(this._editingEntry,this.domain);t.length>0?this._validationErrors=t.map(t=>`${t.field}: ${t.message}`):this.dispatchEvent(new CustomEvent("save-event",{bubbles:!0,composed:!0,detail:{entry:{...this._editingEntry},groupNo:this.groupNo}}))}render(){return this.open&&this._editingEntry?j`
      <div class="editor-overlay" @click=${this._handleClose}>
        <div class="editor-dialog" @click=${t=>t.stopPropagation()}>
          <div class="editor-header">
            <h3>${this.isNewEvent?this.translations.addEvent:this.translations.editEvent}</h3>
            <button @click=${this._handleClose} class="close-button">✕</button>
          </div>
          <div class="editor-content">
            ${this._renderTimeFields()} ${this._renderConditionFields()}
            ${this._renderWeekdayFields()} ${this._renderLevelFields()}
            ${this._renderDurationFields()} ${this._renderRampTimeFields()}
            ${this._renderChannelFields()} ${this._renderValidationErrors()}
          </div>
          <div class="editor-footer">
            <button @click=${this._handleClose} class="button-secondary">
              ${this.translations.cancel}
            </button>
            <button @click=${this._handleSave} class="button-primary">
              ${this.translations.save}
            </button>
          </div>
        </div>
      </div>
    `:j``}_renderValidationErrors(){return 0===this._validationErrors.length?j``:j`
      <div class="validation-errors">
        <ul>
          ${this._validationErrors.map(t=>j`<li>${t}</li>`)}
        </ul>
      </div>
    `}_renderTimeFields(){return this._editingEntry?j`
      <div class="form-group">
        <label>${this.translations.time}</label>
        <input
          type="time"
          .value=${this._editingEntry.time}
          @change=${t=>{this._updateEditingEntry({time:t.target.value})}}
        />
      </div>
    `:j``}_renderConditionFields(){if(!this._editingEntry)return j``;const t=St(this._editingEntry.condition);return j`
      <div class="form-group">
        <label>${this.translations.condition}</label>
        <select
          .value=${this._editingEntry.condition}
          @change=${t=>{const e=t.target.value,i={condition:e};"fixed_time"===e?(i.astro_type=null,i.astro_offset_minutes=0):null===this._editingEntry.astro_type&&(i.astro_type="sunrise"),this._updateEditingEntry(i)}}
        >
          ${mt.map(t=>j`
              <option value=${t} ?selected=${t===this._editingEntry.condition}>
                ${this.translations.conditionLabels[t]||t}
              </option>
            `)}
        </select>
      </div>
      ${t?j`
            <div class="form-group">
              <label>${this.translations.astroSunrise}/${this.translations.astroSunset}</label>
              <select
                .value=${this._editingEntry.astro_type||"sunrise"}
                @change=${t=>{this._updateEditingEntry({astro_type:t.target.value})}}
              >
                <option value="sunrise" ?selected=${"sunrise"===this._editingEntry.astro_type}>
                  ${this.translations.astroSunrise}
                </option>
                <option value="sunset" ?selected=${"sunset"===this._editingEntry.astro_type}>
                  ${this.translations.astroSunset}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>${this.translations.astroOffset}</label>
              <input
                type="number"
                min="-720"
                max="720"
                .value=${String(this._editingEntry.astro_offset_minutes)}
                @input=${t=>{const e=parseInt(t.target.value,10);isNaN(e)||this._updateEditingEntry({astro_offset_minutes:e})}}
              />
            </div>
          `:""}
    `}_renderWeekdayFields(){return this._editingEntry?j`
      <div class="form-group">
        <label>${this.translations.weekdaysLabel}</label>
        <div class="weekday-checkboxes">
          ${ut.map(t=>{const e=this._editingEntry.weekdays.includes(t);return j`
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  .checked=${e}
                  @change=${e=>{const i=e.target.checked,s=[...this._editingEntry.weekdays];if(i&&!s.includes(t))s.push(t);else if(!i){const e=s.indexOf(t);e>-1&&s.splice(e,1)}this._updateEditingEntry({weekdays:s})}}
                />
                ${this.translations.weekdayShortLabels[t]}
              </label>
            `})}
        </div>
      </div>
    `:j``}_renderLevelFields(){if(!this._editingEntry)return j``;const t=this.domain?gt[this.domain]:void 0;return j`
      <div class="form-group">
        <label>${this.translations.stateLabel}</label>
        ${"binary"===t?.levelType?j`
              <select
                .value=${String(this._editingEntry.level)}
                @change=${t=>{const e=parseInt(t.target.value,10);this._updateEditingEntry({level:e})}}
              >
                <option value="0">${this.translations.levelOff}</option>
                <option value="1">${this.translations.levelOn}</option>
              </select>
            `:j`
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(Math.round(100*this._editingEntry.level))}
                @input=${t=>{const e=parseInt(t.target.value,10)/100;this._updateEditingEntry({level:e})}}
              />
              <span>${Math.round(100*this._editingEntry.level)}%</span>
            `}
      </div>
      ${t?.hasLevel2?j`
            <div class="form-group">
              <label>${this.translations.slat}</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(Math.round(100*(this._editingEntry.level_2||0)))}
                @input=${t=>{const e=parseInt(t.target.value,10)/100;this._updateEditingEntry({level_2:e})}}
              />
              <span>${Math.round(100*(this._editingEntry.level_2||0))}%</span>
            </div>
          `:""}
    `}_renderDurationFields(){if(!this._editingEntry)return j``;const t=this.domain?gt[this.domain]:void 0;if(t&&!t.hasDuration)return j``;const e=this._editingEntry.duration?Tt(this._editingEntry.duration):null,i=e?.value??0,s=e?.unit??"s";return j`
      <div class="form-group">
        <label>${this.translations.duration}</label>
        <div class="duration-row">
          <input
            type="number"
            min="0"
            .value=${String(i)}
            @input=${t=>{const e=parseFloat(t.target.value);!isNaN(e)&&e>0?this._updateEditingEntry({duration:Dt(e,s)}):this._updateEditingEntry({duration:null})}}
          />
          <select
            .value=${s}
            @change=${t=>{i>0&&this._updateEditingEntry({duration:Dt(i,t.target.value)})}}
          >
            ${vt.map(t=>j` <option value=${t} ?selected=${t===s}>${t}</option> `)}
          </select>
        </div>
      </div>
    `}_renderRampTimeFields(){if(!this._editingEntry)return j``;const t=this.domain?gt[this.domain]:void 0;if(t&&!t.hasRampTime)return j``;const e=this._editingEntry.ramp_time?Tt(this._editingEntry.ramp_time):null,i=e?.value??0,s=e?.unit??"s";return j`
      <div class="form-group">
        <label>${this.translations.rampTime}</label>
        <div class="duration-row">
          <input
            type="number"
            min="0"
            .value=${String(i)}
            @input=${t=>{const e=parseFloat(t.target.value);!isNaN(e)&&e>0?this._updateEditingEntry({ramp_time:Dt(e,s)}):this._updateEditingEntry({ramp_time:null})}}
          />
          <select
            .value=${s}
            @change=${t=>{i>0&&this._updateEditingEntry({ramp_time:Dt(i,t.target.value)})}}
          >
            ${vt.map(t=>j` <option value=${t} ?selected=${t===s}>${t}</option> `)}
          </select>
        </div>
      </div>
    `}_renderChannelFields(){return this._editingEntry?this.availableTargetChannels&&Object.keys(this.availableTargetChannels).length>0?j`
        <div class="form-group">
          <label>${this.translations.channels}</label>
          <div class="channel-checkboxes">
            ${Object.entries(this.availableTargetChannels).map(([t,e])=>{const i=this._editingEntry.target_channels.includes(t);return j`
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    .checked=${i}
                    @change=${e=>{const i=e.target.checked,s=[...this._editingEntry.target_channels];if(i&&!s.includes(t))s.push(t);else if(!i){const e=s.indexOf(t);e>-1&&s.splice(e,1)}this._updateEditingEntry({target_channels:s})}}
                  />
                  ${e.name||t}
                </label>
              `})}
          </div>
        </div>
      `:j`
      <div class="form-group">
        <label>${this.translations.channels}</label>
        <input
          type="text"
          .value=${this._editingEntry.target_channels.join(", ")}
          @input=${t=>{const e=t.target.value.split(",").map(t=>t.trim()).filter(t=>t.length>0);this._updateEditingEntry({target_channels:e})}}
          placeholder="1_1, 2_1"
        />
      </div>
    `:j``}};oe([ht({type:Boolean})],ne.prototype,"open",void 0),oe([ht({attribute:!1})],ne.prototype,"entry",void 0),oe([ht()],ne.prototype,"groupNo",void 0),oe([ht({type:Boolean})],ne.prototype,"isNewEvent",void 0),oe([ht({attribute:!1})],ne.prototype,"domain",void 0),oe([ht({attribute:!1})],ne.prototype,"availableTargetChannels",void 0),oe([ht({attribute:!1})],ne.prototype,"translations",void 0),oe([pt()],ne.prototype,"_editingEntry",void 0),oe([pt()],ne.prototype,"_validationErrors",void 0),ne=oe([Bt("hmip-device-schedule-editor")],ne);const re={en:{weekdays:{short:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"},long:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"}},domains:{switch:"Switch",light:"Light",cover:"Cover",valve:"Valve"},conditions:{fixed_time:"Fixed Time",astro:"Astro",fixed_if_before_astro:"Fixed if before Astro",astro_if_before_fixed:"Astro if before Fixed",fixed_if_after_astro:"Fixed if after Astro",astro_if_after_fixed:"Astro if after Fixed",earliest:"Earliest",latest:"Latest"},ui:{schedule:"Schedule",loading:"Loading schedule data...",entityNotFound:"Entity {entity} not found",clickToEdit:"Click on a day to edit its schedule",edit:"Edit {weekday}",cancel:"Cancel",save:"Save",addTimeBlock:"+ Add Time Block",copySchedule:"Copy schedule",pasteSchedule:"Paste schedule",undo:"Undo",redo:"Redo",undoShortcut:"Undo (Ctrl+Z)",redoShortcut:"Redo (Ctrl+Y)",toggleCompactView:"Compact view",toggleFullView:"Full view",exportSchedule:"Export",importSchedule:"Import",exportTooltip:"Export schedule to JSON file",importTooltip:"Import schedule from JSON file",exportSuccess:"Schedule exported successfully",importSuccess:"Schedule imported successfully",unsavedChanges:"Unsaved changes",saveAll:"Save all",discard:"Discard",enableDragDrop:"Enable drag & drop mode",disableDragDrop:"Disable drag & drop mode",confirmDiscardChanges:"You have unsaved changes. Do you want to discard them?",level:"Level",levelOn:"On",levelOff:"Off",slat:"Slat Position",addEvent:"Add Event",editEvent:"Edit Event",time:"Time",duration:"Duration",rampTime:"Ramp Time",state:"State",weekdays:"Weekdays",channels:"Target Channels",condition:"Condition",astroSunrise:"Sunrise",astroSunset:"Sunset",astroOffset:"Astro Offset (min)",maxEntriesReached:"Maximum number of entries reached ({max})",confirmDelete:"Are you sure you want to delete this event?"},errors:{failedToChangeProfile:"Failed to change profile: {error}",failedToSaveSchedule:"Failed to save schedule: {error}",failedToPasteSchedule:"Failed to paste schedule: {error}",invalidSchedule:"Invalid schedule: {error}",failedToExport:"Failed to export schedule: {error}",failedToImport:"Failed to import schedule: {error}",invalidImportFile:"Invalid file format. Please select a JSON file.",invalidImportFormat:"Invalid JSON format in file.",invalidImportData:"Invalid schedule data: {error}",incompatibleEntity:"Entity {entity} is not a compatible schedule entity (requires schedule_type 'default' and schedule_api_version 'v1.0')"},warnings:{title:"Validation Warnings",noWarnings:"No issues detected"}},de:{weekdays:{short:{monday:"Mo",tuesday:"Di",wednesday:"Mi",thursday:"Do",friday:"Fr",saturday:"Sa",sunday:"So"},long:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag"}},domains:{switch:"Schalter",light:"Licht",cover:"Rollladen",valve:"Ventil"},conditions:{fixed_time:"Feste Zeit",astro:"Astro",fixed_if_before_astro:"Fest wenn vor Astro",astro_if_before_fixed:"Astro wenn vor Fest",fixed_if_after_astro:"Fest wenn nach Astro",astro_if_after_fixed:"Astro wenn nach Fest",earliest:"Frühester",latest:"Spätester"},ui:{schedule:"Zeitplan",loading:"Zeitplandaten werden geladen...",entityNotFound:"Entität {entity} nicht gefunden",clickToEdit:"Klicken Sie auf einen Tag, um den Zeitplan zu bearbeiten",edit:"{weekday} bearbeiten",cancel:"Abbrechen",save:"Speichern",addTimeBlock:"+ Zeitblock hinzufügen",copySchedule:"Zeitplan kopieren",pasteSchedule:"Zeitplan einfügen",undo:"Rückgängig",redo:"Wiederholen",undoShortcut:"Rückgängig (Strg+Z)",redoShortcut:"Wiederholen (Strg+Y)",toggleCompactView:"Kompaktansicht",toggleFullView:"Vollansicht",exportSchedule:"Exportieren",importSchedule:"Importieren",exportTooltip:"Zeitplan als JSON-Datei exportieren",importTooltip:"Zeitplan aus JSON-Datei importieren",exportSuccess:"Zeitplan erfolgreich exportiert",importSuccess:"Zeitplan erfolgreich importiert",unsavedChanges:"Ungespeicherte Änderungen",saveAll:"Alle speichern",discard:"Verwerfen",enableDragDrop:"Drag & Drop Modus aktivieren",disableDragDrop:"Drag & Drop Modus deaktivieren",confirmDiscardChanges:"Sie haben ungespeicherte Änderungen. Möchten Sie diese verwerfen?",level:"Stufe",levelOn:"Ein",levelOff:"Aus",slat:"Lamellenposition",addEvent:"Ereignis hinzufügen",editEvent:"Ereignis bearbeiten",time:"Zeit",duration:"Dauer",rampTime:"Rampenzeit",state:"Zustand",weekdays:"Wochentage",channels:"Zielkanäle",condition:"Bedingung",astroSunrise:"Sonnenaufgang",astroSunset:"Sonnenuntergang",astroOffset:"Astro-Offset (Min.)",maxEntriesReached:"Maximale Anzahl an Einträgen erreicht ({max})",confirmDelete:"Möchten Sie dieses Ereignis wirklich löschen?"},errors:{failedToChangeProfile:"Fehler beim Wechseln des Profils: {error}",failedToSaveSchedule:"Fehler beim Speichern des Zeitplans: {error}",failedToPasteSchedule:"Fehler beim Einfügen des Zeitplans: {error}",invalidSchedule:"Ungültiger Zeitplan: {error}",failedToExport:"Fehler beim Exportieren des Zeitplans: {error}",failedToImport:"Fehler beim Importieren des Zeitplans: {error}",invalidImportFile:"Ungültiges Dateiformat. Bitte wählen Sie eine JSON-Datei.",invalidImportFormat:"Ungültiges JSON-Format in der Datei.",invalidImportData:"Ungültige Zeitplandaten: {error}",incompatibleEntity:"Entität {entity} ist keine kompatible Zeitplan-Entität (erfordert schedule_type 'default' und schedule_api_version 'v1.0')"},warnings:{title:"Validierungswarnungen",noWarnings:"Keine Probleme erkannt"}}};function ae(t){const e=t.toLowerCase().split("-")[0];return re[e]||re.en}function de(t,e){let i=t;for(const[t,s]of Object.entries(e))i=i.replace(`{${t}}`,s);return i}let le=class extends at{constructor(){super(...arguments),this._isLoading=!1,this._translations=ae("en"),this._showEditor=!1,this._isNewEvent=!1}get _isEditable(){return(this._config?.editable??!0)&&!1!==this.hass?.user?.is_admin}setConfig(t){const e=[],i=t=>{if(!t)return;const i=t.trim();i&&(e.includes(i)||e.push(i))};if(i(t.entity),Array.isArray(t.entities)&&t.entities.forEach(t=>i(t)),0===e.length)throw new Error("You need to define at least one entity");e.sort((t,e)=>t.localeCompare(e));const s=this._activeEntityId,o=e[0],n=s&&e.includes(s)?s:o;this._config={editable:!0,hour_format:"24",...t,entity:o,entities:[...e]},this._activeEntityId=n,this._editingEntry=void 0,this._editingGroupNo=void 0,this._showEditor=!1,this._updateLanguage()}_updateLanguage(){let t="en";this._config?.language?t=this._config.language:this.hass?.language?t=this.hass.language:this.hass?.locale?.language&&(t=this.hass.locale.language),this._translations=ae(t)}shouldUpdate(t){if(t.has("hass")){const e=t.get("hass");if(this.hass&&e){if(this.hass.language===e.language&&this.hass.locale?.language===e.locale?.language||this._updateLanguage(),this._activeEntityId&&!this._isLoading){const t=e.states?.[this._activeEntityId],i=this.hass.states?.[this._activeEntityId];t!==i&&this._updateScheduleData()}}else this.hass&&!e&&(this._updateLanguage(),this._updateScheduleData())}return t.has("_activeEntityId")&&this._updateScheduleData(),!0}_isValidScheduleEntity(t){const e=this.hass?.states?.[t];return!!e&&It(e.attributes)}_updateScheduleData(){if(!this._activeEntityId||!this.hass?.states)return this._scheduleData=void 0,this._domain=void 0,this._availableTargetChannels=void 0,void(this._maxEntries=void 0);const t=this.hass.states[this._activeEntityId];if(!t)return this._scheduleData=void 0,this._domain=void 0,this._availableTargetChannels=void 0,void(this._maxEntries=void 0);const e=t.attributes;if(!It(e))return this._scheduleData=void 0,this._domain=void 0,this._availableTargetChannels=void 0,void(this._maxEntries=void 0);this._scheduleData=e.schedule_data?.entries,this._availableTargetChannels=e.available_target_channels,this._maxEntries=e.max_entries,this._domain=e.schedule_domain?e.schedule_domain:this._config?.schedule_domain?this._config.schedule_domain:void 0}_getEntityName(t){const e=this.hass?.states?.[t];return e?.attributes?.friendly_name||t}_handleEntityChange(t){this._activeEntityId=t.target.value,this._closeEditor()}_getDeviceAddress(t){const e=this.hass?.states?.[t];if(e)return function(t){if(!t)return;const e=t.split(":");return 2===e.length?e[0]:void 0}(e.attributes.address)}_requireDeviceAddress(t){const e=this._getDeviceAddress(t);if(!e)throw new Error(`Cannot determine device address for entity ${t}`);return e}_requireConfigEntryId(t){const e=this.hass?.states?.[t],i=e?.attributes?.config_entry_id;if(!i)throw new Error(`Cannot resolve config_entry_id for entity ${t}. Ensure the entity has a valid config_entry_id attribute.`);return i}_onAddEvent(){if(this._maxEntries&&this._scheduleData&&Object.keys(this._scheduleData).length>=this._maxEntries)return void alert(de(this._translations.ui.maxEntriesReached,{max:String(this._maxEntries)}));const t=function(t){const e={weekdays:[],time:"00:00",condition:"fixed_time",astro_type:null,astro_offset_minutes:0,target_channels:[],level:0,level_2:null,duration:null,ramp_time:null};return"cover"===t&&(e.level_2=0),e}(this._domain);if(this._availableTargetChannels){const e=Object.keys(this._availableTargetChannels)[0];e&&(t.target_channels=[e])}const e=this._scheduleData?Object.keys(this._scheduleData).map(t=>parseInt(t,10)):[],i=e.length>0?Math.max(...e):0;this._editingGroupNo=String(i+1),this._editingEntry={...t},this._isNewEvent=!0,this._showEditor=!0}_onEditEvent(t){const e=t.detail.entry;this._editingGroupNo=e.groupNo,this._editingEntry={...e},this._isNewEvent=!1,this._showEditor=!0}_onDeleteEvent(t){if(!confirm(this._translations.ui.confirmDelete||"Delete this event?"))return;const e={...this._scheduleData};delete e[t.detail.entry.groupNo],this._saveSchedule(e)}_onSaveEvent(t){const{entry:e,groupNo:i}=t.detail,s={...this._scheduleData,[i]:e};this._saveSchedule(s),this._closeEditor()}_onEditorClosed(){this._closeEditor()}_closeEditor(){this._showEditor=!1,this._editingEntry=void 0,this._editingGroupNo=void 0,this._isNewEvent=!1}async _saveSchedule(t){if(!this._activeEntityId||!this.hass)return;const e=this._activeEntityId;this._startLoading();try{const i=this._requireConfigEntryId(e),s=this._requireDeviceAddress(e);await this.hass.callWS({type:"homematicip_local/config/set_device_schedule",entry_id:i,device_address:s,schedule_data:{entries:Ot(t)}}),this._scheduleData=t,this._needsManualReload(e)&&this._scheduleReloadDeviceConfig(e)}catch(t){alert(de(this._translations.errors.failedToSaveSchedule,{error:String(t)}))}finally{this._stopLoading()}}_startLoading(){this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1},1e4)}_stopLoading(){this._isLoading=!1,void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0)}_exportSchedule(){if(this._scheduleData&&this._activeEntityId)try{const t=this._getEntityName(this._activeEntityId),e={version:"2.0",entity:this._activeEntityId,schedule_domain:this._domain,exportDate:(new Date).toISOString(),schedule:this._scheduleData},i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s;const n=(new Date).toISOString().split("T")[0];o.download=`schedule-${t.replace(/[^a-zA-Z0-9]/g,"_")}-${n}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}catch(t){alert(de(this._translations.errors.failedToExport,{error:String(t)}))}}_importSchedule(){if(!this._isEditable)return;const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async t=>{const e=t.target.files?.[0];if(e)try{const t=await e.text(),i=JSON.parse(t);if(!i.schedule||"object"!=typeof i.schedule)throw new Error(this._translations.errors.invalidImportData);if(i.schedule_domain&&i.schedule_domain!==this._domain&&!confirm(`Warning: The imported schedule is for a ${i.schedule_domain} device, but the current entity is a ${this._domain} device. Continue anyway?`))return;await this._saveSchedule(i.schedule)}catch(t){t instanceof SyntaxError?alert(this._translations.errors.invalidImportFormat):alert(de(this._translations.errors.failedToImport,{error:String(t)}))}},t.click()}_needsManualReload(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];if(!e?.attributes?.interface_id)return!1;const i=e.attributes.interface_id;return i.endsWith("BidCos-RF")||i.endsWith("BidCos-Wired")||i.endsWith("VirtualDevices")}_scheduleReloadDeviceConfig(t){if(!this.hass)return;const e=this._getDeviceAddress(t);if(!e)return;const i=this.hass.states[t],s=i?.attributes?.config_entry_id;s&&setTimeout(async()=>{try{await this.hass.callWS({type:"homematicip_local/config/reload_device_config",entry_id:s,device_address:e})}catch(t){}},5e3)}_buildListTranslations(){const t=this._translations;return{weekdayShortLabels:{MONDAY:t.weekdays.short.monday,TUESDAY:t.weekdays.short.tuesday,WEDNESDAY:t.weekdays.short.wednesday,THURSDAY:t.weekdays.short.thursday,FRIDAY:t.weekdays.short.friday,SATURDAY:t.weekdays.short.saturday,SUNDAY:t.weekdays.short.sunday},time:t.ui.time,weekdays:t.ui.weekdays,duration:t.ui.duration,state:t.ui.state,addEvent:t.ui.addEvent,slat:t.ui.slat,noScheduleEvents:"No schedule events configured",loading:t.ui.loading}}_buildEditorTranslations(){const t=this._translations;return{weekdayShortLabels:{MONDAY:t.weekdays.short.monday,TUESDAY:t.weekdays.short.tuesday,WEDNESDAY:t.weekdays.short.wednesday,THURSDAY:t.weekdays.short.thursday,FRIDAY:t.weekdays.short.friday,SATURDAY:t.weekdays.short.saturday,SUNDAY:t.weekdays.short.sunday},addEvent:t.ui.addEvent,editEvent:t.ui.editEvent,cancel:t.ui.cancel,save:t.ui.save,time:t.ui.time,condition:t.ui.condition,weekdaysLabel:t.ui.weekdays,stateLabel:t.ui.state,duration:t.ui.duration,rampTime:t.ui.rampTime,channels:t.ui.channels,levelOn:t.ui.levelOn,levelOff:t.ui.levelOff,slat:t.ui.slat,astroSunrise:t.ui.astroSunrise,astroSunset:t.ui.astroSunset,astroOffset:t.ui.astroOffset,confirmDelete:t.ui.confirmDelete,conditionLabels:t.conditions}}_renderEntitySelector(){if(!this._config?.entities||this._config.entities.length<=1)return j``;const t=this._config.entities.filter(t=>this._isValidScheduleEntity(t));return 0===t.length?j``:j`
      <select
        class="entity-selector-dropdown"
        @change=${this._handleEntityChange}
        .value=${this._activeEntityId||""}
      >
        ${t.map(t=>j`
            <option value=${t} ?selected=${t===this._activeEntityId}>
              ${this._getEntityName(t)}
            </option>
          `)}
      </select>
    `}_renderHeaderControls(){return j`
      <div class="header-controls">
        ${this._config?.entities&&this._config.entities.length>1?this._renderEntitySelector():""}
        <button
          class="export-btn"
          @click=${this._exportSchedule}
          title="${this._translations.ui.exportTooltip}"
          ?disabled=${!this._scheduleData}
        >
          ⬇️
        </button>
        ${this._isEditable?j`<button
              class="import-btn"
              @click=${this._importSchedule}
              title="${this._translations.ui.importTooltip}"
            >
              ⬆️
            </button>`:""}
      </div>
    `}render(){if(!this._config||!this.hass)return j``;const t=this._activeEntityId?this.hass.states?.[this._activeEntityId]:void 0,e=this._config.name||t?.attributes?.friendly_name||this._translations.ui.schedule;return t?this._isValidScheduleEntity(this._activeEntityId)?j`
      <ha-card>
        <div class="card-header">
          <div class="header-left">
            <div class="card-title">${e}</div>
          </div>
        </div>
        ${this._renderHeaderControls()}
        <div class="card-content">
          ${this._scheduleData?j`
                <hmip-device-schedule-list
                  .scheduleData=${this._scheduleData}
                  .domain=${this._domain}
                  .editable=${this._isEditable}
                  .translations=${this._buildListTranslations()}
                  @add-event=${this._onAddEvent}
                  @edit-event=${this._onEditEvent}
                  @delete-event=${this._onDeleteEvent}
                ></hmip-device-schedule-list>
              `:j`<div class="loading">${this._translations.ui.loading}</div>`}
          ${this._isEditable?j`<div class="hint">${this._translations.ui.clickToEdit}</div>`:""}
        </div>
        ${this._isLoading?j`
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `:""}
      </ha-card>
      <hmip-device-schedule-editor
        .open=${this._showEditor}
        .entry=${this._editingEntry}
        .groupNo=${this._editingGroupNo}
        .isNewEvent=${this._isNewEvent}
        .domain=${this._domain}
        .availableTargetChannels=${this._availableTargetChannels}
        .translations=${this._buildEditorTranslations()}
        @save-event=${this._onSaveEvent}
        @editor-closed=${this._onEditorClosed}
      ></hmip-device-schedule-editor>
    `:j`
        <ha-card>
          <div class="card-header">
            <div class="header-left">
              <div class="card-title">${e}</div>
            </div>
          </div>
          ${this._renderHeaderControls()}
          <div class="card-content">
            <div class="error">
              ${de(this._translations.errors.incompatibleEntity,{entity:this._activeEntityId})}
            </div>
          </div>
        </ha-card>
      `:j`
        <ha-card>
          <div class="card-header">
            <div class="header-left">
              <div class="card-title">${e}</div>
            </div>
          </div>
          <div class="card-content">
            <div class="error">
              ${de(this._translations.ui.entityNotFound,{entity:this._activeEntityId||this._translations.ui.schedule})}
            </div>
          </div>
        </ha-card>
      `}static get styles(){return r`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
        position: relative;
      }

      .card-header {
        display: block;
        margin-bottom: 8px;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .card-title {
        font-size: 24px;
        font-weight: 400;
        color: var(--primary-text-color);
      }

      .header-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 16px;
      }

      .entity-selector-dropdown {
        flex: 1;
        max-width: 300px;
        padding: 8px 12px;
        font-size: 14px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        cursor: pointer;
      }

      .export-btn,
      .import-btn {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.2s;
        line-height: 1;
      }

      .export-btn:hover,
      .import-btn:hover {
        background-color: var(--divider-color);
      }

      .export-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .export-btn:disabled:hover {
        background-color: var(--card-background-color);
      }

      .card-content {
        position: relative;
      }

      .loading {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .hint {
        margin-top: 12px;
        text-align: center;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .error {
        padding: 20px;
        text-align: center;
        color: var(--error-color, #e74c3c);
      }

      /* Loading Overlay */
      .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        border-radius: 4px;
      }

      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-top-color: var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      /* Mobile Optimization */
      @media (max-width: 768px) {
        ha-card {
          padding: 12px;
        }

        .card-header {
          margin-bottom: 12px;
        }

        .header-left {
          justify-content: center;
        }

        .card-title {
          font-size: 20px;
        }

        .header-controls {
          flex-wrap: wrap;
          justify-content: center;
        }

        .entity-selector-dropdown {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
          max-width: none;
          flex: 1 1 100%;
        }

        .export-btn,
        .import-btn {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
        }
      }
    `}getCardSize(){return 4}static getConfigElement(){return document.createElement("homematicip-local-schedule-card-editor")}static getStubConfig(){return{entity:"",editable:!0,hour_format:"24"}}};t([ht({attribute:!1})],le.prototype,"hass",void 0),t([pt()],le.prototype,"_config",void 0),t([pt()],le.prototype,"_scheduleData",void 0),t([pt()],le.prototype,"_activeEntityId",void 0),t([pt()],le.prototype,"_domain",void 0),t([pt()],le.prototype,"_isLoading",void 0),t([pt()],le.prototype,"_translations",void 0),t([pt()],le.prototype,"_editingEntry",void 0),t([pt()],le.prototype,"_editingGroupNo",void 0),t([pt()],le.prototype,"_showEditor",void 0),t([pt()],le.prototype,"_isNewEvent",void 0),t([pt()],le.prototype,"_availableTargetChannels",void 0),t([pt()],le.prototype,"_maxEntries",void 0),le=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("homematicip-local-schedule-card")],le),window.customCards=window.customCards||[],window.customCards.push({type:"homematicip-local-schedule-card",name:"HomematicIP Local Scheduler Card",description:"A custom card for Homematic(IP) Local schedules (switch, valve, cover, light)"});export{le as HomematicScheduleCard};
