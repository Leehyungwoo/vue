webpackJsonp([1],{Kffh:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("Kffh")},null,null).exports,a=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("영화 목록")]),t._v(" "),t._l(t.movies,function(e,i){return n("div",{key:i,staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),n("div",[n("strong"),t._v(", "),n("i"),t._v(" []\n      "),n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])})],2)},staticRenderFns:[]},c=n("VU/8")({created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},o,!1,null,null,null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("상세 내용")])])}]},p=n("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},u,!1,null,null,null).exports;i.a.use(a.a);var l=new a.a({mode:"history",routes:[{path:"/",name:"index",component:c},{path:"/:id",name:"show",component:p}]}),v=n("mtWM"),h=n.n(v);i.a.config.productionTip=!1,i.a.prototype.$http=h.a,new i.a({el:"#app",router:l,components:{App:s},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.bacd5aeafd1e9ad8b454.js.map