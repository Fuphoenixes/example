(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5128"],{"+DnB":function(e,t,r){"use strict";r.r(t);var a=r("xKc1"),o=r.n(a),l={data:function(){return{form:{},url:"http://www.haoqiwang.com.cn/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=goods",child:this.$route.query.child}},methods:{onSubmit:function(){},getErweima:function(e){return new o.a({value:e,background:"white",foreground:"black",level:"H",padding:0,size:110}).toDataURL()},onCopy:function(){this.$message.success("复制成功")},onError:function(){this.$message.error("您的游览器暂不支持自动复制，请手动复制")}}},s=(r("GUwa"),r("KHd+")),i=Object(s.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("div",{staticClass:"title"},[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.$router.push("/goods/category/add")}}},[e._v("添加新分类")])],1),e._v(" "),r("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"260px",size:"small"}},[r("el-form-item",{attrs:{label:"分类链接(点击复制)"}},[r("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.url,expression:"url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"copy"},[e._v("\n        "+e._s(e.url)+"\n      ")]),e._v(" "),r("el-tooltip",{attrs:{effect:"light",placement:"right"}},[r("img",{attrs:{slot:"content",src:e.getErweima(e.url)},slot:"content"}),e._v(" "),r("i",{staticClass:"iconfont icon-erweima"})])],1),e._v(" "),e.child?r("el-form-item",{attrs:{label:"上级分类"}},[r("span",[e._v("药品")])]):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"排序"}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分类名称",required:""}},[r("el-input",{model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),e._v(" "),e.child?r("el-form-item",{attrs:{label:"分类图片",required:""}},[r("el-input",{attrs:{disabled:""}},[r("template",{slot:"append"},[r("span",{staticClass:"pointer"},[e._v("选择图片")])])],2),e._v(" "),r("div",{staticClass:"tip"},[e._v("建议尺寸: 100*100，或正方型图片")])],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"分类描述",required:""}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分类广告",required:""}},[r("el-input",{attrs:{disabled:""}},[r("template",{slot:"append"},[r("span",{staticClass:"pointer"},[e._v("选择图片")])])],2),e._v(" "),r("div",{staticClass:"tip"},[e._v("建议尺寸: 640*320")])],1),e._v(" "),r("el-form-item",{attrs:{label:"分类广告链接",required:""}},[r("el-input",[r("template",{slot:"append"},[r("span",{staticClass:"pointer"},[e._v("选择链接")])])],2)],1),e._v(" "),e.child?r("el-form-item",{attrs:{label:"是否推荐"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"是"}}),e._v(" "),r("el-radio",{attrs:{label:"否"}})],1)],1):e._e(),e._v(" "),e.child?r("el-form-item",{attrs:{label:"首页推荐"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"是"}}),e._v(" "),r("el-radio",{attrs:{label:"否"}})],1)],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"是否显示"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"是"}}),e._v(" "),r("el-radio",{attrs:{label:"否"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),r("el-button",[e._v("返回列表")])],1)],1)],1)},[],!1,null,"5a700447",null);i.options.__file="add.vue";t.default=i.exports},GUwa:function(e,t,r){"use strict";var a=r("RzLt");r.n(a).a},RzLt:function(e,t,r){}}]);