import{defineComponent as u,resolveComponent as o,openBlock as n,createBlock as t,normalizeClass as a,withCtx as r,createElementBlock as _,Fragment as m,renderList as i,createElementVNode as d,unref as f}from"vue";import{u as C}from"./index-9c0a46b5.js";const q=u({__name:"Dashboard",setup(g){const p=C(),e={screenType:"dashboard",screenFull:!0,screenList:[{span:8},{span:8},{span:8},{span:12},{span:6},{span:6},{span:6},{span:6},{span:12},{span:12},{span:12},{span:12},{span:12},{span:12}]};return(h,k)=>{const l=o("el-col"),c=o("el-row");return n(),t(c,{class:a(["qs-screen-row",[e.screenType,{"is-full":e.screenFull}]]),gutter:16},{default:r(()=>[(n(!0),_(m,null,i(e.screenList,s=>(n(),t(l,{class:"qs-screen-col",span:s.span,key:s},{default:r(()=>[d("div",{class:a(["qs-component",{"is-folder":f(p).appComponentType=="folder"}])},null,2)]),_:2},1032,["span"]))),128))]),_:1},8,["class"])}}});export{q as default};