import{a as d,C as g,S,c as n,w as r,n as l,u as e,g as c,b as p,o as s,h as w,i as y,f as C,e as $,F as h}from"./index-9915e011.js";import{u as k}from"./attributeStudio-4bb01618.js";import{_ as z}from"./qsListItem.vue_vue_type_script_setup_true_lang-a89ec37b.js";import"./dataList-8dc52c13.js";const F=d({__name:"Horizontal",setup(A){const i=g(),m=S(),u=k(),t=i.screenList.find(({value:a})=>a==="horizontal");return(a,B)=>{const f=p("el-col"),_=p("el-row");return s(),n(_,{class:l(["qs-screen-row",[e(t).value,{"is-full":e(u).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),w(h,null,y(e(t).span,o=>(s(),n(f,{class:"qs-screen-col",span:o.col,key:o,style:c(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[C("div",{class:l(["qs-component",{"is-folder":e(m).componentOutlineType=="folder"}])},[$(z)],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{F as default};
