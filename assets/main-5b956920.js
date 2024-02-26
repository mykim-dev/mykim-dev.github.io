import{a as y,r as V,s as q,b as n,o as w,j as k,f as a,e,w as l,g as f,E as $,t as x,l as v,v as D,F as C}from"./index-bb4c6ad0.js";import{u as P}from"./attribute-33c0a2d1.js";const A={class:"set-container"},N={class:"set-header"},U=a("h3",{class:"title"},"Menu",-1),M={class:"menu-setting"},R=y({__name:"settingMenu",setup(S){P();const t=V(""),h=V(),o={children:"children",label:"label"};q(t,i=>{h.value.filter(i)});const u=(i,r)=>i?r.label.includes(i):!0,c=[{id:1,label:"main",link:"/StudioHome",children:[{id:1-1,label:"depth2",link:"",children:[{id:1-1-1,label:"depth3",link:"",children:[]}]}]},{id:2,label:"screen",link:"/StudioScreen",children:[{id:2-1,label:"Default",link:"",children:[]},{id:2-2,label:"Horizontal",link:"",children:[]},{id:2-3,label:"Vertical",link:"",children:[]},{id:2-4,label:"Horizontal2",link:"",children:[]},{id:2-5,label:"Vertical2",link:"",children:[]},{id:2-6,label:"Horizontal3",link:"",children:[]},{id:2-7,label:"Dashboard",link:"",children:[]},{id:2-8,label:"Dashboard2",link:"",children:[]},{id:2-9,label:"Dashboard3",link:"",children:[]},{id:2-10,label:"Dynamic",link:"",children:[]}]},{id:3,label:"component",link:"/StudioComponent",children:[]}],s=i=>{console.log(i)};return(i,r)=>{const _=n("font-awesome-icon"),p=n("el-button"),b=n("el-input"),g=n("el-scrollbar");return w(),k("div",A,[a("div",N,[U,a("div",null,[e(p,null,{default:l(()=>[e(_,{icon:["fas","plus"]})]),_:1}),e(p,null,{default:l(()=>[e(_,{icon:["fas","pen-to-square"]})]),_:1})])]),e(g,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 40px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[a("div",M,[e(b,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=m=>t.value=m),placeholder:"Filter keyword"},null,8,["modelValue"]),e(f($),{ref_key:"treeRef",ref:h,class:"filter-tree",data:c,props:o,"filter-node-method":u,"default-expand-all":"",onNodeClick:s,draggabl:""},null,512)])]),_:1})])}}}),F={class:"set-container"},H={class:"set-header"},L={class:"qs-tags-group"},T={class:"set-body"},z={class:"set-container"},E=a("div",{class:"set-header"},[a("h3",{class:"title"},"Menu")],-1),B={class:"setting-footer"},j=y({__name:"attributeMenu",setup(S){const t=x({Name:"",Desc:"",Sequence:"",Hidden:!1,Root:!1,Display:"",Custom:"",Parent:"",Platform:V(["All"])});return(h,o)=>{const u=n("el-tag"),c=n("el-input"),s=n("el-form-item"),i=n("el-switch"),r=n("font-awesome-icon"),_=n("el-button"),p=n("el-checkbox-button"),b=n("el-checkbox-group"),g=n("el-form"),m=n("el-scrollbar");return w(),k("div",F,[a("div",H,[a("div",L,[e(u,{"disable-transitions":!0,effect:"dark"},{default:l(()=>[v("Attribute View")]),_:1}),e(u,{"disable-transitions":!0,effect:"plain"},{default:l(()=>[v("Service View")]),_:1})])]),a("div",T,[a("div",z,[E,e(m,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 120px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[e(g,{"label-position":"left"},{default:l(()=>[e(s,{label:"Name",required:!0},{default:l(()=>[e(c,{modelValue:t.Name,"onUpdate:modelValue":o[0]||(o[0]=d=>t.Name=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Desc"},{default:l(()=>[e(c,{modelValue:t.Desc,"onUpdate:modelValue":o[1]||(o[1]=d=>t.Desc=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Sequence",required:!0},{default:l(()=>[e(c,{modelValue:t.Sequence,"onUpdate:modelValue":o[2]||(o[2]=d=>t.Sequence=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Hidden Flag",required:!0},{default:l(()=>[e(i,{modelValue:t.Hidden,"onUpdate:modelValue":o[3]||(o[3]=d=>t.Hidden=d),size:"small"},null,8,["modelValue"])]),_:1}),e(s,{label:"Root Flag",required:!0},{default:l(()=>[e(i,{modelValue:t.Root,"onUpdate:modelValue":o[4]||(o[4]=d=>t.Root=d),size:"small"},null,8,["modelValue"])]),_:1}),e(s,{label:"Display Name"},{default:l(()=>[e(c,{modelValue:t.Display,"onUpdate:modelValue":o[5]||(o[5]=d=>t.Display=d),placeholder:"Please input"},{append:l(()=>[e(_,null,{default:l(()=>[e(r,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"Custom Display"},{default:l(()=>[e(c,{modelValue:t.Custom,"onUpdate:modelValue":o[6]||(o[6]=d=>t.Custom=d),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(s,{label:"Icon"},{default:l(()=>[e(_,null,{default:l(()=>[e(r,{icon:["fas","icons"]})]),_:1})]),_:1}),e(s,{label:"Parent Menu"},{default:l(()=>[e(c,{modelValue:t.Parent,"onUpdate:modelValue":o[7]||(o[7]=d=>t.Parent=d),placeholder:"Please input"},{append:l(()=>[e(_,null,{default:l(()=>[e(r,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"Platform"},{default:l(()=>[e(b,{modelValue:t.Platform,"onUpdate:modelValue":o[8]||(o[8]=d=>t.Platform=d)},{default:l(()=>[e(p,{key:"All",label:"All"}),e(p,{key:"web",label:"web"},{default:l(()=>[e(r,{icon:["fas","desktop"]})]),_:1}),e(p,{key:"mobile",label:"mobile"},{default:l(()=>[e(r,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),a("div",B,[e(_,null,{default:l(()=>[v("저장")]),_:1})])])])])}}}),I={class:"qs-screen"},Y={class:"qs-component"},G={class:"qs-toolbarlist"},J={class:"qs-list-item"},K={class:"qs-component"},O={class:"qs-toolbarlist"},Q={class:"qs-list-item"},W=y({__name:"contentsMain",setup(S){const t=[{application:"Education"}],h=[{master:"Yes",name:"20240224FormTest",desc:"",url:"/20240224FormTest",type:"page"}],o=V(["1","2"]),u=c=>{console.log(c)};return(c,s)=>{const i=n("el-table-column"),r=n("el-table"),_=n("el-collapse-item"),p=n("el-collapse"),b=n("el-col"),g=n("el-row");return w(),k("div",I,[e(g,{class:"qs-screen-row vertical",gutter:10,style:{"grid-template-rows":"repeat(24, 1fr)","grid-template-columns":"repeat(24, 1fr)"}},{default:l(()=>[e(b,{class:"qs-screen-col",span:24,style:{"grid-area":"auto / span 24"}},{default:l(()=>[a("div",Y,[a("div",G,[e(p,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=m=>o.value=m),onChange:u},{default:l(()=>[e(_,{name:"1"},{title:l(()=>[v(" Related Application List ")]),default:l(()=>[a("div",J,[e(r,{data:t,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:l(()=>[e(i,{label:"Application",prop:"application"})]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),e(b,{class:"qs-screen-col",span:24,style:{"grid-area":"auto / span 24"}},{default:l(()=>[a("div",K,[a("div",O,[e(p,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=m=>o.value=m),onChange:u},{default:l(()=>[e(_,{name:"2"},{title:l(()=>[v(" Related Screen List ")]),default:l(()=>[a("div",Q,[e(r,{data:h,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:l(()=>[e(i,{label:"Master Flag",prop:"master",width:"150"}),e(i,{label:"Name",prop:"name",width:"150"}),e(i,{label:"Description",prop:"desc"}),e(i,{label:"URL",prop:"url",width:"300"}),e(i,{label:"Type",prop:"type",width:"100"})]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])]),_:1})]),_:1})])}}}),X={class:"main-aside-left"},Z={class:"main-contents"},ee={class:"set-container"},le={class:"main-aside-right"},ae=y({__name:"main",setup(S){const t=D();return t.contentsMainLayout(!0,!0),(h,o)=>{const u=n("font-awesome-icon"),c=n("el-scrollbar");return w(),k(C,null,[a("div",X,[e(R)]),a("div",Z,[a("span",{class:"toggle-aside toggle-aside-setting",onClick:o[0]||(o[0]=s=>f(t).contentsMainLayout(!f(t).contentsSetAreaShow,f(t).contentsAttributeAreaShow))},[a("i",null,[e(u,{icon:["fas","ellipsis-vertical"]})])]),a("div",ee,[e(c,{class:"set-body","view-style":"height: calc(100vh - 145px);overflow-x: hidden;"},{default:l(()=>[e(W)]),_:1})]),a("span",{class:"toggle-aside toggle-aside-attribute",onClick:o[1]||(o[1]=s=>f(t).contentsMainLayout(f(t).contentsSetAreaShow,!f(t).contentsAttributeAreaShow))},[a("i",null,[e(u,{icon:["fas","ellipsis-vertical"]})])])]),a("div",le,[e(j)])],64)}}});export{ae as default};
