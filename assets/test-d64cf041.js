import{a as m,r as l,h as p,e as d,w as v,b as u,o as h,f as s,F as g,i as b,p as q,l as f,j as V,_ as y}from"./index-e2d0ac93.js";const e=t=>(q("data-v-492de9c2"),t=t(),f(),t),x={class:"qs-passwordChange"},C=e(()=>s("div",{class:"qs-passwordChange__header"},[s("h1",null,"비밀번호 변경"),s("p",null,"변경할 비밀번호를 아래에 입력해 주세요.")],-1)),P={class:"qs-passwordpolicy"},k=e(()=>s("p",{class:"img"},[s("img",{src:""})],-1)),I=e(()=>s("p",null,[V("password"),s("span",null," : PolicyValue")],-1)),S=[k,I],B={class:"qs-form"},E={class:"qs-password"},L=e(()=>s("label",{class:"qs-password__label"},"비밀번호",-1)),M={class:"qs-password"},N=e(()=>s("label",{class:"qs-password__label"},"비밀번호 확인",-1)),A=e(()=>s("div",{class:"qs-passwordChange__footer"},[s("button",{class:"btn btn-cancel"}," 취소 "),s("button",{class:"btn btn-ok"}," 확인 ")],-1)),F=m({__name:"test",setup(t){const c=l(""),_=l("");let n=function(){const i=l(/Mobi/i.test(window.navigator.userAgent)?`${screen.height-220}px`:"60vh");console.log(/Mobi/i.test(window.navigator.userAgent)),console.log(i)};return n(),window.addEventListener("resize",n),window.matchMedia("(orientation:portrait)").addEventListener("change",n),(i,a)=>{const r=u("el-input"),w=u("el-scrollbar");return h(),p("div",x,[C,d(w,{class:"qs-passwordChange__body","wrap-style":"max-height: 60vh"},{default:v(()=>[s("ul",P,[(h(),p(g,null,b(10,o=>s("li",{key:o},S)),64))]),s("div",B,[s("div",E,[L,d(r,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=o=>c.value=o),class:"qs-password__input",type:"password",placeholder:"Please input"},null,8,["modelValue"])]),s("div",M,[N,d(r,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=o=>_.value=o),class:"qs-password__input",type:"password",placeholder:"Please input"},null,8,["modelValue"])])])]),_:1}),A])}}});const z=y(F,[["__scopeId","data-v-492de9c2"]]);export{z as default};
