import{a as P,C as L,b as s,o as p,h as b,e,w as t,F as k,i as $,u as l,f as o,c as C,j as u,t as V,m as q,n as A,g as D,p as O,l as R,_ as z}from"./index-e85f7b2d.js";import{u as x}from"./attributeStudio-1c47cdc4.js";const M={class:"set-container"},G=o("div",{class:"set-header"},[o("h3",{class:"title"},"Screen")],-1),I=P({__name:"settingScreen",setup(f){const c=L(),n=x();return(m,g)=>{const a=s("el-button"),v=s("el-space"),d=s("el-scrollbar");return p(),b("div",M,[G,e(d,{class:"set-body","view-style":"height: calc(var(--qs-layout-main-height) - var(--set-header-height));"},{default:t(()=>[e(v,{direction:"vertical",fill:!0,style:{width:"100%"}},{default:t(()=>[(p(!0),b(k,null,$(l(c).screenList,i=>(p(),C(a,{key:i,type:l(n).screen.config.Template===i.value?"primary":"",plain:"",onClick:_=>l(n).changeScreen(i.value)},{default:t(()=>[u(V(i.name),1)]),_:2},1032,["type","onClick"]))),128))]),_:1})]),_:1})])}}}),E=f=>(O("data-v-08b1d1ce"),f=f(),R(),f),j={class:"set-container"},K={class:"set-header"},Q={class:"title"},Y={class:"set-body"},H={class:"qs-component-template"},J=E(()=>o("br",null,null,-1)),W=P({__name:"contentsScreen",setup(f){q();const c=x();return(n,m)=>{const g=s("el-button"),a=s("el-text"),v=s("el-col"),d=s("el-row"),i=s("el-scrollbar");return p(),b("div",j,[o("div",K,[o("h3",Q,V(l(c).screen.currentScreen.name)+" Detail",1)]),o("div",Y,[e(i,{"view-class":"qs-screen","view-style":"height: calc(var(--qs-layout-main-height) - var(--set-header-height));"},{default:t(()=>[e(d,{class:A(["qs-screen-row",[l(c).screen.config.Template,{"is-full":l(c).screen.config.Full}]]),gutter:10,style:D(`grid-template-rows: repeat(${l(c).screen.currentScreen.template.row}, 1fr);grid-template-columns: repeat(${l(c).screen.currentScreen.template.col}, 1fr);`)},{default:t(()=>[(p(!0),b(k,null,$(l(c).screen.currentScreen.span,(_,y)=>(p(),C(v,{class:"qs-screen-col",key:_,span:_.col,style:D(`grid-area: span ${_.row} / span ${_.col};`)},{default:t(()=>[o("div",{class:A(["qs-component",{"is-folder":l(c).component.config.Outline==="folder"}])},[o("dl",H,[o("dt",null,[u(V(y+1)+" ",1),o("div",null,[e(g,{size:"small"},{default:t(()=>[u("Detail")]),_:1}),e(g,{size:"small"},{default:t(()=>[u("Delete")]),_:1})])]),o("dd",null,[e(a,{tag:"b"},{default:t(()=>[u("GD_COMP_STEP_STYLE_BACKGROUNDCOLOR")]),_:1}),J,e(a,null,{default:t(()=>[u("template: vQSForm")]),_:1})])])],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])]),_:1})])])}}});const X=z(W,[["__scopeId","data-v-08b1d1ce"]]),Z={class:"set-container"},ee={class:"set-header"},te={class:"tags-group"},le={class:"set-body"},ne={class:"set-container"},oe={class:"set-header"},ae={class:"title"},se={class:"setting-footer"},ce=P({__name:"attributeScreen",setup(f){const c=L(),n=x(),m=()=>{console.log(n.screen.config.Full),console.log("submit!")};return(g,a)=>{const v=s("el-tag"),d=s("el-input"),i=s("el-form-item"),_=s("el-radio"),y=s("el-radio-group"),h=s("font-awesome-icon"),S=s("el-button"),w=s("el-checkbox-button"),N=s("el-checkbox-group"),U=s("el-switch"),B=s("el-radio-button"),T=s("el-form"),F=s("el-scrollbar");return p(),b("div",Z,[o("div",ee,[o("div",te,[e(v,{"disable-transitions":!0,effect:"dark"},{default:t(()=>[u("Attribute View")]),_:1}),e(v,{"disable-transitions":!0},{default:t(()=>[u("Service View")]),_:1})])]),o("div",le,[o("div",ne,[o("div",oe,[o("h3",ae,"Screen ["+V(l(n).screen.currentScreen.name)+"]",1)]),e(F,{class:"set-body",style:{height:"calc(var(--qs-layout-main-height) - 120px)",padding:"10px"}},{default:t(()=>[e(T,{"label-width":"120px","label-position":"left"},{default:t(()=>[e(i,{modelValue:l(n).screen.config.Name,"onUpdate:modelValue":a[0]||(a[0]=r=>l(n).screen.config.Name=r),label:"Name",":required":!0},{default:t(()=>[e(d,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(i,{label:"Desc"},{default:t(()=>[e(d,{modelValue:l(n).screen.config.Desc,"onUpdate:modelValue":a[1]||(a[1]=r=>l(n).screen.config.Desc=r),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"Navigation"},{default:t(()=>[e(d,{modelValue:l(n).screen.config.Navigation,"onUpdate:modelValue":a[2]||(a[2]=r=>l(n).screen.config.Navigation=r),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"URL",":required":!0,disabled:!0},{default:t(()=>[e(d,{modelValue:l(n).screen.config.URL,"onUpdate:modelValue":a[3]||(a[3]=r=>l(n).screen.config.URL=r),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"Type",":required":!0},{default:t(()=>[e(y,{modelValue:l(n).screen.config.Type,"onUpdate:modelValue":a[4]||(a[4]=r=>l(n).screen.config.Type=r)},{default:t(()=>[e(_,{label:"Page",key:"Page"},{default:t(()=>[u("Page")]),_:1}),e(_,{label:"RightPanel",key:"RightPanel"},{default:t(()=>[u("Right Panel")]),_:1}),e(_,{label:"Pop",key:"Pop"},{default:t(()=>[u("Pop")]),_:1}),e(_,{label:"BottomPanel",key:"BottomPanel"},{default:t(()=>[u("Bottom Panel")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Biz Group"},{default:t(()=>[e(d,{value:l(n).screen.config.BizGroup,placeholder:"Please input"},{append:t(()=>[e(S,null,{default:t(()=>[e(h,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"Screen Template",":required":!0},{default:t(()=>[e(d,{value:l(n).screen.config.Template,placeholder:"Please input"},{append:t(()=>[e(S,null,{default:t(()=>[e(h,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"Display Name"},{default:t(()=>[e(d,{value:l(n).screen.config.DisplayName,placeholder:"Please input"},{append:t(()=>[e(S,null,{default:t(()=>[e(h,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"Custom Display"},{default:t(()=>[e(d,{value:l(n).screen.config.CustomDisplay,placeholder:"Please input"},null,8,["value"])]),_:1}),e(i,{label:"Platform"},{default:t(()=>[e(N,{modelValue:l(n).screen.config.Platform,"onUpdate:modelValue":a[5]||(a[5]=r=>l(n).screen.config.Platform=r)},{default:t(()=>[e(w,{label:"All",name:"All",value:"All"},{default:t(()=>[u("ALL")]),_:1}),e(w,{label:"web",name:"web",value:"web"},{default:t(()=>[e(h,{icon:["fas","desktop"]})]),_:1}),e(w,{label:"tablet",name:"tablet",value:"tablet"},{default:t(()=>[e(h,{icon:["fas","tablet-screen-button"]})]),_:1}),e(w,{label:"mobile",name:"mobile",value:"mobile"},{default:t(()=>[e(h,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Full"},{default:t(()=>[e(U,{modelValue:l(n).screen.config.Full,"onUpdate:modelValue":a[6]||(a[6]=r=>l(n).screen.config.Full=r),size:"small"},null,8,["modelValue"])]),_:1}),e(i,{label:"Outline"},{default:t(()=>[e(y,{modelValue:l(n).component.config.Outline,"onUpdate:modelValue":a[7]||(a[7]=r=>l(n).component.config.Outline=r)},{default:t(()=>[(p(!0),b(k,null,$(l(c).componentOutlineList,r=>(p(),C(B,{key:r,label:r,onClick:de=>l(n).component.config.Outline=r},null,8,["label","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),o("div",se,[e(S,{onClick:m},{default:t(()=>[u("저장")]),_:1})])])])])}}}),ie={class:"contents-aside-left"},re=["contents-main-layout"],ue={class:"contents-aside-right"},me=P({__name:"screen",setup(f){const c=q();return c.contentsMainLayout(!0,!0),(n,m)=>{const g=s("font-awesome-icon");return p(),b(k,null,[o("div",ie,[e(I)]),o("div",{class:"contents-main","contents-main-layout":l(c).contentsMainType},[o("span",{class:"toggle-aside toggle-aside-setting",onClick:m[0]||(m[0]=a=>l(c).contentsMainLayout(!l(c).contentsSetAreaShow,l(c).contentsAttributeAreaShow))},[o("i",null,[e(g,{icon:["fas","ellipsis-vertical"]})])]),e(X),o("span",{class:"toggle-aside toggle-aside-attribute",onClick:m[1]||(m[1]=a=>l(c).contentsMainLayout(l(c).contentsSetAreaShow,!l(c).contentsAttributeAreaShow))},[o("i",null,[e(g,{icon:["fas","ellipsis-vertical"]})])])],8,re),o("div",ue,[e(ce)])],64)}}});export{me as default};
