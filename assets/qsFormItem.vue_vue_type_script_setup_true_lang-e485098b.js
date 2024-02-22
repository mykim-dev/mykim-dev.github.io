import{a as c,b as l,o as n,c as d,w as a,e as i,l as q,t as V,r as h,h as g,F as k,i as x,f as v,E as U,x as P,_ as j,k as m}from"./index-993cf29a.js";/* empty css                                                                    */const B=c({__name:"qsText",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-input"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),L=c({__name:"qsTitle",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-text"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,class:"qs-title"},{default:a(()=>[i(o,{tag:"h3"},{default:a(()=>[q(V(e.attribute.data.value),1)]),_:1})]),_:1},8,["label"])]),_:1},8,["label-width","label-position"])}}}),S=c({__name:"qsPassword",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-input"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),type:"password",placeholder:"Please input password","show-password":"",disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),T=c({__name:"qsNumber",props:["attribute"],setup(b){const e=b,p=u=>{console.log(u)};return(u,o)=>{const r=l("el-input-number"),s=l("el-form-item"),t=l("el-form");return n(),d(t,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(s,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(r,{modelValue:e.attribute.data.value,"onUpdate:modelValue":o[0]||(o[0]=_=>e.attribute.data.value=_),min:1,max:10,onChange:p,disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),E=c({__name:"qsLookup",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("Search"),r=l("el-icon"),s=l("el-button"),t=l("el-input"),_=l("el-form-item"),f=l("el-form");return n(),d(f,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(_,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(t,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=w=>e.attribute.data.value=w),placeholder:"Please input",disabled:e.attribute.disabled},{append:a(()=>[i(s,null,{default:a(()=>[i(r,null,{default:a(()=>[i(o)]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),F=c({__name:"qsDatePicker",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-date-picker"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),type:"date",placeholder:"Pick a day",disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),I=c({__name:"qsDateTimePicker",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-date-picker"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),type:"datetime",placeholder:"Select date and time",disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),N=c({__name:"qsSelect",props:["attribute"],setup(b){const e=b;h("");const p=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(u,o)=>{const r=l("el-option"),s=l("el-select"),t=l("el-form-item"),_=l("el-form");return n(),d(_,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(t,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(s,{modelValue:e.attribute.data.value,"onUpdate:modelValue":o[0]||(o[0]=f=>e.attribute.data.value=f),placeholder:"",disabled:e.attribute.disabled},{default:a(()=>[(n(),g(k,null,x(p,f=>i(r,{key:f,label:f.label,value:f.value},null,8,["label","value"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),D=c({__name:"qsCheckbox",props:["attribute"],setup(b){const e=b;return h(!0),h(!1),h(!0),h(!1),(p,u)=>{const o=l("el-checkbox"),r=l("el-checkbox-group"),s=l("el-form-item"),t=l("el-form");return n(),d(t,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(s,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(r,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=_=>e.attribute.data.value=_)},{default:a(()=>[i(o,{label:"Option 1"}),i(o,{label:"Option 2"}),i(o,{label:"Option 1 disabled",disabled:""}),i(o,{label:"Option 2 disabled",disabled:""})]),_:1},8,["modelValue"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),M=c({__name:"qsRadio",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-radio"),r=l("el-radio-group"),s=l("el-form-item"),t=l("el-form");return n(),d(t,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(s,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(r,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=_=>e.attribute.data.value=_)},{default:a(()=>[i(o,{label:"option1"},{default:a(()=>[q("Option 1")]),_:1}),i(o,{label:"option2"},{default:a(()=>[q("Option 2")]),_:1}),i(o,{label:"option3",disabled:""},{default:a(()=>[q("Option 3 disabled")]),_:1}),i(o,{label:"option4",disabled:""},{default:a(()=>[q("Option 4 disabled")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),R={class:"qs-button"},z=v("div",{class:"el-upload__tip"},"jpg/png files with a size less than 500KB.",-1),K=c({__name:"qsFileUpload",props:["attribute"],setup(b){const e=b,p=h([{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}]),u=(t,_)=>{console.log(t,_)},o=t=>{console.log(t)},r=(t,_)=>{U.warning(`The limit is 3, you selected ${t.length} files this time, add up to ${t.length+_.length} totally`)},s=(t,_)=>P.confirm(`Cancel the transfer of ${t.name} ?`).then(()=>!0,()=>!1);return(t,_)=>{const f=l("el-button"),w=l("el-upload"),y=l("el-form-item"),$=l("el-form");return n(),d($,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(y,{label:e.attribute.label.label},{default:a(()=>[i(w,{"file-list":p.value,"onUpdate:fileList":_[0]||(_[0]=O=>p.value=O),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:"","on-preview":o,"on-remove":u,"before-remove":s,limit:3,"on-exceed":r,disabled:e.attribute.disabled,required:e.attribute.required},{tip:a(()=>[z]),default:a(()=>[v("div",R,[i(f,{type:"primary"},{default:a(()=>[q("Click to upload")]),_:1})])]),_:1},8,["file-list","disabled","required"])]),_:1},8,["label"])]),_:1},8,["label-width","label-position"])}}}),A={class:"qs-button"},G=v("div",{class:"el-upload__tip"},"jpg/png files with a size less than 500kb",-1),H=c({__name:"qsImageUpload",props:["attribute"],setup(b){const e=b,p=h([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),u=(r,s)=>{console.log(r,s)},o=r=>{console.log(r)};return(r,s)=>{const t=l("el-button"),_=l("el-upload"),f=l("el-form-item"),w=l("el-form");return n(),d(w,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(f,{label:e.attribute.label.label},{default:a(()=>[i(_,{"file-list":p.value,"onUpdate:fileList":s[0]||(s[0]=y=>p.value=y),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","on-preview":o,"on-remove":u,"list-type":"picture",required:e.attribute.required},{tip:a(()=>[G]),default:a(()=>[v("div",A,[i(t,{type:"primary"},{default:a(()=>[q("Click to upload")]),_:1})])]),_:1},8,["file-list","required"])]),_:1},8,["label"])]),_:1},8,["label-width","label-position"])}}}),J={text:"2xl"},Q=c({__name:"qsImageView",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-carousel-item"),r=l("el-carousel"),s=l("el-form-item"),t=l("el-form");return n(),d(t,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(s,{label:e.attribute.label.label},{default:a(()=>[i(r,{"indicator-position":"outside",style:{width:"100%"}},{default:a(()=>[(n(),g(k,null,x(4,_=>i(o,{key:_},{default:a(()=>[v("h3",J,V(_),1)]),_:2},1024)),64))]),_:1})]),_:1},8,["label"])]),_:1},8,["label-width","label-position"])}}}),W=j(Q,[["__scopeId","data-v-45d3e2b5"]]),X=c({__name:"qsTextarea",props:["attribute"],setup(b){const e=b;return h(""),(p,u)=>{const o=l("el-input"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),rows:4,type:"textarea",placeholder:"Please input",disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),Y=c({__name:"qsSwitch",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-switch"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),size:"small",disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),Z=c({__name:"qsColorPicker",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-color-picker"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label,required:e.attribute.required},{default:a(()=>[i(o,{modelValue:e.attribute.data.value,"onUpdate:modelValue":u[0]||(u[0]=t=>e.attribute.data.value=t),disabled:e.attribute.disabled},null,8,["modelValue","disabled"])]),_:1},8,["label","required"])]),_:1},8,["label-width","label-position"])}}}),C=c({__name:"qsDivider",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-divider"),r=l("el-form-item"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.width,"label-position":e.attribute.position},{default:a(()=>[i(r,{label:e.attribute.label.label},{default:a(()=>[i(o)]),_:1},8,["label"])]),_:1},8,["label-width","label-position"])}}}),le=c({__name:"qsFormItem",props:["attribute"],setup(b){const e=b;return(p,u)=>{const o=l("el-col"),r=l("el-row"),s=l("el-form");return n(),d(s,{"label-width":e.attribute.formComponent.width,"label-position":e.attribute.formComponent.position},{default:a(()=>[i(r,{gutter:16},{default:a(()=>[(n(!0),g(k,null,x(e.attribute.formControl,t=>(n(),d(o,{span:t.span,key:t},{default:a(()=>[t.type==="qs-text"?(n(),d(B,{key:0,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-password"?(n(),d(S,{key:1,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-number"?(n(),d(T,{key:2,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-lookup"?(n(),d(E,{key:3,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-date-picker"?(n(),d(F,{key:4,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-date-time-picker"?(n(),d(I,{key:5,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-select"?(n(),d(N,{key:6,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-color-picker"?(n(),d(Z,{key:7,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-switch"?(n(),d(Y,{key:8,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-checkbox"?(n(),d(D,{key:9,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-radio"?(n(),d(M,{key:10,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-textarea"?(n(),d(X,{key:11,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-file-upload"?(n(),d(K,{key:12,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-image-upload"?(n(),d(H,{key:13,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-image-view"?(n(),d(W,{key:14,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-title"?(n(),d(L,{key:15,attribute:t},null,8,["attribute"])):m("",!0),t.type==="qs-divider"?(n(),d(C,{key:16,attribute:t},null,8,["attribute"])):m("",!0)]),_:2},1032,["span"]))),128))]),_:1})]),_:1},8,["label-width","label-position"])}}});export{le as _};
