import{a as _,C as g,S,c as n,w as r,n as l,u as e,g as c,b as p,o as s,h as w,i as y,F as C,f as b}from"./index-f799248c.js";import{u as h}from"./attributeStudio-6a0c7dd6.js";const q=_({__name:"Dashboard2",setup(k){const i=g(),u=S(),m=h(),t=i.screenList.find(({value:a})=>a==="dashboard2");return(a,A)=>{const d=p("el-col"),f=p("el-row");return s(),n(f,{class:l(["qs-screen-row",[e(t).value,{"is-full":e(m).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),w(C,null,y(e(t).span,o=>(s(),n(d,{class:"qs-screen-col",span:o.col,key:o,style:c(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[b("div",{class:l(["qs-component",{"is-folder":e(u).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{q as default};
