import{a as _,C as g,S,c as n,w as l,n as r,u as e,g as c,b as p,o as s,h as w,i as y,f as C,F as b}from"./index-e2ef1894.js";import{u as h}from"./attributeStudio-f0b9592d.js";const q=_({__name:"Dashboard",setup(k){const i=g(),u=S(),m=h(),o=i.screenList.find(({value:a})=>a==="dashboard");return console.log(o),console.log("test"),(a,A)=>{const d=p("el-col"),f=p("el-row");return s(),n(f,{class:r(["qs-screen-row",[e(o).value,{"is-full":e(m).screen.config.Full}]]),gutter:10,style:c(`grid-template-rows: repeat(${e(o).template.row}, 1fr);grid-template-columns: repeat(${e(o).template.col}, 1fr);`)},{default:l(()=>[(s(!0),w(b,null,y(e(o).span,t=>(s(),n(d,{class:"qs-screen-col",span:t.col,key:t,style:c(`grid-area: span ${t.row} / span ${t.col};`)},{default:l(()=>[C("div",{class:r(["qs-component",{"is-folder":e(u).componentOutlineType=="folder"}])},null,2)]),_:2},1032,["span","style"]))),128))]),_:1},8,["class","style"])}}});export{q as default};
