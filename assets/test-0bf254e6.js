import{d as w,r as c,c as r,a as s,F as v,b,w as _,v as p,n as m,o as u,p as g,e as f,f as y}from"./index-acce4d94.js";const t=e=>(g("data-v-d97b496b"),e=e(),f(),e),q={class:"qs-passwordChange"},x=t(()=>s("div",{class:"qs-passwordChange__header"},[s("h1",null,"비밀번호 변경"),s("p",null,"변경할 비밀번호를 아래에 입력해 주세요.")],-1)),k={class:"qs-passwordpolicy"},C=t(()=>s("p",{class:"img"},[s("img",{src:""})],-1)),L=t(()=>s("p",null,[y("password"),s("span",null," : PolicyValue")],-1)),M=[C,L],P={class:"qs-form"},V={class:"qs-password"},I=t(()=>s("label",{class:"qs-password__label"},"비밀번호",-1)),S={class:"qs-password"},B=t(()=>s("label",{class:"qs-password__label"},"비밀번호 확인",-1)),E=t(()=>s("div",{class:"qs-passwordChange__footer"},[s("button",{class:"btn btn-cancel"}," 취소 "),s("button",{class:"btn btn-ok"}," 확인 ")],-1)),z=w({__name:"test",setup(e){const d=c(""),o=c(""),a=c("");function n(){/Mobi/i.test(window.navigator.userAgent)?(document.body.classList.add("mobile"),a.value=screen.height-180):(document.body.classList.remove("mobile"),a.value=window.innerHeight-280)}return n(),window.addEventListener("resize",n),window.matchMedia("(orientation:portrait)").addEventListener("change",n),(h,i)=>(u(),r("div",q,[x,s("div",{class:"qs-passwordChange__body",style:m(`max-height: ${a.value}px;`)},[s("ul",k,[(u(),r(v,null,b(10,l=>s("li",{key:l},M)),64))]),s("div",P,[s("div",V,[I,_(s("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>d.value=l),class:"qs-password__input",type:"password",placeholder:"Please input"},null,512),[[p,d.value]])]),s("div",S,[B,_(s("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>o.value=l),class:"qs-password__input",type:"password",placeholder:"Please input"},null,512),[[p,o.value]])])])],4),E]))}});const F=(e,d)=>{const o=e.__vccOpts||e;for(const[a,n]of d)o[a]=n;return o},N=F(z,[["__scopeId","data-v-d97b496b"]]);export{N as default};