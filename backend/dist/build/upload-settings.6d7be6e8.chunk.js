"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[695],{85078:(P,g,t)=>{t.r(g),t.d(g,{SettingsPage:()=>U,default:()=>F});var e=t(67294),a=t(64593),p=t(86896),s=t(86597),c=t(85018),b=t(185),v=t(53979),f=t(29728),h=t(49066),L=t(17034),y=t(11047),R=t(41580),D=t(75515),n=t(11276),r=t(74571),l=t(20707),o=t(52861),m=t(18446),O=t.n(m),d=t(57197);const S=i=>i;var A=t(18172),Z=t(36968),W=t.n(Z);const K={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},H=(i,M)=>(0,A.ZP)(i,u=>{switch(M.type){case"CANCEL_CHANGES":{u.modifiedData=i.initialData;break}case"GET_DATA_SUCCEEDED":{u.isLoading=!1,u.initialData=M.data,u.modifiedData=M.data;break}case"ON_CHANGE":{W()(u,["modifiedData",...M.keys.split(".")],M.value);break}case"ON_SUBMIT":{u.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{u.initialData=i.modifiedData,u.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{u.isSubmiting=!1;break}default:return i}});var G=t(16838);const U=()=>{const{formatMessage:i}=(0,p.Z)(),{lockApp:M,unlockApp:u}=(0,s.o1)(),j=(0,s.lm)(),{get:V,put:$}=(0,s.kY)();(0,s.go)();const[{initialData:X,isLoading:Y,isSubmiting:J,modifiedData:T},B]=(0,e.useReducer)(H,K,S),k=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const C=o.default.CancelToken.source(),w=async()=>{try{const{data:{data:z}}=await V((0,d.IF)("settings"),{cancelToken:C.token});B({type:"GET_DATA_SUCCEEDED",data:z})}catch(z){console.error(z)}};return k.current&&w(),()=>{C.cancel("Operation canceled by the user."),k.current=!1}},[]);const N=O()(X,T),Q=async E=>{if(E.preventDefault(),!N){M(),B({type:"ON_SUBMIT"});try{await $((0,d.IF)("settings"),T),B({type:"SUBMIT_SUCCEEDED"}),j({type:"success",message:{id:"notification.form.success.fields"}})}catch(C){console.error(C),B({type:"ON_SUBMIT_ERROR"})}u()}},I=({target:{name:E,value:C}})=>{B({type:"ON_CHANGE",keys:E,value:C})};return e.createElement(b.o,{tabIndex:-1},e.createElement(a.q,{title:i({id:(0,d.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:Q},e.createElement(v.T,{title:i({id:(0,d.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(f.z,{disabled:N,"data-testid":"save-button",loading:J,type:"submit",startIcon:e.createElement(c.Z,null),size:"S"},i({id:"global.save",defaultMessage:"Save"})),subtitle:i({id:(0,d.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(h.D,null,Y?e.createElement(s.dO,null):e.createElement(L.A,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(R.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(y.k,null,e.createElement(D.Z,{variant:"delta",as:"h2"},i({id:(0,d.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(n.r,{gap:6},e.createElement(r.P,{col:6,s:12},e.createElement(l.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:T.responsiveDimensions,hint:i({id:(0,d.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:i({id:(0,d.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:E=>{I({target:{name:"responsiveDimensions",value:E.target.checked}})}})),e.createElement(r.P,{col:6,s:12},e.createElement(l.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:T.sizeOptimization,hint:i({id:(0,d.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:i({id:(0,d.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:E=>{I({target:{name:"sizeOptimization",value:E.target.checked}})}})),e.createElement(r.P,{col:6,s:12},e.createElement(l.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:T.autoOrientation,hint:i({id:(0,d.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:i({id:(0,d.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:E=>{I({target:{name:"autoOrientation",value:E.target.checked}})}}))))))))))},F=()=>e.createElement(s.O4,{permissions:G.Z.settings},e.createElement(U,null))},49066:(P,g,t)=>{t.d(g,{D:()=>s});var e=t(67294),a=t(45697),p=t(41580);const s=({children:c})=>e.createElement(p.x,{paddingLeft:10,paddingRight:10},c);s.propTypes={children:a.node.isRequired}},53979:(P,g,t)=>{t.d(g,{T:()=>y});var e=t(67294),a=t(45697),p=t(46449),s=t(41580),c=t(11047);const b=n=>{const r=(0,e.useRef)(null),[l,o]=(0,e.useState)(!0),m=([O])=>{o(O.isIntersecting)};return(0,e.useEffect)(()=>{const O=r.current,d=new IntersectionObserver(m,n);return O&&d.observe(r.current),()=>{O&&d.disconnect()}},[r,n]),[r,l]};var v=t(95355);const f=(n,r)=>{const l=(0,v.W)(r);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(l);return Array.isArray(n)?n.forEach(m=>{m.current&&o.observe(m.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,l])};var h=t(75515);const L=()=>{const n=(0,e.useRef)(null),[r,l]=(0,e.useState)(null),[o,m]=b({root:null,rootMargin:"0px",threshold:0});return f(o,()=>{o.current&&l(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&l(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:m,baseHeaderLayoutRef:n,headerSize:r}},y=n=>{const{containerRef:r,isVisible:l,baseHeaderLayoutRef:o,headerSize:m}=L();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:m?.height},ref:r},l&&e.createElement(D,{ref:o,...n})),!l&&e.createElement(D,{...n,sticky:!0,width:m?.width}))};y.displayName="HeaderLayout";const R=(0,p.ZP)(s.x)`
  width: ${n=>n.width}px;
`,D=e.forwardRef(({navigationAction:n,primaryAction:r,secondaryAction:l,subtitle:o,title:m,sticky:O,width:d,...x},S)=>{const A=typeof o=="string";return O?e.createElement(R,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:d,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,null,n&&e.createElement(s.x,{paddingRight:3},n),e.createElement(s.x,null,e.createElement(h.Z,{variant:"beta",as:"h1",...x},m),A?e.createElement(h.Z,{variant:"pi",textColor:"neutral600"},o):o),l?e.createElement(s.x,{paddingLeft:4},l):null),e.createElement(c.k,null,r?e.createElement(s.x,{paddingLeft:2},r):void 0))):e.createElement(s.x,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(s.x,{paddingBottom:2},n):null,e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,{minWidth:0},e.createElement(h.Z,{as:"h1",variant:"alpha",...x},m),l?e.createElement(s.x,{paddingLeft:4},l):null),r),A?e.createElement(h.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});D.displayName="BaseHeaderLayout",D.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},D.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},y.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(P,g,t)=>{t.d(g,{A:()=>v});var e=t(67294),a=t(45697),p=t(46449),s=t(41580);const c=(0,p.ZP)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:f})=>f?"auto 1fr":"1fr"};
`,b=(0,p.ZP)(s.x)`
  overflow-x: hidden;
`,v=({sideNav:f,children:h})=>e.createElement(c,{hasSideNav:Boolean(f)},f,e.createElement(b,{paddingBottom:10},h));v.defaultProps={sideNav:void 0},v.propTypes={children:a.node.isRequired,sideNav:a.node}},185:(P,g,t)=>{t.d(g,{o:()=>c});var e=t(67294),a=t(45697),p=t(46449);const s=p.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:b,...v})=>{const f=b||"main-content-title";return e.createElement(s,{"aria-labelledby":f,id:"main-content",tabIndex:-1,...v})};c.defaultProps={labelledBy:void 0},c.propTypes={labelledBy:a.string}}}]);
