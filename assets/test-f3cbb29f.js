import{a as w,r as d,h as r,f as s,F as h,i as v,A as _,B as p,g as m,o as u,p as b,l as g,j as f,_ as y}from"./index-bc15b724.js";const e=o=>(b("data-v-2c9960f3"),o=o(),g(),o),q={class:"qs-passwordChange"},x=e(()=>s("div",{class:"qs-passwordChange__header"},[s("h1",null,"비밀번호 변경"),s("p",null,"변경할 비밀번호를 아래에 입력해 주세요.")],-1)),L={class:"qs-passwordpolicy"},C=e(()=>s("p",{class:"img"},[s("img",{src:""})],-1)),H=e(()=>s("p",null,[f("password"),s("span",null," : PolicyValue")],-1)),P=[C,H],S={class:"qs-form"},V={class:"qs-password"},k=e(()=>s("label",{class:"qs-password__label"},"비밀번호",-1)),B={class:"qs-password"},I=e(()=>s("label",{class:"qs-password__label"},"비밀번호 확인",-1)),M=e(()=>s("div",{class:"qs-passwordChange__footer"},[s("button",{class:"btn btn-cancel"},"취소"),s("button",{class:"btn btn-ok"},"확인")],-1)),A=w({__name:"test",setup(o){const l=d(""),c=d(""),n=d(/Mobi/i.test(window.navigator.userAgent)?`${screen.availHeight-220}`:`${window.innerHeight-290}`);function i(){/Mobi/i.test(window.navigator.userAgent)?(document.body.classList.remove("web"),document.body.classList.add("mobile"),n.value=screen.availHeight-200):(document.body.classList.remove("mobile"),document.body.classList.add("web"),n.value=window.innerHeight-290)}return i(),window.addEventListener("resize",i),window.matchMedia("(orientation:portrait)").addEventListener("change",i),(E,a)=>(u(),r("div",q,[x,s("div",{class:"qs-passwordChange__body",style:m(`max-height: ${n.value}px;`)},[s("ul",L,[(u(),r(h,null,v(20,t=>s("li",{key:t},P)),64))]),s("div",S,[s("div",V,[k,_(s("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),class:"qs-password__input",type:"password",placeholder:"Please input"},null,512),[[p,l.value]])]),s("div",B,[I,_(s("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>c.value=t),class:"qs-password__input",type:"password",placeholder:"Please input"},null,512),[[p,c.value]])])])],4),M]))}});const z=y(A,[["__scopeId","data-v-2c9960f3"]]);export{z as default};