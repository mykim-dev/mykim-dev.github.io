import{defineComponent as S,resolveComponent as s,openBlock as _,createElementBlock as g,createVNode as e,withCtx as l,createElementVNode as a,reactive as L,ref as N,createTextVNode as D,unref as i,createBlock as x,createCommentVNode as K,normalizeClass as O,Fragment as P,renderList as T}from"vue";import{a as z,_ as Z}from"./index-9c0a46b5.js";import{u as j}from"./attribute-4a080ba7.js";/* empty css                                                                    */const G={class:"set-container"},J=a("div",{class:"set-header"},[a("h3",{class:"title"},"Component")],-1),Q=S({__name:"settingComponent",setup($){z();const t={children:"children",label:"label"},u=[{id:1,label:"ToolbarButton",link:"",children:[]},{id:2,label:"ChannelButton",link:"",children:[]},{id:3,label:"Button",link:"",children:[]},{id:4,label:"LookUp",link:"",children:[]},{id:5,label:"Text",link:"",children:[]},{id:6,label:"Select",link:"",children:[]},{id:7,label:"Editor",link:"",children:[]},{id:8,label:"Password",link:"",children:[]},{id:9,label:"ImageUpload",link:"",children:[]},{id:10,label:"Textarea",link:"",children:[]},{id:11,label:"Radio",link:"",children:[]},{id:12,label:"CheckBox",link:"",children:[]},{id:13,label:"DatePicker",link:"",children:[]},{id:14,label:"DateTimePicker",link:"",children:[]},{id:15,label:"Label",link:"",children:[]},{id:16,label:"Dynamic",link:"",children:[]},{id:17,label:"Number",link:"",children:[]},{id:18,label:"FileUpload",link:"",children:[]},{id:19,label:"ImageView",link:"",children:[]},{id:20,label:"BarcodeScan",link:"",children:[]},{id:21,label:"ZipCodeKr",link:"",children:[]},{id:22,label:"Sign",link:"",children:[]},{id:23,label:"ColorPicker",link:"",children:[]},{id:24,label:"Hidden",link:"",children:[]}],f=C=>{console.log(C)};return(C,o)=>{const c=s("el-tree"),d=s("el-scrollbar");return _(),g("div",G,[J,e(d,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 40px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[e(c,{ref:"treeRef",data:u,props:t,"default-expand-all":"",onNodeClick:f},null,512)]),_:1})])}}}),X={class:"set-container"},Y={class:"set-header"},ee={class:"qs-tags-group"},le={class:"set-body"},oe={class:"set-container"},te=a("div",{class:"set-header"},[a("h3",{class:"title"},"Component [Form]")],-1),ne={class:"qs-text"},ae={class:"qs-text"},ie={class:"qs-lookup"},se={class:"qs-text"},de={class:"qs-lookup"},ue={class:"qs-text"},ce={class:"qs-lookup"},pe={class:"qs-text"},re={class:"qs-lookup"},me={class:"qs-lookup"},_e={class:"qs-text"},fe={class:"qs-lookup"},be={class:"setting-footer"},he=S({__name:"attributeComponent",setup($){const t=L({Name:"",Desc:"",Sequence:"",Hidden:!1,Root:!1,Display:"",Custom:"",Parent:"",Platform:N(["All"])}),u=N(["1","2","3","4"]),f=C=>{};return(C,o)=>{const c=s("el-tag"),d=s("el-input"),p=s("el-form-item"),b=s("font-awesome-icon"),V=s("el-checkbox-button"),w=s("el-checkbox-group"),h=s("el-form"),y=s("el-collapse-item"),k=s("el-switch"),m=s("Search"),v=s("el-icon"),r=s("el-button"),U=s("el-collapse"),q=s("el-scrollbar");return _(),g("div",X,[a("div",Y,[a("div",ee,[e(c,{"disable-transitions":!0,effect:"dark"},{default:l(()=>[D("Attribute View")]),_:1}),e(c,{"disable-transitions":!0,effect:"plain"},{default:l(()=>[D("Service View")]),_:1})])]),a("div",le,[a("div",oe,[te,e(q,{class:"set-body",style:{height:"calc(100vh - calc(var(--studio-layout-header-height) + var(--studio-layout-tags-height) + 120px + var(--studio-layout-padding) * 4))"}},{default:l(()=>[e(U,{class:"set-collapse",modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=I=>u.value=I),onChange:f},{default:l(()=>[e(y,{title:"Config",name:"1"},{default:l(()=>[e(h,{"label-position":"left"},{default:l(()=>[e(p,{label:"Template"},{default:l(()=>[e(d,{placeholder:"Please input",value:""})]),_:1}),e(p,{label:"Platform"},{default:l(()=>[e(w,{modelValue:t.Platform,"onUpdate:modelValue":o[0]||(o[0]=I=>t.Platform=I)},{default:l(()=>[e(V,{key:"web",label:"web"},{default:l(()=>[e(b,{icon:["fas","desktop"]})]),_:1}),e(V,{key:"tablet",label:"tablet"},{default:l(()=>[e(b,{icon:["fas","tablet-screen-button"]})]),_:1}),e(V,{key:"mobile",label:"mobile"},{default:l(()=>[e(b,{icon:["fas","mobile-screen-button"]})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"Name"},{default:l(()=>[a("div",ne,[e(d,{placeholder:"Please input",value:""})])]),_:1}),e(p,{label:"Desc"},{default:l(()=>[a("div",ae,[e(d,{placeholder:"Please input",value:""})])]),_:1})]),_:1})]),_:1}),e(y,{title:"Control",name:"2"},{default:l(()=>[e(h,{"label-position":"left"},{default:l(()=>[e(p,{label:"ReadOnly"},{default:l(()=>[e(k,{size:"small"})]),_:1}),e(p,{label:"Required"},{default:l(()=>[e(k,{size:"small"})]),_:1}),e(p,{label:"Hidden"},{default:l(()=>[e(k,{size:"small"})]),_:1}),e(p,{label:"Enable"},{default:l(()=>[e(k,{size:"small"})]),_:1}),e(p,{label:"Translate"},{default:l(()=>[e(k,{size:"small"})]),_:1})]),_:1})]),_:1}),e(y,{title:"Label",name:"3"},{default:l(()=>[e(h,{"label-position":"left"},{default:l(()=>[e(p,{label:"Label"},{default:l(()=>[a("div",ie,[e(d,{placeholder:"Please input"},{append:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(m)]),_:1})]),_:1})]),_:1})])]),_:1}),e(p,{label:"Custom Label"},{default:l(()=>[a("div",se,[e(d,{placeholder:"Please input",value:""})])]),_:1}),e(p,{label:"Desc"},{default:l(()=>[a("div",de,[e(d,{placeholder:"Please input"},{append:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(m)]),_:1})]),_:1})]),_:1})])]),_:1}),e(p,{label:"Custom Desc"},{default:l(()=>[a("div",ue,[e(d,{placeholder:"Please input",value:""})])]),_:1})]),_:1})]),_:1}),e(y,{title:"Data",name:"4"},{default:l(()=>[e(h,{"label-position":"left"},{default:l(()=>[e(p,{label:"Placeholder"},{default:l(()=>[a("div",ce,[e(d,{placeholder:"Please input"},{append:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(m)]),_:1})]),_:1})]),_:1})])]),_:1}),e(p,{label:"Custom Placeholder"},{default:l(()=>[a("div",pe,[e(d,{placeholder:"Please input",value:""})])]),_:1}),e(p,{label:"Field"},{default:l(()=>[a("div",re,[e(d,{placeholder:"Please input"},{append:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(m)]),_:1})]),_:1})]),_:1})])]),_:1}),e(p,{label:"Ref Code"},{default:l(()=>[a("div",me,[e(d,{placeholder:"Please input"},{append:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(m)]),_:1})]),_:1})]),_:1})])]),_:1}),e(p,{label:"Default Value"},{default:l(()=>[e(k,{size:"small"}),a("div",_e,[e(d,{placeholder:"Please input",value:""})])]),_:1}),e(p,{label:"Sequence ID"},{default:l(()=>[a("div",fe,[e(d,{placeholder:"Please input"},{append:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(m)]),_:1})]),_:1})]),_:1})])]),_:1}),e(p,{label:"Thousand Separator"}),e(p,{label:"Currency"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a("div",be,[e(r,null,{default:l(()=>[D("저장")]),_:1})])])])])}}}),ke={class:"set-container"},ve={class:"set-header"},Ce={key:0,class:"edit-tool-group"},ge={class:"edit-tool"},Ve={class:"edit-tool"},ye={class:"edit-tool"},xe={class:"qs-form"},Ie=S({__name:"contentsComponent",setup($){const t=j(),u=L({text:"",lookup:"",number:"",password:"",datepicker:"",datetimepicker:"",select:"option1",radio:"option1",checkbox:["option1","option2"],colorpicker:"#ff0000"}),f=[{label:"option1",value:"option1"},{label:"option2",value:"option2"},{label:"option3",value:"option3"},{label:"option4",value:"option4"},{label:"option5",value:"option5"}];return N(["1","2"]),(C,o)=>{const c=s("font-awesome-icon"),d=s("el-button"),p=s("el-divider"),b=s("el-radio-button"),V=s("el-radio-group"),w=s("el-button-group"),h=s("el-color-picker"),y=s("el-switch"),k=s("el-input"),m=s("el-form-item"),v=s("el-form"),r=s("el-col"),U=s("Search"),q=s("el-icon"),I=s("el-input-number"),A=s("el-date-picker"),B=s("el-option"),R=s("el-select"),M=s("el-radio"),E=s("el-checkbox"),F=s("el-checkbox-group"),H=s("el-row"),W=s("el-scrollbar");return _(),g("div",ke,[a("div",ve,[i(t).sampleComponentInfo.editMode?(_(),g("div",Ce,[a("ul",ge,[a("li",null,[e(d,{onClick:o[0]||(o[0]=n=>[i(t).sampleComponentInfo.item.hidden=!i(t).sampleComponentInfo.item.hidden])},{default:l(()=>[i(t).sampleComponentInfo.item.hidden?(_(),x(c,{key:0,icon:["fas","eye-slash"]})):(_(),x(c,{key:1,icon:["fas","eye"]}))]),_:1})]),a("li",null,[e(d,{onClick:o[1]||(o[1]=n=>[i(t).sampleComponentInfo.item.position=i(t).sampleComponentInfo.item.position=="top"?"left":"top"])},{default:l(()=>[i(t).sampleComponentInfo.item.position=="top"?(_(),x(c,{key:0,icon:["fas","equals"]})):(_(),x(c,{key:1,icon:["fas","pause"]}))]),_:1})])]),e(p,{direction:"vertical"}),a("ul",Ve,[a("li",null,[e(d,{onClick:o[2]||(o[2]=n=>[i(t).sampleComponentInfo.label.hidden=!i(t).sampleComponentInfo.label.hidden])},{default:l(()=>[i(t).sampleComponentInfo.label.hidden?(_(),x(c,{key:0,icon:["fas","eye-slash"]})):(_(),x(c,{key:1,icon:["fas","eye"]}))]),_:1})]),a("li",null,[e(V,{modelValue:i(t).sampleComponentInfo.label.align,"onUpdate:modelValue":o[3]||(o[3]=n=>i(t).sampleComponentInfo.label.align=n)},{default:l(()=>[e(b,{key:"left",label:"left"},{default:l(()=>[e(c,{icon:["fas","align-left"]})]),_:1}),e(b,{key:"center",label:"center"},{default:l(()=>[e(c,{icon:["fas","align-center"]})]),_:1}),e(b,{key:"right",label:"right"},{default:l(()=>[e(c,{icon:["fas","align-right"]})]),_:1})]),_:1},8,["modelValue"])]),a("li",null,[e(w,null,{default:l(()=>[e(d,{onClick:o[4]||(o[4]=n=>[i(t).sampleComponentInfo.label.bold=i(t).sampleComponentInfo.label.bold==="normal"?"bold":"normal"])},{default:l(()=>[e(c,{icon:["fas","bold"]})]),_:1}),e(d,{onClick:o[5]||(o[5]=n=>[i(t).sampleComponentInfo.label.italic=i(t).sampleComponentInfo.label.italic==="normal"?"italic":"normal"])},{default:l(()=>[e(c,{icon:["fas","italic"]})]),_:1})]),_:1})]),a("li",null,[e(d,{class:"color-picker-fontcolor"},{default:l(()=>[e(c,{icon:["fas","font"]}),e(h,{modelValue:i(t).sampleComponentInfo.label.color,"onUpdate:modelValue":o[6]||(o[6]=n=>i(t).sampleComponentInfo.label.color=n)},null,8,["modelValue"])]),_:1})]),a("li",null,[e(d,{class:"color-picker-bgcolor"},{default:l(()=>[e(c,{icon:["fas","fill"]}),e(h,{modelValue:i(t).sampleComponentInfo.label.bgcolor,"onUpdate:modelValue":o[7]||(o[7]=n=>i(t).sampleComponentInfo.label.bgcolor=n)},null,8,["modelValue"])]),_:1})])]),e(p,{direction:"vertical"}),a("ul",ye,[a("li",null,[e(V,{modelValue:i(t).sampleComponentInfo.data.align,"onUpdate:modelValue":o[8]||(o[8]=n=>i(t).sampleComponentInfo.data.align=n)},{default:l(()=>[e(b,{key:"left",label:"left"},{default:l(()=>[e(c,{icon:["fas","align-left"]})]),_:1}),e(b,{key:"center",label:"center"},{default:l(()=>[e(c,{icon:["fas","align-center"]})]),_:1}),e(b,{key:"right",label:"right"},{default:l(()=>[e(c,{icon:["fas","align-right"]})]),_:1})]),_:1},8,["modelValue"])]),a("li",null,[e(w,null,{default:l(()=>[e(d,{onClick:o[9]||(o[9]=n=>[i(t).sampleComponentInfo.data.bold=i(t).sampleComponentInfo.data.align==="normal"?"bold":"normal"])},{default:l(()=>[e(c,{icon:["fas","bold"]})]),_:1}),e(d,{onClick:o[10]||(o[10]=n=>[i(t).sampleComponentInfo.data.italic=i(t).sampleComponentInfo.data.italic==="normal"?"italic":"normal"])},{default:l(()=>[e(c,{icon:["fas","italic"]})]),_:1})]),_:1})]),a("li",null,[e(d,{class:"color-picker-fontcolor"},{default:l(()=>[e(c,{icon:["fas","font"]}),e(h,{modelValue:i(t).sampleComponentInfo.data.color,"onUpdate:modelValue":o[11]||(o[11]=n=>i(t).sampleComponentInfo.data.color=n)},null,8,["modelValue"])]),_:1})]),a("li",null,[e(d,{class:"color-picker-bgcolor"},{default:l(()=>[e(c,{icon:["fas","fill"]}),e(h,{modelValue:i(t).sampleComponentInfo.data.bgcolor,"onUpdate:modelValue":o[12]||(o[12]=n=>i(t).sampleComponentInfo.data.bgcolor=n)},null,8,["modelValue"])]),_:1})])])])):K("",!0),e(y,{size:"small",modelValue:i(t).sampleComponentInfo.editMode,"onUpdate:modelValue":o[13]||(o[13]=n=>i(t).sampleComponentInfo.editMode=n),"active-text":"편집 모드","inactive-text":"미리보기"},null,8,["modelValue"])]),e(W,{class:"set-body","view-style":"height: calc(100vh - 185px);overflow-x: hidden;border: 1px solid blue;"},{default:l(()=>[a("div",{class:O(["qs-component",{"is-folder":i(t).sampleComponentInfo.componentType=="folder"}])},[a("div",xe,[e(v,{"label-width":i(t).sampleComponentInfo.item.labelWidth,"label-position":i(t).sampleComponentInfo.item.position},{default:l(()=>[e(H,{gutter:16},{default:l(()=>[e(r,{span:6},{default:l(()=>[e(v,{"label-width":i(t).sampleComponentInfo.label.labelWidth,"label-position":i(t).sampleComponentInfo.label.position},{default:l(()=>[e(m,{label:"Text"},{default:l(()=>[e(k,{modelValue:u.text,"onUpdate:modelValue":o[14]||(o[14]=n=>u.text=n),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1},8,["label-width","label-position"])]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Lookup"},{default:l(()=>[e(k,{modelValue:u.lookup,"onUpdate:modelValue":o[15]||(o[15]=n=>u.lookup=n),placeholder:"Please input"},{append:l(()=>[e(d,null,{default:l(()=>[e(q,null,{default:l(()=>[e(U)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Number"},{default:l(()=>[e(I,{modelValue:u.number,"onUpdate:modelValue":o[16]||(o[16]=n=>u.number=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Password"},{default:l(()=>[e(k,{modelValue:u.password,"onUpdate:modelValue":o[17]||(o[17]=n=>u.password=n),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Date Picker"},{default:l(()=>[e(A,{modelValue:u.datepicker,"onUpdate:modelValue":o[18]||(o[18]=n=>u.datepicker=n),type:"datetime",placeholder:"Select date and time"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Date Time Picker"},{default:l(()=>[e(A,{modelValue:u.datetimepicker,"onUpdate:modelValue":o[19]||(o[19]=n=>u.datetimepicker=n),type:"datetime",placeholder:"Select date and time"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Select"},{default:l(()=>[e(R,{modelValue:u.select,"onUpdate:modelValue":o[20]||(o[20]=n=>u.select=n),placeholder:"Select date"},{default:l(()=>[(_(),g(P,null,T(f,n=>e(B,{key:n,label:n.label,value:n.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p),e(r,{span:12},{default:l(()=>[e(m,{label:"Radio"},{default:l(()=>[e(V,{modelValue:u.radio,"onUpdate:modelValue":o[21]||(o[21]=n=>u.radio=n)},{default:l(()=>[(_(),g(P,null,T(f,n=>e(M,{key:n,label:n.label},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(m,{label:"Checkbox"},{default:l(()=>[e(F,{modelValue:u.checkbox,"onUpdate:modelValue":o[22]||(o[22]=n=>u.checkbox=n)},{default:l(()=>[(_(),g(P,null,T(f,n=>e(E,{label:n.label},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:6},{default:l(()=>[e(m,{label:"Color Picker"},{default:l(()=>[e(h,{modelValue:u.colorpicker,"onUpdate:modelValue":o[23]||(o[23]=n=>u.colorpicker=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["label-width","label-position"])])],2)]),_:1})])}}});const we=Z(Ie,[["__scopeId","data-v-ce99e1a8"]]),Pe={class:"main-aside-left"},Se=["main-contents-layout"],$e={class:"main-aside-right"},Ne=S({__name:"component",setup($){const t=z();return(u,f)=>{const C=s("font-awesome-icon");return _(),g(P,null,[a("div",Pe,[e(Q)]),a("div",{class:"main-contents","main-contents-layout":i(t).contentsMainType},[a("span",{class:"toggle-aside toggle-aside-setting",onClick:f[0]||(f[0]=o=>i(t).contentsMainLayout(!i(t).contentsSetAreaShow,i(t).contentsAttributeAreaShow))},[a("i",null,[e(C,{icon:["fas","ellipsis-vertical"]})])]),e(we),a("span",{class:"toggle-aside toggle-aside-attribute",onClick:f[1]||(f[1]=o=>i(t).contentsMainLayout(i(t).contentsSetAreaShow,!i(t).contentsAttributeAreaShow))},[a("i",null,[e(C,{icon:["fas","ellipsis-vertical"]})])])],8,Se),a("div",$e,[e(he)])],64)}}});export{Ne as default};
