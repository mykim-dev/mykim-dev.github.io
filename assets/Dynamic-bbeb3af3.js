import{a as _,C as g,S as y,c as n,w as r,n as l,u as e,g as c,b as p,o as s,h as S,i as w,f as C,F as k}from"./index-fab82f15.js";import{u as A}from"./attributeStudio-7de16404.js";/* empty css                                                                    */import"./dataList-9f9539be.js";const x=_({__name:"Dynamic",setup(B){const i=g(),m=y(),u=A(),t=i.screenList.find(({value:a})=>a==="dynamic");return(a,$)=>{const f=p("el-col"),d=p("el-row");return s(),n(d,{class:l(["qs-screen-row",[e(t).value,{"is-full":e(u).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),S(k,null,w(e(t).span,o=>(s(),n(f,{class:"qs-screen-col",span:o.col,key:o,style:c(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[C("div",{class:l(["qs-component",{"is-folder":e(m).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{x as default};
