import{a as d,h as S,u as g,b as a,c as r,w as l,n as c,g as e,i as p,o as s,j as w,k as y,F as C,f as k}from"./index-caba60ff.js";import{u as h}from"./attribute-f6003d08.js";const q=d({__name:"Horizontal2",setup(z){const i=S(),u=g(),m=h(),t=i.screenList.find(({value:n})=>n==="horizontal2");return(n,A)=>{const f=a("el-col"),_=a("el-row");return s(),r(_,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(m).sampleScreenInfo.screenFull}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:l(()=>[(s(!0),w(C,null,y(e(t).span,o=>(s(),r(f,{class:"qs-screen-col",span:o.col,key:o,style:p(`grid-area: span ${o.row} / span ${o.col};`)},{default:l(()=>[k("div",{class:c(["qs-component",{"is-folder":e(u).appComponentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{q as default};
