function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,v=g.trustedTypes,A=v?v.emptyScript:"",f=g.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?A:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??_)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,f?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");const E=globalThis,w=t=>t,$=E.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+P,I=`<${T}>`,D=document,k=()=>D.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,H="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,L=/>/g,B=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,Q=/"/g,W=/^(?:script|style|textarea|title)$/i,U=(t,...e)=>({_$litType$:1,strings:t,values:e}),F=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Z=new WeakMap,G=D.createTreeWalker(D,129);function X(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,d]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=O;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===O?"!--"===l[1]?o=M:void 0!==l[1]?o=L:void 0!==l[2]?(W.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=B):void 0!==l[3]&&(o=B):o===B?">"===l[0]?(o=n??O,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?B:'"'===l[3]?Q:z):o===Q||o===z?o=B:o===M||o===L?o=O:(o=B,n=void 0);const h=o===B&&t[e+1].startsWith("/>")?" ":"";r+=o===O?i+I:d>=0?(s.push(a),i.slice(0,d)+C+i.slice(d)+P+h):i+P+(-2===d?e:h)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=V.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=d[r++],i=s.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),G.nextNode(),a.push({type:2,index:++n});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===T)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:n}),t+=P.length-1}n++}}static createElement(t,e){const i=D.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===F)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=N(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??D).importNode(e,!0);G.currentNode=s;let n=G.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new st(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=G.nextNode(),r++)}return G.currentNode=D,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),N(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=V.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new V(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,s[i+o],e,o),a===F&&(a=this._$AH[o]),r||=!N(a)||a!==this._$AH[o],a===j?t=j:t!==j&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class it extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??j)===F)return;const i=this._$AH,s=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==j&&(i===j||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt={I:q},rt=E.litHtmlPolyfillSupport;rt?.(V,q),(E.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new q(e.insertBefore(k(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const lt=ot.litElementPolyfillSupport;lt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},ct=(t=dt,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return ht({...t,state:!0,attribute:!1})}let pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:gt}=nt,vt=t=>t,At=()=>document.createComment(""),ft=(t,e,i)=>{const s=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(At(),n),r=s.insertBefore(At(),n);i=new gt(e,r,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,o=r!==t;if(o){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==n||o){let t=i._$AA;for(;t!==e;){const e=vt(t).nextSibling;vt(s).insertBefore(t,n),t=e}}}return i},mt=(t,e,i=t)=>(t._$AI(e,i),t),yt={},_t=(t,e=yt)=>t._$AH=e,bt=t=>{t._$AR(),t._$AA.remove()},xt=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},Et=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let o=0;for(const e of t)n[o]=s?s(e,o):o,r[o]=i(e,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=(t=>t._$AH)(t),{values:r,keys:o}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let d,c,h=0,u=n.length-1,p=0,g=r.length-1;for(;h<=u&&p<=g;)if(null===n[h])h++;else if(null===n[u])u--;else if(a[h]===o[p])l[p]=mt(n[h],r[p]),h++,p++;else if(a[u]===o[g])l[g]=mt(n[u],r[g]),u--,g--;else if(a[h]===o[g])l[g]=mt(n[h],r[g]),ft(t,l[g+1],n[h]),h++,g--;else if(a[u]===o[p])l[p]=mt(n[u],r[p]),ft(t,n[h],n[u]),u--,p++;else if(void 0===d&&(d=xt(o,p,g),c=xt(a,h,u)),d.has(a[h]))if(d.has(a[u])){const e=c.get(o[p]),i=void 0!==e?n[e]:null;if(null===i){const e=ft(t,n[h]);mt(e,r[p]),l[p]=e}else l[p]=mt(i,r[p]),ft(t,n[h],i),n[e]=null;p++}else bt(n[u]),u--;else bt(n[h]),h++;for(;p<=g;){const e=ft(t,l[g+1]);mt(e,r[p]),l[p++]=e}for(;h<=u;){const t=n[h++];null!==t&&bt(t)}return this.ut=o,_t(t,l),F}}),wt=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],$t=["fixed_time","astro","fixed_if_before_astro","astro_if_before_fixed","fixed_if_after_astro","astro_if_after_fixed","earliest","latest"],St={switch:{levelType:"binary",hasLevel2:!1,hasDuration:!0,hasRampTime:!1},light:{levelType:"percentage",hasLevel2:!1,hasDuration:!0,hasRampTime:!0},cover:{levelType:"percentage",hasLevel2:!0,hasDuration:!1,hasRampTime:!1},valve:{levelType:"percentage",hasLevel2:!1,hasDuration:!0,hasRampTime:!1}},Ct=["ms","s","min","h"];function Pt(t){return Boolean(t.weekdays&&t.weekdays.length>0&&t.target_channels&&t.target_channels.length>0)}const Tt=/^(\d+(?:\.\d+)?)\s*(ms|s|min|h)$/;function It(t){const e=t.trim().match(Tt);return e?{value:parseFloat(e[1]),unit:e[2]}:null}function Dt(t,e){return`${t}${e}`}function kt(t){return Tt.test(t.trim())}function Nt(t){return"fixed_time"!==t}function Rt(t){return"default"===t.schedule_type&&"v1.0"===t.schedule_api_version}const Ht={en:{weekdays:{short:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"},long:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"}},domains:{switch:"Switch",light:"Light",cover:"Cover",valve:"Valve"},conditions:{fixed_time:"Fixed Time",astro:"Astro",fixed_if_before_astro:"Fixed if before Astro",astro_if_before_fixed:"Astro if before Fixed",fixed_if_after_astro:"Fixed if after Astro",astro_if_after_fixed:"Astro if after Fixed",earliest:"Earliest",latest:"Latest"},ui:{schedule:"Schedule",loading:"Loading schedule data...",entityNotFound:"Entity {entity} not found",clickToEdit:"Click on a day to edit its schedule",edit:"Edit {weekday}",cancel:"Cancel",save:"Save",addTimeBlock:"+ Add Time Block",copySchedule:"Copy schedule",pasteSchedule:"Paste schedule",undo:"Undo",redo:"Redo",undoShortcut:"Undo (Ctrl+Z)",redoShortcut:"Redo (Ctrl+Y)",toggleCompactView:"Compact view",toggleFullView:"Full view",exportSchedule:"Export",importSchedule:"Import",exportTooltip:"Export schedule to JSON file",importTooltip:"Import schedule from JSON file",exportSuccess:"Schedule exported successfully",importSuccess:"Schedule imported successfully",unsavedChanges:"Unsaved changes",saveAll:"Save all",discard:"Discard",enableDragDrop:"Enable drag & drop mode",disableDragDrop:"Disable drag & drop mode",confirmDiscardChanges:"You have unsaved changes. Do you want to discard them?",level:"Level",levelOn:"On",levelOff:"Off",slat:"Slat Position",addEvent:"Add Event",editEvent:"Edit Event",time:"Time",duration:"Duration",rampTime:"Ramp Time",state:"State",weekdays:"Weekdays",channels:"Target Channels",condition:"Condition",astroSunrise:"Sunrise",astroSunset:"Sunset",astroOffset:"Astro Offset (min)",maxEntriesReached:"Maximum number of entries reached ({max})",confirmDelete:"Are you sure you want to delete this event?"},errors:{failedToChangeProfile:"Failed to change profile: {error}",failedToSaveSchedule:"Failed to save schedule: {error}",failedToPasteSchedule:"Failed to paste schedule: {error}",invalidSchedule:"Invalid schedule: {error}",failedToExport:"Failed to export schedule: {error}",failedToImport:"Failed to import schedule: {error}",invalidImportFile:"Invalid file format. Please select a JSON file.",invalidImportFormat:"Invalid JSON format in file.",invalidImportData:"Invalid schedule data: {error}",incompatibleEntity:"Entity {entity} is not a compatible schedule entity (requires schedule_type 'default' and schedule_api_version 'v1.0')"},warnings:{title:"Validation Warnings",noWarnings:"No issues detected"}},de:{weekdays:{short:{monday:"Mo",tuesday:"Di",wednesday:"Mi",thursday:"Do",friday:"Fr",saturday:"Sa",sunday:"So"},long:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag"}},domains:{switch:"Schalter",light:"Licht",cover:"Rollladen",valve:"Ventil"},conditions:{fixed_time:"Feste Zeit",astro:"Astro",fixed_if_before_astro:"Fest wenn vor Astro",astro_if_before_fixed:"Astro wenn vor Fest",fixed_if_after_astro:"Fest wenn nach Astro",astro_if_after_fixed:"Astro wenn nach Fest",earliest:"Frühester",latest:"Spätester"},ui:{schedule:"Zeitplan",loading:"Zeitplandaten werden geladen...",entityNotFound:"Entität {entity} nicht gefunden",clickToEdit:"Klicken Sie auf einen Tag, um den Zeitplan zu bearbeiten",edit:"{weekday} bearbeiten",cancel:"Abbrechen",save:"Speichern",addTimeBlock:"+ Zeitblock hinzufügen",copySchedule:"Zeitplan kopieren",pasteSchedule:"Zeitplan einfügen",undo:"Rückgängig",redo:"Wiederholen",undoShortcut:"Rückgängig (Strg+Z)",redoShortcut:"Wiederholen (Strg+Y)",toggleCompactView:"Kompaktansicht",toggleFullView:"Vollansicht",exportSchedule:"Exportieren",importSchedule:"Importieren",exportTooltip:"Zeitplan als JSON-Datei exportieren",importTooltip:"Zeitplan aus JSON-Datei importieren",exportSuccess:"Zeitplan erfolgreich exportiert",importSuccess:"Zeitplan erfolgreich importiert",unsavedChanges:"Ungespeicherte Änderungen",saveAll:"Alle speichern",discard:"Verwerfen",enableDragDrop:"Drag & Drop Modus aktivieren",disableDragDrop:"Drag & Drop Modus deaktivieren",confirmDiscardChanges:"Sie haben ungespeicherte Änderungen. Möchten Sie diese verwerfen?",level:"Stufe",levelOn:"Ein",levelOff:"Aus",slat:"Lamellenposition",addEvent:"Ereignis hinzufügen",editEvent:"Ereignis bearbeiten",time:"Zeit",duration:"Dauer",rampTime:"Rampenzeit",state:"Zustand",weekdays:"Wochentage",channels:"Zielkanäle",condition:"Bedingung",astroSunrise:"Sonnenaufgang",astroSunset:"Sonnenuntergang",astroOffset:"Astro-Offset (Min.)",maxEntriesReached:"Maximale Anzahl an Einträgen erreicht ({max})",confirmDelete:"Möchten Sie dieses Ereignis wirklich löschen?"},errors:{failedToChangeProfile:"Fehler beim Wechseln des Profils: {error}",failedToSaveSchedule:"Fehler beim Speichern des Zeitplans: {error}",failedToPasteSchedule:"Fehler beim Einfügen des Zeitplans: {error}",invalidSchedule:"Ungültiger Zeitplan: {error}",failedToExport:"Fehler beim Exportieren des Zeitplans: {error}",failedToImport:"Fehler beim Importieren des Zeitplans: {error}",invalidImportFile:"Ungültiges Dateiformat. Bitte wählen Sie eine JSON-Datei.",invalidImportFormat:"Ungültiges JSON-Format in der Datei.",invalidImportData:"Ungültige Zeitplandaten: {error}",incompatibleEntity:"Entität {entity} ist keine kompatible Zeitplan-Entität (erfordert schedule_type 'default' und schedule_api_version 'v1.0')"},warnings:{title:"Validierungswarnungen",noWarnings:"Keine Probleme erkannt"}}};function Ot(t){const e=t.toLowerCase().split("-")[0];return Ht[e]||Ht.en}function Mt(t,e){let i=t;for(const[t,s]of Object.entries(e))i=i.replace(`{${t}}`,s);return i}const Lt="data:image/png;base64,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";let Bt=class extends at{constructor(){super(...arguments),this._isLoading=!1,this._translations=Ot("en"),this._showEditor=!1}setConfig(t){const e=[],i=t=>{if(!t)return;const i=t.trim();i&&(e.includes(i)||e.push(i))};if(i(t.entity),Array.isArray(t.entities)&&t.entities.forEach(t=>i(t)),0===e.length)throw new Error("You need to define at least one entity");e.sort((t,e)=>t.localeCompare(e));const s=this._activeEntityId,n=e[0],r=s&&e.includes(s)?s:n;this._config={editable:!0,hour_format:"24",...t,entity:n,entities:[...e]},this._activeEntityId=r,this._editingEntry=void 0,this._editingGroupNo=void 0,this._showEditor=!1,this._updateLanguage()}_updateLanguage(){let t="en";this._config?.language?t=this._config.language:this.hass?.language?t=this.hass.language:this.hass?.locale?.language&&(t=this.hass.locale.language),this._translations=Ot(t)}shouldUpdate(t){if(t.has("hass")){const e=t.get("hass");if(this.hass&&e){if(this.hass.language===e.language&&this.hass.locale?.language===e.locale?.language||this._updateLanguage(),this._activeEntityId){const t=e.states?.[this._activeEntityId],i=this.hass.states?.[this._activeEntityId];t!==i&&this._updateScheduleData()}}else this.hass&&!e&&this._updateScheduleData()}return t.has("_activeEntityId")&&this._updateScheduleData(),!0}_isValidScheduleEntity(t){const e=this.hass?.states?.[t];return!!e&&Rt(e.attributes)}_updateScheduleData(){if(!this._activeEntityId||!this.hass?.states)return this._scheduleData=void 0,this._domain=void 0,this._availableTargetChannels=void 0,void(this._maxEntries=void 0);const t=this.hass.states[this._activeEntityId];if(!t)return this._scheduleData=void 0,this._domain=void 0,this._availableTargetChannels=void 0,void(this._maxEntries=void 0);const e=t.attributes;if(!Rt(e))return this._scheduleData=void 0,this._domain=void 0,this._availableTargetChannels=void 0,void(this._maxEntries=void 0);this._scheduleData=e.schedule_data,this._availableTargetChannels=e.available_target_channels,this._maxEntries=e.max_entries,this._config?.schedule_domain?this._domain=this._config.schedule_domain:e.schedule_domain&&(this._domain=e.schedule_domain)}_getEntityName(t){const e=this.hass?.states?.[t];return e?.attributes?.friendly_name||t}_handleEntityChange(t){this._activeEntityId=t.target.value,this._closeEditor()}_getDeviceAddress(t){const e=this.hass?.states?.[t];if(e)return function(t){if(!t)return;const e=t.split(":");return 2===e.length?e[0]:void 0}(e.attributes.address)}_requireDeviceAddress(t){const e=this._getDeviceAddress(t);if(!e)throw new Error(`Cannot determine device address for entity ${t}`);return e}_handleAddEvent(){if(this._maxEntries&&this._scheduleData&&Object.keys(this._scheduleData).length>=this._maxEntries)return void alert(Mt(this._translations.ui.maxEntriesReached,{max:String(this._maxEntries)}));const t=function(t){const e={weekdays:[],time:"00:00",condition:"fixed_time",astro_type:null,astro_offset_minutes:0,target_channels:[],level:0,level_2:null,duration:null,ramp_time:null};return"cover"===t&&(e.level_2=0),e}(this._domain);if(this._availableTargetChannels){const e=Object.keys(this._availableTargetChannels)[0];e&&(t.target_channels=[e])}const e=this._scheduleData?Object.keys(this._scheduleData).map(t=>parseInt(t,10)):[],i=e.length>0?Math.max(...e):0;this._editingGroupNo=String(i+1),this._editingEntry={...t},this._showEditor=!0}_handleEditEvent(t){this._editingGroupNo=t.groupNo,this._editingEntry={...t},this._showEditor=!0}_handleDeleteEvent(t){if(!confirm(this._translations.ui.confirmDelete||"Delete this event?"))return;const e={...this._scheduleData};delete e[t.groupNo],this._saveSchedule(e)}_closeEditor(){this._showEditor=!1,this._editingEntry=void 0,this._editingGroupNo=void 0}_handleSaveEvent(){if(!this._editingEntry||void 0===this._editingGroupNo)return;const t=function(t,e){const i=[];(function(t){try{return function(t){const e=t.split(":");if(2!==e.length)throw new Error(`Invalid time format: ${t}`);const i=parseInt(e[0],10),s=parseInt(e[1],10);if(isNaN(i)||isNaN(s)||i<0||i>23||s<0||s>59)throw new Error(`Invalid time values: ${t}`)}(t),!0}catch{return!1}})(t.time)||i.push({field:"time",message:"Time must be in HH:MM format (00:00-23:59)"}),t.weekdays&&0!==t.weekdays.length||i.push({field:"weekdays",message:"At least one weekday must be selected"}),t.target_channels&&0!==t.target_channels.length||i.push({field:"target_channels",message:"At least one target channel must be selected"});const s=e?St[e]:void 0;return"binary"===s?.levelType?0!==t.level&&1!==t.level&&i.push({field:"level",message:"Level must be 0 or 1 for switch"}):(t.level<0||t.level>1)&&i.push({field:"level",message:"Level must be between 0.0 and 1.0"}),"cover"===e&&null!==t.level_2&&(t.level_2<0||t.level_2>1)&&i.push({field:"level_2",message:"Slat position must be between 0.0 and 1.0"}),Nt(t.condition)&&(t.astro_offset_minutes<-720||t.astro_offset_minutes>720)&&i.push({field:"astro_offset_minutes",message:"Astro offset must be between -720 and 720 minutes"}),null===t.duration||kt(t.duration)||i.push({field:"duration",message:"Invalid duration format"}),null===t.ramp_time||kt(t.ramp_time)||i.push({field:"ramp_time",message:"Invalid ramp time format"}),i}(this._editingEntry,this._domain);if(t.length>0)return void alert(`Validation errors:\n${t.map(t=>`- ${t.field}: ${t.message}`).join("\n")}`);const e={...this._scheduleData,[this._editingGroupNo]:this._editingEntry};this._saveSchedule(e),this._closeEditor()}async _saveSchedule(t){if(!this._activeEntityId||!this.hass)return;const e=this._activeEntityId;this._startLoading();try{const i=this._requireDeviceAddress(e);await this.hass.callService("homematicip_local","set_schedule",{device_address:i,schedule_data:t}),this._scheduleData=t,this._needsManualReload(e)&&this._scheduleReloadDeviceConfig(e)}catch(t){alert(Mt(this._translations.errors.failedToSaveSchedule,{error:String(t)}))}finally{this._stopLoading()}}_startLoading(){this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1},1e4)}_stopLoading(){this._isLoading=!1,void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0)}_exportSchedule(){if(this._scheduleData&&this._activeEntityId)try{const t=this._getEntityName(this._activeEntityId),e={version:"2.0",entity:this._activeEntityId,schedule_domain:this._domain,exportDate:(new Date).toISOString(),schedule:this._scheduleData},i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(i),n=document.createElement("a");n.href=s;const r=(new Date).toISOString().split("T")[0];n.download=`schedule-${t.replace(/[^a-zA-Z0-9]/g,"_")}-${r}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(s)}catch(t){alert(Mt(this._translations.errors.failedToExport,{error:String(t)}))}}_importSchedule(){const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async t=>{const e=t.target.files?.[0];if(e)try{const t=await e.text(),i=JSON.parse(t);if(!i.schedule||"object"!=typeof i.schedule)throw new Error(this._translations.errors.invalidImportData);if(i.schedule_domain&&i.schedule_domain!==this._domain&&!confirm(`Warning: The imported schedule is for a ${i.schedule_domain} device, but the current entity is a ${this._domain} device. Continue anyway?`))return;await this._saveSchedule(i.schedule)}catch(t){t instanceof SyntaxError?alert(this._translations.errors.invalidImportFormat):alert(Mt(this._translations.errors.failedToImport,{error:String(t)}))}},t.click()}_needsManualReload(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];if(!e?.attributes?.interface_id)return!1;const i=e.attributes.interface_id;return i.endsWith("BidCos-RF")||i.endsWith("BidCos-Wired")||i.endsWith("VirtualDevices")}_scheduleReloadDeviceConfig(t){if(!this.hass)return;const e=this._getDeviceAddress(t);e&&setTimeout(async()=>{try{await this.hass.callService("homematicip_local","reload_device_config",{device_address:e})}catch(t){}},5e3)}_updateEditingEntry(t){this._editingEntry&&(this._editingEntry={...this._editingEntry,...t},this.requestUpdate())}_groupEntriesByWeekday(){const t=new Map;if(!this._scheduleData)return t;const e=function(t){const e=[];for(const[i,s]of Object.entries(t))e.push({...s,groupNo:i,isActive:Pt(s)});return e.sort((t,e)=>t.time.localeCompare(e.time)),e}(this._scheduleData);for(const i of e)for(const e of i.weekdays)t.has(e)||t.set(e,[]),t.get(e).push(i);return t}_renderEntitySelector(){if(!this._config?.entities||this._config.entities.length<=1)return U``;const t=this._config.entities.filter(t=>this._isValidScheduleEntity(t));return 0===t.length?U``:U`
      <select
        class="entity-selector-dropdown"
        @change=${this._handleEntityChange}
        .value=${this._activeEntityId||""}
      >
        ${t.map(t=>U`
            <option value=${t} ?selected=${t===this._activeEntityId}>
              ${this._getEntityName(t)}
            </option>
          `)}
      </select>
    `}_renderHeaderControls(){return U`
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
        <button
          class="import-btn"
          @click=${this._importSchedule}
          title="${this._translations.ui.importTooltip}"
        >
          ⬆️
        </button>
      </div>
    `}_renderScheduleList(){if(!this._scheduleData)return U`<div class="no-data">${this._translations.ui.loading}</div>`;const t=this._groupEntriesByWeekday();return 0===t.size?U`
        <div class="no-data">
          <p>No schedule events configured</p>
          ${this._config?.editable?U`<button @click=${this._handleAddEvent} class="add-button">
                ${this._translations.ui.addEvent||"Add Event"}
              </button>`:""}
        </div>
      `:U`
      <div class="schedule-list">
        ${this._config?.editable?U`<div class="toolbar">
              <button @click=${this._handleAddEvent} class="add-button">
                ${this._translations.ui.addEvent||"Add Event"}
              </button>
            </div>`:""}
        ${wt.map(e=>{const i=t.get(e)||[];return 0===i.length?U``:U`
            <div class="weekday-section">
              <div class="weekday-header">
                ${this._translations.weekdays.long[e.toLowerCase()]}
              </div>
              <div class="events-table">
                <div class="events-header">
                  <div class="col-time">${this._translations.ui.time||"Time"}</div>
                  <div class="col-duration">${this._translations.ui.duration||"Duration"}</div>
                  <div class="col-level">${this._translations.ui.state||"State"}</div>
                  ${this._config?.editable?U`<div class="col-actions"></div>`:""}
                </div>
                ${Et(i,t=>t.groupNo,t=>this._renderEvent(t))}
              </div>
            </div>
          `})}
      </div>
    `}_renderEvent(t){const e=function(t,e){const i=e?St[e]:void 0;return"binary"===i?.levelType?0===t?"Off":"On":`${Math.round(100*t)}%`}(t.level,this._domain),i=function(t){if(!t)return"-";const e=It(t);return e?`${e.value}${{ms:"ms",s:"s",min:"min",h:"h"}[e.unit]}`:t}(t.duration);return U`
      <div class="event-row ${t.isActive?"active":"inactive"}">
        <div class="col-time">${t.time}</div>
        <div class="col-duration">${i}</div>
        <div class="col-level">
          ${e}
          ${null!==t.level_2?U`<span class="level-2"
                >, ${this._translations.ui.slat}: ${Math.round(100*t.level_2)}%</span
              >`:""}
        </div>
        ${this._config?.editable?U`<div class="col-actions">
              <button @click=${()=>this._handleEditEvent(t)} class="icon-button" title="Edit">
                ✏️
              </button>
              <button
                @click=${()=>this._handleDeleteEvent(t)}
                class="icon-button"
                title="Delete"
              >
                🗑️
              </button>
            </div>`:""}
      </div>
    `}_renderEditor(){return this._showEditor&&this._editingEntry?U`
      <div class="editor-overlay" @click=${this._closeEditor}>
        <div class="editor-dialog" @click=${t=>t.stopPropagation()}>
          <div class="editor-header">
            <h3>
              ${this._scheduleData?.[this._editingGroupNo||""]?this._translations.ui.editEvent:this._translations.ui.addEvent}
            </h3>
            <button @click=${this._closeEditor} class="close-button">✕</button>
          </div>
          <div class="editor-content">
            ${this._renderTimeFields()} ${this._renderConditionFields()}
            ${this._renderWeekdayFields()} ${this._renderLevelFields()}
            ${this._renderDurationFields()} ${this._renderRampTimeFields()}
            ${this._renderChannelFields()}
          </div>
          <div class="editor-footer">
            <button @click=${this._closeEditor} class="button-secondary">
              ${this._translations.ui.cancel||"Cancel"}
            </button>
            <button @click=${this._handleSaveEvent} class="button-primary">
              ${this._translations.ui.save||"Save"}
            </button>
          </div>
        </div>
      </div>
    `:U``}_renderTimeFields(){return this._editingEntry?U`
      <div class="form-group">
        <label>${this._translations.ui.time||"Time"}</label>
        <input
          type="time"
          .value=${this._editingEntry.time}
          @change=${t=>{this._updateEditingEntry({time:t.target.value})}}
        />
      </div>
    `:U``}_renderConditionFields(){if(!this._editingEntry)return U``;const t=Nt(this._editingEntry.condition);return U`
      <div class="form-group">
        <label>${this._translations.ui.condition||"Condition"}</label>
        <select
          .value=${this._editingEntry.condition}
          @change=${t=>{const e=t.target.value,i={condition:e};"fixed_time"===e?(i.astro_type=null,i.astro_offset_minutes=0):null===this._editingEntry.astro_type&&(i.astro_type="sunrise"),this._updateEditingEntry(i)}}
        >
          ${$t.map(t=>U`
              <option value=${t} ?selected=${t===this._editingEntry.condition}>
                ${this._translations.conditions[t]||t}
              </option>
            `)}
        </select>
      </div>
      ${t?U`
            <div class="form-group">
              <label>${this._translations.ui.astroSunrise}/${this._translations.ui.astroSunset}</label>
              <select
                .value=${this._editingEntry.astro_type||"sunrise"}
                @change=${t=>{this._updateEditingEntry({astro_type:t.target.value})}}
              >
                <option value="sunrise" ?selected=${"sunrise"===this._editingEntry.astro_type}>
                  ${this._translations.ui.astroSunrise}
                </option>
                <option value="sunset" ?selected=${"sunset"===this._editingEntry.astro_type}>
                  ${this._translations.ui.astroSunset}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>${this._translations.ui.astroOffset}</label>
              <input
                type="number"
                min="-720"
                max="720"
                .value=${String(this._editingEntry.astro_offset_minutes)}
                @input=${t=>{const e=parseInt(t.target.value,10);isNaN(e)||this._updateEditingEntry({astro_offset_minutes:e})}}
              />
            </div>
          `:""}
    `}_renderWeekdayFields(){return this._editingEntry?U`
      <div class="form-group">
        <label>${this._translations.ui.weekdays||"Weekdays"}</label>
        <div class="weekday-checkboxes">
          ${wt.map(t=>{const e=this._editingEntry.weekdays.includes(t);return U`
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  .checked=${e}
                  @change=${e=>{const i=e.target.checked,s=[...this._editingEntry.weekdays];if(i&&!s.includes(t))s.push(t);else if(!i){const e=s.indexOf(t);e>-1&&s.splice(e,1)}this._updateEditingEntry({weekdays:s})}}
                />
                ${this._translations.weekdays.short[t.toLowerCase()]}
              </label>
            `})}
        </div>
      </div>
    `:U``}_renderLevelFields(){if(!this._editingEntry)return U``;const t=this._domain?St[this._domain]:void 0;return U`
      <div class="form-group">
        <label>${this._translations.ui.state||"State"}</label>
        ${"binary"===t?.levelType?U`
              <select
                .value=${String(this._editingEntry.level)}
                @change=${t=>{const e=parseInt(t.target.value,10);this._updateEditingEntry({level:e})}}
              >
                <option value="0">${this._translations.ui.levelOff}</option>
                <option value="1">${this._translations.ui.levelOn}</option>
              </select>
            `:U`
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
      ${t?.hasLevel2?U`
            <div class="form-group">
              <label>${this._translations.ui.slat||"Slat Position"}</label>
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
    `}_renderDurationFields(){if(!this._editingEntry)return U``;const t=this._domain?St[this._domain]:void 0;if(!t?.hasDuration)return U``;const e=this._editingEntry.duration?It(this._editingEntry.duration):null,i=e?.value??0,s=e?.unit??"s";return U`
      <div class="form-group">
        <label>${this._translations.ui.duration||"Duration"}</label>
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
            ${Ct.map(t=>U`
                <option value=${t} ?selected=${t===s}>${t}</option>
              `)}
          </select>
        </div>
      </div>
    `}_renderRampTimeFields(){if(!this._editingEntry)return U``;const t=this._domain?St[this._domain]:void 0;if(!t?.hasRampTime)return U``;const e=this._editingEntry.ramp_time?It(this._editingEntry.ramp_time):null,i=e?.value??0,s=e?.unit??"s";return U`
      <div class="form-group">
        <label>${this._translations.ui.rampTime||"Ramp Time"}</label>
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
            ${Ct.map(t=>U`
                <option value=${t} ?selected=${t===s}>${t}</option>
              `)}
          </select>
        </div>
      </div>
    `}_renderChannelFields(){return this._editingEntry?this._availableTargetChannels&&Object.keys(this._availableTargetChannels).length>0?U`
        <div class="form-group">
          <label>${this._translations.ui.channels||"Target Channels"}</label>
          <div class="channel-checkboxes">
            ${Object.entries(this._availableTargetChannels).map(([t,e])=>{const i=this._editingEntry.target_channels.includes(t);return U`
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
      `:U`
      <div class="form-group">
        <label>${this._translations.ui.channels||"Target Channels"}</label>
        <input
          type="text"
          .value=${this._editingEntry.target_channels.join(", ")}
          @input=${t=>{const e=t.target.value.split(",").map(t=>t.trim()).filter(t=>t.length>0);this._updateEditingEntry({target_channels:e})}}
          placeholder="1_1, 2_1"
        />
      </div>
    `:U``}render(){if(!this._config||!this.hass)return U``;const t=this._activeEntityId?this.hass.states?.[this._activeEntityId]:void 0,e=this._config.name||t?.attributes?.friendly_name||this._translations.ui.schedule;return t?this._isValidScheduleEntity(this._activeEntityId)?U`
      <ha-card>
        <div class="card-header">
          <div class="header-left">
            <img src="${Lt}" alt="HomematicIP" class="card-logo" />
            <div class="card-title">${e}</div>
          </div>
        </div>
        ${this._renderHeaderControls()}
        <div class="card-content">
          ${this._scheduleData?this._renderScheduleList():U`<div class="loading">${this._translations.ui.loading}</div>`}
          ${this._config?.editable?U`<div class="hint">${this._translations.ui.clickToEdit}</div>`:""}
        </div>
        ${this._isLoading?U`
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `:""}
      </ha-card>
      ${this._renderEditor()}
    `:U`
        <ha-card>
          <div class="card-header">
            <div class="header-left">
              <img src="${Lt}" alt="HomematicIP" class="card-logo" />
              <div class="card-title">${e}</div>
            </div>
          </div>
          ${this._renderHeaderControls()}
          <div class="card-content">
            <div class="error">
              ${Mt(this._translations.errors.incompatibleEntity,{entity:this._activeEntityId})}
            </div>
          </div>
        </ha-card>
      `:U`
        <ha-card>
          <div class="card-header">
            <div class="header-left">
              <img src="${Lt}" alt="HomematicIP" class="card-logo" />
              <div class="card-title">${e}</div>
            </div>
          </div>
          <div class="card-content">
            <div class="error">
              ${Mt(this._translations.ui.entityNotFound,{entity:this._activeEntityId||this._translations.ui.schedule})}
            </div>
          </div>
        </ha-card>
      `}static get styles(){return o`
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

      .no-data {
        text-align: center;
        padding: 32px;
        color: var(--secondary-text-color);
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

      .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .weekday-section {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
      }

      .weekday-header {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        padding: 8px 16px;
        font-weight: 500;
      }

      .events-table {
        display: flex;
        flex-direction: column;
      }

      .events-header {
        display: grid;
        grid-template-columns: 80px 100px 1fr 80px;
        gap: 12px;
        padding: 8px 16px;
        background-color: var(--secondary-background-color);
        font-weight: 500;
        font-size: 13px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
      }

      .events-header.no-actions {
        grid-template-columns: 80px 100px 1fr;
      }

      .event-row {
        display: grid;
        grid-template-columns: 80px 100px 1fr 80px;
        gap: 12px;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color);
        transition: background-color 0.2s;
      }

      .event-row.no-actions {
        grid-template-columns: 80px 100px 1fr;
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

      .col-duration {
        color: var(--secondary-text-color);
      }

      .col-level {
        color: var(--primary-text-color);
      }

      .col-level .level-2 {
        color: var(--secondary-text-color);
        font-size: 0.9em;
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

      .button-danger {
        background-color: var(--error-color, #e74c3c);
        color: white;
        border: none;
      }

      .button-danger:hover {
        opacity: 0.9;
      }

      /* Validation Warnings */
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

      .card-logo {
        height: 40px;
        width: auto;
        margin-right: 12px;
        object-fit: contain;
      }

      .error {
        padding: 20px;
        text-align: center;
        color: var(--error-color, #e74c3c);
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

        .add-button {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
          width: 100%;
        }

        .events-header {
          grid-template-columns: 60px 80px 1fr 60px;
          gap: 8px;
          padding: 8px 12px;
          font-size: 11px;
        }

        .event-row {
          grid-template-columns: 60px 80px 1fr 60px;
          gap: 8px;
          padding: 10px 12px;
        }

        .button-primary,
        .button-secondary {
          min-height: 44px;
          padding: 10px 16px;
        }
      }

      @media (max-width: 480px) {
        .events-header {
          grid-template-columns: 50px 60px 1fr 50px;
          gap: 6px;
          padding: 6px 8px;
          font-size: 10px;
        }

        .event-row {
          grid-template-columns: 50px 60px 1fr 50px;
          gap: 6px;
          padding: 8px;
        }

        .col-time {
          font-size: 12px;
        }

        .col-duration,
        .col-level {
          font-size: 12px;
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
    `}getCardSize(){return 4}static getConfigElement(){return document.createElement("homematicip-local-schedule-card-editor")}static getStubConfig(){return{entity:"",editable:!0,hour_format:"24"}}};t([ht({attribute:!1})],Bt.prototype,"hass",void 0),t([ut()],Bt.prototype,"_config",void 0),t([ut()],Bt.prototype,"_scheduleData",void 0),t([ut()],Bt.prototype,"_activeEntityId",void 0),t([ut()],Bt.prototype,"_domain",void 0),t([ut()],Bt.prototype,"_isLoading",void 0),t([ut()],Bt.prototype,"_translations",void 0),t([ut()],Bt.prototype,"_editingEntry",void 0),t([ut()],Bt.prototype,"_editingGroupNo",void 0),t([ut()],Bt.prototype,"_showEditor",void 0),t([ut()],Bt.prototype,"_availableTargetChannels",void 0),t([ut()],Bt.prototype,"_maxEntries",void 0),Bt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("homematicip-local-schedule-card")],Bt),window.customCards=window.customCards||[],window.customCards.push({type:"homematicip-local-schedule-card",name:"HomematicIP Local Scheduler Card",description:"A custom card for Homematic(IP) Local schedules (switch, valve, cover, light)"});export{Bt as HomematicScheduleCard};
