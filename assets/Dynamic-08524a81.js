import{a as _,h as S,u as y,b as a,c as r,w as l,n as c,g as e,i as p,o as s,j as g,k as w,F as C,f as k}from"./index-0e7e4e8b.js";import{u as A}from"./attribute-c41b90c6.js";/* empty css                                                                    */import"./listData-5bbb5657.js";const F=_({__name:"Dynamic",setup(B){const i=S(),m=y(),u=A(),t=i.screenList.find(({value:n})=>n==="dynamic");return(n,$)=>{const f=a("el-col"),d=a("el-row");return s(),r(d,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(u).sampleScreenInfo.screenFull}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:l(()=>[(s(!0),g(C,null,w(e(t).span,o=>(s(),r(f,{class:"qs-screen-col",span:o.col,key:o,style:p(`grid-area: span ${o.row} / span ${o.col};`)},{default:l(()=>[k("div",{class:c(["qs-component",{"is-folder":e(m).appComponentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{F as default};
