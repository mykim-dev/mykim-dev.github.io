import{a as d,C as g,S,b as n,c as l,w as r,n as c,u as e,g as p,o as s,h as w,i as y,f as C,F as h}from"./index-a69ea14d.js";import{u as k}from"./attributeStudio-aac8c69f.js";const b=d({__name:"Horizontal3",setup(z){const i=g(),u=S(),m=k(),t=i.screenList.find(({value:a})=>a==="horizontal3");return(a,A)=>{const f=n("el-col"),_=n("el-row");return s(),l(_,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(m).screen.config.Full}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),w(h,null,y(e(t).span,o=>(s(),l(f,{class:"qs-screen-col",span:o.col,key:o,style:p(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[C("div",{class:c(["qs-component",{"is-folder":e(u).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{b as default};
