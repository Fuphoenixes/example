(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29bc"],{"0PAw":function(t,e,a){"use strict";var n=a("uUvV");a.n(n).a},"N/Br":function(t,e,a){"use strict";var n=a("f3QV");a.n(n).a},f3QV:function(t,e,a){},uUvV:function(t,e,a){},zElz:function(t,e,a){"use strict";a.r(e);var n={name:"app",data:function(){return{tabs:["全部页面","商城首页","商品详情页","商品分类"],tab:"0",tableData:[]}},methods:{tabChange:function(t){var e=t.index;console.log(e)},handleSelectionChange:function(){},add:function(){this.$router.push("/mobile/diy")}}},l=(a("0PAw"),a("N/Br"),a("KHd+")),s=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container app"},[a("el-tabs",{on:{"tab-click":t.tabChange},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,function(e,n){return a("el-tab-pane",{key:n,attrs:{label:e,name:n+""}},[a("el-scrollbar",{style:{height:"calc(100vh - 113px)"}},[a("div",{staticClass:"tabpane"},[a("div",{staticClass:"table-top"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.add}},[t._v("新增页面")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"}},[t._v("删除页面")]),t._v(" "),a("el-button",{attrs:{size:"mini"}},[t._v("启用页面")])],1),t._v(" "),a("el-table",{ref:"multipleTable",refInFor:!0,staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{label:"页面名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"页面类型",prop:"short_code"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-tag",{attrs:{type:"success"}},[t._v(t._s(n.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{staticClass:"app-table-operation",on:{click:function(e){t.set(n)}}},[t._v("设置")])]}}])})],1)],1)])],1)}))],1)},[],!1,null,"07daf8de",null);s.options.__file="index.vue";e.default=s.exports}}]);