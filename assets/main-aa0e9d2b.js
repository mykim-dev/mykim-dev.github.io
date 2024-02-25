import{defineComponent as y,ref as V,watch as q,resolveComponent as a,openBlock as k,createElementBlock as w,createElementVNode as n,createVNode as e,withCtx as l,unref as f,reactive as $,createTextVNode as v,Fragment as x}from"vue";import{E as D,a as C}from"./index-9c0a46b5.js";import{u as P}from"./attribute-4a080ba7.js";const A={class:"set-container"},N={class:"set-header"},U=n("h3",{class:"title"},"Menu",-1),M={class:"menu-setting"},R=y({__name:"settingMenu",setup(S){P();const t=V(""),h=V(),o={children:"children",label:"label"};q(t,i=>{h.value.filter(i)});const u=(i,r)=>i?r.label.includes(i):!0,c=[{id:1,label:"main",link:"/StudioHome",children:[{id:1-1,label:"depth2",link:"",children:[{id:1-1-1,label:"depth3",link:"",children:[]}]}]},{id:2,label:"screen",link:"/StudioScreen",children:[{id:2-1,label:"Default",link:"",children:[]},{id:2-2,label:"Horizontal",link:"",children:[]},{id:2-3,label:"Vertical",link:"",children:[]},{id:2-4,label:"Horizontal2",link:"",children:[]},{id:2-5,label:"Vertical2",link:"",children:[]},{id:2-6,label:"Horizontal3",link:"",children:[]},{id:2-7,label:"Dashboard",link:"",children:[]},{id:2-8,label:"Dashboard2",link:"",children:[]},{id:2-9,label:"Dashboard3",link:"",children:[]},{id:2-10,label:"Dynamic",link:"",children:[]}]},{id:3,label:"component",link:"/StudioComponent",children:[]}],s=i=>{console.log(i)};return(i,r)=>{const _=a("font-awesome-icon"),m=a("el-button"),b=a("el-input"),g=a("el-scrollbar");return k(),w("div",A,[n("div",N,[U,n("div",null,[e(m,null,{default:l(()=>[e(_,{icon:["fas","plus"]})]),_:1}),e(m,null,{default:l(()=>[e(_,{icon:["fas","pen-to-square"]})]),_:1})])]),e(g,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 40px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[n("div",M,[e(b,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),placeholder:"Filter keyword"},null,8,["modelValue"]),e(f(D),{ref_key:"treeRef",ref:h,class:"filter-tree",data:c,props:o,"filter-node-method":u,"default-expand-all":"",onNodeClick:s,draggabl:""},null,512)])]),_:1})])}}}),H={class:"set-container"},F={class:"set-header"},T={class:"qs-tags-group"},z={class:"set-body"},E={class:"set-container"},L=n("div",{class:"set-header"},[n("h3",{class:"title"},"Menu")],-1),B={class:"setting-footer"},I=y({__name:"attributeMenu",setup(S){const t=$({Name:"",Desc:"",Sequence:"",Hidden:!1,Root:!1,Display:"",Custom:"",Parent:"",Platform:V(["All"])});return(h,o)=>{const u=a("el-tag"),c=a("el-input"),s=a("el-form-item"),i=a("el-switch"),r=a("font-awesome-icon"),_=a("el-button"),m=a("el-checkbox-button"),b=a("el-checkbox-group"),g=a("el-form"),p=a("el-scrollbar");return k(),w("div",H,[n("div",F,[n("div",T,[e(u,{"disable-transitions":!0,effect:"dark"},{default:l(()=>[v("Attribute View")]),_:1}),e(u,{"disable-transitions":!0,effect:"plain"},{default:l(()=>[v("Service View")]),_:1})])]),n("div",z,[n("div",E,[L,e(p,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 120px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[e(g,{"label-position":"left"},{default:l(()=>[e(s,{label:"Name",required:!0},{default:l(()=>[e(c,{modelValue:t.Name,"onUpdate:modelValue":o[0]||(o[0]=d=>t.Name=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Desc"},{default:l(()=>[e(c,{modelValue:t.Desc,"onUpdate:modelValue":o[1]||(o[1]=d=>t.Desc=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Sequence",required:!0},{default:l(()=>[e(c,{modelValue:t.Sequence,"onUpdate:modelValue":o[2]||(o[2]=d=>t.Sequence=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Hidden Flag",required:!0},{default:l(()=>[e(i,{modelValue:t.Hidden,"onUpdate:modelValue":o[3]||(o[3]=d=>t.Hidden=d),size:"small"},null,8,["modelValue"])]),_:1}),e(s,{label:"Root Flag",required:!0},{default:l(()=>[e(i,{modelValue:t.Root,"onUpdate:modelValue":o[4]||(o[4]=d=>t.Root=d),size:"small"},null,8,["modelValue"])]),_:1}),e(s,{label:"Display Name"},{default:l(()=>[e(c,{modelValue:t.Display,"onUpdate:modelValue":o[5]||(o[5]=d=>t.Display=d),placeholder:"Please input"},{append:l(()=>[e(_,null,{default:l(()=>[e(r,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"Custom Display"},{default:l(()=>[e(c,{modelValue:t.Custom,"onUpdate:modelValue":o[6]||(o[6]=d=>t.Custom=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Icon"},{default:l(()=>[e(_,null,{default:l(()=>[e(r,{icon:["fas","icons"]})]),_:1})]),_:1}),e(s,{label:"Parent Menu"},{default:l(()=>[e(c,{modelValue:t.Parent,"onUpdate:modelValue":o[7]||(o[7]=d=>t.Parent=d),placeholder:"Please input"},{append:l(()=>[e(_,null,{default:l(()=>[e(r,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"Platform"},{default:l(()=>[e(b,{modelValue:t.Platform,"onUpdate:modelValue":o[8]||(o[8]=d=>t.Platform=d)},{default:l(()=>[e(m,{key:"All",label:"All"}),e(m,{key:"web",label:"web"},{default:l(()=>[e(r,{icon:["fas","desktop"]})]),_:1}),e(m,{key:"mobile",label:"mobile"},{default:l(()=>[e(r,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),n("div",B,[e(_,null,{default:l(()=>[v("저장")]),_:1})])])])])}}}),Y={class:"qs-screen"},j={class:"qs-component"},G={class:"qs-toolbarlist"},J={class:"qs-list-item"},K={class:"qs-component"},O={class:"qs-toolbarlist"},Q={class:"qs-list-item"},W=y({__name:"contentsMain",setup(S){const t=[{application:"Education"}],h=[{master:"Yes",name:"20240224FormTest",desc:"",url:"/20240224FormTest",type:"page"}],o=V(["1","2"]),u=c=>{console.log(c)};return(c,s)=>{const i=a("el-table-column"),r=a("el-table"),_=a("el-collapse-item"),m=a("el-collapse"),b=a("el-col"),g=a("el-row");return k(),w("div",Y,[e(g,{class:"qs-screen-row vertical",gutter:16},{default:l(()=>[e(b,{class:"qs-screen-col",span:24},{default:l(()=>[n("div",j,[n("div",G,[e(m,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=p=>o.value=p),onChange:u},{default:l(()=>[e(_,{name:"1"},{title:l(()=>[v(" Related Application List ")]),default:l(()=>[n("div",J,[e(r,{data:t,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:l(()=>[e(i,{label:"Application",prop:"application"})]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),e(b,{class:"qs-screen-col",span:24},{default:l(()=>[n("div",K,[n("div",O,[e(m,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=p=>o.value=p),onChange:u},{default:l(()=>[e(_,{name:"2"},{title:l(()=>[v(" Related Screen List ")]),default:l(()=>[n("div",Q,[e(r,{data:h,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:l(()=>[e(i,{label:"Master Flag",prop:"master",width:"150"}),e(i,{label:"Name",prop:"name",width:"150"}),e(i,{label:"Description",prop:"desc"}),e(i,{label:"URL",prop:"url",width:"300"}),e(i,{label:"Type",prop:"type",width:"100"})]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])]),_:1})]),_:1})])}}}),X={class:"main-aside-left"},Z={class:"main-contents"},ee={class:"set-container"},le={class:"main-aside-right"},ae=y({__name:"main",setup(S){const t=C();return(h,o)=>{const u=a("font-awesome-icon"),c=a("el-scrollbar");return k(),w(x,null,[n("div",X,[e(R)]),n("div",Z,[n("span",{class:"toggle-aside toggle-aside-setting",onClick:o[0]||(o[0]=s=>f(t).contentsMainLayout(!f(t).contentsSetAreaShow,f(t).contentsAttributeAreaShow))},[n("i",null,[e(u,{icon:["fas","ellipsis-vertical"]})])]),n("div",ee,[e(c,{class:"set-body","view-style":"height: calc(100vh - 145px);overflow-x: hidden;"},{default:l(()=>[e(W)]),_:1})]),n("span",{class:"toggle-aside toggle-aside-attribute",onClick:o[1]||(o[1]=s=>f(t).contentsMainLayout(f(t).contentsSetAreaShow,!f(t).contentsAttributeAreaShow))},[n("i",null,[e(u,{icon:["fas","ellipsis-vertical"]})])])]),n("div",le,[e(I)])],64)}}});export{ae as default};
