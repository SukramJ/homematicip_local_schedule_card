function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:d,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,A=globalThis,g=A.trustedTypes,v=g?g.emptyScript:"",f=A.reactiveElementPolyfillSupport,E=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!d(t,e),m={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),A.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[E("elementProperties")]=new Map,b[E("finalized")]=new Map,f?.({ReactiveElement:b}),(A.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,S=t=>t,$=x.trustedTypes,w=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,D="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+I,T=`<${C}>`,N=document,O=()=>N.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,P="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,U=/>/g,k=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,B=/"/g,z=/^(?:script|style|textarea|title)$/i,W=(t,...e)=>({_$litType$:1,strings:t,values:e}),X=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),V=new WeakMap,j=N.createTreeWalker(N,129);function Y(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[d,l]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,d=r.exec(i),null!==d);)c=r.lastIndex,r===H?"!--"===d[1]?r=M:void 0!==d[1]?r=U:void 0!==d[2]?(z.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=k):void 0!==d[3]&&(r=k):r===k?">"===d[0]?(r=o??H,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?k:'"'===d[3]?B:F):r===B||r===F?r=k:r===M||r===U?r=H:(r=k,o=void 0);const h=r===k&&t[e+1].startsWith("/>")?" ":"";n+=r===H?i+T:l>=0?(s.push(a),i.slice(0,l)+D+i.slice(l)+I+h):i+I+(-2===l?e:h)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=Z.createElement(d,i),j.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=j.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(D)){const e=l[n++],i=s.getAttribute(t).split(I),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:J}),s.removeAttribute(t)}else t.startsWith(I)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(z.test(s.tagName)){const t=s.textContent.split(I),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),j.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(I,t+1));)a.push({type:7,index:o}),t+=I.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===X)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=R(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);j.currentNode=s;let o=j.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new K(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=j.nextNode(),n++)}return j.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),R(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==X,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,s[i+r],e,r),a===X&&(a=this._$AH[r]),n||=!R(a)||a!==this._$AH[r],a===Q?t=Q:t!==Q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class et extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class it extends J{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??Q)===X)return;const i=this._$AH,s=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot={I:K},nt=x.litHtmlPolyfillSupport;nt?.(Z,K),(x.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;let at=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new K(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const dt=rt.litElementPolyfillSupport;dt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},ct=(t=lt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ht({...t,state:!0,attribute:!1})}let ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:At}=ot,gt=t=>t,vt=()=>document.createComment(""),ft=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(vt(),o),n=s.insertBefore(vt(),o);i=new At(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,r=n!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=gt(t).nextSibling;gt(s).insertBefore(t,o),t=e}}}return i},Et=(t,e,i=t)=>(t._$AI(e,i),t),_t={},yt=(t,e=_t)=>t._$AH=e,mt=t=>{t._$AR(),t._$AA.remove()},bt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},xt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ut{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const e of t)o[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:n,keys:r}=this.dt(e,i,s);if(!Array.isArray(o))return this.ut=r,n;const a=this.ut??=[],d=[];let l,c,h=0,p=o.length-1,u=0,A=n.length-1;for(;h<=p&&u<=A;)if(null===o[h])h++;else if(null===o[p])p--;else if(a[h]===r[u])d[u]=Et(o[h],n[u]),h++,u++;else if(a[p]===r[A])d[A]=Et(o[p],n[A]),p--,A--;else if(a[h]===r[A])d[A]=Et(o[h],n[A]),ft(t,d[A+1],o[h]),h++,A--;else if(a[p]===r[u])d[u]=Et(o[p],n[u]),ft(t,o[h],o[p]),p--,u++;else if(void 0===l&&(l=bt(r,u,A),c=bt(a,h,p)),l.has(a[h]))if(l.has(a[p])){const e=c.get(r[u]),i=void 0!==e?o[e]:null;if(null===i){const e=ft(t,o[h]);Et(e,n[u]),d[u]=e}else d[u]=Et(i,n[u]),ft(t,o[h],i),o[e]=null;u++}else mt(o[p]),p--;else mt(o[h]),h++;for(;u<=A;){const e=ft(t,d[A+1]);Et(e,n[u]),d[u++]=e}for(;h<=p;){const t=o[h++];null!==t&&mt(t)}return this.ut=r,yt(t,d),X}});var St;!function(t){t[t.SUNDAY=1]="SUNDAY",t[t.MONDAY=2]="MONDAY",t[t.TUESDAY=4]="TUESDAY",t[t.WEDNESDAY=8]="WEDNESDAY",t[t.THURSDAY=16]="THURSDAY",t[t.FRIDAY=32]="FRIDAY",t[t.SATURDAY=64]="SATURDAY"}(St||(St={}));const $t=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],wt={SUNDAY:St.SUNDAY,MONDAY:St.MONDAY,TUESDAY:St.TUESDAY,WEDNESDAY:St.WEDNESDAY,THURSDAY:St.THURSDAY,FRIDAY:St.FRIDAY,SATURDAY:St.SATURDAY};var Dt,It,Ct;function Tt(t){const e=[];for(const i of $t)t.includes(wt[i])&&e.push(i);return e}function Nt(t){return Boolean(t.WEEKDAY&&t.WEEKDAY.length>0&&t.TARGET_CHANNELS&&t.TARGET_CHANNELS.length>0)}function Ot(t,e){return{...e,groupNo:t,weekdayNames:Tt(e.WEEKDAY),timeString:(i=e.FIXED_HOUR,s=e.FIXED_MINUTE,`${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`),isActive:Nt(e)};var i,s}function Rt(t,e){return"SWITCH"===e||"LOCK"===e}!function(t){t[t.SUNRISE=0]="SUNRISE",t[t.SUNSET=1]="SUNSET"}(Dt||(Dt={})),function(t){t[t.FIXED_TIME=0]="FIXED_TIME",t[t.ASTRO=1]="ASTRO"}(It||(It={})),function(t){t[t.MS_100=0]="MS_100",t[t.SEC_1=1]="SEC_1",t[t.SEC_5=2]="SEC_5",t[t.SEC_10=3]="SEC_10",t[t.MIN_1=4]="MIN_1",t[t.MIN_5=5]="MIN_5",t[t.MIN_10=6]="MIN_10",t[t.HOUR_1=7]="HOUR_1"}(Ct||(Ct={}));const Lt={en:{weekdays:{short:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"},long:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"}},categories:{SWITCH:"Switch",LOCK:"Lock",LIGHT:"Light",COVER:"Cover",VALVE:"Valve"},ui:{schedule:"Schedule",loading:"Loading schedule data...",entityNotFound:"Entity {entity} not found",clickToEdit:"Click on a day to edit its schedule",edit:"Edit {weekday}",cancel:"Cancel",save:"Save",addTimeBlock:"+ Add Time Block",copySchedule:"Copy schedule",pasteSchedule:"Paste schedule",undo:"Undo",redo:"Redo",undoShortcut:"Undo (Ctrl+Z)",redoShortcut:"Redo (Ctrl+Y)",toggleCompactView:"Compact view",toggleFullView:"Full view",exportSchedule:"Export",importSchedule:"Import",exportTooltip:"Export schedule to JSON file",importTooltip:"Import schedule from JSON file",exportSuccess:"Schedule exported successfully",importSuccess:"Schedule imported successfully",unsavedChanges:"Unsaved changes",saveAll:"Save all",discard:"Discard",enableDragDrop:"Enable drag & drop mode",disableDragDrop:"Disable drag & drop mode",confirmDiscardChanges:"You have unsaved changes. Do you want to discard them?",level:"Level",slat:"Slat Position",addEvent:"Add Event",editEvent:"Edit Event",time:"Time",duration:"Duration",state:"State",weekdays:"Weekdays",channels:"Target Channels",confirmDelete:"Are you sure you want to delete this event?"},errors:{failedToChangeProfile:"Failed to change profile: {error}",failedToSaveSchedule:"Failed to save schedule: {error}",failedToPasteSchedule:"Failed to paste schedule: {error}",invalidSchedule:"Invalid schedule: {error}",failedToExport:"Failed to export schedule: {error}",failedToImport:"Failed to import schedule: {error}",invalidImportFile:"Invalid file format. Please select a JSON file.",invalidImportFormat:"Invalid JSON format in file.",invalidImportData:"Invalid schedule data: {error}"},warnings:{title:"Validation Warnings",noWarnings:"No issues detected"}},de:{weekdays:{short:{monday:"Mo",tuesday:"Di",wednesday:"Mi",thursday:"Do",friday:"Fr",saturday:"Sa",sunday:"So"},long:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag"}},categories:{SWITCH:"Schalter",LOCK:"Schloss",LIGHT:"Licht",COVER:"Rollladen",VALVE:"Ventil"},ui:{schedule:"Zeitplan",loading:"Zeitplandaten werden geladen...",entityNotFound:"Entität {entity} nicht gefunden",clickToEdit:"Klicken Sie auf einen Tag, um den Zeitplan zu bearbeiten",edit:"{weekday} bearbeiten",cancel:"Abbrechen",save:"Speichern",addTimeBlock:"+ Zeitblock hinzufügen",copySchedule:"Zeitplan kopieren",pasteSchedule:"Zeitplan einfügen",undo:"Rückgängig",redo:"Wiederholen",undoShortcut:"Rückgängig (Strg+Z)",redoShortcut:"Wiederholen (Strg+Y)",toggleCompactView:"Kompaktansicht",toggleFullView:"Vollansicht",exportSchedule:"Exportieren",importSchedule:"Importieren",exportTooltip:"Zeitplan als JSON-Datei exportieren",importTooltip:"Zeitplan aus JSON-Datei importieren",exportSuccess:"Zeitplan erfolgreich exportiert",importSuccess:"Zeitplan erfolgreich importiert",unsavedChanges:"Ungespeicherte Änderungen",saveAll:"Alle speichern",discard:"Verwerfen",enableDragDrop:"Drag & Drop Modus aktivieren",disableDragDrop:"Drag & Drop Modus deaktivieren",confirmDiscardChanges:"Sie haben ungespeicherte Änderungen. Möchten Sie diese verwerfen?",level:"Stufe",slat:"Lamellenposition",addEvent:"Ereignis hinzufügen",editEvent:"Ereignis bearbeiten",time:"Zeit",duration:"Dauer",state:"Zustand",weekdays:"Wochentage",channels:"Zielkanäle",confirmDelete:"Möchten Sie dieses Ereignis wirklich löschen?"},errors:{failedToChangeProfile:"Fehler beim Wechseln des Profils: {error}",failedToSaveSchedule:"Fehler beim Speichern des Zeitplans: {error}",failedToPasteSchedule:"Fehler beim Einfügen des Zeitplans: {error}",invalidSchedule:"Ungültiger Zeitplan: {error}",failedToExport:"Fehler beim Exportieren des Zeitplans: {error}",failedToImport:"Fehler beim Importieren des Zeitplans: {error}",invalidImportFile:"Ungültiges Dateiformat. Bitte wählen Sie eine JSON-Datei.",invalidImportFormat:"Ungültiges JSON-Format in der Datei.",invalidImportData:"Ungültige Zeitplandaten: {error}"},warnings:{title:"Validierungswarnungen",noWarnings:"Keine Probleme erkannt"}}};function Pt(t){const e=t.toLowerCase().split("-")[0];return Lt[e]||Lt.en}function Ht(t,e){let i=t;for(const[t,s]of Object.entries(e))i=i.replace(`{${t}}`,s);return i}const Mt="data:image/png;base64,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";let Ut=class extends at{constructor(){super(...arguments),this._isLoading=!1,this._translations=Pt("en"),this._showEditor=!1}setConfig(t){const e=[],i=t=>{if(!t)return;const i=t.trim();i&&(e.includes(i)||e.push(i))};if(i(t.entity),Array.isArray(t.entities)&&t.entities.forEach(t=>i(t)),0===e.length)throw new Error("You need to define at least one entity");e.sort((t,e)=>t.localeCompare(e));const s=this._activeEntityId,o=e[0],n=s&&e.includes(s)?s:o;this._config={editable:!0,hour_format:"24",time_step_minutes:15,...t,entity:o,entities:[...e]},this._activeEntityId=n,this._editingEvent=void 0,this._editingGroupNo=void 0,this._showEditor=!1,this._updateLanguage()}_updateLanguage(){let t="en";this._config?.language?t=this._config.language:this.hass?.language?t=this.hass.language:this.hass?.locale?.language&&(t=this.hass.locale.language),this._translations=Pt(t)}shouldUpdate(t){if(t.has("hass")){const e=t.get("hass");if(this.hass&&e){if(this.hass.language===e.language&&this.hass.locale?.language===e.locale?.language||this._updateLanguage(),this._activeEntityId){const t=e.states?.[this._activeEntityId],i=this.hass.states?.[this._activeEntityId];t!==i&&this._updateScheduleData()}}else this.hass&&!e&&this._updateScheduleData()}return t.has("_activeEntityId")&&this._updateScheduleData(),!0}_updateScheduleData(){if(!this._activeEntityId||!this.hass?.states)return this._scheduleData=void 0,void(this._category=void 0);const t=this.hass.states[this._activeEntityId];if(!t)return this._scheduleData=void 0,void(this._category=void 0);const e=t.attributes;this._scheduleData=e.schedule_data,this._category=e.datapoint_category}_getEntityName(t){const e=this.hass?.states?.[t];return e?.attributes?.friendly_name||t}_handleEntityChange(t){this._activeEntityId=t.target.value,this._closeEditor()}_handleAddEvent(){const t=function(t){const e={ASTRO_OFFSET:0,ASTRO_TYPE:Dt.SUNRISE,CONDITION:It.FIXED_TIME,FIXED_HOUR:0,FIXED_MINUTE:0,TARGET_CHANNELS:[],WEEKDAY:[],LEVEL:0};return"COVER"===t?(e.LEVEL=0,e.LEVEL_2=0):"SWITCH"===t?(e.DURATION_BASE=Ct.MS_100,e.DURATION_FACTOR=0,e.LEVEL=0):"LIGHT"===t?(e.DURATION_BASE=Ct.MS_100,e.DURATION_FACTOR=0,e.RAMP_TIME_BASE=Ct.MS_100,e.RAMP_TIME_FACTOR=0,e.LEVEL=0):("VALVE"===t||"LOCK"===t)&&(e.LEVEL=0),e}(this._category),e=this._scheduleData?Object.keys(this._scheduleData).map(t=>parseInt(t,10)):[],i=e.length>0?Math.max(...e):0;this._editingGroupNo=i+1,this._editingEvent={...t},this._showEditor=!0}_handleEditEvent(t){this._editingGroupNo=t.groupNo,this._editingEvent={...t},this._showEditor=!0}_handleDeleteEvent(t){if(!confirm(this._translations.ui.confirmDelete||"Delete this event?"))return;const e={...this._scheduleData};delete e[t.groupNo.toString()],this._saveSchedule(e)}_closeEditor(){this._showEditor=!1,this._editingEvent=void 0,this._editingGroupNo=void 0}_handleSaveEvent(){if(!this._editingEvent||void 0===this._editingGroupNo)return;const t=function(t,e){const i=[];return(t.FIXED_HOUR<0||t.FIXED_HOUR>23)&&i.push({field:"FIXED_HOUR",message:"Hour must be between 0 and 23"}),(t.FIXED_MINUTE<0||t.FIXED_MINUTE>59)&&i.push({field:"FIXED_MINUTE",message:"Minute must be between 0 and 59"}),t.CONDITION===It.ASTRO&&(t.ASTRO_OFFSET<-120||t.ASTRO_OFFSET>120)&&i.push({field:"ASTRO_OFFSET",message:"Astro offset must be between -120 and 120 minutes"}),"SWITCH"===e||"LOCK"===e?0!==t.LEVEL&&1!==t.LEVEL&&i.push({field:"LEVEL",message:"Level must be 0 or 1 for switch/lock"}):(t.LEVEL<0||t.LEVEL>1)&&i.push({field:"LEVEL",message:"Level must be between 0.0 and 1.0"}),"COVER"===e&&void 0!==t.LEVEL_2&&(t.LEVEL_2<0||t.LEVEL_2>1)&&i.push({field:"LEVEL_2",message:"Slat position must be between 0.0 and 1.0"}),t.WEEKDAY&&0!==t.WEEKDAY.length||i.push({field:"WEEKDAY",message:"At least one weekday must be selected"}),t.TARGET_CHANNELS&&0!==t.TARGET_CHANNELS.length||i.push({field:"TARGET_CHANNELS",message:"At least one target channel must be selected"}),i}(this._editingEvent,this._category);if(t.length>0)return void alert(`Validation errors:\n${t.map(t=>`- ${t.field}: ${t.message}`).join("\n")}`);const e={...this._scheduleData,[this._editingGroupNo.toString()]:this._editingEvent};this._saveSchedule(e),this._closeEditor()}async _saveSchedule(t){if(!this._activeEntityId||!this.hass)return;const e=this._activeEntityId;this._startLoading();try{const i=function(t){const e={};for(const[i,s]of Object.entries(t)){const t=parseInt(i,10);isNaN(t)||(e[t]=s)}return e}(t);await this.hass.callService("homematicip_local","set_schedule",{entity_id:e,schedule:i}),this._scheduleData=t,this._needsManualReload(e)&&this._scheduleReloadDeviceConfig(e)}catch(t){alert(Ht(this._translations.errors.failedToSaveSchedule,{error:String(t)}))}finally{this._stopLoading()}}_startLoading(){this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1},1e4)}_stopLoading(){this._isLoading=!1,void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0)}_exportSchedule(){if(this._scheduleData&&this._activeEntityId)try{const t=this._getEntityName(this._activeEntityId),e={version:"1.0",entity:this._activeEntityId,category:this._category,exportDate:(new Date).toISOString(),schedule:this._scheduleData},i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s;const n=(new Date).toISOString().split("T")[0];o.download=`schedule-${t.replace(/[^a-zA-Z0-9]/g,"_")}-${n}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}catch(t){alert(Ht(this._translations.errors.failedToExport,{error:String(t)}))}}_importSchedule(){const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async t=>{const e=t.target.files?.[0];if(e)try{const t=await e.text(),i=JSON.parse(t);if(!i.schedule||"object"!=typeof i.schedule)throw new Error(this._translations.errors.invalidImportData);if(i.category&&i.category!==this._category&&!confirm(`Warning: The imported schedule is for a ${i.category} device, but the current entity is a ${this._category} device. Continue anyway?`))return;await this._saveSchedule(i.schedule)}catch(t){t instanceof SyntaxError?alert(this._translations.errors.invalidImportFormat):alert(Ht(this._translations.errors.failedToImport,{error:String(t)}))}},t.click()}_needsManualReload(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];if(!e?.attributes?.interface_id)return!1;const i=e.attributes.interface_id;return i.endsWith("BidCos-RF")||i.endsWith("BidCos-Wired")||i.endsWith("VirtualDevices")}_scheduleReloadDeviceConfig(t){if(!this.hass)return;const e=this.hass.states[t],i=e?.attributes?.address;if(!i)return;const s=i.split(":");if(2!==s.length)return;const[o]=s;setTimeout(async()=>{try{await this.hass.callService("homematicip_local","reload_device_config",{device_address:o})}catch(t){}},5e3)}_updateEditingEvent(t){this._editingEvent&&(this._editingEvent={...this._editingEvent,...t},this.requestUpdate())}_groupEventsByWeekday(){const t=new Map;if(!this._scheduleData)return t;const e=function(t){const e=[];for(const[i,s]of Object.entries(t)){const t=parseInt(i,10);isNaN(t)||e.push(Ot(t,s))}return e.sort((t,e)=>60*t.FIXED_HOUR+t.FIXED_MINUTE-(60*e.FIXED_HOUR+e.FIXED_MINUTE)),e}(this._scheduleData);for(const i of e)for(const e of i.weekdayNames)t.has(e)||t.set(e,[]),t.get(e).push(i);return t}_renderEntitySelector(){return!this._config?.entities||this._config.entities.length<=1?W``:W`
      <select
        class="entity-selector-dropdown"
        @change=${this._handleEntityChange}
        .value=${this._activeEntityId||""}
      >
        ${this._config.entities.map(t=>W`
            <option value=${t} ?selected=${t===this._activeEntityId}>
              ${this._getEntityName(t)}
            </option>
          `)}
      </select>
    `}_renderHeaderControls(){return W`
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
    `}_renderScheduleList(){if(!this._scheduleData)return W`<div class="no-data">${this._translations.ui.loading}</div>`;const t=this._groupEventsByWeekday();return 0===t.size?W`
        <div class="no-data">
          <p>No schedule events configured</p>
          ${this._config?.editable?W`<button @click=${this._handleAddEvent} class="add-button">
                ${this._translations.ui.addEvent||"Add Event"}
              </button>`:""}
        </div>
      `:W`
      <div class="schedule-list">
        ${this._config?.editable?W`<div class="toolbar">
              <button @click=${this._handleAddEvent} class="add-button">
                ${this._translations.ui.addEvent||"Add Event"}
              </button>
            </div>`:""}
        ${$t.map(e=>{const i=t.get(e)||[];return 0===i.length?W``:W`
            <div class="weekday-section">
              <div class="weekday-header">
                ${this._translations.weekdays.long[e.toLowerCase()]}
              </div>
              <div class="events-table">
                <div class="events-header">
                  <div class="col-time">${this._translations.ui.time||"Time"}</div>
                  <div class="col-duration">${this._translations.ui.duration||"Duration"}</div>
                  <div class="col-level">${this._translations.ui.state||"State"}</div>
                  ${this._config?.editable?W`<div class="col-actions"></div>`:""}
                </div>
                ${xt(i,t=>t.groupNo,t=>this._renderEvent(t))}
              </div>
            </div>
          `})}
      </div>
    `}_renderEvent(t){const e=(i=t.LEVEL,Rt(0,this._category)?0===i?"Off":"On":`${Math.round(100*i)}%`);var i;const s=void 0!==t.DURATION_BASE&&void 0!==t.DURATION_FACTOR?function(t,e){const i=function(t,e){return{[Ct.MS_100]:100,[Ct.SEC_1]:1e3,[Ct.SEC_5]:5e3,[Ct.SEC_10]:1e4,[Ct.MIN_1]:6e4,[Ct.MIN_5]:3e5,[Ct.MIN_10]:6e5,[Ct.HOUR_1]:36e5}[t]*e}(t,e);return i<1e3?`${i}ms`:i<6e4?`${(i/1e3).toFixed(1)}s`:i<36e5?`${(i/6e4).toFixed(1)}m`:`${(i/36e5).toFixed(1)}h`}(t.DURATION_BASE,t.DURATION_FACTOR):"-";return W`
      <div class="event-row ${t.isActive?"active":"inactive"}">
        <div class="col-time">${t.timeString}</div>
        <div class="col-duration">${s}</div>
        <div class="col-level">
          ${e}
          ${void 0!==t.LEVEL_2?W`<span class="level-2"
                >, ${this._translations.ui.slat}: ${Math.round(100*t.LEVEL_2)}%</span
              >`:""}
        </div>
        ${this._config?.editable?W`<div class="col-actions">
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
    `}_renderEditor(){if(!this._showEditor||!this._editingEvent)return W``;const t=!this._scheduleData?.[this._editingGroupNo?.toString()||""];return W`
      <div class="editor-overlay" @click=${this._closeEditor}>
        <div class="editor-dialog" @click=${t=>t.stopPropagation()}>
          <div class="editor-header">
            <h3>
              ${t?this._translations.ui.addEvent:this._translations.ui.editEvent}
            </h3>
            <button @click=${this._closeEditor} class="close-button">✕</button>
          </div>
          <div class="editor-content">
            ${this._renderTimeFields()} ${this._renderWeekdayFields()} ${this._renderLevelFields()}
            ${this._renderDurationFields()} ${this._renderChannelFields()}
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
    `}_renderTimeFields(){if(!this._editingEvent)return W``;const t=`${String(this._editingEvent.FIXED_HOUR).padStart(2,"0")}:${String(this._editingEvent.FIXED_MINUTE).padStart(2,"0")}`;return W`
      <div class="form-group">
        <label>${this._translations.ui.time||"Time"}</label>
        <input
          type="time"
          .value=${t}
          @change=${t=>{const e=function(t){const e=t.split(":");if(2!==e.length)throw new Error(`Invalid time format: ${t}`);const i=parseInt(e[0],10),s=parseInt(e[1],10);if(isNaN(i)||isNaN(s)||i<0||i>23||s<0||s>59)throw new Error(`Invalid time values: ${t}`);return{hour:i,minute:s}}(t.target.value);this._updateEditingEvent({FIXED_HOUR:e.hour,FIXED_MINUTE:e.minute})}}
        />
      </div>
    `}_renderWeekdayFields(){return this._editingEvent?W`
      <div class="form-group">
        <label>${this._translations.ui.weekdays||"Weekdays"}</label>
        <div class="weekday-checkboxes">
          ${$t.map(t=>{const e=St[t],i=this._editingEvent.WEEKDAY.includes(e);return W`
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  .checked=${i}
                  @change=${t=>{const i=t.target.checked,s=[...this._editingEvent.WEEKDAY];if(i&&!s.includes(e))s.push(e);else if(!i){const t=s.indexOf(e);t>-1&&s.splice(t,1)}this._updateEditingEvent({WEEKDAY:s})}}
                />
                ${this._translations.weekdays.short[t.toLowerCase()]}
              </label>
            `})}
        </div>
      </div>
    `:W``}_renderLevelFields(){if(!this._editingEvent)return W``;const t=Rt(0,this._category);return W`
      <div class="form-group">
        <label>${this._translations.ui.state||"State"}</label>
        ${t?W`
              <select
                .value=${String(this._editingEvent.LEVEL)}
                @change=${t=>{const e=parseInt(t.target.value,10);this._updateEditingEvent({LEVEL:e})}}
              >
                <option value="0">Off</option>
                <option value="1">On</option>
              </select>
            `:W`
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(Math.round(100*this._editingEvent.LEVEL))}
                @input=${t=>{const e=parseInt(t.target.value,10)/100;this._updateEditingEvent({LEVEL:e})}}
              />
              <span>${Math.round(100*this._editingEvent.LEVEL)}%</span>
            `}
      </div>
      ${"COVER"===this._category?W`
            <div class="form-group">
              <label>${this._translations.ui.slat||"Slat Position"}</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(Math.round(100*(this._editingEvent.LEVEL_2||0)))}
                @input=${t=>{const e=parseInt(t.target.value,10)/100;this._updateEditingEvent({LEVEL_2:e})}}
              />
              <span>${Math.round(100*(this._editingEvent.LEVEL_2||0))}%</span>
            </div>
          `:""}
    `}_renderDurationFields(){return this._editingEvent?"SWITCH"!==this._category&&"LIGHT"!==this._category?W``:W`
      <div class="form-group">
        <label>${this._translations.ui.duration||"Duration"}</label>
        <input
          type="number"
          min="0"
          .value=${String(this._editingEvent.DURATION_FACTOR||0)}
          @input=${t=>{const e=parseInt(t.target.value,10);this._updateEditingEvent({DURATION_FACTOR:e})}}
        />
        <select
          .value=${String(this._editingEvent.DURATION_BASE||Ct.MS_100)}
          @change=${t=>{const e=parseInt(t.target.value,10);this._updateEditingEvent({DURATION_BASE:e})}}
        >
          <option value=${Ct.MS_100}>× 100ms</option>
          <option value=${Ct.SEC_1}>× 1s</option>
          <option value=${Ct.SEC_5}>× 5s</option>
          <option value=${Ct.SEC_10}>× 10s</option>
          <option value=${Ct.MIN_1}>× 1m</option>
          <option value=${Ct.MIN_5}>× 5m</option>
          <option value=${Ct.MIN_10}>× 10m</option>
          <option value=${Ct.HOUR_1}>× 1h</option>
        </select>
      </div>
    `:W``}_renderChannelFields(){return this._editingEvent?W`
      <div class="form-group">
        <label>${this._translations.ui.channels||"Target Channels"}</label>
        <input
          type="text"
          .value=${this._editingEvent.TARGET_CHANNELS.join(", ")}
          @input=${t=>{const e=t.target.value.split(",").map(t=>parseInt(t.trim(),10)).filter(t=>!isNaN(t));this._updateEditingEvent({TARGET_CHANNELS:e})}}
          placeholder="1, 2, 4, 8"
        />
      </div>
    `:W``}render(){if(!this._config||!this.hass)return W``;const t=this._activeEntityId?this.hass.states?.[this._activeEntityId]:void 0,e=this._config.name||t?.attributes?.friendly_name||this._translations.ui.schedule;return t?W`
      <ha-card>
        <div class="card-header">
          <div class="header-left">
            <img src="${Mt}" alt="HomematicIP" class="card-logo" />
            <div class="card-title">${e}</div>
          </div>
        </div>
        ${this._renderHeaderControls()}
        <div class="card-content">
          ${this._scheduleData?this._renderScheduleList():W`<div class="loading">${this._translations.ui.loading}</div>`}
          ${this._config?.editable?W`<div class="hint">${this._translations.ui.clickToEdit}</div>`:""}
        </div>
        ${this._isLoading?W`
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `:""}
      </ha-card>
      ${this._renderEditor()}
    `:W`
        <ha-card>
          <div class="card-header">
            <div class="header-left">
              <img src="${Mt}" alt="HomematicIP" class="card-logo" />
              <div class="card-title">${e}</div>
            </div>
          </div>
          <div class="card-content">
            <div class="error">
              ${Ht(this._translations.ui.entityNotFound,{entity:this._activeEntityId||this._translations.ui.schedule})}
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

      .weekday-checkboxes {
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
    `}getCardSize(){return 4}static getConfigElement(){return document.createElement("homematicip-local-schedule-card-editor")}static getStubConfig(){return{entity:"",editable:!0,hour_format:"24"}}};t([ht({attribute:!1})],Ut.prototype,"hass",void 0),t([pt()],Ut.prototype,"_config",void 0),t([pt()],Ut.prototype,"_scheduleData",void 0),t([pt()],Ut.prototype,"_activeEntityId",void 0),t([pt()],Ut.prototype,"_category",void 0),t([pt()],Ut.prototype,"_isLoading",void 0),t([pt()],Ut.prototype,"_translations",void 0),t([pt()],Ut.prototype,"_editingEvent",void 0),t([pt()],Ut.prototype,"_editingGroupNo",void 0),t([pt()],Ut.prototype,"_showEditor",void 0),Ut=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("homematicip-local-schedule-card")],Ut),window.customCards=window.customCards||[],window.customCards.push({type:"homematicip-local-schedule-card",name:"HomematicIP Local Scheduler Card",description:"A custom card for Homematic(IP) Local schedules (switch, valve, cover, light, lock)"});export{Ut as HomematicScheduleCard};
