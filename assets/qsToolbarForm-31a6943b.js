import{defineComponent as f,ref as d,resolveComponent as t,openBlock as v,createBlock as q,withCtx as e,createVNode as o,createElementVNode as l,normalizeClass as C,unref as n}from"vue";import{u as V}from"./index-9c0a46b5.js";import{u as b}from"./formData-cdd04708.js";import{_ as w}from"./qsToolbarItem.vue_vue_type_script_setup_true_lang-214f6d69.js";import{_ as S}from"./qsFormItem.vue_vue_type_script_setup_true_lang-82c176f5.js";/* empty css                                                                    */const g={class:"qs-toolbarform"},x={class:"qs-form"},y=f({__name:"qsToolbarForm",setup(N){const r=V(),c=b(),s=d(["1"]);return(h,a)=>{const m=t("el-collapse-item"),_=t("el-collapse"),p=t("el-col"),i=t("el-row");return v(),q(i,{class:"qs-screen-row default",gutter:16},{default:e(()=>[o(p,{class:"qs-screen-col"},{default:e(()=>[l("div",{class:C(["qs-component",{"is-folder":n(r).appComponentType=="folder"}])},[l("div",g,[o(_,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value=u)},{default:e(()=>[o(m,{title:"",name:"1"},{title:e(()=>[o(w)]),default:e(()=>[l("div",x,[o(S,{attribute:n(c)},null,8,["attribute"])])]),_:1})]),_:1},8,["modelValue"])])],2)]),_:1})]),_:1})}}});export{y as default};