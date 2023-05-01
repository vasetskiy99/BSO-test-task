"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3455],{98906:(V,x,t)=>{t.r(x),t.d(x,{default:()=>ue});var e=t(67294),n=t(86597),R=t(87751),D=t(65186),B=t(4585),Z=t(20022),I=t(96315),v=t(185),m=t(53979),C=t(29728),g=t(36989),$=t(49066),S=t(38939),X=t(49386),k=t(8060),H=t(79031),T=t(37909),W=t(75515),G=t(63237),J=t(15234),Y=t(27361),w=t.n(Y),K=t(86896),q=t(16550),_=t(48474);const ee=()=>"todo empty role";var te=t(45697),A=t.n(te),ne=t(11047),le=t(41580),se=t(12028);const F=({id:a,name:o,description:l,usersCount:p,icons:r,rowIndex:u,canUpdate:h})=>{const{formatMessage:M}=(0,K.Z)(),[,i]=r,y=M({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:p});return e.createElement(H.Tr,{"aria-rowindex":u,key:a,...h?(0,n.X7)({fn:i.onClick}):{}},e.createElement(T.Td,{maxWidth:(0,n.Q1)(130)},e.createElement(W.Z,{ellipsis:!0,textColor:"neutral800"},o)),e.createElement(T.Td,{maxWidth:(0,n.Q1)(250)},e.createElement(W.Z,{ellipsis:!0,textColor:"neutral800"},l)),e.createElement(T.Td,null,e.createElement(W.Z,{textColor:"neutral800"},y)),e.createElement(T.Td,null,e.createElement(ne.k,{justifyContent:"flex-end",...n.UW},r.map((d,L)=>d?e.createElement(le.x,{key:d.label,paddingLeft:L===0?0:1},e.createElement(se.h,{onClick:d.onClick,label:d.label,noBorder:!0,icon:d.icon})):null))))};F.propTypes={id:A().number.isRequired,name:A().string.isRequired,description:A().string.isRequired,usersCount:A().number.isRequired,icons:A().array.isRequired,rowIndex:A().number.isRequired,canUpdate:A().bool},F.defaultProps={canUpdate:!1};const ae=F;var oe=t(18172);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(a,o)=>(0,oe.ZP)(a,l=>{switch(o.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=o.id;break}default:return l}}),de=()=>{(0,n.go)();const{locale:a}=(0,K.Z)(),{isLoading:o,allowedActions:{canCreate:l,canDelete:p,canRead:r,canUpdate:u}}=(0,n.ss)(R.Z.settings.roles),{getData:h,roles:M,isLoading:i}=(0,_.bF)(!1),[{query:y}]=(0,n.Kx)(),d=y?._q||"",{includes:L}=(0,n.L0)(a,{sensitivity:"base"}),P=(0,n.Xe)(a,{sensitivity:"base"}),U=(M||[]).filter(f=>L(f.name,d)||L(f.description,d)).sort((f,O)=>P.compare(f.name,O.name)||P.compare(f.description,O.description));return(0,e.useEffect)(()=>{!o&&r&&h()},[o,r,h]),{isLoadingForPermissions:o,canCreate:l,canDelete:p,canRead:r,canUpdate:u,isLoading:i,getData:h,sortedRoles:U,roles:M}},ce=({getData:a,canCreate:o,canDelete:l,canUpdate:p})=>{const{formatMessage:r}=(0,K.Z)(),u=(0,n.lm)(),[h,M]=(0,e.useState)(!1),{push:i}=(0,q.k6)(),[{selectedRoles:y,showModalConfirmButtonLoading:d,roleToDelete:L},P]=(0,e.useReducer)(ie,re),{post:U}=(0,n.tg)(),f=async()=>{try{P({type:"ON_REMOVE_ROLES"}),await U("/admin/roles/batch-delete",{ids:[L]}),await a(),P({type:"RESET_DATA_TO_DELETE"})}catch(s){const c=w()(s,["response","payload","data","ids"],null);if(c&&Array.isArray(c)){const ge=c.join(`
`);u({type:"warning",message:ge})}else u({type:"warning",message:{id:"notification.error"}})}E()},O=(0,e.useCallback)(s=>{i(`/settings/roles/duplicate/${s}`)},[i]),N=()=>i("/settings/roles/new"),b=(0,e.useCallback)(s=>{P({type:"SET_ROLE_TO_DELETE",id:s}),E()},[]),E=()=>M(s=>!s),j=(0,e.useCallback)(s=>{i(`/settings/roles/${s}`)},[i]),Q=(0,e.useCallback)((s,c)=>{s.preventDefault(),s.stopPropagation(),c.usersCount?u({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):b(c.id)},[u,b]),z=(0,e.useCallback)((s,c)=>{s.preventDefault(),s.stopPropagation(),O(c.id)},[O]),Ee=(0,e.useCallback)(s=>[...o?[{onClick:c=>z(c,s),label:r({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(D.Z,null)}]:[],...p?[{onClick:()=>j(s.id),label:r({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(B.Z,null)}]:[],...l?[{onClick:c=>Q(c,s),label:r({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(Z.Z,null)}]:[]],[r,Q,z,j,o,p,l]);return{handleNewRoleClick:N,getIcons:Ee,selectedRoles:y,isWarningDeleteAllOpened:h,showModalConfirmButtonLoading:d,handleToggleModal:E,handleDeleteData:f}},me=()=>{const{formatMessage:a}=(0,K.Z)(),{isLoadingForPermissions:o,canCreate:l,canRead:p,canDelete:r,canUpdate:u,isLoading:h,getData:M,sortedRoles:i}=de(),{handleNewRoleClick:y,getIcons:d,isWarningDeleteAllOpened:L,showModalConfirmButtonLoading:P,handleToggleModal:U,handleDeleteData:f}=ce({getData:M,canCreate:l,canDelete:r,canUpdate:u}),O=i.length+1,N=6;if(o)return e.createElement(v.o,null,e.createElement(n.dO,null));const b=a({id:"global.roles",defaultMessage:"roles"});return e.createElement(v.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(m.T,{primaryAction:l?e.createElement(C.z,{onClick:y,startIcon:e.createElement(I.Z,null),size:"S"},a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:b,subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),p&&e.createElement(g.Z,{startActions:e.createElement(n.m,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:b})})}),p&&e.createElement($.D,null,e.createElement(S.i,{colCount:N,rowCount:O,footer:l?e.createElement(X.c,{onClick:y,icon:e.createElement(I.Z,null)},a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(k.h,null,e.createElement(H.Tr,{"aria-rowindex":1},e.createElement(T.Th,null,e.createElement(W.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(T.Th,null,e.createElement(W.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.description",defaultMessage:"Description"}))),e.createElement(T.Th,null,e.createElement(W.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.users",defaultMessage:"Users"}))),e.createElement(T.Th,null,e.createElement(G.T,null,a({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(J.p,null,i?.map((E,j)=>e.createElement(ae,{key:E.id,id:E.id,name:E.name,description:E.description,usersCount:E.usersCount,icons:d(E),rowIndex:j+2,canUpdate:u})))),!O&&!h&&e.createElement(ee,null)),e.createElement(n.QH,{isOpen:L,onConfirm:f,isConfirmButtonLoading:P,onToggleDialog:U}))},ue=()=>e.createElement(n.O4,{permissions:R.Z.settings.roles.main},e.createElement(me,null))},36989:(V,x,t)=>{t.d(x,{Z:()=>v});var e=t(67294),n=t(45697),R=t(46449),D=t(41580),B=t(11047);const Z=(0,R.ZP)(B.k)`
  & > * + * {
    margin-left: ${({theme:m})=>m.spaces[2]};
  }

  margin-left: ${({pullRight:m})=>m?"auto":void 0};
`,I=(0,R.ZP)(Z)`
  flex-shrink: 0;
`,v=({startActions:m,endActions:C})=>m||C?e.createElement(D.x,{paddingLeft:10,paddingRight:10},e.createElement(D.x,{paddingBottom:4},e.createElement(B.k,{justifyContent:"space-between",alignItems:"flex-start"},m&&e.createElement(Z,{wrap:"wrap"},m),C&&e.createElement(I,{pullRight:!0},C)))):null;v.defaultProps={endActions:void 0,startActions:void 0},v.propTypes={endActions:n.node,startActions:n.node}},49386:(V,x,t)=>{t.d(x,{c:()=>C});var e=t(67294),n=t(45697),R=t(46449),D=t(41580),B=t(70004),Z=t(11047),I=t(75515);const v=(0,R.ZP)(D.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:g})=>g.colors.primary600};
  }
`,m=(0,R.ZP)(D.x)`
  border-radius: 0 0 ${({theme:g})=>g.borderRadius} ${({theme:g})=>g.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,C=({children:g,icon:$,...S})=>e.createElement("div",null,e.createElement(B.i,null),e.createElement(m,{as:"button",background:"primary100",padding:5,...S},e.createElement(Z.k,null,e.createElement(v,{"aria-hidden":!0,background:"primary200"},$),e.createElement(D.x,{paddingLeft:3},e.createElement(I.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},g)))));C.propTypes={children:n.string.isRequired,icon:n.node.isRequired}}}]);
