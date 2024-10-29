import"./bootstrap.esm-D6HI6lrV.js";import"./main-Ct63Q_0u.js";import{r as U}from"./products-DvlkpjEd.js";import{p as ut}from"./basket-DtL46gUw.js";function I(e){return Array.isArray?Array.isArray(e):nt(e)==="[object Array]"}const ft=1/0;function dt(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-ft?"-0":t}function gt(e){return e==null?"":dt(e)}function _(e){return typeof e=="string"}function et(e){return typeof e=="number"}function pt(e){return e===!0||e===!1||mt(e)&&nt(e)=="[object Boolean]"}function st(e){return typeof e=="object"}function mt(e){return st(e)&&e!==null}function m(e){return e!=null}function j(e){return!e.trim().length}function nt(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Mt="Incorrect 'index' type",xt=e=>`Invalid value for key ${e}`,Et=e=>`Pattern length exceeds max of ${e}.`,_t=e=>`Missing ${e} property in key`,yt=e=>`Property 'weight' in key '${e}' must be a positive integer`,Q=Object.prototype.hasOwnProperty;class It{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=rt(n);this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function rt(e){let t=null,s=null,n=null,r=1,i=null;if(_(e)||I(e))n=e,t=X(e),s=K(e);else{if(!Q.call(e,"name"))throw new Error(_t("name"));const c=e.name;if(n=c,Q.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(yt(c));t=X(c),s=K(c),i=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:i}}function X(e){return I(e)?e:e.split(".")}function K(e){return I(e)?e.join("."):e}function St(e,t){let s=[],n=!1;const r=(i,c,o)=>{if(m(i))if(!c[o])s.push(i);else{let h=c[o];const a=i[h];if(!m(a))return;if(o===c.length-1&&(_(a)||et(a)||pt(a)))s.push(gt(a));else if(I(a)){n=!0;for(let l=0,f=a.length;l<f;l+=1)r(a[l],c,o+1)}else c.length&&r(a,c,o+1)}};return r(e,_(t)?t.split("."):t,0),n?s:s[0]}const At={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},wt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Lt={location:0,threshold:.6,distance:100},Rt={useExtendedSearch:!1,getFn:St,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...wt,...At,...Lt,...Rt};const bt=/[^ ]+/g;function Nt(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(bt).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*e),o=parseFloat(Math.round(c*n)/n);return s.set(i,o),o},clear(){s.clear()}}}class V{constructor({getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Nt(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();_(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!m(t)||j(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(t):this.getFn(t,r.path);if(m(c)){if(I(c)){let o=[];const h=[{nestedArrIndex:-1,value:c}];for(;h.length;){const{nestedArrIndex:a,value:l}=h.pop();if(m(l))if(_(l)&&!j(l)){let f={v:l,i:a,n:this.norm.get(l)};o.push(f)}else I(l)&&l.forEach((f,d)=>{h.push({nestedArrIndex:d,value:f})})}n.$[i]=o}else if(_(c)&&!j(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function it(e,t,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new V({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(rt)),r.setSources(t),r.create(),r}function kt(e,{getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:n,records:r}=e,i=new V({getFn:t,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function v(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/e.length;if(i)return c;const o=Math.abs(n-s);return r?c+o/r:o?1:c}function Ot(e=[],t=u.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let c=e.length;i<c;i+=1){let o=e[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[i-1]&&i-n>=t&&s.push([n,i-1]),s}const b=32;function $t(e,t,s,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:h=u.includeMatches,ignoreLocation:a=u.ignoreLocation}={}){if(t.length>b)throw new Error(Et(b));const l=t.length,f=e.length,d=Math.max(0,Math.min(n,f));let g=i,p=d;const M=o>1||h,L=M?Array(f):[];let y;for(;(y=e.indexOf(t,p))>-1;){let x=v(t,{currentLocation:y,expectedLocation:d,distance:r,ignoreLocation:a});if(g=Math.min(x,g),p=y+l,M){let S=0;for(;S<l;)L[y+S]=1,S+=1}}p=-1;let N=[],R=1,$=l+f;const lt=1<<l-1;for(let x=0;x<l;x+=1){let S=0,A=$;for(;S<A;)v(t,{errors:x,currentLocation:d+A,expectedLocation:d,distance:r,ignoreLocation:a})<=g?S=A:$=A,A=Math.floor(($-S)/2+S);$=A;let Y=Math.max(1,d-A+1),P=c?f:Math.min(d+A,f)+l,k=Array(P+2);k[P+1]=(1<<x)-1;for(let E=P;E>=Y;E-=1){let C=E-1,G=s[e.charAt(C)];if(M&&(L[C]=+!!G),k[E]=(k[E+1]<<1|1)&G,x&&(k[E]|=(N[E+1]|N[E])<<1|1|N[E+1]),k[E]&lt&&(R=v(t,{errors:x,currentLocation:C,expectedLocation:d,distance:r,ignoreLocation:a}),R<=g)){if(g=R,p=C,p<=d)break;Y=Math.max(1,2*d-p)}}if(v(t,{errors:x+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:a})>g)break;N=k}const F={isMatch:p>=0,score:Math.max(.001,R)};if(M){const x=Ot(L,o);x.length?h&&(F.indices=x):F.isMatch=!1}return F}function Ct(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class ct{constructor(t,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:h=u.isCaseSensitive,ignoreLocation:a=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:h,ignoreLocation:a},this.pattern=h?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Ct(d),startIndex:g})},f=this.pattern.length;if(f>b){let d=0;const g=f%b,p=f-g;for(;d<p;)l(this.pattern.substr(d,b),d),d+=b;if(g){const M=f-b;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:h,ignoreLocation:a}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:M,startIndex:L})=>{const{isMatch:y,score:N,indices:R}=$t(t,p,M,{location:r+L,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:h,includeMatches:n,ignoreLocation:a});y&&(d=!0),f+=N,y&&R&&(l=[...l,...R])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class w{constructor(t){this.pattern=t}static isMultiMatch(t){return J(t,this.multiRegex)}static isSingleMatch(t){return J(t,this.singleRegex)}search(){}}function J(e,t){const s=e.match(t);return s?s[1]:null}class vt extends w{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Tt extends w{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Ft extends w{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Pt extends w{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class jt extends w{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Kt extends w{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class ot extends w{constructor(t,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:h=u.isCaseSensitive,ignoreLocation:a=u.ignoreLocation}={}){super(t),this._bitapSearch=new ct(t,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:h,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ht extends w{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const D=[vt,ht,Ft,Pt,Kt,jt,Tt,ot],Z=D.length,Dt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Wt="|";function Bt(e,t={}){return e.split(Wt).map(s=>{let n=s.trim().split(Dt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const o=n[i];let h=!1,a=-1;for(;!h&&++a<Z;){const l=D[a];let f=l.isMultiMatch(o);f&&(r.push(new l(f,t)),h=!0)}if(!h)for(a=-1;++a<Z;){const l=D[a];let f=l.isSingleMatch(o);if(f){r.push(new l(f,t));break}}}return r})}const zt=new Set([ot.type,ht.type]);class Ht{constructor(t,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:h=u.threshold,distance:a=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:h,distance:a},this.pattern=s?t:t.toLowerCase(),this.query=Bt(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,c=[],o=0;for(let h=0,a=s.length;h<a;h+=1){const l=s[h];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:M,score:L}=g.search(t);if(p){if(i+=1,o+=L,n){const y=g.constructor.type;zt.has(y)?c=[...c,...M]:c.push(M)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const W=[];function Vt(...e){W.push(...e)}function B(e,t){for(let s=0,n=W.length;s<n;s+=1){let r=W[s];if(r.condition(e,t))return new r(e,t)}return new ct(e,t)}const T={AND:"$and",OR:"$or"},z={PATH:"$path",PATTERN:"$val"},H=e=>!!(e[T.AND]||e[T.OR]),Yt=e=>!!e[z.PATH],Gt=e=>!I(e)&&st(e)&&!H(e),q=e=>({[T.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function at(e,t,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const c=Yt(r);if(!c&&i.length>1&&!H(r))return n(q(r));if(Gt(r)){const h=c?r[z.PATH]:i[0],a=c?r[z.PATTERN]:r[h];if(!_(a))throw new Error(xt(h));const l={keyId:K(h),pattern:a};return s&&(l.searcher=B(a,t)),l}let o={children:[],operator:i[0]};return i.forEach(h=>{const a=r[h];I(a)&&a.forEach(l=>{o.children.push(n(l))})}),o};return H(e)||(e=q(e)),n(e)}function Ut(e,{ignoreFieldNorm:t=u.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:c})=>{const o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),s.score=n})}function Qt(e,t){const s=e.matches;t.matches=[],m(s)&&s.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function Xt(e,t){t.score=e.score}function Jt(e,t,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return s&&r.push(Qt),n&&r.push(Xt),e.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return r.length&&r.forEach(h=>{h(i,o)}),o})}class O{constructor(t,s={},n){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new It(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof V))throw new Error(Mt);this._myIndex=s||it(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){m(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let h=_(t)?_(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ut(h,{ignoreFieldNorm:o}),i&&h.sort(c),et(s)&&s>-1&&(h=h.slice(0,s)),Jt(h,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const s=B(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:h,score:a,indices:l}=s.searchIn(i);h&&r.push({item:i,idx:c,matches:[{score:a,value:i,norm:o,indices:l}]})}),r}_searchLogical(t){const s=at(t,this.options),n=(o,h,a)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(h,f),searcher:d});return g&&g.length?[{idx:a,item:h,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=n(g,h,a);if(p.length)l.push(...p);else if(o.operator===T.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:h})=>{if(m(o)){let a=n(s,o,h);a.length&&(i[h]||(i[h]={idx:h,item:o,matches:[]},c.push(i[h])),a.forEach(({matches:l})=>{i[h].matches.push(...l)}))}}),c}_searchObjectList(t){const s=B(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!m(c))return;let h=[];n.forEach((a,l)=>{h.push(...this._findMatches({key:a,value:c[l],searcher:s}))}),h.length&&i.push({idx:o,item:c,matches:h})}),i}_findMatches({key:t,value:s,searcher:n}){if(!m(s))return[];let r=[];if(I(s))s.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:h,score:a,indices:l}=n.searchIn(i);h&&r.push({score:a,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=s,{isMatch:o,score:h,indices:a}=n.searchIn(i);o&&r.push({score:h,key:t,value:i,norm:c,indices:a})}return r}}O.version="7.0.0";O.createIndex=it;O.parseIndex=kt;O.config=u;O.parseQuery=at;Vt(Ht);const Zt=new O(ut,{keys:["title","description"]}),qt=new URLSearchParams(window.location.search).get("q"),tt=Zt.search(qt).map(e=>e.item);tt.length===0?U([]):U(tt);