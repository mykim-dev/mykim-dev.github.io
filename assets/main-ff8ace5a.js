import{defineComponent as b,ref as g,resolveComponent as t,openBlock as y,createBlock as j,withCtx as o,createVNode as e,createElementVNode as c,normalizeClass as f,unref as h}from"vue";import{d as v,u as U}from"./index-9c0a46b5.js";import{_ as I}from"./qsToolbarItem.vue_vue_type_script_setup_true_lang-214f6d69.js";v("todoList",{state:()=>({todo:[{date:"2024-02-27",category:"Service Mash",subject:"BO 기반 + API 통합 🡺 Service Orchestration"},{date:"2024-02-27",category:"Function 고도화",subject:""},{date:"2024-02-27",category:"UI/UX",subject:"IA 구조 개선(업무의 성격에 따른 IA 구조 재분류 및 통합처리)"},{date:"2024-02-27",category:"UI/UX 개선",subject:"Application Setting 통합 설정",children:[{date:"2024-02-27",category:"UI/UX 추가기능",subject:"Layout - vertical, Horizontal 구성 선택 적용"},{date:"2024-02-27",category:"UI/UX",subject:"테마 - Dark 모드, Primary 색상, 배경색상, 배경 이미지 선택 지정"}]},{date:"2024-02-27",category:"UI/UX",subject:"Attribute 편의성을 고려한 재구성"},{date:"2024-02-27",category:"고도화 진행시 사전 고려사항",subject:""}],name:"Todo List"})});const A={class:"qs-toolbarlist"},w={class:"qs-list"},S={class:"qs-list-item"},V=b({__name:"main",setup(x){const s=U(),l=g(["1"]),n=[{id:1,date:"2024-02-27",category:"Service Mash",subject:"",children:[{id:11,date:"2024-02-27",category:"Service Orchestration",subject:"BO 기반 + API 통합"}]},{id:2,date:"2024-02-27",category:"Function 고도화",subject:"",children:[]},{id:3,date:"2024-02-27",category:"UI/UX",subject:"",children:[{id:31,date:"2024-02-27",category:"IA 구조 개선",subject:"업무의 성격에 따른 IA 구조 재분류 및 통합처리"},{id:35,date:"2024-02-27",category:"통합 설정",subject:"Application Setting (공통 설정)"},{id:36,date:"2024-02-27",category:"",subject:"레이아웃 - vertical, Horizontal"},{id:37,date:"2024-02-27",category:"",subject:"테마 - Dark 모드, Primary 색상, 배경 이미지 선택 지정"},{id:38,date:"2024-02-27",category:"",subject:"컴포넌트 - Folder"},{id:39,date:"2024-02-27",category:"",subject:"로딩 아이콘 설정"}]},{id:4,date:"2024-02-27",category:"고도화 진행시 사전 고려사항",subject:"",children:[]}];return(q,r)=>{const a=t("el-table-column"),i=t("el-table"),d=t("el-collapse-item"),u=t("el-collapse"),p=t("el-col"),_=t("el-row");return y(),j(_,{class:"qs-screen-row",gutter:16},{default:o(()=>[e(p,{class:"qs-screen-col"},{default:o(()=>[c("div",{class:f(["qs-component",{"is-folder":h(s).appComponentType=="folder"}])},[c("div",A,[e(u,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=m=>l.value=m)},{default:o(()=>[e(d,{title:"Todo",name:"1"},{title:o(()=>[e(I)]),default:o(()=>[c("div",w,[c("div",S,[e(i,{data:n,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":""},{default:o(()=>[e(a,{type:"selection",width:"50",align:"center","header-align":"center"}),e(a,{type:"index",label:"No",width:"80",fixed:"",align:"center","header-align":"center"}),e(a,{prop:"category",label:"구분",width:"200",sortable:""}),e(a,{prop:"subject",label:"제목",sortable:""}),e(a,{prop:"date",label:"날짜",width:"150"})]),_:1})])])]),_:1})]),_:1},8,["modelValue"])])],2)]),_:1})]),_:1})}}});export{V as default};
