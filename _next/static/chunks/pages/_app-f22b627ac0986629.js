(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(1869)}])},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9361).Z,e=c(4941).Z,f=c(3929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,h=a.src,i=a.sizes,p=a.unoptimized,q=void 0!==p&&p,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=j(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=k.useContext(o.ImageConfigContext),U=k.useMemo(function(){var a=s||T||m.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return g({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=j(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(h)){var _=w(h)?h.default:h;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}h="string"==typeof h?h:$;var aa=!B&&("lazy"===D|| void 0===D);(h.startsWith("data:")||h.startsWith("blob:"))&&(q=!0,aa=!1),t.has(h)&&(aa=!1),r&&(q=!0);var ab=e(k.useState(!1),2),ac=ab[0],ad=ab[1],ae=e(n.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:h,unoptimized:q,layout:W,width:am,quality:ao,sizes:i,loader:X}));var au=h,av="imagesrcset",aw="imagesizes";aw="imageSizes";var ax=(d(c={},"imageSrcSet",at.srcSet),d(c,aw,at.sizes),c),ay=k.default.useLayoutEffect,az=k.useRef(O),aA=k.useRef(h);k.useEffect(function(){az.current=O},[O]),ay(function(){aA.current!==h&&(ah(),aA.current=h)},[ah,h]);var aB=g({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:az,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:i},V);return k.default.createElement(k.default.Fragment,null,k.default.createElement("span",{style:aj},al?k.default.createElement("span",{style:ak},b?k.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,k.default.createElement(C,Object.assign({},aB))),B?k.default.createElement(l.default,null,k.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},ax))):null)};var g=c(6495).Z,h=c(2648).Z,i=c(1598).Z,j=c(7273).Z,k=i(c(7294)),l=h(c(5443)),m=c(9309),n=c(7190),o=c(9977);c(3794);var p=c(2392),q={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"./",loader:"akamai",dangerouslyAllowSVG:!1},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"./",loader:"akamai",dangerouslyAllowSVG:!1},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(p.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.getAll("auto").join(",")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,h=a.imgStyle,i=a.blurStyle,l=a.isLazy,m=a.placeholder,n=a.loading,o=a.srcString,p=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=j(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return n=l?"lazy":n,k.default.createElement(k.default.Fragment,null,k.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:g({},h,i),ref:k.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,o,e,m,s,t)},[u,o,e,m,s,t,]),onLoad:function(a){B(a.currentTarget,o,e,m,s,t),v&&v(a)},onError:function(a){"blur"===m&&t(!0),w&&w(a)}})),(l||"blur"===m)&&k.default.createElement("noscript",null,k.default.createElement("img",Object.assign({},z,y({config:p,src:o,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:h,className:f,loading:n}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,h=a.disabled||!g,i=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(i.current&&(i.current(),i.current=void 0),!h&&!l)return o&&o.tagName&&(i.current=j(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==i.current||i.current(),i.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,h,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver,h=new Map,i=[];function j(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),h.delete(e);var b=i.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&i.splice(b,1)}}}function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=i.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=h.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},i.push(c),h.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},1869:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return aj}});var e,f=c(5893);c(906);var g=c(1664),h=c.n(g),i=c(5675),j=c.n(i),k=c(1163),l=c(7294);function m(a,b,...c){if(a in b){let d=b[a];return"function"==typeof d?d(...c):d}let e=Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,m),e}var n,o,p=((n=p||{})[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n),q=((o=q||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function r({ourProps:a,theirProps:b,slot:c,defaultTag:d,features:e,visible:f=!0,name:g}){let h=u(b,a);if(f)return s(h,c,d,g);let i=null!=e?e:0;if(2&i){let{static:j=!1,...k}=h;if(j)return s(k,c,d,g)}if(1&i){let{unmount:l=!0,...n}=h;return m(l?0:1,{0(){return null},1(){return s({...n,hidden:!0,style:{display:"none"}},c,d,g)}})}return s(h,c,d,g)}function s(a,b={},c,d){let{as:e=c,children:f,refName:g="ref",...h}=x(a,["unmount","static"]),i=void 0!==a.ref?{[g]:a.ref}:{},j="function"==typeof f?f(b):f;h.className&&"function"==typeof h.className&&(h.className=h.className(b));let k={};if(b){let m=!1,n=[];for(let[o,p]of Object.entries(b))"boolean"==typeof p&&(m=!0),!0===p&&n.push(o);m&&(k["data-headlessui-state"]=n.join(" "))}if(e===l.Fragment&&Object.keys(w(h)).length>0){if(!(0,l.isValidElement)(j)||Array.isArray(j)&&j.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${d} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(h).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));return(0,l.cloneElement)(j,Object.assign({},u(j.props,w(x(h,["ref"]))),k,i,t(j.ref,i.ref)))}return(0,l.createElement)(e,Object.assign({},x(h,["ref"]),e!==l.Fragment&&i,e!==l.Fragment&&k),j)}function t(...a){return{ref:a.every(a=>null==a)?void 0:b=>{for(let c of a)null!=c&&("function"==typeof c?c(b):c.current=b)}}}function u(...a){if(0===a.length)return{};if(1===a.length)return a[0];let b={},c={};for(let d of a)for(let e in d)e.startsWith("on")&&"function"==typeof d[e]?(null!=c[e]||(c[e]=[]),c[e].push(d[e])):b[e]=d[e];if(b.disabled||b["aria-disabled"])return Object.assign(b,Object.fromEntries(Object.keys(c).map(a=>[a,void 0])));for(let f in c)Object.assign(b,{[f](a,...b){let d=c[f];for(let e of d){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;e(a,...b)}}});return b}function v(a){var b;return Object.assign((0,l.forwardRef)(a),{displayName:null!=(b=a.displayName)?b:a.name})}function w(a){let b=Object.assign({},a);for(let c in b)void 0===b[c]&&delete b[c];return b}function x(a,b=[]){let c=Object.assign({},a);for(let d of b)d in c&&delete c[d];return c}let y="undefined"==typeof window||"undefined"==typeof document,z=y?l.useEffect:l.useLayoutEffect,A=function(a){var b;let c,d=(b=a,c=(0,l.useRef)(b),z(()=>{c.current=b},[b]),c);return l.useCallback((...a)=>d.current(...a),[d])},B=Symbol();function C(...a){let b=(0,l.useRef)(a);(0,l.useEffect)(()=>{b.current=a},[a]);let c=A(a=>{for(let c of b.current)null!=c&&("function"==typeof c?c(a):c.current=a)});return a.every(a=>null==a||(null==a?void 0:a[B]))?void 0:c}let D={serverHandoffComplete:!1},E=0;function F(){return++E}let G=null!=(e=l.useId)?e:function(){let a=function(){let[a,b]=(0,l.useState)(D.serverHandoffComplete);return(0,l.useEffect)(()=>{!0!==a&&b(!0)},[a]),(0,l.useEffect)(()=>{!1===D.serverHandoffComplete&&(D.serverHandoffComplete=!0)},[]),a}(),[b,c]=l.useState(a?F:null);return z(()=>{null===b&&c(F())},[b]),null!=b?""+b:void 0};var H,I=((H=I||{}).Space=" ",H.Enter="Enter",H.Escape="Escape",H.Backspace="Backspace",H.Delete="Delete",H.ArrowLeft="ArrowLeft",H.ArrowUp="ArrowUp",H.ArrowRight="ArrowRight",H.ArrowDown="ArrowDown",H.Home="Home",H.End="End",H.PageUp="PageUp",H.PageDown="PageDown",H.Tab="Tab",H);let J=(0,l.createContext)(null);J.displayName="OpenClosedContext";var K=((N=K||{})[N.Open=0]="Open",N[N.Closed=1]="Closed",N);function L({value:a,children:b}){return l.createElement(J.Provider,{value:a},b)}function M(a){var b;if(a.type)return a.type;let c=null!=(b=a.as)?b:"button";if("string"==typeof c&&"button"===c.toLowerCase())return"button"}var N,O,P,Q=((O=Q||{})[O.Open=0]="Open",O[O.Closed=1]="Closed",O),R=((P=R||{})[P.ToggleDisclosure=0]="ToggleDisclosure",P[P.CloseDisclosure=1]="CloseDisclosure",P[P.SetButtonId=2]="SetButtonId",P[P.SetPanelId=3]="SetPanelId",P[P.LinkPanel=4]="LinkPanel",P[P.UnlinkPanel=5]="UnlinkPanel",P);let S={0:a=>({...a,disclosureState:m(a.disclosureState,{0:1,1:0})}),1:a=>1===a.disclosureState?a:{...a,disclosureState:1},4(a){return!0===a.linkedPanel?a:{...a,linkedPanel:!0}},5(a){return!1===a.linkedPanel?a:{...a,linkedPanel:!1}},2(a,b){return a.buttonId===b.buttonId?a:{...a,buttonId:b.buttonId}},3(a,b){return a.panelId===b.panelId?a:{...a,panelId:b.panelId}}},T=(0,l.createContext)(null);function U(a){let b=(0,l.useContext)(T);if(null===b){let c=Error(`<${a} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,U),c}return b}T.displayName="DisclosureContext";let V=(0,l.createContext)(null);function W(a){let b=(0,l.useContext)(V);if(null===b){let c=Error(`<${a} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,W),c}return b}V.displayName="DisclosureAPIContext";let X=(0,l.createContext)(null);function Y(a,b){return m(b.type,S,a,b)}X.displayName="DisclosurePanelContext";let Z=l.Fragment,$=v(function(a,b){let{defaultOpen:c=!1,...d}=a,e=(0,l.useRef)(null),f=C(b,function(a,b=!0){return Object.assign(a,{[B]:b})}(a=>{e.current=a},void 0===a.as||a.as===l.Fragment)),g=(0,l.useRef)(null),h=(0,l.useRef)(null),i=(0,l.useReducer)(Y,{disclosureState:c?0:1,linkedPanel:!1,buttonRef:h,panelRef:g,buttonId:null,panelId:null}),[{disclosureState:j,buttonId:k},n]=i,o=A(a=>{var b;n({type:1});let c=(b=e,y?null:b instanceof Node?b.ownerDocument:null!=b&&b.hasOwnProperty("current")&&b.current instanceof Node?b.current.ownerDocument:document);if(!c||!k)return;let d=a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:c.getElementById(k):c.getElementById(k);null==d||d.focus()}),p=(0,l.useMemo)(()=>({close:o}),[o]),q=(0,l.useMemo)(()=>({open:0===j,close:o}),[j,o]);return l.createElement(T.Provider,{value:i},l.createElement(V.Provider,{value:p},l.createElement(L,{value:m(j,{0:K.Open,1:K.Closed})},r({ourProps:{ref:f},theirProps:d,slot:q,defaultTag:Z,name:"Disclosure"}))))}),_=v(function(a,b){let c=G(),{id:d=`headlessui-disclosure-button-${c}`,...e}=a,[f,g]=U("Disclosure.Button"),h=(0,l.useContext)(X),i=null!==h&&h===f.panelId,j=(0,l.useRef)(null),k=C(j,b,i?null:f.buttonRef);(0,l.useEffect)(()=>{if(!i)return g({type:2,buttonId:d}),()=>{g({type:2,buttonId:null})}},[d,g,i]);let m=A(a=>{var b;if(i){if(1===f.disclosureState)return;switch(a.key){case I.Space:case I.Enter:a.preventDefault(),a.stopPropagation(),g({type:0}),null==(b=f.buttonRef.current)||b.focus()}}else switch(a.key){case I.Space:case I.Enter:a.preventDefault(),a.stopPropagation(),g({type:0})}}),n=A(a=>{a.key===I.Space&&a.preventDefault()}),o=A(b=>{var c;(function(a){let b=a.parentElement,c=null;for(;b&&!(b instanceof HTMLFieldSetElement);)b instanceof HTMLLegendElement&&(c=b),b=b.parentElement;let d=(null==b?void 0:b.getAttribute("disabled"))==="";return!(d&&function a(b){if(!b)return!1;let c=b.previousElementSibling;for(;null!==c;){if(c instanceof HTMLLegendElement)return!1;c=c.previousElementSibling}return!0}(c))&&d})(b.currentTarget)||a.disabled||(i?(g({type:0}),null==(c=f.buttonRef.current)||c.focus()):g({type:0}))}),p=(0,l.useMemo)(()=>({open:0===f.disclosureState}),[f]),q=function(a,b){let[c,d]=(0,l.useState)(()=>M(a));return z(()=>{d(M(a))},[a.type,a.as]),z(()=>{c||!b.current||b.current instanceof HTMLButtonElement&&!b.current.hasAttribute("type")&&d("button")},[c,b]),c}(a,j),s=i?{ref:k,type:q,onKeyDown:m,onClick:o}:{ref:k,id:d,type:q,"aria-expanded":a.disabled?void 0:0===f.disclosureState,"aria-controls":f.linkedPanel?f.panelId:void 0,onKeyDown:m,onKeyUp:n,onClick:o};return r({ourProps:s,theirProps:e,slot:p,defaultTag:"button",name:"Disclosure.Button"})}),aa=p.RenderStrategy|p.Static,ab=v(function(a,b){let c=G(),{id:d=`headlessui-disclosure-panel-${c}`,...e}=a,[f,g]=U("Disclosure.Panel"),{close:h}=W("Disclosure.Panel"),i=C(b,f.panelRef,a=>{g({type:a?4:5})});(0,l.useEffect)(()=>(g({type:3,panelId:d}),()=>{g({type:3,panelId:null})}),[d,g]);let j=(0,l.useContext)(J),k=null!==j?j===K.Open:0===f.disclosureState,m=(0,l.useMemo)(()=>({open:0===f.disclosureState,close:h}),[f,h]);return l.createElement(X.Provider,{value:f.panelId},r({ourProps:{ref:i,id:d},theirProps:e,slot:m,defaultTag:"div",features:aa,visible:k,name:"Disclosure.Panel"}))}),ac=Object.assign($,{Button:_,Panel:ab}),ad=l.forwardRef(function({title:a,titleId:b,...c},d){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:d,"aria-labelledby":b},c),a?l.createElement("title",{id:b},a):null,l.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))});var ae=ad;let af=l.forwardRef(function({title:a,titleId:b,...c},d){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:d,"aria-labelledby":b},c),a?l.createElement("title",{id:b},a):null,l.createElement("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});var ag=af;function ah(){var a=(0,k.useRouter)();return(0,f.jsx)("header",{className:"mb-16",children:(0,f.jsx)(ac,{as:"nav",className:"px-2 py-2.5 w-full sm:w-11/12 md:w-3/4 mx-auto border-b border-gray-300",children:function(b){var c=b.open;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",children:[(0,f.jsx)(h(),{href:"/",children:(0,f.jsx)(j(),{src:"/logo.png",className:"mr-3 h-12 sm:h-14",alt:"logo"})}),(0,f.jsx)("div",{className:"flex items-start sm:order-2 sm:hidden",children:(0,f.jsx)(ac.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:c?(0,f.jsx)(ae,{className:"block h-6 w-6","aria-hidden":"true"}):(0,f.jsx)(ag,{className:"block h-6 w-6","aria-hidden":"true"})})}),(0,f.jsx)("div",{className:"hidden justify-between items-center w-full sm:flex sm:w-auto sm:order-1",children:(0,f.jsxs)("ul",{className:"flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 font-sans font-light uppercase",children:[(0,f.jsx)("li",{className:"block py-2 pr-4 pl-3 hover:text-gray-900 ".concat("/"===a.pathname?"text-gray-900":"text-gray-400"),children:(0,f.jsx)(h(),{href:"/","aria-current":"page",children:"About"})}),(0,f.jsx)("li",{className:"block py-2 pr-4 pl-3 hover:text-gray-900 ".concat("/team"===a.pathname?"text-gray-900":"text-gray-400"),children:(0,f.jsx)(h(),{href:"/team","aria-current":"page",children:"Team"})}),(0,f.jsx)("li",{className:"block py-2 pr-4 pl-3 hover:text-gray-900 ".concat("/contact"===a.pathname?"text-gray-900":"text-gray-400"),children:(0,f.jsx)(h(),{href:"/contact","aria-current":"page",children:"Contact"})})]})})]}),(0,f.jsx)(ac.Panel,{className:"sm:hidden",children:(0,f.jsxs)("div",{className:"space-y-1 px-2 pt-2 pb-3 font-sans font-light uppercase",children:[(0,f.jsx)(ac.Button,{as:"a",href:"/",className:"block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded-md hover:bg-gray-700","aria-current":"page",children:"About"}),(0,f.jsx)(ac.Button,{as:"a",href:"/team",className:"block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded-md hover:bg-gray-700","aria-current":"page",children:"Team"}),(0,f.jsx)(ac.Button,{as:"a",href:"/contact",className:"block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded-md hover:bg-gray-700","aria-current":"page",children:"Contact"})]})})]})}})})}var ai=function(){return(0,f.jsx)("footer",{className:"mt-16",children:(0,f.jsx)("div",{className:"pt-2 pb-12 w-full sm:w-11/12 md:w-3/4 mx-auto border-t border-gray-300",children:(0,f.jsx)("div",{className:"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",children:(0,f.jsxs)("div",{className:"flex flex-row space-x-8 mt-4 ml-8 sm:ml-0 sm:mt-0 font-sans text-xs font-light uppercase",children:[(0,f.jsx)(h(),{href:"/terms-of-use",children:(0,f.jsx)("span",{className:"text-gray-400 hover:text-gray-900 cursor-pointer",children:"Terms of use"})}),(0,f.jsx)(h(),{href:"/privacy-policy",children:(0,f.jsx)("span",{className:"text-gray-400 hover:text-gray-900 cursor-pointer",children:"Privacy Policy"})})]})})})})},aj=function(a){var b=a.Component,c=a.pageProps;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ah,{}),(0,f.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},c)),(0,f.jsx)(ai,{})]})}},906:function(){},5675:function(a,b,c){a.exports=c(8045)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])