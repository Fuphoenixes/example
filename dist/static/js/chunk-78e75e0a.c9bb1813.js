(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78e75e0a"],{"54a10":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fu-page",[n("el-alert",[e._v("\n    引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js.\n    "),n("a",{attrs:{href:"https://github.com/kamranahmedse/driver.js",target:"_blank"}},[e._v("driver.js.")])]),e._v(" "),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.guide(t)}}},[e._v("\n    开始引导\n  ")])],1)},i=[];n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}))},"58ee":function(e,t,n){"use strict";n.r(t);var o=n("8655"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},7320:function(e,t,n){"use strict";n.r(t);var o=n("54a10"),i=n("58ee");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var u=n("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},8655:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("c24c"));n("01d7");var r=o(n("c6b3")),u={name:"guide",data:function(){return{driver:null}},mounted:function(){this.driver=new i.default({doneBtnText:"完成",closeBtnText:"关闭",nextBtnText:"下一步",prevBtnText:"上一步"})},methods:{guide:function(){this.driver.defineSteps((0,r.default)(this.driver)),this.driver.start()}}};t.default=u},c6b3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return[{element:"#breadcrumb-container",popover:{title:"面包屑",description:"指示当前页位置",position:"bottom"}},{element:"#right-menu-set",popover:{title:"用户",description:"用户管理和个性设置",position:"left",offset:10},onNext:function(t){e.preventMove(),t.node.click(),setTimeout((function(){e.moveNext()}),300)}},{element:"#page-set",popover:{title:"页面设置",description:"布局和页面相关设置",position:"left"}},{element:"#tags-view-container",popover:{title:"页签",description:"您访问的页面的历史记录",position:"bottom",offset:10},onPrevious:function(t){e.preventMove(),e.isActivated=!1,document.querySelector("#right-menu-set").click(),e.isActivated=!0,t.popover.node.style.display="none",setTimeout((function(){t.popover.node.style.display="block",e.movePrevious()}),300)}},{element:"#hamburger-container",popover:{title:"Hamburger",description:"用来开关侧边栏",position:"top",offset:10}}]},i=o;t.default=i}}]);