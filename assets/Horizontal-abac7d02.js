import{a as d,C as g,S,c as n,w as r,n as l,u as e,g as c,b as p,o as s,h as w,i as y,F as C,f as $,e as h}from"./index-e0bebc94.js";import{u as k}from"./attributeStudio-7dd5b3c7.js";import{_ as z}from"./qsListItem.vue_vue_type_script_setup_true_lang-f5d100ff.js";import"./dataList-16be14a4.js";const F=d({__name:"Horizontal",setup(A){const i=g(),m=S(),u=k(),t=i.screenList.find(({value:a})=>a==="horizontal");return(a,B)=>{const f=p("el-col"),_=p("el-row");return s(),n(_,{class:l(["qs-screen-row",[e(t).value,{"is-full":e(u).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:r(()=>[(s(!0),w(C,null,y(e(t).span,o=>(s(),n(f,{class:"qs-screen-col",span:o.col,key:o,style:c(`grid-area: span ${o.row} / span ${o.col};`)},{default:r(()=>[$("div",{class:l(["qs-component",{"is-folder":e(m).componentOutlineType=="folder"}])},[h(z)],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{F as default};
