import{a as d,C as g,S,c as n,w as l,n as r,u as e,g as c,b as p,o as s,h as w,i as y,f as C,F as h}from"./index-7939678c.js";import{u as k}from"./attributeStudio-f205cf5f.js";const b=d({__name:"Horizontal2",setup(z){const i=g(),u=S(),m=k(),t=i.screenList.find(({value:a})=>a==="horizontal2");return(a,A)=>{const f=p("el-col"),_=p("el-row");return s(),n(_,{class:r(["qs-screen-row",[e(t).value,{"is-full":e(m).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:l(()=>[(s(!0),w(h,null,y(e(t).span,o=>(s(),n(f,{class:"qs-screen-col",span:o.col,key:o,style:c(`grid-area: span ${o.row} / span ${o.col};`)},{default:l(()=>[C("div",{class:r(["qs-component",{"is-folder":e(u).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{b as default};