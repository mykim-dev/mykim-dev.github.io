import{a as _,h as S,u as g,b as n,c as l,w as r,n as c,g as e,i as p,o,j as w,k as y,F as C,f as k}from"./index-bb4c6ad0.js";import{u as A}from"./attribute-33c0a2d1.js";const v=_({__name:"Default",setup(B){const u=S(),i=g(),m=A(),t=u.screenList.find(({value:a})=>a==="default");return(a,$)=>{const f=n("el-col"),d=n("el-row");return o(),l(d,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(m).sampleScreenInfo.screenFull}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(o(!0),w(C,null,y(e(t).span,s=>(o(),l(f,{class:"qs-screen-col",span:s.col,key:s,style:p(`grid-area: span ${s.row} / span ${s.col};`)},{default:r(()=>[k("div",{class:c(["qs-component",{"is-folder":e(i).appComponentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{v as default};
