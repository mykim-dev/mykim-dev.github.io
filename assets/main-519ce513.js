import{d as b,a as g,u as y,r as f,b as t,c as j,w as a,o as h,e,f as c,n as v,g as I}from"./index-bb4c6ad0.js";import{u as S}from"./attribute-33c0a2d1.js";import{_ as U}from"./qsToolbarItem.vue_vue_type_script_setup_true_lang-ab76db58.js";b("todoList",{state:()=>({todo:[{date:"2024-02-27",category:"Service Mash",subject:"BO 기반 + API 통합 🡺 Service Orchestration"},{date:"2024-02-27",category:"Function 고도화",subject:""},{date:"2024-02-27",category:"UI/UX",subject:"IA 구조 개선(업무의 성격에 따른 IA 구조 재분류 및 통합처리)"},{date:"2024-02-27",category:"UI/UX 개선",subject:"Application Setting 통합 설정",children:[{date:"2024-02-27",category:"UI/UX 추가기능",subject:"Layout - vertical, Horizontal 구성 선택 적용"},{date:"2024-02-27",category:"UI/UX",subject:"테마 - Dark 모드, Primary 색상, 배경색상, 배경 이미지 선택 지정"}]},{date:"2024-02-27",category:"UI/UX",subject:"Attribute 편의성을 고려한 재구성"},{date:"2024-02-27",category:"고도화 진행시 사전 고려사항",subject:""}],name:"Todo List"})});const w={class:"qs-toolbarlist"},A={class:"qs-list"},x={class:"qs-list-item"},C=g({__name:"main",setup(q){y();const l=S(),s=f(["1"]),i=[{id:1,date:"2024-02-27",category:"Service Mash",subject:"",children:[{id:11,date:"2024-02-27",category:"Service Orchestration",subject:"BO 기반 + API 통합"}]},{id:2,date:"2024-02-27",category:"Function 고도화",subject:"",children:[]},{id:3,date:"2024-02-27",category:"UI/UX",subject:"",children:[{id:31,date:"2024-02-27",category:"IA 구조 개선",subject:"업무의 성격에 따른 IA 구조 재분류 및 통합처리"},{id:35,date:"2024-02-27",category:"통합 설정",subject:"Application Setting (공통 설정)"},{id:36,date:"2024-02-27",category:"",subject:"레이아웃 - vertical, Horizontal"},{id:37,date:"2024-02-27",category:"",subject:"테마 - Dark 모드, Primary 색상, 배경 이미지 선택 지정"},{id:38,date:"2024-02-27",category:"",subject:"컴포넌트 - Folder"},{id:39,date:"2024-02-27",category:"",subject:"로딩 아이콘 설정"}]},{id:4,date:"2024-02-27",category:"고도화 진행시 사전 고려사항",subject:"",children:[]}];return(X,r)=>{const o=t("el-table-column"),n=t("el-table"),d=t("el-collapse-item"),u=t("el-collapse"),p=t("el-col"),_=t("el-row");return h(),j(_,{class:"qs-screen-row",gutter:10,style:{"grid-template-rows":"repeat(24, 1fr)","grid-template-columns":"repeat(24, 1fr)"}},{default:a(()=>[e(p,{class:"qs-screen-col",style:{"grid-area":"span 24 / span 24"}},{default:a(()=>[c("div",{class:v(["qs-component",{"is-folder":I(l).sampleScreenInfo.screenFull}])},[c("div",w,[e(u,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=m=>s.value=m)},{default:a(()=>[e(d,{title:"Todo",name:"1"},{title:a(()=>[e(U)]),default:a(()=>[c("div",A,[c("div",x,[e(n,{data:i,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":""},{default:a(()=>[e(o,{type:"selection",width:"50",align:"center","header-align":"center"}),e(o,{type:"index",label:"No",width:"80",fixed:"",align:"center","header-align":"center"}),e(o,{prop:"category",label:"구분",width:"200",sortable:""}),e(o,{prop:"subject",label:"제목",sortable:""}),e(o,{prop:"date",label:"날짜",width:"150"})]),_:1})])])]),_:1})]),_:1},8,["modelValue"])])],2)]),_:1})]),_:1})}}});export{C as default};
