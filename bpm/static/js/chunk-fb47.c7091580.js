(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fb47"],{"5ZXI":function(e,t,a){"use strict";a.r(t);var l=a("xKc1"),n=a.n(l),o=[{index:1,img:"http://www.haoqiwang.com.cn/attachment/images/2/2019/05/bl9tluXenTvuzE9VPgPSn9AP5phanN.jpg",name:"测试套餐1",price:"￥0.12",status:"启用"},{index:2,img:"http://www.haoqiwang.com.cn/attachment/images/2/2019/05/kMsNmmSe81rI11KpmBpLNeM1R1mmM1.png",name:"测试套餐2",price:"￥0.12",status:"启用"}],i={name:"goods_label",data:function(){return{searchQuery:{enabled:"0"},multipleSelection:[],tableData:o}},methods:{handleSelectionChange:function(e){this.multipleSelection=e},onSearch:function(){},getErweima:function(e){return new n.a({value:e,background:"white",foreground:"black",level:"H",padding:0,size:110}).toDataURL()},onCopy:function(){this.$message.success("复制成功")},onError:function(){this.$message.error("复制失败，您的游览器暂不支持自动复制，请手动复制！")}}},r=(a("8q7t"),a("KHd+")),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"worktile-table"},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.$router.push("/sale/package/add")}}},[e._v("新增套餐")]),e._v(" "),a("el-button-group",{directives:[{name:"show",rawName:"v-show",value:e.multipleSelection.length>0,expression:"multipleSelection.length>0"}]},[a("el-button",{attrs:{size:"small",icon:"el-icon-circle-check"}},[e._v("上架")]),e._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-remove-outline"}},[e._v("下架")]),e._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-delete"}},[e._v("删除")])],1),e._v(" "),a("el-form",{staticStyle:{float:"right"},attrs:{inline:!0,model:e.searchQuery,size:"small"}},[a("el-form-item",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入关键词"},model:{value:e.searchQuery.alias,callback:function(t){e.$set(e.searchQuery,"alias",t)},expression:"searchQuery.alias"}},[a("el-select",{attrs:{slot:"prepend"},slot:"prepend",model:{value:e.searchQuery.enabled,callback:function(t){e.$set(e.searchQuery,"enabled",t)},expression:"searchQuery.enabled"}},[a("el-option",{attrs:{label:"全部套餐",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"进行中",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"未开始",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"已结束",value:"3"}})],1),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.onSearch},slot:"append"})],1)],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{label:"排序",prop:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"缩略图",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("img",{staticClass:"table-img",attrs:{src:t.img,alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"套餐名称",prop:"name","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"价格",prop:"price"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-tag",{attrs:{size:"small"}},[e._v(e._s(l.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-tooltip",{attrs:{effect:"light",placement:"top",content:"编辑"}},[a("el-button",{attrs:{icon:"el-icon-edit",size:"small",circle:""}})],1),e._v(" "),a("el-tooltip",{attrs:{effect:"light",placement:"top",content:"删除"}},[a("el-button",{attrs:{icon:"el-icon-delete",size:"small",circle:""}})],1),e._v(" "),a("el-tooltip",{attrs:{effect:"light",placement:"top",content:"复制链接"}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:l.img,expression:"row.img",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{icon:"iconfont icon-lianjie",size:"small",circle:""}})],1),e._v(" "),a("el-tooltip",{attrs:{effect:"light",placement:"top"}},[a("div",{staticStyle:{"font-size":"0"},attrs:{slot:"content"},slot:"content"},[a("img",{attrs:{src:e.getErweima(l.img)}})]),e._v(" "),a("el-button",{attrs:{icon:"iconfont icon-erweima",size:"small",circle:""}})],1)]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:2,background:""},on:{"current-change":e.handleCurrentChange}})],1)])},[],!1,null,"cf9ff04e",null);s.options.__file="index.vue";t.default=s.exports},"8q7t":function(e,t,a){"use strict";var l=a("WndB");a.n(l).a},WndB:function(e,t,a){}}]);