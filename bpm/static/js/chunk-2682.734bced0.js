(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2682"],{"1X++":function(e,t,a){},CP8o:function(e,t,a){"use strict";var n=a("1X++");a.n(n).a},DXXL:function(e,t,a){"use strict";var n=a("MT78"),s=a.n(n),i={_handleResize:function(e){var t=(e.target||e.srcElement).__resizeTrigger__;if(t){var a=t.__z_resizeListeners;if(a)for(var n=a.length,s=0;s<n;s++){var i=a[s],l=i.handler,r=i.context;l.apply(r,[e])}}},_removeHandler:function(e,t,a){var n=e.__z_resizeListeners;if(n)for(var s=n.length,i=0;i<s;i++){var l=n[i];if(l.handler===t&&l.context===a)return void n.splice(i,1)}},_createResizeTrigger:function(e){var t=document.createElement("object");return t.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;"),t.onload=i._handleObjectLoad,t.type="text/html",e.appendChild(t),t.data="about:blank",t},_handleObjectLoad:function(e){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",i._handleResize)}};document.attachEvent?(i.on=function(e,t,a){var n=e.__z_resizeListeners;n||(n=[],e.__z_resizeListeners=n,e.__resizeTrigger__=e,e.attachEvent("onresize",i._handleResize)),n.push({handler:t,context:a})},i.off=function(e,t,a){var n=e.__z_resizeListeners;n&&(i._removeHandler(e,t,a),0===n.length&&(e.detachEvent("onresize",i._handleResize),delete e.__z_resizeListeners))}):(i.on=function(e,t,a){var n=e.__z_resizeListeners;if(!n){n=[],e.__z_resizeListeners=n,"static"===getComputedStyle(e,null).position&&(e.style.position="relative");var s=i._createResizeTrigger(e);e.__resizeTrigger__=s,s.__resizeElement__=e}n.push({handler:t,context:a})},i.off=function(e,t,a){var n=e.__z_resizeListeners;if(n&&(i._removeHandler(e,t,a),0===n.length)){var s=e.__resizeTrigger__;s&&(s.contentDocument&&s.contentDocument.defaultView.removeEventListener("resize",i._handleResize),e.removeChild(s),delete e.__resizeTrigger__),delete e.__z_resizeListeners}});var l=i,r={props:{height:{type:Number,default:400},option:{type:Object,required:!0}},watch:{option:{handler:function(e){var t=this;this.$nextTick(function(){t.setOption(e)})},deep:!0}},mounted:function(){this.myChart=s.a.init(this.$el),this.setOption(this.option),l.on(this.$el,this.resize)},methods:{setOption:function(e){this.myChart.setOption(e)},resize:function(){this.myChart&&this.myChart.resize()}},beforeDestroy:function(){l.off(this.$el,this.resize)}},o=(a("CP8o"),a("KHd+")),c=Object(o.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{height:this.height+"px"}})},[],!1,null,"01758ffc",null);c.options.__file="index.vue";t.a=c.exports},HvVP:function(e,t,a){},UFSp:function(e,t,a){"use strict";var n=a("HvVP");a.n(n).a},k7yO:function(e,t,a){},lAbF:function(e,t,a){"use strict";a.r(t);var n=a("MQ60"),s=a.n(n),i=a("DXXL"),l=[{name:"护肝药A",num:1,price:"0.01"},{name:"德国进口Rapunzel长发乐烹公主婴儿童字母面条蔬菜宝宝营养辅食品",num:1,price:"0.01"},{name:"测试",num:1,price:"0.01"},{name:"2019新款大码女装遮肚子雪纺衫女七分袖很仙连衣裙上衣洋气打底衫",num:1,price:"0.01"},{name:"测试商品",num:1,price:"0.01"},{name:"闺蜜情侣装2019新款夏韩版加肥大码宽松短袖T恤女网红显瘦打底衫",num:1,price:"0.01"},{name:"安佰信叶酸铁片",num:1,price:"0.01"},{name:"安佰信叶酸铁片",num:1,price:"0.01"},{name:"安佰信叶酸铁片",num:1,price:"0.01"},{name:"安佰信叶酸铁片",num:1,price:"0.01"}],r={name:"dashboard",components:{Draggable:s.a,Echarts:i.a},data:function(){return{tab1:"first",tab2:"first",tableData:l,option:{tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},legend:{data:["交易量","成交量","交易额","成交额"]},xAxis:{boundaryGap:!1,data:["2019-05-13","2019-05-14","2019-05-15","2019-05-16","2019-05-17","2019-05-18","2019-05-19"]},yAxis:{},series:[{name:"交易量",type:"line",data:[0,1,4,3,1,1,1],symbol:"triangle",markLine:{data:[{type:"average",name:"平均值"}]}},{name:"成交量",type:"line",data:[0,1,1,1,1,1,1],symbol:"diamond",markLine:{data:[{type:"average",name:"平均值"}]}},{name:"交易额",type:"line",data:[0,.1,30.51,2.22,.01,.01,.01],symbol:"circle",markPoint:{data:[{type:"max",name:"最大值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"成交额",type:"line",data:[0,.1,.1,.1,.01,.01,.01],symbol:"rect",markPoint:{data:[{type:"max",name:"最大值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}}},methods:{handleTabClick1:function(){},handleTabClick2:function(){}}},o=(a("s0n/"),a("UFSp"),a("KHd+")),c=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page dashboard"},[a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{span:24,md:8}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"header"},[a("i",{staticClass:"iconfont icon-shangcheng"}),e._v(" 商城信息")]),e._v(" "),a("el-link",{staticStyle:{float:"right"},attrs:{underline:!1,type:"primary"}},[e._v("修改")])],1),e._v(" "),a("ul",{staticClass:"shop-box"},[a("li",[a("label",[e._v("商城名称：")]),e._v("测试商城")]),e._v(" "),a("li",[a("div",[a("label",[e._v("商城介绍：")]),e._v(" "),a("span",[e._v("用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试，用于测试。")])])]),e._v(" "),a("li",[a("label",[e._v("使用应用：")]),e._v("5个 "),a("el-link",{attrs:{underline:!1,type:"primary"}},[e._v("查看")])],1)])])],1),e._v(" "),a("el-col",{attrs:{span:24,md:16}},[a("el-card",{attrs:{shadow:"never"}},[a("el-row",[a("el-col",{staticClass:"fui-item",attrs:{span:6}},[a("p",[a("i",{staticClass:"iconfont icon-goods1 blue"}),e._v(" "),a("span",[e._v("2")])]),e._v(" "),a("p",[e._v("已售罄商品")])]),e._v(" "),a("el-col",{staticClass:"fui-item",attrs:{span:6}},[a("p",[a("i",{staticClass:"iconfont icon-car green"}),e._v(" "),a("span",[e._v("2")])]),e._v(" "),a("p",[e._v("自营待发货订单")])]),e._v(" "),a("el-col",{staticClass:"fui-item",attrs:{span:6}},[a("p",[a("i",{staticClass:"iconfont icon-tuihuo cyan"}),e._v(" "),a("span",[e._v("2")])]),e._v(" "),a("p",[e._v("自营维权中订单")])]),e._v(" "),a("el-col",{staticClass:"fui-item",attrs:{span:6}},[a("p",[a("i",{staticClass:"iconfont icon-shenhe yellow"}),e._v(" "),a("span",[e._v("2")])]),e._v(" "),a("p",[e._v("待审核提现")])])],1)],1),e._v(" "),a("el-card",{staticClass:"ibox",attrs:{shadow:"never"}},[a("div",{staticClass:"ibox-header",attrs:{slot:"header"},slot:"header"},[a("span",[a("i",{staticClass:"iconfont icon-order"}),e._v(" 订单概述")]),e._v(" "),a("el-tabs",{staticClass:"ibox-tab",on:{"tab-click":e.handleTabClick1},model:{value:e.tab1,callback:function(t){e.tab1=t},expression:"tab1"}},[a("el-tab-pane",{attrs:{label:"今日",name:"first"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"昨日",name:"second"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"最近七日",name:"third"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"本月",name:"fourth"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{staticClass:"f-item",attrs:{span:8}},[a("p",[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticClass:"text-less",attrs:{slot:"content"},slot:"content"},[a("p",[e._v("成交量：已付款订单数")]),e._v(" "),a("p",[e._v("交易量：下单总数(含未付款订单)")])]),e._v(" "),a("span",[e._v("1/1")])])],1),e._v(" "),a("p",[e._v("成交量/交易量(件)")])]),e._v(" "),a("el-col",{staticClass:"f-item",attrs:{span:8}},[a("p",[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticClass:"text-less",attrs:{slot:"content"},slot:"content"},[a("p",[e._v("成交额：已付款订单金额(含运费)")]),e._v(" "),a("p",[e._v("交易额：下单总额(含运费)")])]),e._v(" "),a("span",[e._v("0.01/0.01")])])],1),e._v(" "),a("p",[e._v("成交额/交易额(元)")])]),e._v(" "),a("el-col",{staticClass:"f-item",attrs:{span:8}},[a("p",[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticClass:"text-less",attrs:{slot:"content"},slot:"content"},[a("p",[e._v("成交额/下单去重会员数(含维权订单)")])]),e._v(" "),a("span",[e._v("0.01")])])],1),e._v(" "),a("p",[e._v("人均消费(元)")])])],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{span:24,lg:12}},[a("el-card",{attrs:{shadow:"never"}},[a("span",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"iconfont icon-zhexiantu"}),e._v(" 近7日交易走势图")]),e._v(" "),a("Echarts",{attrs:{option:e.option,height:400}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24,lg:12}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"ibox-header",attrs:{slot:"header"},slot:"header"},[a("span",[a("i",{staticClass:"iconfont icon-zhuzhuangtu"}),e._v(" 商品销量排行")]),e._v(" "),a("el-tabs",{staticClass:"ibox-tab",on:{"tab-click":e.handleTabClick2},model:{value:e.tab2,callback:function(t){e.tab2=t},expression:"tab2"}},[a("el-tab-pane",{attrs:{label:"今日",name:"first"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"昨日",name:"second"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"最近七日",name:"third"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"更多",name:"fourth"}})],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"line-table",attrs:{data:e.tableData,"tooltip-effect":"light",size:"mini",height:"400"}},[a("el-table-column",{attrs:{type:"index",label:"排名"}}),e._v(" "),a("el-table-column",{attrs:{label:"排序","min-width":"260"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-link",{staticClass:"nowrap",attrs:{underline:!1}},[e._v(e._s(n.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"成交数量",prop:"num"}}),e._v(" "),a("el-table-column",{attrs:{label:"成交金额"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return a("span",{staticClass:"yellow"},[e._v(e._s(n.price))])}}])})],1)],1)],1)],1)],1)},[],!1,null,"1c0ed059",null);c.options.__file="index.vue";t.default=c.exports},"s0n/":function(e,t,a){"use strict";var n=a("k7yO");a.n(n).a}}]);