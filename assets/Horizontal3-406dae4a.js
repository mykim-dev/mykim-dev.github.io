import{C as d}from"./common-d646e051.js";import{S as g}from"./settingApp-213b837a.js";import{u as S}from"./attributeStudio-9f52d8dd.js";import{a as w,c as n,w as r,n as l,u as e,g as c,b as p,o as s,h as y,i as C,F as h,f as k}from"./index-e2d0ac93.js";const v=w({__name:"Horizontal3",setup(z){const i=d(),m=g(),u=S(),t=i.screenList.find(({value:a})=>a==="horizontal3");return(a,A)=>{const f=p("el-col"),_=p("el-row");return s(),n(_,{class:l(["qs-screen-row",[e(t).value,{"is-full":e(u).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),y(h,null,C(e(t).span,o=>(s(),n(f,{class:"qs-screen-col",span:o.col,key:o,style:c(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[k("div",{class:l(["qs-component",{"is-folder":e(m).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{v as default};