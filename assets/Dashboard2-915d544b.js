import{a as _,C as g,S,b as n,c as r,w as l,n as c,u as e,g as p,o as s,h as w,i as y,f as C,F as b}from"./index-a69ea14d.js";import{u as h}from"./attributeStudio-aac8c69f.js";const q=_({__name:"Dashboard2",setup(k){const i=g(),u=S(),m=h(),t=i.screenList.find(({value:a})=>a==="dashboard2");return(a,A)=>{const d=n("el-col"),f=n("el-row");return s(),r(f,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(m).screen.config.Full}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:l(()=>[(s(!0),w(b,null,y(e(t).span,o=>(s(),r(d,{class:"qs-screen-col",span:o.col,key:o,style:p(`grid-area: span ${o.row} / span ${o.col};`)},{default:l(()=>[C("div",{class:c(["qs-component",{"is-folder":e(u).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{q as default};