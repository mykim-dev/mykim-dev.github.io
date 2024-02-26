import{a as v,b as r,o as p,h as f,e,w as t,f as s,F as w,i as x,g as d,l as c,x as $,t as N,r as P,n as U,j as C,c as q,p as z,q as B,_ as F,v as L}from"./index-b68d6a33.js";import{u as S}from"./attribute-e21f4b3b.js";const R={class:"set-container"},M=s("div",{class:"set-header"},[s("h3",{class:"title"},"Screen")],-1),O={class:"item-list"},E=v({__name:"settingScreen",setup(m){const n=S();return(o,V)=>{const l=r("el-button"),_=r("el-scrollbar");return p(),f("div",R,[M,e(_,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 40px + var(--studio-layout-padding) * 4))"}},{default:t(()=>[s("ul",O,[(p(!0),f(w,null,x(d(n).screenList,u=>(p(),f("li",null,[e(l,{type:d(n).sampleScreenInfo.screenType===u.value?"primary":"",onClick:i=>d(n).changeScreen(u.name)},{default:t(()=>[c($(u.name),1)]),_:2},1032,["type","onClick"])]))),256))])]),_:1})])}}}),G={class:"set-container"},j={class:"set-header"},K={class:"qs-tags-group"},Q={class:"set-body"},Y={class:"set-container"},H=s("div",{class:"set-header"},[s("h3",{class:"title"},"Screen [Default]")],-1),J={class:"setting-footer"},W=v({__name:"attributeScreen",setup(m){const n=S(),o=N({Name:"Name",Desc:"Desc",Navigation:"Navigation",URL:"URL",Type:P("1"),Biz:"Biz",Screen:"Screen",Display:"Display",Custom:"Custom",Platform:P(["All"])});return(V,l)=>{const _=r("el-tag"),u=r("el-input"),i=r("el-form-item"),b=r("el-radio"),D=r("el-radio-group"),g=r("font-awesome-icon"),y=r("el-button"),h=r("el-checkbox-button"),A=r("el-checkbox-group"),k=r("el-switch"),I=r("el-form"),T=r("el-scrollbar");return p(),f("div",G,[s("div",j,[s("div",K,[e(_,{"disable-transitions":!0,effect:"dark"},{default:t(()=>[c("Attribute View")]),_:1}),e(_,{"disable-transitions":!0,effect:"plain"},{default:t(()=>[c("Service View")]),_:1})])]),s("div",Q,[s("div",Y,[H,e(T,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 120px + var(--studio-layout-padding) * 4))"}},{default:t(()=>[e(I,{"label-position":"left"},{default:t(()=>[e(i,{modelValue:o.Name,"onUpdate:modelValue":l[0]||(l[0]=a=>o.Name=a),label:"Name",required:!0},{default:t(()=>[e(u,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(i,{label:"Desc"},{default:t(()=>[e(u,{modelValue:o.Desc,"onUpdate:modelValue":l[1]||(l[1]=a=>o.Desc=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"Navigation"},{default:t(()=>[e(u,{modelValue:o.Navigation,"onUpdate:modelValue":l[2]||(l[2]=a=>o.Navigation=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"URL",required:!0,disabled:!0},{default:t(()=>[e(u,{modelValue:o.URL,"onUpdate:modelValue":l[3]||(l[3]=a=>o.URL=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{modelValue:o.Type,"onUpdate:modelValue":l[5]||(l[5]=a=>o.Type=a),label:"Type",required:!0},{default:t(()=>[e(D,{modelValue:o.Type,"onUpdate:modelValue":l[4]||(l[4]=a=>o.Type=a)},{default:t(()=>[e(b,{label:"1",key:"1"},{default:t(()=>[c("Page")]),_:1}),e(b,{label:"2",key:"2"},{default:t(()=>[c("Right Panel")]),_:1}),e(b,{label:"3",key:"3"},{default:t(()=>[c("Pop")]),_:1}),e(b,{label:"4",key:"4"},{default:t(()=>[c("Bottom Panel")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(i,{modelValue:o.Biz,"onUpdate:modelValue":l[6]||(l[6]=a=>o.Biz=a),label:"Biz Group"},{default:t(()=>[e(u,{placeholder:"Please input"},{append:t(()=>[e(y,null,{default:t(()=>[e(g,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Screen,"onUpdate:modelValue":l[7]||(l[7]=a=>o.Screen=a),label:"Screen Template",required:!0},{default:t(()=>[e(u,{placeholder:"Please input"},{append:t(()=>[e(y,null,{default:t(()=>[e(g,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Display,"onUpdate:modelValue":l[8]||(l[8]=a=>o.Display=a),label:"Display Name"},{default:t(()=>[e(u,{placeholder:"Please input"},{append:t(()=>[e(y,null,{default:t(()=>[e(g,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Custom,"onUpdate:modelValue":l[9]||(l[9]=a=>o.Custom=a),label:"Custom Display"},{default:t(()=>[e(u,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Platform,"onUpdate:modelValue":l[11]||(l[11]=a=>o.Platform=a),label:"Platform"},{default:t(()=>[e(A,{modelValue:o.Platform,"onUpdate:modelValue":l[10]||(l[10]=a=>o.Platform=a)},{default:t(()=>[e(h,{key:"All",label:"All"}),e(h,{key:"web",label:"web"},{default:t(()=>[e(g,{icon:["fas","desktop"]})]),_:1}),e(h,{key:"mobile",label:"mobile"},{default:t(()=>[e(g,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(i,{label:"Full"},{default:t(()=>[e(k,{modelValue:d(n).sampleScreenInfo.screenFull,"onUpdate:modelValue":l[12]||(l[12]=a=>d(n).sampleScreenInfo.screenFull=a),size:"small"},null,8,["modelValue"])]),_:1}),e(i,{label:"Folder"},{default:t(()=>[e(k,{modelValue:d(n).sampleComponentInfo.typeFolder,"onUpdate:modelValue":l[13]||(l[13]=a=>d(n).sampleComponentInfo.typeFolder=a),size:"small"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),s("div",J,[e(y,null,{default:t(()=>[c("저장")]),_:1})])])])])}}}),X=m=>(z("data-v-5a66ab6c"),m=m(),B(),m),Z={class:"qs-screen"},ee={class:"qs-component-template"},le=X(()=>s("dd",null,[s("strong",null,"GD_COMP_STEP_STYLE_BACKGROUNDCOLOR"),s("p",null,"template: vQSForm")],-1)),te=v({__name:"contentsScreen",setup(m){const n=S();return(o,V)=>{const l=r("el-button"),_=r("el-col"),u=r("el-row");return p(),f("div",Z,[e(u,{class:U(["qs-screen-row",[d(n).sampleScreenInfo.screenType,{"is-full":d(n).sampleScreenInfo.screenFull}]]),gutter:16,style:C(`grid-template-rows: repeat(${d(n).sampleScreenInfo.screenTemplate.row}, 1fr);grid-template-columns: repeat(${d(n).sampleScreenInfo.screenTemplate.col}, 1fr);`)},{default:t(()=>[(p(!0),f(w,null,x(d(n).sampleScreenInfo.screenSpans,(i,b)=>(p(),q(_,{class:"qs-screen-col",key:i,span:i.col,style:C(`grid-area: span ${i.row} / span ${i.col};`)},{default:t(()=>[s("div",{class:U(["qs-component",{"is-folder":d(n).sampleComponentInfo.typeFolder}])},[s("dl",ee,[s("dt",null,[c($(b+1)+" ",1),s("div",null,[e(l,{size:"small"},{default:t(()=>[c("Detail")]),_:1}),e(l,{size:"small"},{default:t(()=>[c("Delete")]),_:1})])]),le])],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])])}}});const oe=F(te,[["__scopeId","data-v-5a66ab6c"]]),ae={class:"main-aside-left"},se=["main-contents-layout"],ne={class:"set-container"},de={class:"set-header"},ie={class:"title"},re={class:"main-aside-right"},_e=v({__name:"screen",setup(m){const n=L(),o=S();return(V,l)=>{const _=r("font-awesome-icon"),u=r("el-scrollbar");return p(),f(w,null,[s("div",ae,[e(E)]),s("div",{class:"main-contents","main-contents-layout":d(n).contentsMainType},[s("span",{class:"toggle-aside toggle-aside-setting",onClick:l[0]||(l[0]=i=>d(n).contentsMainLayout(!d(n).contentsSetAreaShow,d(n).contentsAttributeAreaShow))},[s("i",null,[e(_,{icon:["fas","ellipsis-vertical"]})])]),s("div",ne,[s("div",de,[s("h3",ie,$(d(o).sampleScreenInfo.screenType)+" Detail",1)]),e(u,{class:"set-body","view-style":"height: calc(100vh - 185px);overflow-x: hidden;"},{default:t(()=>[e(oe)]),_:1})]),s("span",{class:"toggle-aside toggle-aside-attribute",onClick:l[1]||(l[1]=i=>d(n).contentsMainLayout(d(n).contentsSetAreaShow,!d(n).contentsAttributeAreaShow))},[s("i",null,[e(_,{icon:["fas","ellipsis-vertical"]})])])],8,se),s("div",re,[e(W)])],64)}}});export{_e as default};
