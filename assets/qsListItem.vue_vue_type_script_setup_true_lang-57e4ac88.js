import{a as i,b as a,o as c,h as d,e,w as n,f as p,m,l as _,g as h}from"./index-993cf29a.js";import{u}from"./listData-76d5b455.js";const b={class:"qs-list-item"},f={class:"qs-button"},y=i({__name:"qsListItem",setup(g){const l=u();return(x,o)=>{const t=a("el-table-column"),r=a("el-button"),s=a("el-table");return c(),d("div",b,[e(s,{data:h(l).listItems,"highlight-current-row":"",border:"",style:{width:"100%",height:"100%"}},{default:n(()=>[e(t,{type:"selection",width:"60",align:"center","header-align":"center"}),e(t,{type:"index",label:"No",fixed:"",width:"60",align:"center","header-align":"center"}),e(t,{prop:"date",label:"Date"}),e(t,{prop:"name",label:"Name",sortable:""}),e(t,{prop:"amount",label:"Amount",align:"right","header-align":"center"}),e(t,{prop:"fixed",label:"fixed",fixed:"right",align:"center","header-align":"center"},{default:n(()=>[p("div",f,[e(r,{link:"",type:"primary",onClick:o[0]||(o[0]=m(()=>{},["prevent"]))},{default:n(()=>[_("Remove")]),_:1})])]),_:1})]),_:1},8,["data"])])}}});export{y as _};
