import{a as v,b as u,o as _,h as f,e,w as t,f as n,F as w,i as T,g as i,l as c,x as $,t as N,r as P,n as U,j as C,c as q,p as z,q as B,_ as L,v as F}from"./index-42299848.js";import{u as S}from"./attribute-6a788a21.js";const R={class:"set-container"},M=n("div",{class:"set-header"},[n("h3",{class:"title"},"Screen")],-1),O={class:"item-list"},E=v({__name:"settingScreen",setup(m){const s=S();return(o,V)=>{const l=u("el-button"),p=u("el-scrollbar");return _(),f("div",R,[M,e(p,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 40px + var(--studio-layout-padding) * 4))"}},{default:t(()=>[n("ul",O,[(_(!0),f(w,null,T(i(s).screenList,r=>(_(),f("li",null,[e(l,{type:i(s).sampleScreenInfo.screenType===r.value?"primary":"",onClick:d=>i(s).changeScreen(r.name)},{default:t(()=>[c($(r.name),1)]),_:2},1032,["type","onClick"])]))),256))])]),_:1})])}}}),G={class:"set-container"},j={class:"set-header"},K={class:"qs-tags-group"},Q={class:"set-body"},Y={class:"set-container"},H=n("div",{class:"set-header"},[n("h3",{class:"title"},"Screen [Default]")],-1),J={class:"setting-footer"},W=v({__name:"attributeScreen",setup(m){const s=S(),o=N({Name:"Name",Desc:"Desc",Navigation:"Navigation",URL:"URL",Type:P("1"),Biz:"Biz",Screen:"Screen",Display:"Display",Custom:"Custom",Platform:P(["All"])});return(V,l)=>{const p=u("el-tag"),r=u("el-input"),d=u("el-form-item"),b=u("el-radio"),x=u("el-radio-group"),g=u("font-awesome-icon"),y=u("el-button"),h=u("el-checkbox-button"),D=u("el-checkbox-group"),k=u("el-switch"),A=u("el-form"),I=u("el-scrollbar");return _(),f("div",G,[n("div",j,[n("div",K,[e(p,{"disable-transitions":!0,effect:"dark"},{default:t(()=>[c("Attribute View")]),_:1}),e(p,{"disable-transitions":!0,effect:"plain"},{default:t(()=>[c("Service View")]),_:1})])]),n("div",Q,[n("div",Y,[H,e(I,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 120px + var(--studio-layout-padding) * 4))"}},{default:t(()=>[e(A,{"label-position":"left"},{default:t(()=>[e(d,{modelValue:o.Name,"onUpdate:modelValue":l[0]||(l[0]=a=>o.Name=a),label:"Name",required:!0},{default:t(()=>[e(r,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(d,{label:"Desc"},{default:t(()=>[e(r,{modelValue:o.Desc,"onUpdate:modelValue":l[1]||(l[1]=a=>o.Desc=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(d,{label:"Navigation"},{default:t(()=>[e(r,{modelValue:o.Navigation,"onUpdate:modelValue":l[2]||(l[2]=a=>o.Navigation=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(d,{label:"URL",required:!0,disabled:!0},{default:t(()=>[e(r,{modelValue:o.URL,"onUpdate:modelValue":l[3]||(l[3]=a=>o.URL=a),placeholder:"Please input",value:""},null,8,["modelValue"])]),_:1}),e(d,{modelValue:o.Type,"onUpdate:modelValue":l[5]||(l[5]=a=>o.Type=a),label:"Type",required:!0},{default:t(()=>[e(x,{modelValue:o.Type,"onUpdate:modelValue":l[4]||(l[4]=a=>o.Type=a)},{default:t(()=>[e(b,{label:"1",key:"1"},{default:t(()=>[c("Page")]),_:1}),e(b,{label:"2",key:"2"},{default:t(()=>[c("Right Panel")]),_:1}),e(b,{label:"3",key:"3"},{default:t(()=>[c("Pop")]),_:1}),e(b,{label:"4",key:"4"},{default:t(()=>[c("Bottom Panel")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(d,{modelValue:o.Biz,"onUpdate:modelValue":l[6]||(l[6]=a=>o.Biz=a),label:"Biz Group"},{default:t(()=>[e(r,{placeholder:"Please input"},{append:t(()=>[e(y,null,{default:t(()=>[e(g,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(d,{modelValue:o.Screen,"onUpdate:modelValue":l[7]||(l[7]=a=>o.Screen=a),label:"Screen Template",required:!0},{default:t(()=>[e(r,{placeholder:"Please input"},{append:t(()=>[e(y,null,{default:t(()=>[e(g,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(d,{modelValue:o.Display,"onUpdate:modelValue":l[8]||(l[8]=a=>o.Display=a),label:"Display Name"},{default:t(()=>[e(r,{placeholder:"Please input"},{append:t(()=>[e(y,null,{default:t(()=>[e(g,{icon:["fas","magnifying-glass"]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(d,{modelValue:o.Custom,"onUpdate:modelValue":l[9]||(l[9]=a=>o.Custom=a),label:"Custom Display"},{default:t(()=>[e(r,{placeholder:"Please input",value:""})]),_:1},8,["modelValue"]),e(d,{modelValue:o.Platform,"onUpdate:modelValue":l[11]||(l[11]=a=>o.Platform=a),label:"Platform"},{default:t(()=>[e(D,{modelValue:o.Platform,"onUpdate:modelValue":l[10]||(l[10]=a=>o.Platform=a)},{default:t(()=>[e(h,{key:"All",label:"All"}),e(h,{key:"web",label:"web"},{default:t(()=>[e(g,{icon:["fas","desktop"]})]),_:1}),e(h,{key:"mobile",label:"mobile"},{default:t(()=>[e(g,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(d,{label:"Full"},{default:t(()=>[e(k,{modelValue:i(s).sampleScreenInfo.screenFull,"onUpdate:modelValue":l[12]||(l[12]=a=>i(s).sampleScreenInfo.screenFull=a),size:"small"},null,8,["modelValue"])]),_:1}),e(d,{label:"Folder"},{default:t(()=>[e(k,{modelValue:i(s).sampleComponentInfo.componentType,"onUpdate:modelValue":l[13]||(l[13]=a=>i(s).sampleComponentInfo.componentType=a),size:"small"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),n("div",J,[e(y,null,{default:t(()=>[c("저장")]),_:1})])])])])}}}),X=m=>(z("data-v-2e25a1ce"),m=m(),B(),m),Z={class:"qs-screen"},ee={class:"qs-component-template"},le=X(()=>n("dd",null,[n("strong",null,"GD_COMP_STEP_STYLE_BACKGROUNDCOLOR"),n("p",null,"template: vQSForm")],-1)),te=v({__name:"contentsScreen",setup(m){const s=S();return(o,V)=>{const l=u("el-button"),p=u("el-col"),r=u("el-row");return _(),f("div",Z,[e(r,{class:U(["qs-screen-row",[i(s).sampleScreenInfo.screenType,{"is-full":i(s).sampleScreenInfo.screenFull}]]),gutter:16,style:C(`grid-template-rows: repeat(${i(s).sampleScreenInfo.screenTemplate.row}, 1fr);grid-template-columns: repeat(${i(s).sampleScreenInfo.screenTemplate.col}, 1fr);`)},{default:t(()=>[(_(!0),f(w,null,T(i(s).sampleScreenInfo.screenSpans,(d,b)=>(_(),q(p,{class:"qs-screen-col",key:d,span:d.col,style:C(`grid-area: span ${d.row} / span ${d.col};`)},{default:t(()=>[n("div",{class:U(["qs-component",{"is-folder":i(s).sampleComponentInfo.componentType=="folder"}])},[n("dl",ee,[n("dt",null,[c($(b+1)+" ",1),n("div",null,[e(l,{size:"small"},{default:t(()=>[c("Detail")]),_:1}),e(l,{size:"small"},{default:t(()=>[c("Delete")]),_:1})])]),le])],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])])}}});const oe=L(te,[["__scopeId","data-v-2e25a1ce"]]),ae={class:"main-aside-left"},ne=["main-contents-layout"],se={class:"set-container"},ie={class:"set-header"},de={class:"title"},ue={class:"main-aside-right"},pe=v({__name:"screen",setup(m){const s=F(),o=S();return(V,l)=>{const p=u("font-awesome-icon"),r=u("el-scrollbar");return _(),f(w,null,[n("div",ae,[e(E)]),n("div",{class:"main-contents","main-contents-layout":i(s).contentsMainType},[n("span",{class:"toggle-aside toggle-aside-setting",onClick:l[0]||(l[0]=d=>i(s).contentsMainLayout(!i(s).contentsSetAreaShow,i(s).contentsAttributeAreaShow))},[n("i",null,[e(p,{icon:["fas","ellipsis-vertical"]})])]),n("div",se,[n("div",ie,[n("h3",de,$(i(o).sampleScreenInfo.screenType)+" Detail",1)]),e(r,{class:"set-body","view-style":"height: calc(100vh - 185px);overflow-x: hidden;"},{default:t(()=>[e(oe)]),_:1})]),n("span",{class:"toggle-aside toggle-aside-attribute",onClick:l[1]||(l[1]=d=>i(s).contentsMainLayout(i(s).contentsSetAreaShow,!i(s).contentsAttributeAreaShow))},[n("i",null,[e(p,{icon:["fas","ellipsis-vertical"]})])])],8,ne),n("div",ue,[e(W)])],64)}}});export{pe as default};