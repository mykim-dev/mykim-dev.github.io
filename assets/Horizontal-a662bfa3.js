import{a as d,C as g,S,b as n,c as r,w as l,n as c,u as e,g as p,o as s,h as w,i as y,f as C,e as $,F as h}from"./index-a69ea14d.js";import{u as k}from"./attributeStudio-aac8c69f.js";import{_ as z}from"./qsListItem.vue_vue_type_script_setup_true_lang-6b94938e.js";import"./dataList-c1f18df1.js";const F=d({__name:"Horizontal",setup(A){const i=g(),m=S(),u=k(),t=i.screenList.find(({value:a})=>a==="horizontal");return(a,B)=>{const f=n("el-col"),_=n("el-row");return s(),r(_,{class:c(["qs-screen-row",[e(t).value,{"is-full":e(u).screen.config.Full}]]),gutter:10,style:p(`grid-template-rows: repeat(${e(t).template.row}, 1fr);grid-template-columns: repeat(${e(t).template.col}, 1fr);`)},{default:l(()=>[(s(!0),w(h,null,y(e(t).span,o=>(s(),r(f,{class:"qs-screen-col",span:o.col,key:o,style:p(`grid-area: span ${o.row} / span ${o.col};`)},{default:l(()=>[C("div",{class:c(["qs-component",{"is-folder":e(m).componentOutlineType=="folder"}])},[$(z)],2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{F as default};