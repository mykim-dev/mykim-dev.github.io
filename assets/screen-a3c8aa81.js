import{defineComponent as v,resolveComponent as d,openBlock as p,createElementBlock as f,createVNode as e,withCtx as l,createElementVNode as n,Fragment as w,renderList as D,unref as r,createTextVNode as c,toDisplayString as $,reactive as I,ref as k,normalizeClass as P,normalizeStyle as U,createBlock as L,pushScopeId as q,popScopeId as z}from"vue";import{_ as B,a as R}from"./index-9c0a46b5.js";import{u as S}from"./attribute-4a080ba7.js";const F={class:"set-container"},E=n("div",{class:"set-header"},[n("h3",{class:"title"},"Screen")],-1),M={class:"item-list"},O=v({__name:"settingScreen",setup(m){const s=S();return(o,h)=>{const t=d("el-button"),_=d("el-scrollbar");return p(),f("div",F,[E,e(_,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 40px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[n("ul",M,[(p(!0),f(w,null,D(r(s).screenList,u=>(p(),f("li",null,[e(t,{type:r(s).sampleScreenInfo.screenType===u.value?"primary":"",onClick:i=>r(s).changeScreen(u.name)},{default:l(()=>[c($(u.name),1)]),_:2},1032,["type","onClick"])]))),256))])]),_:1})])}}}),G={class:"set-container"},K={class:"set-header"},Q={class:"qs-tags-group"},Y={class:"set-body"},j={class:"set-container"},H=n("div",{class:"set-header"},[n("h3",{class:"title"},"Screen [Default]")],-1),J={class:"setting-footer"},W=v({__name:"attributeScreen",setup(m){const s=S(),o=I({Name:"Name",Desc:"Desc",Navigation:"Navigation",URL:"URL",Type:k("1"),Biz:"Biz",Screen:"Screen",Display:"Display",Custom:"Custom",Platform:k(["All"])});return(h,t)=>{const _=d("el-tag"),u=d("el-input"),i=d("el-form-item"),g=d("el-radio"),x=d("el-radio-group"),b=d("font-awesome-icon"),y=d("el-button"),V=d("el-checkbox-button"),C=d("el-checkbox-group"),T=d("el-switch"),A=d("el-form"),N=d("el-scrollbar");return p(),f("div",G,[n("div",K,[n("div",Q,[e(_,{"disable-transitions":!0,effect:"dark"},{default:l(()=>[c("Attribute View")]),_:1}),e(_,{"disable-transitions":!0,effect:"plain"},{default:l(()=>[c("Service View")]),_:1})])]),n("div",Y,[n("div",j,[H,e(N,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 120px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[e(A,{"label-position":"left"},{default:l(()=>[e(i,{modelValue:o.Name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.Name=a),label:"Name",required:!0},{default:l(()=>[e(u,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(i,{label:"Desc"},{default:l(()=>[e(u,{modelValue:o.Desc,"onUpdate:modelValue":t[1]||(t[1]=a=>o.Desc=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"Navigation"},{default:l(()=>[e(u,{modelValue:o.Navigation,"onUpdate:modelValue":t[2]||(t[2]=a=>o.Navigation=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{label:"URL",required:!0,disabled:!0},{default:l(()=>[e(u,{modelValue:o.URL,"onUpdate:modelValue":t[3]||(t[3]=a=>o.URL=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(i,{modelValue:o.Type,"onUpdate:modelValue":t[5]||(t[5]=a=>o.Type=a),label:"Type",required:!0},{default:l(()=>[e(x,{modelValue:o.Type,"onUpdate:modelValue":t[4]||(t[4]=a=>o.Type=a)},{default:l(()=>[e(g,{label:"1",key:"1"},{default:l(()=>[c("Page")]),_:1}),e(g,{label:"2",key:"2"},{default:l(()=>[c("Right Panel")]),_:1}),e(g,{label:"3",key:"3"},{default:l(()=>[c("Pop")]),_:1}),e(g,{label:"4",key:"4"},{default:l(()=>[c("Bottom Panel")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(i,{modelValue:o.Biz,"onUpdate:modelValue":t[6]||(t[6]=a=>o.Biz=a),label:"Biz Group"},{default:l(()=>[e(u,{placeholder:"Please input"},{append:l(()=>[e(y,null,{default:l(()=>[e(b,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Screen,"onUpdate:modelValue":t[7]||(t[7]=a=>o.Screen=a),label:"Screen Template",required:!0},{default:l(()=>[e(u,{placeholder:"Please input"},{append:l(()=>[e(y,null,{default:l(()=>[e(b,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Display,"onUpdate:modelValue":t[8]||(t[8]=a=>o.Display=a),label:"Display Name"},{default:l(()=>[e(u,{placeholder:"Please input"},{append:l(()=>[e(y,null,{default:l(()=>[e(b,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Custom,"onUpdate:modelValue":t[9]||(t[9]=a=>o.Custom=a),label:"Custom Display"},{default:l(()=>[e(u,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(i,{modelValue:o.Platform,"onUpdate:modelValue":t[11]||(t[11]=a=>o.Platform=a),label:"Platform"},{default:l(()=>[e(C,{modelValue:o.Platform,"onUpdate:modelValue":t[10]||(t[10]=a=>o.Platform=a)},{default:l(()=>[e(V,{key:"All",label:"All"}),e(V,{key:"web",label:"web"},{default:l(()=>[e(b,{icon:["fas","desktop"]})]),_:1}),e(V,{key:"mobile",label:"mobile"},{default:l(()=>[e(b,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(i,{label:"Full"},{default:l(()=>[e(T,{modelValue:r(s).sampleScreenInfo.screenFull,"onUpdate:modelValue":t[12]||(t[12]=a=>r(s).sampleScreenInfo.screenFull=a),size:"small"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),n("div",J,[e(y,null,{default:l(()=>[c("저장")]),_:1})])])])])}}}),X=m=>(q("data-v-2e25a1ce"),m=m(),z(),m),Z={class:"qs-screen"},ee={class:"qs-component-template"},le=X(()=>n("dd",null,[n("strong",null,"GD_COMP_STEP_STYLE_BACKGROUNDCOLOR"),n("p",null,"template: vQSForm")],-1)),te=v({__name:"contentsScreen",setup(m){const s=S();return(o,h)=>{const t=d("el-button"),_=d("el-col"),u=d("el-row");return p(),f("div",Z,[e(u,{class:P(["qs-screen-row",[r(s).sampleScreenInfo.screenType,{"is-full":r(s).sampleScreenInfo.screenFull}]]),gutter:16,style:U(`grid-template-rows: repeat(${r(s).sampleScreenInfo.screenTemplate.row}, 1fr);grid-template-columns: repeat(${r(s).sampleScreenInfo.screenTemplate.col}, 1fr);`)},{default:l(()=>[(p(!0),f(w,null,D(r(s).sampleScreenInfo.screenSpans,(i,g)=>(p(),L(_,{class:"qs-screen-col",key:i,span:i.col,style:U(`grid-area: span ${i.row} / span ${i.col};`)},{default:l(()=>[n("div",{class:P(["qs-component",{"is-folder":r(s).sampleComponentInfo.componentType=="folder"}])},[n("dl",ee,[n("dt",null,[c($(g+1)+" ",1),n("div",null,[e(t,{size:"small"},{default:l(()=>[c("Detail")]),_:1}),e(t,{size:"small"},{default:l(()=>[c("Delete")]),_:1})])]),le])],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])])}}});const oe=B(te,[["__scopeId","data-v-2e25a1ce"]]),ne={class:"main-aside-left"},ae=["main-contents-layout"],se={class:"set-container"},ie={class:"set-header"},de={class:"title"},re={class:"main-aside-right"},pe=v({__name:"screen",setup(m){const s=R(),o=S();return(h,t)=>{const _=d("font-awesome-icon"),u=d("el-scrollbar");return p(),f(w,null,[n("div",ne,[e(O)]),n("div",{class:"main-contents","main-contents-layout":r(s).contentsMainType},[n("span",{class:"toggle-aside toggle-aside-setting",onClick:t[0]||(t[0]=i=>r(s).contentsMainLayout(!r(s).contentsSetAreaShow,r(s).contentsAttributeAreaShow))},[n("i",null,[e(_,{icon:["fas","ellipsis-vertical"]})])]),n("div",se,[n("div",ie,[n("h3",de,$(r(o).sampleScreenInfo.screenType)+" Detail",1)]),e(u,{class:"set-body","view-style":"height: calc(100vh - 185px);overflow-x: hidden;"},{default:l(()=>[e(oe)]),_:1})]),n("span",{class:"toggle-aside toggle-aside-attribute",onClick:t[1]||(t[1]=i=>r(s).contentsMainLayout(r(s).contentsSetAreaShow,!r(s).contentsAttributeAreaShow))},[n("i",null,[e(_,{icon:["fas","ellipsis-vertical"]})])])],8,ae),n("div",re,[e(W)])],64)}}});export{pe as default};