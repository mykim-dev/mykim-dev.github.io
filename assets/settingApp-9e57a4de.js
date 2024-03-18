import{d as o,r as e}from"./index-a8591786.js";const l=o("SettingApp",{state:()=>({layoutType:e("horizontal"),layoutDarkMode:e(!1),layoutThemeColor:e("green"),layoutThemeBg:e(""),layoutLogoInfo:e({title:"CALS",src:"/img/logo.png",alt:""}),layoutMenuType:e("vertical"),layoutMenuCollapse:e(!1),layoutMainExpand:e(!1),panelPopup:e(!1),panelRight:e(!1),panelBottom:e(!1),headerBanner:e({use:!0,src:"/img/banner-header.png",alt:""}),asideBanner:e({use:!0,src:"/img/banner-aside.png",alt:""}),headerOptionMainExpand:e(!0),headerOptionotification:e({use:!0,activeItem:["Reverse"]}),headerOptionSiteMap:e(!0),headerOptionAppInfo:e({use:!0,activeItem:["Screen","Version"]}),headerOptionLanguage:e({use:!0,activeItem:["ENG","KOR"]}),headerOptionUserInfo:e({use:!0,activeItem:["My","IP","Logout"]}),scale:e(13),spacing:e(8),alpha:e(.8),maskColor:e("rgba(255,255,255,0.8)"),primaryColor:e("#5796ad"),screenFull:e(!1),componentOutlineType:e("basic"),progressIcon:e("basic"),loginLogo:e({use:!0,src:"/img/login-logo.png",alt:""}),loginBanner:e({use:!0,src:"/img/login-banner.png",alt:""}),currentScreen:e("default"),currentComponent:e("form"),menuList:[{id:"10",title:"Home",path:"/",icon:"house",hidden:!1,menus:[]},{id:"20",title:"Screen",path:"/Default",icon:"sliders",hidden:!1,menus:[{id:"200",title:"Default",path:"/Default",icon:"",hidden:!1,menus:[]},{id:"201",title:"Horizontal",path:"/Horizontal",icon:"",hidden:!1,menus:[]},{id:"202",title:"Vertical",path:"/Vertical",icon:"",hidden:!1,menus:[]},{id:"203",title:"Horizontal2",path:"/Horizontal2",icon:"",hidden:!1,menus:[]},{id:"204",title:"Vertical2",path:"/Vertical2",icon:"",hidden:!1,menus:[]},{id:"205",title:"Horizontal3",path:"/Horizontal3",icon:"",hidden:!1,menus:[]},{id:"206",title:"Dashboard",path:"/Dashboard",icon:"",hidden:!1,menus:[]},{id:"207",title:"Dashboard1",path:"/Dashboard1",icon:"",hidden:!1,menus:[]},{id:"208",title:"Dashboard2",path:"/Dashboard2",icon:"",hidden:!1,menus:[]},{id:"209",title:"Dashboard3",path:"/Dashboard3",icon:"",hidden:!1,menus:[]},{id:"210",title:"Dynamic",path:"/Dynamic",icon:"",hidden:!1,menus:[]}]},{id:"30",title:"Component",path:"/Form",icon:"wrench",hidden:!1,menus:[{id:"301",title:"ToolbarForm",path:"/ToolbarForm",icon:"",hidden:!1,menus:[]},{id:"302",title:"ToolbarList",path:"/ToolbarList",icon:"",hidden:!1,menus:[]},{id:"303",title:"Toolbar",path:"/Toolbar",icon:"",hidden:!0,menus:[]}]},{id:"40",title:"Sample",path:"/Component",icon:"hammer",hidden:!1,menus:[{id:"401",title:"Component",path:"/Component",icon:"",hidden:!1,menus:[]},{id:"402",title:"OverlayAction",path:"/OverlayAction",icon:"",hidden:!1,menus:[{id:"4001",title:"depth3",path:"/OverlayAction",icon:"",hidden:!1,menus:[{id:"40001",title:"depth4",path:"/OverlayAction",icon:"",hidden:!1,menus:[]}]}]}]}],tagsList:[{id:"10",title:"main",path:"/"},{id:"20",title:"Dynamic Screen",path:"/Dynamic"},{id:"30",title:"Component",path:"/SetView"},{id:"40",title:"OverlayAction",path:"/OverlayAction"}]}),getters:{},actions:{changeScale(){document.documentElement.style.setProperty("font-size",`${this.scale}px`)},changeSpacing(){document.documentElement.style.setProperty("--qs-layout-padding",`${this.spacing}px`)},changeAlpha(){this.layoutDarkMode?this.maskColor=`rgba(0,0,0,${this.alpha})`:this.maskColor=`rgba(255,255,255,${this.alpha})`,document.documentElement.style.setProperty("--qs-layout-item-background-color",`${this.maskColor}`)},changeMode(){var t,a;this.layoutDarkMode?((t=document.querySelector("html"))==null||t.classList.add("dark"),this.layoutDarkMode=!0):((a=document.querySelector("html"))==null||a.classList.remove("dark"),this.layoutDarkMode=!1),this.changeAlpha()},changeTheme(t){var a,i;this.layoutThemeColor!==t&&((a=document.querySelector("html"))==null||a.classList.remove(this.layoutThemeColor),this.layoutThemeColor=t,(i=document.querySelector("html"))==null||i.classList.add(t))},changeLayout(t){this.layoutType!==t&&(t=="vertical"?(this.layoutType="vertical",this.layoutMenuType="horizontal",this.layoutMenuCollapse=!1):(this.layoutType="horizontal",this.layoutMenuType="vertical",this.layoutMenuCollapse=!1))}}});export{l as S};