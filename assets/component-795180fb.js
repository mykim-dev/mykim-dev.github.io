import{a as $,C as A,b as c,o as m,h as V,e,w as l,F as q,i as F,c as C,j as k,t as U,u as o,f as t,r as z,m as R,s as B,n as x,v as T}from"./index-b15d6768.js";import{u as L}from"./attributeStudio-3616e519.js";import{D as M,_ as O}from"./dataForm-41070e90.js";/* empty css                                                                    */const H={class:"set-container"},I=t("div",{class:"set-header"},[t("h3",{class:"title"},"Component")],-1),j=$({__name:"settingComponent",setup(D){const n=A(),f=L();return(h,s)=>{const d=c("el-button"),w=c("el-space"),a=c("el-scrollbar");return m(),V("div",H,[I,e(a,{class:"set-body","view-style":"height: calc(var(--qs-layout-main-height) - var(--set-header-height));"},{default:l(()=>[e(w,{direction:"vertical",fill:!0,style:{width:"100%"}},{default:l(()=>[(m(!0),V(q,null,F(o(n).componentList,u=>(m(),C(d,{key:u,type:o(f).component.config.Template===u.value?"primary":"",plain:""},{default:l(()=>[k(U(u.name),1)]),_:2},1032,["type"]))),128))]),_:1})]),_:1})])}}}),G={class:"set-container"},J={class:"set-header"},K={class:"tags-group"},Q={class:"set-body"},W={class:"set-container"},X={class:"set-header"},Y={class:"title"},Z={class:"setting-footer"},ee=$({__name:"attributeComponent",setup(D){A();const n=L(),f=z(["1","2","3","4"]),h=s=>{};return(s,d)=>{const w=c("el-tag"),a=c("el-input"),u=c("el-form-item"),_=c("el-checkbox-button"),P=c("font-awesome-icon"),S=c("el-checkbox-group"),r=c("el-form"),b=c("el-collapse-item"),g=c("el-switch"),y=c("Search"),v=c("el-icon"),i=c("el-button"),E=c("el-collapse"),N=c("el-scrollbar");return m(),V("div",G,[t("div",J,[t("div",K,[e(w,{"disable-transitions":!0,effect:"dark"},{default:l(()=>[k("Attribute View")]),_:1}),e(w,{"disable-transitions":!0},{default:l(()=>[k("Service View")]),_:1})])]),t("div",Q,[t("div",W,[t("div",X,[t("h3",Y,"Component ["+U(o(n).component.config.Template)+"]",1)]),e(N,{class:"set-body",style:{height:"calc(100vh - calc(var(--qs-layout-header-height) + var(--qs-layout-tags-height) + 120px + var(--qs-layout-padding) * 4))"}},{default:l(()=>[e(E,{class:"set-collapse",modelValue:f.value,"onUpdate:modelValue":d[7]||(d[7]=p=>f.value=p),onChange:h},{default:l(()=>[e(b,{title:"Config",name:"1"},{default:l(()=>[e(r,{"label-width":"100px","label-position":"left"},{default:l(()=>[e(u,{label:"Template"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.config.Template},null,8,["value"])]),_:1}),e(u,{label:"Platform"},{default:l(()=>[e(S,{modelValue:o(n).component.config.Platform,"onUpdate:modelValue":d[0]||(d[0]=p=>o(n).component.config.Platform=p)},{default:l(()=>[e(_,{label:"All",name:"All",value:"All"},{default:l(()=>[k("ALL")]),_:1}),e(_,{label:"web",name:"web",value:"web"},{default:l(()=>[e(P,{icon:["fas","desktop"]})]),_:1}),e(_,{label:"tablet",name:"tablet",value:"tablet"},{default:l(()=>[e(P,{icon:["fas","tablet-screen-button"]})]),_:1}),e(_,{label:"mobile",name:"mobile",value:"mobile"},{default:l(()=>[e(P,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Name"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.config.Name},null,8,["value"])]),_:1}),e(u,{label:"Desc"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.config.Desc},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(b,{title:"Control",name:"2"},{default:l(()=>[e(r,{"label-width":"100px","label-position":"left"},{default:l(()=>[e(u,{label:"ReadOnly"},{default:l(()=>[e(g,{size:"small",modelValue:o(n).component.control.ReadOnly,"onUpdate:modelValue":d[1]||(d[1]=p=>o(n).component.control.ReadOnly=p)},null,8,["modelValue"])]),_:1}),e(u,{label:"Required",required:!0},{default:l(()=>[e(g,{size:"small",modelValue:o(n).component.control.Required,"onUpdate:modelValue":d[2]||(d[2]=p=>o(n).component.control.Required=p)},null,8,["modelValue"])]),_:1}),e(u,{label:"Hide"},{default:l(()=>[e(g,{size:"small",modelValue:o(n).component.control.Hide,"onUpdate:modelValue":d[3]||(d[3]=p=>o(n).component.control.Hide=p)},null,8,["modelValue"])]),_:1}),e(u,{label:"Enable"},{default:l(()=>[e(g,{size:"small",modelValue:o(n).component.control.Enabled,"onUpdate:modelValue":d[4]||(d[4]=p=>o(n).component.control.Enabled=p)},null,8,["modelValue"])]),_:1}),e(u,{label:"Translate"},{default:l(()=>[e(g,{size:"small",modelValue:o(n).component.control.Translate,"onUpdate:modelValue":d[5]||(d[5]=p=>o(n).component.control.Translate=p)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(b,{title:"Label",name:"3"},{default:l(()=>[e(r,{"label-width":"100px","label-position":"left"},{default:l(()=>[e(u,{label:"Label"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.label.Label},{append:l(()=>[e(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"Custom Label"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.label.CustomLabel},null,8,["value"])]),_:1}),e(u,{label:"Desc"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.label.Desc},{append:l(()=>[e(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"Custom Desc"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.label.Desc},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(b,{title:"Data",name:"4"},{default:l(()=>[e(r,{"label-width":"100px","label-position":"left"},{default:l(()=>[e(u,{label:"Placeholder"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.Placeholder},{append:l(()=>[e(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"Custom Placeholder"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.CustomPlaceholder},null,8,["value"])]),_:1}),e(u,{label:"Field"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.Field},{append:l(()=>[e(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"Ref Code"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.RefCode},{append:l(()=>[e(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"Default Value"},{default:l(()=>[e(g,{size:"small",modelValue:o(n).component.data.DefaultValue.use,"onUpdate:modelValue":d[6]||(d[6]=p=>o(n).component.data.DefaultValue.use=p)},null,8,["modelValue"]),e(a,{placeholder:"Please input",value:o(n).component.data.DefaultValue.value},null,8,["value"])]),_:1}),e(u,{label:"Sequence ID"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.SequenceID},{append:l(()=>[e(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"Thousand Separator"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.ThousandSeparator},null,8,["value"])]),_:1}),e(u,{label:"Currency"},{default:l(()=>[e(a,{placeholder:"Please input",value:o(n).component.data.Currency},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t("div",Z,[e(i,null,{default:l(()=>[k("저장")]),_:1})])])])])}}}),le={class:"set-container"},te={class:"set-header"},oe=t("h3",{class:"title"},"Form Detail",-1),ae={class:"set-body"},ne={key:0,class:"component-detail-controls"},se={class:"qs-form"},ie={key:1,class:"component-detail-tools"},de=t("dt",null,"Control",-1),ue={class:"edit-tool"},ce=t("dt",null,"Label",-1),re={class:"edit-tool"},pe={class:"edit-tool-color"},me={class:"edit-tool-bgcolor"},_e=t("dt",null,"Data",-1),fe={class:"edit-tool"},be={class:"edit-tool-color"},ve={class:"edit-tool-bgcolor"},he=$({__name:"contentsComponent",setup(D){const n=A(),f=M();R();const h=L(),s=B(f.formControl[1]),d=z(!0);return(w,a)=>{const u=c("el-switch"),_=c("el-button"),P=c("el-space"),S=c("el-scrollbar"),r=c("font-awesome-icon"),b=c("el-radio-button"),g=c("el-radio-group"),y=c("el-button-group"),v=c("el-color-picker");return m(),V("div",le,[t("div",te,[oe,e(u,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=i=>d.value=i),"active-text":"편집 모드","inactive-text":"미리보기",size:"small",style:{height:"30px",padding:"0 15px","background-color":"rgba(255,255,255,0.8)","border-radius":"14px"}},null,8,["modelValue"])]),t("div",ae,[t("div",{class:x(["component-detail",{"is-editview":d.value}])},[d.value?(m(),V("div",ne,[e(S,{"view-style":"height: calc(var(--qs-layout-main-height) - var(--set-header-height));"},{default:l(()=>[e(P,{direction:"vertical",fill:!0,style:{width:"100%"}},{default:l(()=>[(m(!0),V(q,null,F(o(n).controlList,i=>(m(),C(_,{key:i,class:x(i.value),plain:""},{default:l(()=>[k(U(i.name),1)]),_:2},1032,["class"]))),128))]),_:1})]),_:1})])):T("",!0),e(S,{class:"component-detail-preview","view-style":"height: calc(var(--qs-layout-main-height) - var(--set-header-height) - calc(var(--qs-layout-padding) * 1));"},{default:l(()=>[t("div",{class:x(["qs-component",{"is-folder":o(h).component.config.Outline==="folder"}])},[t("div",se,[e(O,{dataForm:o(f),modeEdit:d.value},null,8,["dataForm","modeEdit"])])],2)]),_:1}),d.value?(m(),V("div",ie,[t("dl",null,[de,t("dd",null,[t("ul",ue,[t("li",null,[e(_,{onClick:a[1]||(a[1]=i=>[s.hide=!s.hide])},{default:l(()=>[s.hide?(m(),C(r,{key:0,icon:["fas","eye-slash"]})):(m(),C(r,{key:1,icon:["fas","eye"]}))]),_:1})]),t("li",null,[e(_,{onClick:a[2]||(a[2]=i=>[o(f).formComponent.labelPosition=o(f).formComponent.labelPosition=="top"?"left":"top",s.labelPosition=s.labelPosition=="top"?"left":"top"])},{default:l(()=>[o(f).formComponent.labelPosition=="top"?(m(),C(r,{key:0,icon:["fas","pause"],style:{transform:"rotate(-90deg)"}})):(m(),C(r,{key:1,icon:["fas","pause"]}))]),_:1})])])])]),t("dl",null,[ce,t("dd",null,[t("ul",re,[t("li",null,[e(g,{modelValue:s.label.align,"onUpdate:modelValue":a[3]||(a[3]=i=>s.label.align=i)},{default:l(()=>[e(b,{key:"left",label:"left"},{default:l(()=>[e(r,{icon:["fas","align-left"]})]),_:1}),e(b,{key:"center",label:"center"},{default:l(()=>[e(r,{icon:["fas","align-center"]})]),_:1}),e(b,{key:"right",label:"right"},{default:l(()=>[e(r,{icon:["fas","align-right"]})]),_:1})]),_:1},8,["modelValue"])]),t("li",null,[e(y,null,{default:l(()=>[e(_,{type:s.label.bold?"primary":"",onClick:a[4]||(a[4]=i=>s.label.bold=!s.label.bold)},{default:l(()=>[e(r,{icon:["fas","bold"]})]),_:1},8,["type"]),e(_,{type:s.label.italic?"primary":"",onClick:a[5]||(a[5]=i=>s.label.italic=!s.label.italic)},{default:l(()=>[e(r,{icon:["fas","italic"]})]),_:1},8,["type"])]),_:1})]),t("li",null,[t("div",pe,[e(v,{modelValue:s.label.color,"onUpdate:modelValue":a[6]||(a[6]=i=>s.label.color=i)},null,8,["modelValue"])])]),t("li",null,[t("div",me,[e(v,{modelValue:s.label.bgColor,"onUpdate:modelValue":a[7]||(a[7]=i=>s.label.bgColor=i)},null,8,["modelValue"])])])])])]),t("dl",null,[_e,t("dd",null,[t("ul",fe,[t("li",null,[e(g,{modelValue:s.data.align,"onUpdate:modelValue":a[8]||(a[8]=i=>s.data.align=i)},{default:l(()=>[e(b,{key:"left",label:"left"},{default:l(()=>[e(r,{icon:["fas","align-left"]})]),_:1}),e(b,{key:"center",label:"center"},{default:l(()=>[e(r,{icon:["fas","align-center"]})]),_:1}),e(b,{key:"right",label:"right"},{default:l(()=>[e(r,{icon:["fas","align-right"]})]),_:1})]),_:1},8,["modelValue"])]),t("li",null,[e(y,null,{default:l(()=>[e(_,{type:s.data.bold?"primary":"",onClick:a[9]||(a[9]=i=>s.data.bold=!s.data.bold)},{default:l(()=>[e(r,{icon:["fas","bold"]})]),_:1},8,["type"]),e(_,{type:s.data.italic?"primary":"",onClick:a[10]||(a[10]=i=>s.data.italic=!s.data.italic)},{default:l(()=>[e(r,{icon:["fas","italic"]})]),_:1},8,["type"])]),_:1})]),t("li",null,[t("div",be,[e(v,{modelValue:s.data.color,"onUpdate:modelValue":a[11]||(a[11]=i=>s.data.color=i)},null,8,["modelValue"])])]),t("li",null,[t("div",ve,[e(v,{modelValue:s.data.bgColor,"onUpdate:modelValue":a[12]||(a[12]=i=>s.data.bgColor=i)},null,8,["modelValue"])])])])])])])):T("",!0)],2)])])}}}),ge={class:"contents-aside-left"},ye=["contents-main-layout"],Ve={class:"contents-aside-right"},Se=$({__name:"component",setup(D){const n=R();return n.contentsMainLayout(!0,!0),(f,h)=>{const s=c("font-awesome-icon");return m(),V(q,null,[t("div",ge,[e(j)]),t("div",{class:"contents-main","contents-main-layout":o(n).contentsMainType},[t("span",{class:"toggle-aside toggle-aside-setting",onClick:h[0]||(h[0]=d=>o(n).contentsMainLayout(!o(n).contentsSetAreaShow,o(n).contentsAttributeAreaShow))},[t("i",null,[e(s,{icon:["fas","ellipsis-vertical"]})])]),e(he),t("span",{class:"toggle-aside toggle-aside-attribute",onClick:h[1]||(h[1]=d=>o(n).contentsMainLayout(o(n).contentsSetAreaShow,!o(n).contentsAttributeAreaShow))},[t("i",null,[e(s,{icon:["fas","ellipsis-vertical"]})])])],8,ye),t("div",Ve,[e(ee)])],64)}}});export{Se as default};
