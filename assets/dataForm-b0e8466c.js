import{a as g,s as p,b as e,o as c,c as b,w as t,e as o,f as D,g as y,n as v,j as $,t as V,u as f,C as O,h as w,i as k,F as P,r as C,x as F,y as S,_ as j,v as q,d as T}from"./index-9915e011.js";/* empty css                                                                    */const E={class:"qs-control-data"},L=g({__name:"qsText",props:["controlData"],setup(l){const a=p(l.controlData);return(i,r)=>{const s=e("el-input"),d=e("el-form-item"),u=e("el-form");return c(),b(u,{"label-width":a.labelWidth,"label-position":a.labelPosition,disabled:a.disabled,class:v(["qs-control",{"hide-control":a.hide}])},{default:t(()=>[o(d,{class:"qs-control-item",label:a.label.label,required:a.required,style:y([a.label.align?`text-align: ${a.label.align};`:"",a.label.bold?"font-weight: bold;":"",a.label.italic?"font-style: italic;":"",a.label.color!==""?`color: ${a.label.color};`:"",a.label.bgColor!==""?`background-color: ${a.label.bgColor};`:""])},{default:t(()=>[D("div",E,[o(s,{modelValue:a.data.value,"onUpdate:modelValue":r[0]||(r[0]=h=>a.data.value=h),readonly:a.readonly,style:y(a.data.bgColor!==""?`background-color: ${a.data.bgColor}`:"background-color: white"),"input-style":[a.data.align?`text-align: ${a.data.align};`:"",a.data.bold?"font-weight: bold;":"",a.data.italic?"font-style: italic;":"",a.data.color!==""?`color: ${a.data.color};`:""]},null,8,["modelValue","readonly","style","input-style"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),B={class:"qs-control-data"},z=g({__name:"qsLabel",props:["controlData"],setup(l){const a=l.controlData;return(i,r)=>{const s=e("el-text"),d=e("el-form-item"),u=e("el-form");return c(),b(u,{"label-width":f(a).labelWidth,"label-position":f(a).labelPosition,disabled:f(a).disabled,class:v(["qs-control",{"hide-control":f(a).hide}])},{default:t(()=>[o(d,{class:"qs-control-item",label:f(a).label.label,required:f(a).required,style:y([f(a).label.align?`text-align: ${f(a).label.align};`:"",f(a).label.bold?"font-weight: bold;":"",f(a).label.italic?"font-style: italic;":"",f(a).label.color!==""?`color: ${f(a).label.color};`:"",f(a).label.bgColor!==""?`background-color: ${f(a).label.bgColor};`:""])},{default:t(()=>[D("div",B,[o(s,{tag:"h3",truncated:!0,class:"qs-control-data"},{default:t(()=>[$(V(f(a).data.value),1)]),_:1})])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),I={class:"qs-control-data"},N=g({__name:"qsPassword",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-input"),r=e("el-form-item"),s=e("el-form");return c(),b(s,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(r,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",I,[o(i,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.controlData.data.value=d),type:"password",placeholder:"Please input password","show-password":"",disabled:l.controlData.disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),M={class:"qs-control-data"},R=g({__name:"qsNumber",props:["controlData"],setup(l){const m=a=>{console.log(a)};return(a,i)=>{const r=e("el-input-number"),s=e("el-form-item"),d=e("el-form");return c(),b(d,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(s,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",M,[o(r,{modelValue:l.controlData.data.value,"onUpdate:modelValue":i[0]||(i[0]=u=>l.controlData.data.value=u),min:1,max:10,onChange:m,disabled:l.controlData.disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),K={class:"qs-control-data"},A=g({__name:"qsLookup",props:["controlData"],setup(l){return(m,a)=>{const i=e("Search"),r=e("el-icon"),s=e("el-button"),d=e("el-input"),u=e("el-form-item"),h=e("el-form");return c(),b(h,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(u,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",K,[o(d,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=x=>l.controlData.data.value=x),placeholder:"Please input",disabled:l.controlData.disabled},{append:t(()=>[o(s,null,{default:t(()=>[o(r,null,{default:t(()=>[o(i)]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),G={class:"qs-control-data"},H=g({__name:"qsDatePicker",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-date-picker"),r=e("el-form-item"),s=e("el-form");return c(),b(s,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(r,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",G,[o(i,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.controlData.data.value=d),type:"date",placeholder:"Pick a day",disabled:l.controlData.disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),J={class:"qs-control-data"},Q=g({__name:"qsDateTimePicker",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-date-picker"),r=e("el-form-item"),s=e("el-form");return c(),b(s,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(r,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",J,[o(i,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.controlData.data.value=d),type:"datetime",placeholder:"Select date and time",disabled:l.controlData.disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),X={class:"qs-control-data"},Y=g({__name:"qsSelect",props:["controlData"],setup(l){const m=O();return(a,i)=>{const r=e("el-option"),s=e("el-select"),d=e("el-form-item"),u=e("el-form");return c(),b(u,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(d,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",X,[o(s,{modelValue:l.controlData.data.value,"onUpdate:modelValue":i[0]||(i[0]=h=>l.controlData.data.value=h),placeholder:"",disabled:l.controlData.disabled},{default:t(()=>[(c(!0),w(P,null,k(f(m).controlOptions,h=>(c(),b(r,{key:h,label:h.label,value:h.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),Z={class:"qs-control-data"},_=g({__name:"qsCheckbox",props:["controlData"],setup(l){return C(!0),C(!1),C(!0),C(!1),(m,a)=>{const i=e("el-checkbox"),r=e("el-checkbox-group"),s=e("el-form-item"),d=e("el-form");return c(),b(d,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(s,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",Z,[o(r,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=u=>l.controlData.data.value=u)},{default:t(()=>[o(i,{label:"Option 1",value:"Option 1"}),o(i,{label:"Option 2",value:"Option 2"}),o(i,{label:"Option 1 disabled",value:"Option 1 disabled",disabled:""}),o(i,{label:"Option 2 disabled",value:"Option 2 disabled",disabled:""})]),_:1},8,["modelValue"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),ll={class:"qs-control-data"},al=g({__name:"qsRadio",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-radio"),r=e("el-radio-group"),s=e("el-form-item"),d=e("el-form");return c(),b(d,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(s,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",ll,[o(r,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=u=>l.controlData.data.value=u)},{default:t(()=>[o(i,{label:"option1"},{default:t(()=>[$("Option 1")]),_:1}),o(i,{label:"option2"},{default:t(()=>[$("Option 2")]),_:1}),o(i,{label:"option3",disabled:""},{default:t(()=>[$("Option 3 disabled")]),_:1}),o(i,{label:"option4",disabled:""},{default:t(()=>[$("Option 4 disabled")]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),el={class:"qs-control-data"},tl={class:"qs-button"},ol=D("div",{class:"el-upload__tip"},"jpg/png files with a size less than 500KB.",-1),nl=g({__name:"qsFileUpload",props:["controlData"],setup(l){const m=C([{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}]),a=(d,u)=>{console.log(d,u)},i=d=>{console.log(d)},r=(d,u)=>{F.warning(`The limit is 3, you selected ${d.length} files this time, add up to ${d.length+u.length} totally`)},s=(d,u)=>S.confirm(`Cancel the transfer of ${d.name} ?`).then(()=>!0,()=>!1);return(d,u)=>{const h=e("el-button"),x=e("el-upload"),n=e("el-form-item"),W=e("el-form");return c(),b(W,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(n,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",el,[o(x,{"file-list":m.value,"onUpdate:fileList":u[0]||(u[0]=U=>m.value=U),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:"","on-preview":i,"on-remove":a,"before-remove":s,limit:3,"on-exceed":r,disabled:l.controlData.disabled,required:l.controlData.required},{tip:t(()=>[ol]),default:t(()=>[D("div",tl,[o(h,{type:"primary"},{default:t(()=>[$("Click to upload")]),_:1})])]),_:1},8,["file-list","disabled","required"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),il={class:"qs-control-data"},dl={class:"qs-button"},cl=D("div",{class:"el-upload__tip"},"jpg/png files with a size less than 500kb",-1),rl=g({__name:"qsImageUpload",props:["controlData"],setup(l){const m=C([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),a=(r,s)=>{console.log(r,s)},i=r=>{console.log(r)};return(r,s)=>{const d=e("el-button"),u=e("el-upload"),h=e("el-form-item"),x=e("el-form");return c(),b(x,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(h,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",il,[o(u,{"file-list":m.value,"onUpdate:fileList":s[0]||(s[0]=n=>m.value=n),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","on-preview":i,"on-remove":a,"list-type":"picture",required:l.controlData.required},{tip:t(()=>[cl]),default:t(()=>[D("div",dl,[o(d,{type:"primary"},{default:t(()=>[$("Click to upload")]),_:1})])]),_:1},8,["file-list","required"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),sl={class:"qs-control-data"},bl={text:"2xl"},fl=g({__name:"qsImageView",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-carousel-item"),r=e("el-carousel"),s=e("el-form-item"),d=e("el-form");return c(),b(d,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(s,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",sl,[o(r,{"indicator-position":"outside",style:{width:"100%"}},{default:t(()=>[(c(),w(P,null,k(4,u=>o(i,{key:u},{default:t(()=>[D("h3",bl,V(u),1)]),_:2},1024)),64))]),_:1})])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),ul=j(fl,[["__scopeId","data-v-06462b6a"]]),ml={class:"qs-control-data"},Dl=g({__name:"qsTextarea",props:["controlData"],setup(l){const a=l.controlData;return(i,r)=>{const s=e("el-input"),d=e("el-form-item"),u=e("el-form");return c(),b(u,{"label-width":f(a).labelWidth,"label-position":f(a).labelPosition,disabled:f(a).disabled,class:v(["qs-control",{"hide-control":f(a).hide}])},{default:t(()=>[o(d,{class:"qs-control-item",label:f(a).label.label,required:f(a).required,style:y([f(a).label.align?`text-align: ${f(a).label.align};`:"",f(a).label.bold?"font-weight: bold;":"",f(a).label.italic?"font-style: italic;":"",f(a).label.color!==""?`color: ${f(a).label.color};`:"",f(a).label.bgColor!==""?`background-color: ${f(a).label.bgColor};`:""])},{default:t(()=>[D("div",ml,[o(s,{modelValue:f(a).data.value,"onUpdate:modelValue":r[0]||(r[0]=h=>f(a).data.value=h),rows:4,type:"textarea",placeholder:"Please input",disabled:f(a).disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),gl={class:"qs-control-data"},hl=g({__name:"qsSwitch",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-switch"),r=e("el-form-item"),s=e("el-form");return c(),b(s,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(r,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",gl,[o(i,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.controlData.data.value=d),size:"small",disabled:l.controlData.disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),ql={class:"qs-control-data"},yl=g({__name:"qsColorPicker",props:["controlData"],setup(l){return(m,a)=>{const i=e("el-color-picker"),r=e("el-form-item"),s=e("el-form");return c(),b(s,{"label-width":l.controlData.labelWidth,"label-position":l.controlData.labelPosition,disabled:l.controlData.disabled,class:v(["qs-control",{"hide-control":l.controlData.hide}])},{default:t(()=>[o(r,{class:"qs-control-item",label:l.controlData.label.label,required:l.controlData.required,style:y([l.controlData.label.align?`text-align: ${l.controlData.label.align};`:"",l.controlData.label.bold?"font-weight: bold;":"",l.controlData.label.italic?"font-style: italic;":"",l.controlData.label.color!==""?`color: ${l.controlData.label.color};`:"",l.controlData.label.bgColor!==""?`background-color: ${l.controlData.label.bgColor};`:""])},{default:t(()=>[D("div",ql,[o(i,{modelValue:l.controlData.data.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.controlData.data.value=d),disabled:l.controlData.disabled},null,8,["modelValue","disabled"])])]),_:1},8,["label","required","style"])]),_:1},8,["label-width","label-position","disabled","class"])}}}),vl=g({__name:"qsDivider",setup(l){return(m,a)=>{const i=e("el-divider"),r=e("el-form-item"),s=e("el-form");return c(),b(s,{class:"qs-control"},{default:t(()=>[o(r,null,{default:t(()=>[o(i)]),_:1})]),_:1})}}}),$l=g({__name:"qsFormItem",props:["dataForm","modeEdit"],setup(l){const m=l,a=m.dataForm.formComponent,i=m.dataForm.formControl,r=C(m.modeEdit);return(s,d)=>{const u=e("el-col"),h=e("el-row"),x=e("el-form");return c(),b(x,{"label-position":f(a).labelPosition},{default:t(()=>[o(h,{gutter:10},{default:t(()=>[(c(!0),w(P,null,k(f(i),n=>(c(),b(u,{span:!r.value&&n.hide?0:n.span,key:n},{default:t(()=>[n.type==="qs-text"?(c(),b(L,{key:0,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-password"?(c(),b(N,{key:1,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-number"?(c(),b(R,{key:2,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-lookup"?(c(),b(A,{key:3,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-date-picker"?(c(),b(H,{key:4,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-date-time-picker"?(c(),b(Q,{key:5,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-select"?(c(),b(Y,{key:6,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-color-picker"?(c(),b(yl,{key:7,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-switch"?(c(),b(hl,{key:8,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-checkbox"?(c(),b(_,{key:9,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-radio"?(c(),b(al,{key:10,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-textarea"?(c(),b(Dl,{key:11,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-file-upload"?(c(),b(nl,{key:12,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-image-upload"?(c(),b(rl,{key:13,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-image-view"?(c(),b(ul,{key:14,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-label"?(c(),b(z,{key:15,controlData:n},null,8,["controlData"])):q("",!0),n.type==="qs-divider"?(c(),b(vl,{key:16,controlData:n},null,8,["controlData"])):q("",!0)]),_:2},1032,["span"]))),128))]),_:1})]),_:1},8,["label-position"])}}}),wl=T("DataForm",{state:()=>({formComponent:C({labelWidth:"50px",labelPosition:"left"}),formControl:C([{span:8,type:"qs-text",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"text Default",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"Default",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-text",required:!0,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"text required",align:"left",bold:!1,italic:!0,color:"#ff0000",bgColor:"#00ff00"},data:{value:"required",align:"left",bold:!0,italic:!1,color:"#0000ff",bgColor:"#ffff00"}},{span:8,type:"qs-text",required:!1,readonly:!0,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"text readonly",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"readonly",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-text",required:!1,readonly:!1,disabled:!0,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"text disabled",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"disabled",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-text",required:!1,readonly:!1,disabled:!1,hide:!0,labelWidth:"120px",labelPosition:"left",label:{label:"text hide",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"hide",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-divider",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-label",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"",labelPosition:"left",label:{label:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"Title (새로운 컨트롤)",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-label",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"title label",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"Title (새로운 컨트롤)",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-label",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"title label",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"Title (새로운 컨트롤)",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-divider",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-password",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"password",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"focus",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-number",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"number",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:1e3,align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-lookup",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"lookup",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"focus",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-date-picker",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"date-picker",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"focus",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-date-time-picker",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"date-time-picker",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"focus",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-select",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"select",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"focus",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-color-picker",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"color-picker",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"#0000ff",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-divider",required:!0,disabled:!1,readonly:!1,hide:!1,labelWidth:"100px",labelPosition:"left",label:{label:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:8,type:"qs-switch",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"switch",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:!1,align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-checkbox",required:!0,disabled:!1,readonly:!1,hide:!1,labelWidth:"100px",labelPosition:"left",label:{label:"checkbox",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:["Option 1"],align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-radio",required:!0,disabled:!1,readonly:!1,hide:!1,labelWidth:"100px",labelPosition:"left",label:{label:"radio",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"option1",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-textarea",required:!1,readonly:!1,disabled:!1,hide:!1,labelWidth:"120px",labelPosition:"left",label:{label:"textarea",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"focus",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:12,type:"qs-image-upload",required:!0,disabled:!1,readonly:!1,hide:!1,labelWidth:"",labelPosition:"left",label:{label:"imageUpload",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:12,type:"qs-file-upload",required:!0,disabled:!1,readonly:!1,hide:!1,labelWidth:"",labelPosition:"left",label:{label:"imageUpload",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""}},{span:24,type:"qs-image-view",required:!0,disabled:!1,readonly:!1,hide:!1,labelWidth:"",labelPosition:"left",label:{label:"imageUpload",align:"left",bold:!1,italic:!1,color:"",bgColor:""},data:{value:"",align:"left",bold:!1,italic:!1,color:"",bgColor:""}}])})});export{wl as D,$l as _};
