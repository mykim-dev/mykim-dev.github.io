import{a as h,r as d,h as _,f as e,F as w,i as v,e as p,g as b,b as g,o as u,p as f,l as y,j as q,_ as V}from"./index-e2ef1894.js";const s=t=>(f("data-v-dfe7eb60"),t=t(),y(),t),x={class:"qs-passwordChange"},L=s(()=>e("div",{class:"qs-passwordChange__header"},[e("h1",null,"비밀번호 변경"),e("p",null,"변경할 비밀번호를 아래에 입력해 주세요.")],-1)),C={class:"qs-passwordpolicy"},P=s(()=>e("p",{class:"img"},[e("img",{src:""})],-1)),S=s(()=>e("p",null,[q("password"),e("span",null," : PolicyValue")],-1)),k=[P,S],I={class:"qs-form"},M={class:"qs-password"},B=s(()=>e("label",{class:"qs-password__label"},"비밀번호",-1)),E={class:"qs-password"},N=s(()=>e("label",{class:"qs-password__label"},"비밀번호 확인",-1)),$=s(()=>e("div",{class:"qs-passwordChange__footer"},[e("button",{class:"btn btn-cancel"}," 취소 "),e("button",{class:"btn btn-ok"}," 확인 ")],-1)),z=h({__name:"test",setup(t){const i=d(""),c=d(""),n=d("");function l(){/Mobi/i.test(window.navigator.userAgent)?(document.body.classList.add("mobile"),window.screen.orientation.angle===0?document.body.classList.remove("landscape"):document.body.classList.add("landscape"),n.value=`${screen.height-270}px`):(document.body.classList.remove("mobile"),n.value=`${window.innerHeight-270}px`)}return l(),window.addEventListener("resize",l),window.matchMedia("(orientation:portrait)").addEventListener("change",l),(m,a)=>{const r=g("el-input");return u(),_("div",x,[L,e("div",{class:"qs-passwordChange__body",style:b(`max-height: ${n.value}`)},[e("ul",C,[(u(),_(w,null,v(10,o=>e("li",{key:o},k)),64))]),e("div",I,[e("div",M,[B,p(r,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=o=>i.value=o),class:"qs-password__input",type:"password",placeholder:"Please input"},null,8,["modelValue"])]),e("div",E,[N,p(r,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=o=>c.value=o),class:"qs-password__input",type:"password",placeholder:"Please input"},null,8,["modelValue"])])])],4),$])}}});const H=V(z,[["__scopeId","data-v-dfe7eb60"]]);export{H as default};
