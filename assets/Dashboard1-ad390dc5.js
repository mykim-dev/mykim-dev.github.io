import{defineComponent as u,resolveComponent as o,openBlock as n,createBlock as t,normalizeClass as r,withCtx as l,createElementBlock as _,Fragment as m,renderList as i,createElementVNode as d,unref as f}from"vue";import{u as C}from"./index-9c0a46b5.js";const q=u({__name:"Dashboard1",setup(g){const a=C(),e={screenType:"dashboard1",screenFull:!0,screenList:[{span:8},{span:8},{span:8},{span:8},{span:8},{span:12},{span:12}]};return(h,k)=>{const c=o("el-col"),p=o("el-row");return n(),t(p,{class:r(["qs-screen-row",[e.screenType,{"is-full":e.screenFull}]]),gutter:16},{default:l(()=>[(n(!0),_(m,null,i(e.screenList,s=>(n(),t(c,{class:"qs-screen-col",span:s.span,key:s},{default:l(()=>[d("div",{class:r(["qs-component",{"is-folder":f(a).appComponentType=="folder"}])},null,2)]),_:2},1032,["span"]))),128))]),_:1},8,["class"])}}});export{q as default};