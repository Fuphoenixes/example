(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fc45bf1"],{"07e3":function(t,i){var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},"1bc3":function(t,i,e){var n=e("f772");t.exports=function(t,i){if(!n(t))return t;var e,a;if(i&&"function"==typeof(e=t.toString)&&!n(a=e.call(t)))return a;if("function"==typeof(e=t.valueOf)&&!n(a=e.call(t)))return a;if(!i&&"function"==typeof(e=t.toString)&&!n(a=e.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,i,e){var n=e("f772"),a=e("e53d").document,o=n(a)&&n(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},2054:function(t,i,e){},"294c":function(t,i){t.exports=function(t){try{return!!t()}catch(i){return!0}}},"2bb1":function(t,i,e){"use strict";var n=e("c31d"),a=e("d282"),o=Object(a["a"])("swipe-item"),r=o[0],s=o[1];i["a"]=r({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,a=i.computedWidth,o=i.computedHeight,r={width:a+"px",height:e?o+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:s(),style:r,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},"35e8":function(t,i,e){var n=e("d9f6"),a=e("aebd");t.exports=e("8e60")?function(t,i,e){return n.f(t,i,a(1,e))}:function(t,i,e){return t[i]=e,t}},"3cf6":function(t,i,e){},"454f":function(t,i,e){e("46a7");var n=e("584a").Object;t.exports=function(t,i,e){return n.defineProperty(t,i,e)}},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",(function(){return u}));var n=e("a142"),a=Date.now();function o(t){var i=Date.now(),e=Math.max(0,16-(i-a)),n=setTimeout(t,e);return a=i+e,n}var r=n["d"]?t:window,s=r.requestAnimationFrame||o;r.cancelAnimationFrame||r.clearTimeout;function c(t){return s.call(r,t)}function u(t){c((function(){c(t)}))}}).call(this,e("c8ba"))},"46a7":function(t,i,e){var n=e("63b6");n(n.S+n.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"46c4":function(t,i,e){"use strict";var n=e("679c"),a=e.n(n);a.a},"482d":function(t,i,e){"use strict";function n(t,i,e){return Math.min(Math.max(t,i),e)}e.d(i,"a",(function(){return n}))},5596:function(t,i,e){"use strict";var n=e("d282"),a=e("1325"),o=e("3875"),r=e("5fbe"),s=e("4598"),c=e("482d"),u=Object(n["a"])("swipe"),f=u[0],h=u[1];i["a"]=f({mixins:[o["a"],Object(r["a"])((function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(a["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(c["a"])(i+t,-1,e):Object(c["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(c["a"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,a=void 0===n?0:n,o=t.emitChange,r=this.loop,s=this.count,c=this.active,u=this.swipes,f=this.trackSize,h=this.minOffset;if(!(s<=1)){var l=this.getTargetActive(e),d=this.getTargetOffset(l,a);if(r){if(u[0]){var p=d<h;u[0].offset=p?f:0}if(u[s-1]){var v=d>0;u[s-1].offset=v?-f:0}}this.active=l,this.offset=d,o&&l!==c&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(s["a"])((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:n-e.active,emitChange:!0}),i.immediate?Object(s["a"])((function(){e.swiping=!1})):e.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(s["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,a=this.slots("indicator");return a||(this.showIndicators&&e>1?i("div",{class:h("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,a){return i("i",{class:h("indicator",{active:a===n}),style:a===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:h()},[t("div",{ref:"track",style:this.trackStyle,class:h("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.genIndicator()])}})},"584a":function(t,i){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},"5a15":function(t,i,e){},"63b6":function(t,i,e){var n=e("e53d"),a=e("584a"),o=e("d864"),r=e("35e8"),s=e("07e3"),c="prototype",u=function(t,i,e){var f,h,l,d=t&u.F,p=t&u.G,v=t&u.S,m=t&u.P,b=t&u.B,g=t&u.W,y=p?a:a[i]||(a[i]={}),w=y[c],x=p?n:v?n[i]:(n[i]||{})[c];for(f in p&&(e=i),e)h=!d&&x&&void 0!==x[f],h&&s(y,f)||(l=h?x[f]:e[f],y[f]=p&&"function"!=typeof x[f]?e[f]:b&&h?o(l,n):g&&x[f]==l?function(t){var i=function(i,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,e)}return new t(i,e,n)}return t.apply(this,arguments)};return i[c]=t[c],i}(l):m&&"function"==typeof l?o(Function.call,l):l,m&&((y.virtual||(y.virtual={}))[f]=l,t&u.R&&w&&!w[f]&&r(w,f,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"679c":function(t,i,e){},"6f7c":function(t,i,e){"use strict";var n=e("2054"),a=e.n(n);a.a},"794b":function(t,i,e){t.exports=!e("8e60")&&!e("294c")((function(){return 7!=Object.defineProperty(e("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7a2c":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"page-content home"},[e("div",{staticClass:"swipe-wrapper"},[e("van-swipe",{staticClass:"swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(4,(function(i,n){return e("van-swipe-item",{key:n},[e("van-image",{attrs:{width:"100%",height:"100%",fit:"contain","lazy-load":"",src:t.banner}})],1)})),1),e("div",{staticClass:"swipe-edit",on:{click:t.editSwiper}},[e("i",{staticClass:"iconfont iconedit"})])],1),e("div",{staticClass:"section"},[e("van-row",{staticClass:"goods",attrs:{gutter:"7"}},t._l(6,(function(i){return e("van-col",{key:i,attrs:{span:"12"}},[e("div",{staticClass:"good"},[e("van-image",{staticClass:"good-img",attrs:{fit:"contain","lazy-load":"",src:t.good}}),e("div",{staticClass:"good-dec"},[t._v("\n              蜜炼川贝枇杷膏\n            ")]),e("div",{staticClass:"good-aside"},[e("div",{staticClass:"good-aside-price"},[t._v("\n                ￥"),e("span",[t._v("36.0")])]),e("div",{staticClass:"good-aside-edit",on:{click:t.editGoods}},[e("i",{staticClass:"iconfont iconedit"})])])],1)])})),1)],1)]),e("Tabbar"),e("ActivityIndicator",{attrs:{visible:t.$loadingPlugin.getList}})],1)},a=[],o=(e("96cf"),e("3b8d")),r=e("bd86"),s=(e("3cd0"),e("997e"),e("d282")),c=Object(s["a"])("col"),u=c[0],f=c[1],h=u({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,i=arguments[0],e=this.span,n=this.offset;return i(this.tag,{style:this.style,class:f((t={},t[e]=e,t["offset-"+n]=n,t)),on:{click:this.onClick}},[this.slots()])}}),l=(e("e1fa"),Object(s["a"])("row")),d=l[0],p=l[1],v=d({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,i=arguments[0],e=this.align,n=this.justify,a="flex"===this.type,o="-"+Number(this.gutter)/2+"px",r=this.gutter?{marginLeft:o,marginRight:o}:{};return i(this.tag,{style:r,class:p((t={flex:a},t["align-"+e]=a&&e,t["justify-"+n]=a&&n,t)),on:{click:this.onClick}},[this.slots()])}}),m=(e("5cc2"),e("44bf")),b=(e("3cf6"),e("2bb1")),g=(e("7f7f"),e("ae3a"),e("5596")),y=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("van-tabbar",{staticClass:"tabbar",attrs:{route:"","active-color":"#FE552E","inactive-color":"#888"}},[n("van-tabbar-item",{attrs:{to:"/"},scopedSlots:t._u([{key:"icon",fn:function(t){var i=t.active;return n("i",{staticClass:"iconfont",class:i?"icondianpu":"icondianpu-xianxing"})}}])},[n("span",[t._v("店铺")])]),n("van-tabbar-item",{attrs:{to:"/statistics"},scopedSlots:t._u([{key:"icon",fn:function(t){var i=t.active;return n("i",{staticClass:"iconfont",class:i?"icontiaoxingtu":"icontiaoxingtu-xianxing"})}}])},[n("span",[t._v("统计")])]),n("van-tabbar-item",{scopedSlots:t._u([{key:"icon",fn:function(i){i.active;return n("div",{staticClass:"push-img",on:{click:t.push}},[n("img",{attrs:{src:e("ba25"),alt:""}}),n("span",{staticClass:"push-text"},[t._v("发布")])])}}])}),n("van-tabbar-item",{attrs:{to:"/order"},scopedSlots:t._u([{key:"icon",fn:function(t){var i=t.active;return n("i",{staticClass:"iconfont",class:i?"icondanju":"icondanju-xianxing"})}}])},[n("span",[t._v("订单")])]),n("van-tabbar-item",{attrs:{to:"/me"},scopedSlots:t._u([{key:"icon",fn:function(t){var i=t.active;return n("i",{staticClass:"iconfont",class:i?"iconyonghu":"iconyonghu-xianxing"})}}])},[n("span",[t._v("我的")])])],1)},w=[],x=e("ad06"),O=(e("adc1"),e("c31d")),j=e("a142"),C=e("6f2f"),S=e("48f4"),k=e("2b0e");function T(t){var i=[];function e(t){t.forEach((function(t){i.push(t),t.children&&e(t.children)}))}return e(t),i}function $(t,i){var e,n;void 0===i&&(i={});var a=i.indexKey||"index";return k["a"].extend({inject:(e={},e[t]={default:null},e),computed:(n={parent:function(){return this.disableBindRelation?null:this[t]}},n[a]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},n),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(i){return i!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),i=T(this.parent.slots());t.sort((function(t,e){return i.indexOf(t.$vnode)-i.indexOf(e.$vnode)})),this.parent.children=t}}}})}function _(t){return{provide:function(){var i;return i={},i[t]=this,i},data:function(){return{children:[]}}}}var z,P,I=Object(s["a"])("tabbar-item"),B=I[0],E=I[1],A=B({mixins:[$("vanTabbar")],props:Object(O["a"])({},S["c"],{dot:Boolean,icon:String,name:[Number,String],info:[Number,String]}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,i=this.$route;if(t&&i){var e=Object(j["c"])(t)?t:{path:t},n=e.path===i.path,a=Object(j["b"])(e.name)&&e.name===i.name;return n||a}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(S["b"])(this.$router,this)}},render:function(){var t=arguments[0],i=this.icon,e=this.slots,n=this.parent.route?this.routeActive:this.active,a=this.parent[n?"activeColor":"inactiveColor"];return t("div",{class:E({active:n}),style:{color:a},on:{click:this.onClick}},[t("div",{class:E("icon")},[e("icon",{active:n})||i&&t(x["a"],{attrs:{name:i}}),t(C["a"],{attrs:{dot:this.dot,info:this.info}})]),t("div",{class:E("text")},[e("default",{active:n})])])}}),R=(e("5a15"),e("b1d2")),N=Object(s["a"])("tabbar"),M=N[0],F=N[1],D=M({mixins:[_("vanTabbar")],props:{route:Boolean,activeColor:String,inactiveColor:String,safeAreaInsetBottom:Boolean,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},watch:{value:"setActiveItem",children:"setActiveItem"},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(i,e){i.active=(i.name||e)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))}},render:function(){var t,i=arguments[0];return i("div",{style:{zIndex:this.zIndex},class:[(t={},t[R["f"]]=this.border,t),F({fixed:this.fixed,"safe-area-inset-bottom":this.safeAreaInsetBottom})]},[this.slots()])}}),W={components:(z={},Object(r["a"])(z,D.name,D),Object(r["a"])(z,A.name,A),Object(r["a"])(z,x["a"].name,x["a"]),z),data:function(){return{active:0}},methods:{push:function(){this.$emit("push")}}},L=W,X=(e("46c4"),e("2877")),Y=Object(X["a"])(L,y,w,!1,null,"535165d7",null),G=Y.exports,H=e("0751"),J=e("0f0f"),q=e("ec24"),K=e("8312"),U={name:"shop",components:(P={},Object(r["a"])(P,g["a"].name,g["a"]),Object(r["a"])(P,b["a"].name,b["a"]),Object(r["a"])(P,m["a"].name,m["a"]),Object(r["a"])(P,v.name,v),Object(r["a"])(P,h.name,h),Object(r["a"])(P,"Tabbar",G),Object(r["a"])(P,"ActivityIndicator",H["a"]),P),data:function(){return{banner:q,good:K}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getList();case 2:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),methods:{editSwiper:function(){this.$router.push("/swiper")},editGoods:function(){this.$router.push("/push")}},asyncMethods:{getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(J["a"])(3e3);case 2:case"end":return t.stop()}}),t)})));function i(){return t.apply(this,arguments)}return i}()}},Q=U,V=(e("6f7c"),Object(X["a"])(Q,n,a,!1,null,"18df0ed0",null));i["default"]=V.exports},8312:function(t,i,e){t.exports=e.p+"img/good.0b1ea36f.png"},"85f2":function(t,i,e){t.exports=e("454f")},"8e60":function(t,i,e){t.exports=!e("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"997e":function(t,i,e){},adc1:function(t,i,e){},ae3a:function(t,i,e){},aebd:function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},ba25:function(t,i,e){t.exports=e.p+"img/push.a7236ebc.png"},bd86:function(t,i,e){"use strict";e.d(i,"a",(function(){return o}));var n=e("85f2"),a=e.n(n);function o(t,i,e){return i in t?a()(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},d864:function(t,i,e){var n=e("79aa");t.exports=function(t,i,e){if(n(t),void 0===i)return t;switch(e){case 1:return function(e){return t.call(i,e)};case 2:return function(e,n){return t.call(i,e,n)};case 3:return function(e,n,a){return t.call(i,e,n,a)}}return function(){return t.apply(i,arguments)}}},d9f6:function(t,i,e){var n=e("e4ae"),a=e("794b"),o=e("1bc3"),r=Object.defineProperty;i.f=e("8e60")?Object.defineProperty:function(t,i,e){if(n(t),i=o(i,!0),n(e),a)try{return r(t,i,e)}catch(s){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[i]=e.value),t}},e1fa:function(t,i,e){},e4ae:function(t,i,e){var n=e("f772");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,i){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},ec24:function(t,i,e){t.exports=e.p+"img/banner.5c7d9477.png"},f772:function(t,i){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-5fc45bf1.a86c028f.js.map