import{a as d,C as g,S,b as n,c as l,w as r,n as c,u as e,g as p,o as s,h as w,i as y,f as C,F as k}from"./index-a69ea14d.js";import{u as v}from"./attributeStudio-aac8c69f.js";const h=d({__name:"Vertical",setup(A){const i=g(),u=S(),m=v(),t=i.screenList.find(({value:a})=>a==="vertical");return(a,B)=>{const f=n("el-col"),_=n("el-row");return s(),l(_,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(m).screen.config.Full}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),w(k,null,y(e(t).span,o=>(s(),l(f,{class:"qs-screen-col",span:o.col,key:o,style:p(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[C("div",{class:c(["qs-component",{"is-folder":e(u).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{h as default};
