import{a as s,b as a,o as d,h as c,e,w as n,f as p,k as _,j as m,u as h}from"./index-9b3b204f.js";import{L as u}from"./dataList-d108c6aa.js";const b={class:"qs-list-item"},f={class:"qs-button"},v=s({__name:"qsListItem",setup(g){const l=u();return(w,o)=>{const t=a("el-table-column"),i=a("el-button"),r=a("el-table");return d(),c("div",b,[e(r,{data:h(l).listItems,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:n(()=>[e(t,{type:"selection",width:"60",align:"center","header-align":"center"}),e(t,{type:"index",width:"60",label:"No",fixed:"",align:"center","header-align":"center"}),e(t,{prop:"date",width:"60",label:"Date"}),e(t,{prop:"name",width:"60",label:"Name",sortable:""}),e(t,{prop:"amount",width:"60",label:"Amount",align:"right","header-align":"center"}),e(t,{prop:"fixed",label:"fixed",fixed:"right",align:"center","header-align":"center"},{default:n(()=>[p("div",f,[e(i,{link:"",type:"primary",onClick:o[0]||(o[0]=_(()=>{},["prevent"]))},{default:n(()=>[m("Remove")]),_:1})])]),_:1})]),_:1},8,["data"])])}}});export{v as _};
