import{a as y,r as V,q as x,b as i,o as v,h as S,f as t,e,w as l,u as a,E as C,j as p,F as D,i as $,m as q}from"./index-b15d6768.js";import{u as H}from"./attributeStudio-3616e519.js";const A={class:"set-container"},z={class:"set-header"},F=t("h3",{class:"title"},"Menu",-1),N={class:"set-body"},P={class:"menu-setting"},L=y({__name:"settingMenu",setup(w){H();const n=V(""),m=V(),o={children:"children",label:"label"};x(n,s=>{m.value.filter(s)});const u=(s,c)=>s?c.label.includes(s):!0,r=[{id:1,label:"main",link:"/StudioHome",children:[{id:1-1,label:"depth2",link:"",children:[{id:1-1-1,label:"depth3",link:"",children:[]}]}]},{id:2,label:"screen",link:"/StudioScreen",children:[{id:2-1,label:"Default",link:"",children:[]},{id:2-2,label:"Horizontal",link:"",children:[]},{id:2-3,label:"Vertical",link:"",children:[]},{id:2-4,label:"Horizontal2",link:"",children:[]},{id:2-5,label:"Vertical2",link:"",children:[]},{id:2-6,label:"Horizontal3",link:"",children:[]},{id:2-7,label:"Dashboard",link:"",children:[]},{id:2-8,label:"Dashboard2",link:"",children:[]},{id:2-9,label:"Dashboard3",link:"",children:[]},{id:2-10,label:"Dynamic",link:"",children:[]}]},{id:3,label:"component",link:"/StudioComponent",children:[]},{id:1,label:"main",link:"/StudioHome",children:[{id:1-1,label:"depth2",link:"",children:[{id:1-1-1,label:"depth3",link:"",children:[]}]}]},{id:2,label:"screen",link:"/StudioScreen",children:[{id:2-1,label:"Default",link:"",children:[]},{id:2-2,label:"Horizontal",link:"",children:[]},{id:2-3,label:"Vertical",link:"",children:[]},{id:2-4,label:"Horizontal2",link:"",children:[]},{id:2-5,label:"Vertical2",link:"",children:[]},{id:2-6,label:"Horizontal3",link:"",children:[]},{id:2-7,label:"Dashboard",link:"",children:[]},{id:2-8,label:"Dashboard2",link:"",children:[]},{id:2-9,label:"Dashboard3",link:"",children:[]},{id:2-10,label:"Dynamic",link:"",children:[]}]},{id:3,label:"component",link:"/StudioComponent",children:[]},{id:1,label:"main",link:"/StudioHome",children:[{id:1-1,label:"depth2",link:"",children:[{id:1-1-1,label:"depth3",link:"",children:[]}]}]},{id:2,label:"screen",link:"/StudioScreen",children:[{id:2-1,label:"Default",link:"",children:[]},{id:2-2,label:"Horizontal",link:"",children:[]},{id:2-3,label:"Vertical",link:"",children:[]},{id:2-4,label:"Horizontal2",link:"",children:[]},{id:2-5,label:"Vertical2",link:"",children:[]},{id:2-6,label:"Horizontal3",link:"",children:[]},{id:2-7,label:"Dashboard",link:"",children:[]},{id:2-8,label:"Dashboard2",link:"",children:[]},{id:2-9,label:"Dashboard3",link:"",children:[]},{id:2-10,label:"Dynamic",link:"",children:[]}]},{id:3,label:"component",link:"/StudioComponent",children:[]},{id:1,label:"main",link:"/StudioHome",children:[{id:1-1,label:"depth2",link:"",children:[{id:1-1-1,label:"depth3",link:"",children:[]}]}]},{id:2,label:"screen",link:"/StudioScreen",children:[{id:2-1,label:"Default",link:"",children:[]},{id:2-2,label:"Horizontal",link:"",children:[]},{id:2-3,label:"Vertical",link:"",children:[]},{id:2-4,label:"Horizontal2",link:"",children:[]},{id:2-5,label:"Vertical2",link:"",children:[]},{id:2-6,label:"Horizontal3",link:"",children:[]},{id:2-7,label:"Dashboard",link:"",children:[]},{id:2-8,label:"Dashboard2",link:"",children:[]},{id:2-9,label:"Dashboard3",link:"",children:[]},{id:2-10,label:"Dynamic",link:"",children:[]}]},{id:3,label:"component",link:"/StudioComponent",children:[]}],d=s=>{console.log(s)};return(s,c)=>{const h=i("font-awesome-icon"),_=i("el-button"),f=i("el-input"),b=i("el-scrollbar");return v(),S("div",A,[t("div",z,[F,t("div",null,[e(_,null,{default:l(()=>[e(h,{icon:["fas","plus"]})]),_:1}),e(_,null,{default:l(()=>[e(h,{icon:["fas","pen-to-square"]})]),_:1})])]),t("div",N,[t("div",P,[e(f,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=k=>n.value=k),placeholder:"Filter keyword"},null,8,["modelValue"]),e(b,{"view-style":"height: calc(var(--qs-layout-main-height) - var(--set-header-height) - 28px);"},{default:l(()=>[e(a(C),{ref_key:"treeRef",ref:m,class:"filter-tree",data:r,props:o,"filter-node-method":u,"default-expand-all":"",onNodeClick:d,draggabl:""},null,512)]),_:1})])])])}}}),M={class:"set-container"},R={class:"set-header"},U={class:"tags-group"},T={class:"set-body"},E={class:"set-container"},B=t("div",{class:"set-header"},[t("h3",{class:"title"},"Menu")],-1),j={class:"setting-footer"},I=y({__name:"attributeMenu",setup(w){const n=H();return(m,o)=>{const u=i("el-tag"),r=i("el-input"),d=i("el-form-item"),s=i("el-switch"),c=i("font-awesome-icon"),h=i("el-button"),_=i("el-checkbox-button"),f=i("el-checkbox-group"),b=i("el-form"),k=i("el-scrollbar");return v(),S("div",M,[t("div",R,[t("div",U,[e(u,{"disable-transitions":!0,effect:"dark"},{default:l(()=>[p("Attribute View")]),_:1}),e(u,{"disable-transitions":!0},{default:l(()=>[p("Service View")]),_:1})])]),t("div",T,[t("div",E,[B,e(k,{class:"set-body",style:{height:"calc(100vh - calc(var(--qs-layout-header-height) + var(--qs-layout-tags-height) + 120px + var(--qs-layout-padding) * 4))",padding:"10px"}},{default:l(()=>[e(b,{"label-width":"120px","label-position":"left"},{default:l(()=>[e(d,{label:"Name",":required":!0},{default:l(()=>[e(r,{placeholder:"Please input",value:a(n).menu.config.Name},null,8,["value"])]),_:1}),e(d,{label:"Desc"},{default:l(()=>[e(r,{placeholder:"Please input",value:a(n).menu.config.Desc},null,8,["value"])]),_:1}),e(d,{label:"Sequence",":required":!0},{default:l(()=>[e(r,{placeholder:"Please input",value:a(n).menu.config.Sequence},null,8,["value"])]),_:1}),e(d,{label:"Hidden Flag",":required":!0},{default:l(()=>[e(s,{modelValue:a(n).menu.config.HiddenFlag,"onUpdate:modelValue":o[0]||(o[0]=g=>a(n).menu.config.HiddenFlag=g),size:"small"},null,8,["modelValue"])]),_:1}),e(d,{label:"Root Flag",":required":!0},{default:l(()=>[e(s,{modelValue:a(n).menu.config.RootFlag,"onUpdate:modelValue":o[1]||(o[1]=g=>a(n).menu.config.RootFlag=g),size:"small"},null,8,["modelValue"])]),_:1}),e(d,{label:"Display Name"},{default:l(()=>[e(r,{placeholder:"Please input",value:a(n).menu.config.DisplayName},{append:l(()=>[e(h,null,{default:l(()=>[e(c,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["value"])]),_:1}),e(d,{label:"Custom Display"},{default:l(()=>[e(r,{placeholder:"Please input",value:a(n).menu.config.CustomDisplay},null,8,["value"])]),_:1}),e(d,{label:"Icon"},{default:l(()=>[e(h,null,{default:l(()=>[e(c,{icon:["fas","icons"]})]),_:1})]),_:1}),e(d,{label:"Parent Menu"},{default:l(()=>[e(r,{placeholder:"Please input",value:a(n).menu.config.ParentMenu},{append:l(()=>[e(h,null,{default:l(()=>[e(c,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["value"])]),_:1}),e(d,{label:"Platform"},{default:l(()=>[e(f,{modelValue:a(n).menu.config.Platform,"onUpdate:modelValue":o[2]||(o[2]=g=>a(n).menu.config.Platform=g)},{default:l(()=>[e(_,{label:"All",name:"All",value:"All"},{default:l(()=>[p("ALL")]),_:1}),e(_,{label:"web",name:"web",value:"web"},{default:l(()=>[e(c,{icon:["fas","desktop"]})]),_:1}),e(_,{label:"tablet",name:"tablet",value:"tablet"},{default:l(()=>[e(c,{icon:["fas","tablet-screen-button"]})]),_:1}),e(_,{label:"mobile",name:"mobile",value:"mobile"},{default:l(()=>[e(c,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t("div",j,[e(h,null,{default:l(()=>[p("저장")]),_:1})])])])])}}}),Y={class:"set-container"},G={class:"qs-list-item"},J={class:"qs-list-item"},K=y({__name:"contentsMain",setup(w){const n=[{application:"Education"}],m=[{master:"Yes",name:"20240224FormTest",desc:"",url:"/20240224FormTest",type:"page"}],o=V(["1","2"]),u=r=>{console.log(r)};return(r,d)=>{const s=i("el-table-column"),c=i("el-table"),h=i("el-collapse-item"),_=i("el-collapse"),f=i("el-scrollbar");return v(),S("div",Y,[e(f,{class:"set-body","view-style":"height: calc(var(--qs-layout-main-height));border:1px solid purple;"},{default:l(()=>[(v(),S(D,null,$(10,b=>e(_,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=k=>o.value=k),onChange:u,key:b},{default:l(()=>[e(h,{name:"1"},{title:l(()=>[p(" Related Application List ")]),default:l(()=>[t("div",G,[e(c,{data:n,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:l(()=>[e(s,{label:"Application",prop:"application"})]),_:1})])]),_:1})]),_:2},1032,["modelValue"])),64)),e(_,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=b=>o.value=b),onChange:u},{default:l(()=>[e(h,{name:"2"},{title:l(()=>[p(" Related Screen List ")]),default:l(()=>[t("div",J,[e(c,{data:m,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:l(()=>[e(s,{label:"Master Flag",prop:"master",width:"150"}),e(s,{label:"Name",prop:"name",width:"150"}),e(s,{label:"Description",prop:"desc"}),e(s,{label:"URL",prop:"url",width:"300"}),e(s,{label:"Type",prop:"type",width:"100"})]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}}),O={class:"contents-aside-left"},Q={class:"contents-main"},W={class:"contents-aside-right"},ee=y({__name:"menu",setup(w){const n=q();return n.contentsMainLayout(!0,!0),(m,o)=>{const u=i("font-awesome-icon");return v(),S(D,null,[t("div",O,[e(L)]),t("div",Q,[t("span",{class:"toggle-aside toggle-aside-setting",onClick:o[0]||(o[0]=r=>a(n).contentsMainLayout(!a(n).contentsSetAreaShow,a(n).contentsAttributeAreaShow))},[t("i",null,[e(u,{icon:["fas","ellipsis-vertical"]})])]),e(K),t("span",{class:"toggle-aside toggle-aside-attribute",onClick:o[1]||(o[1]=r=>a(n).contentsMainLayout(a(n).contentsSetAreaShow,!a(n).contentsAttributeAreaShow))},[t("i",null,[e(u,{icon:["fas","ellipsis-vertical"]})])])]),t("div",W,[e(I)])],64)}}});export{ee as default};
