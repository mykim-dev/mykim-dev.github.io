import{a as d,h as S,u as g,b as n,c as r,w as l,n as c,g as e,i as p,o,j as w,k as y,F as C,f as k}from"./index-0e7e4e8b.js";import{u as v}from"./attribute-c41b90c6.js";const q=d({__name:"Vertical2",setup(A){const i=S(),u=g(),m=v(),t=i.screenList.find(({value:a})=>a==="vertical2");return(a,B)=>{const f=n("el-col"),_=n("el-row");return o(),r(_,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(m).sampleScreenInfo.screenFull}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:l(()=>[(o(!0),w(C,null,y(e(t).span,s=>(o(),r(f,{class:"qs-screen-col",span:s.col,key:s,style:p(`grid-area: span ${s.row} / span ${s.col};`)},{default:l(()=>[k("div",{class:c(["qs-component",{"is-folder":e(u).appComponentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{q as default};
