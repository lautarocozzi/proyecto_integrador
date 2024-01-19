import{R as k,r as a}from"./react-0e521403.js";import{i as d,A as L,p as M,s as _,g as D,r as T,j as y,m as z,a as S}from"./@remix-run-e5357272.js";/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}const V="startTransition";var se=k[V];const U=a.createContext(null),W=a.createContext(null),E=a.createContext(null),b=a.createContext(null),m=a.createContext({outlet:null,matches:[],isDataRoute:!1}),j=a.createContext(null);function ue(e,t){let{relative:r}=t===void 0?{}:t;R()||d(!1);let{basename:n,navigator:l}=a.useContext(E),{hash:o,pathname:s,search:u}=Q(e,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:y([n,s])),l.createHref({pathname:i,search:u,hash:o})}function R(){return a.useContext(b)!=null}function O(){return R()||d(!1),a.useContext(b).location}function J(e){a.useContext(E).static||a.useLayoutEffect(e)}function ce(){let{isDataRoute:e}=a.useContext(m);return e?ae():q()}function q(){R()||d(!1);let e=a.useContext(U),{basename:t,navigator:r}=a.useContext(E),{matches:n}=a.useContext(m),{pathname:l}=O(),o=JSON.stringify(D(n).map(i=>i.pathnameBase)),s=a.useRef(!1);return J(()=>{s.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){r.go(i);return}let p=T(i,JSON.parse(o),l,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:y([t,p.pathname])),(c.replace?r.replace:r.push)(p,c.state,c)},[t,r,o,l,e])}const G=a.createContext(null);function K(e){let t=a.useContext(m).outlet;return t&&a.createElement(G.Provider,{value:e},t)}function de(){let{matches:e}=a.useContext(m),t=e[e.length-1];return t?t.params:{}}function Q(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=a.useContext(m),{pathname:l}=O(),o=JSON.stringify(D(n).map(s=>s.pathnameBase));return a.useMemo(()=>T(e,JSON.parse(o),l,r==="path"),[e,o,l,r])}function X(e,t){return Y(e,t)}function Y(e,t,r){R()||d(!1);let{navigator:n}=a.useContext(E),{matches:l}=a.useContext(m),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let i=O(),c;if(t){var p;let f=typeof t=="string"?M(t):t;u==="/"||(p=f.pathname)!=null&&p.startsWith(u)||d(!1),c=f}else c=i;let v=c.pathname||"/",C=u==="/"?v:v.slice(u.length)||"/",g=z(e,{pathname:C}),h=H(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:y([u,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:y([u,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return t&&h?a.createElement(b.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:L.Pop}},h):h}function Z(){let e=ne(),t=S(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:l},r):null,o)}const $=a.createElement(Z,null);class w extends a.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?a.createElement(m.Provider,{value:this.props.routeContext},a.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A(e){let{routeContext:t,match:r,children:n}=e,l=a.useContext(U);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(m.Provider,{value:t},n)}function H(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var l;if((l=r)!=null&&l.errors)e=r.matches;else return null}let o=e,s=(n=r)==null?void 0:n.errors;if(s!=null){let u=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));u>=0||d(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,i,c)=>{let p=i.route.id?s==null?void 0:s[i.route.id]:null,v=null;r&&(v=i.route.errorElement||$);let C=t.concat(o.slice(0,c+1)),g=()=>{let h;return p?h=v:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=u,a.createElement(A,{match:i,routeContext:{outlet:u,matches:C,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(w,{location:r.location,revalidation:r.revalidation,component:v,error:p,children:g(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):g()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(N||(N={}));var x;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(x||(x={}));function ee(e){let t=a.useContext(U);return t||d(!1),t}function te(e){let t=a.useContext(W);return t||d(!1),t}function re(e){let t=a.useContext(m);return t||d(!1),t}function F(e){let t=re(),r=t.matches[t.matches.length-1];return r.route.id||d(!1),r.route.id}function ne(){var e;let t=a.useContext(j),r=te(x.UseRouteError),n=F(x.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ae(){let{router:e}=ee(N.UseNavigateStable),t=F(x.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,P({fromRouteId:t},o)))},[e,t])}function pe(e){return K(e.context)}function oe(e){d(!1)}function fe(e){let{basename:t="/",children:r=null,location:n,navigationType:l=L.Pop,navigator:o,static:s=!1}=e;R()&&d(!1);let u=t.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:o,static:s}),[u,o,s]);typeof n=="string"&&(n=M(n));let{pathname:c="/",search:p="",hash:v="",state:C=null,key:g="default"}=n,h=a.useMemo(()=>{let f=_(c,u);return f==null?null:{location:{pathname:f,search:p,hash:v,state:C,key:g},navigationType:l}},[u,c,p,v,C,g,l]);return h==null?null:a.createElement(E.Provider,{value:i},a.createElement(b.Provider,{children:r,value:h}))}function he(e){let{children:t,location:r}=e;return X(B(t),r)}var I;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(I||(I={}));new Promise(()=>{});function B(e,t){t===void 0&&(t=[]);let r=[];return a.Children.forEach(e,(n,l)=>{if(!a.isValidElement(n))return;let o=[...t,l];if(n.type===a.Fragment){r.push.apply(r,B(n.props.children,o));return}n.type!==oe&&d(!1),!n.props.index||!n.props.children||d(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=B(n.props.children,o)),r.push(s)}),r}export{W as D,E as N,pe as O,fe as R,ce as a,O as b,Q as c,de as d,he as e,oe as f,se as s,ue as u};